import { defineTool } from "@lovable.dev/mcp-js";
import { activitiesData } from "../../data/activities";

export default defineTool({
  name: "list_filters",
  title: "List available filters",
  description:
    "Return the full set of filter values supported by the WhatNow Kid activity bank (age ranges, goals, environments, costs, parenting styles) plus the total activity count. Call this first if you're unsure what to pass to find_activities.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      totalActivities: activitiesData.length,
      ages: ["0-1", "1-3", "3-6", "6-10", "10+"],
      goals: ["Calm Down", "Burn Energy", "Beat Boredom", "Connect", "Quiet Time"],
      environments: ["Any", "Indoor", "Outdoor"],
      costs: ["Any", "Free", "Paid"],
      parenting: ["Hands On", "Hands Off"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
