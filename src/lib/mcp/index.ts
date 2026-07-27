import { defineMcp } from "@lovable.dev/mcp-js";
import findActivitiesTool from "./tools/find-activities";
import randomActivityTool from "./tools/random-activity";
import listFiltersTool from "./tools/list-filters";

export default defineMcp({
  name: "whatnow-kid-mcp",
  title: "WhatNow Kid",
  version: "0.1.0",
  instructions:
    "Instant kids activity ideas for parents and caregivers. Use `list_filters` to see the available filter values, `find_activities` to search the bank by age/goal/environment/cost/parenting style, and `random_activity` for a single lucky pick. All data is public; no auth required.",
  tools: [findActivitiesTool, randomActivityTool, listFiltersTool],
});
