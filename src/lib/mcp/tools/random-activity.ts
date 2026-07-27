import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { activitiesData, goalMapping, type Goal, type Activity, type Mood } from "@/data/activities";

const AGE_VALUES = ["0-1", "1-3", "3-6", "6-10", "10+"] as const;
const GOAL_VALUES: [Goal, ...Goal[]] = ["Calm Down", "Burn Energy", "Beat Boredom", "Connect", "Quiet Time"];

export default defineTool({
  name: "random_activity",
  title: "Pick a random kids activity",
  description:
    "Return one random WhatNow Kid activity idea, optionally narrowed by age, goal, environment, cost, or parenting style. Great for 'I'm feeling lucky' style prompts.",
  inputSchema: {
    ages: z.array(z.enum(AGE_VALUES)).optional(),
    goals: z.array(z.enum(GOAL_VALUES)).optional(),
    environment: z.enum(["Any", "Indoor", "Outdoor"]).optional().default("Any"),
    cost: z.enum(["Any", "Free", "Paid"]).optional().default("Any"),
    parenting: z.enum(["Hands On", "Hands Off"]).optional(),
  },
  annotations: { readOnlyHint: true, idempotentHint: false, openWorldHint: false },
  handler: ({ ages, goals, environment = "Any", cost = "Any", parenting }) => {
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

    if (matches.length === 0) {
      return {
        content: [{ type: "text", text: "No activities matched those filters." }],
        isError: true,
      };
    }

    const pick = matches[Math.floor(Math.random() * matches.length)];
    return {
      content: [
        {
          type: "text",
          text: `${pick.title}\n${pick.description}\n\nAge: ${pick.age.join(", ")} | ${pick.environment} | ${pick.cost} | ${pick.parenting}\nDuration: ${pick.duration} | Setup: ${pick.setupTime} | Energy: ${pick.energyLevel}\nMaterials: ${pick.materials.join(", ")}`,
        },
      ],
      structuredContent: {
        title: pick.title,
        description: pick.description,
        age: pick.age,
        environment: pick.environment,
        cost: pick.cost,
        parenting: pick.parenting,
        duration: pick.duration,
        setupTime: pick.setupTime,
        energyLevel: pick.energyLevel,
        materials: pick.materials,
      },
    };
  },
});
