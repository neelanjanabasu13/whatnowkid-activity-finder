## How the enrichment actually happens

I'll generate the new activities with a one-time LLM script run in the sandbox, not by hand-writing them one by one. The script only runs during this build; nothing about it ships to your app. Only `src/data/activities.ts` changes.

### Mechanism

The sandbox has a preinstalled `ai-gateway` skill (`/tmp/knowledge/skill/ai-gateway/scripts/lovable_ai.py`) that calls Lovable AI Gateway with `LOVABLE_API_KEY` already set. I use it in two passes.

**Pass 1 — find the gaps (no LLM, pure code).** A Node script enumerates all 5 × 5 × 2 × 2 × 2 = 200 filter cells (age × goal × environment × cost × parenting), runs the current filter logic against `activitiesData`, and prints every cell with fewer than 5 matches, along with how many are missing.

**Pass 2 — generate targeted activities (LLM).** For each thin cell, call the gateway with a strict JSON-schema request:

```
For a parenting activity app, generate N unique activities that ALL satisfy:
- age includes "<age>"
- mood includes at least one of <moods for the goal>
- environment = "<Indoor|Outdoor>"
- cost = "<Free|Paid>"
- parenting = "<Hands On|Hands Off>"

Return JSON matching the Activity schema: id, title, description (<=110 chars),
age[], mood[], environment, cost, parenting, duration, setupTime,
energyLevel, materials[].
Do not duplicate any of these existing titles: [...current titles...].
Tag age[] and mood[] broadly where genuinely appropriate.
```

Model: `google/gemini-3.6-flash` (fast, cheap, good at structured JSON), invoked with `--schema` so the response is validated JSON, not free text.

**Pass 3 — merge and re-verify.** The script appends the generated activities to `activitiesData` (with unique ids like `gen-001`, `gen-002`…), then re-runs the pass-1 coverage check. If any cell still has <5, it tops up only those cells and re-checks. Loop until zero gaps or a safety cap of ~3 iterations.

**Pass 4 — human sanity pass.** I read the diff, drop anything that looks obviously wrong or duplicative, and confirm the final file compiles.

### Verification

- Coverage script reports 0 cells below 5.
- Spot-check your original combo (0–1, Calm Down, Outdoor, Paid, Hands Off) plus 3–4 other historically thin combos in the preview and confirm ≥5 cards.

### Scope

- Only `src/data/activities.ts` is edited.
- Coverage and generation scripts live in `/tmp`, not committed.
- No changes to filter logic, UI, or types.
- Expected final size: ~150–200 activities.
