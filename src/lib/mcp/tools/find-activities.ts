import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { activitiesData, goalMapping, type Goal, type Activity, type Mood } from "../../../data/activities";

const AGE_VALUES = ["0-1", "1-3", "3-6", "6-10", "10+"] as const;
const GOAL_VALUES: [Goal, ...Goal[]] = ["Calm Down", "Burn Energy", "Beat Boredom", "Connect", "Quiet Time"];

export default defineTool({
  name: "find_activities",
  title: "Find kids activities",
  description:
    "Search the WhatNow Kid activity bank for age-appropriate, mood-matched ideas. Filter by age range, goal, environment, cost, and parenting style. Returns up to `limit` matching activities.",
  inputSchema: {
    ages: z
      .array(z.enum(AGE_VALUES))
      .optional()
      .describe("One or more child age ranges to match. Omit for any age."),
    goals: z
      .array(z.enum(GOAL_VALUES))
      .optional()
      .describe("One or more parenting goals to match. Omit for any goal."),
    environment: z
      .enum(["Any", "Indoor", "Outdoor"])
      .optional()
      .default("Any")
      .describe("Where the activity takes place."),
    cost: z
      .enum(["Any", "Free", "Paid"])
      .optional()
      .default("Any")
      .describe("Whether the activity requires paid materials."),
    parenting: z
      .enum(["Hands On", "Hands Off"])
      .optional()
      .describe("Parenting involvement level. Omit for either."),
    limit: z.number().int().min(1).max(50).optional().default(10).describe("Max activities to return (1-50)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ ages, goals, environment = "Any", cost = "Any", parenting, limit = 10 }) => {
    const matches = activitiesData.filter((a: Activity) => {
      if (ages && ages.length > 0 && !ages.some((age) => a.age.includes(age))) return false;
      if (goals && goals.length > 0) {
        const relevantMoods = goals.flatMap((g) => goalMapping[g]);
        if (!a.mood.some((m) => relevantMoods.includes(m as Mood))) return false;
      }
      if (environment !== "Any" && a.environment !== environment && a.environment !== "Both") return false;
      if (cost !== "Any" && a.cost !== cost) return false;
      if (parenting && a.parenting !== parenting) return false;
      return true;
    });

    const results = matches.slice(0, limit).map((a) => ({
      title: a.title,
      description: a.description,
      age: a.age,
      environment: a.environment,
      cost: a.cost,
      parenting: a.parenting,
      duration: a.duration,
      setupTime: a.setupTime,
      energyLevel: a.energyLevel,
      materials: a.materials,
    }));

    return {
      content: [
        {
          type: "text",
          text:
            results.length === 0
              ? "No activities matched those filters. Try relaxing one of them."
              : `Found ${matches.length} activity${matches.length === 1 ? "" : "s"}, returning ${results.length}:\n\n` +
                results
                  .map(
                    (r, i) =>
                      `${i + 1}. ${r.title} (${r.age.join(", ")}, ${r.environment}, ${r.cost}, ${r.parenting}, ${r.duration})\n   ${r.description}\n   Materials: ${r.materials.join(", ")}`,
                  )
                  .join("\n\n"),
        },
      ],
      structuredContent: { total: matches.length, returned: results.length, activities: results },
    };
  },
});
