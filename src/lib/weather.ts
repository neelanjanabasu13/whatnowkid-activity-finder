import type { Activity } from "@/data/activities";

export type Weather = "Any" | "Sunny" | "Cloudy" | "Rainy" | "Windy" | "Snowy";

export const WEATHER_OPTIONS: Weather[] = ["Any", "Sunny", "Cloudy", "Rainy", "Windy", "Snowy"];

const has = (haystack: string, needles: string[]) =>
  needles.some((n) => haystack.includes(n));

/**
 * Infer which weather conditions an activity works in.
 * Indoor activities work in any weather. Outdoor activities are matched
 * against keywords in the title, description, and materials.
 */
export function getActivityWeathers(activity: Activity): Exclude<Weather, "Any">[] {
  if (activity.environment === "Indoor") {
    return ["Sunny", "Cloudy", "Rainy", "Windy", "Snowy"];
  }

  const text = [
    activity.title,
    activity.description,
    ...activity.materials,
  ]
    .join(" ")
    .toLowerCase();

  // Explicit weather-specific activities
  if (has(text, ["puddle", "rain boot", "rainy", " rain ", "raindrop", "rain dance", "storm", "porch", "awning", "under the awning"])) return ["Rainy"];
  if (has(text, ["snow", "sled", "snowman", "snowball", "icicle"])) return ["Snowy"];
  if (has(text, ["kite", "windmill", "streamer race"])) return ["Windy", "Sunny", "Cloudy"];
  if (has(text, ["star gaz", "moon", "night sky", "constellation"])) return ["Cloudy", "Windy"];

  // Water-based outdoor play needs warm, dry weather
  if (has(text, ["sprinkler", "pool", "water fight", "slip", "swim", "beach", "sand", "sunbath", "sunscreen"])) {
    return ["Sunny"];
  }

  // Bubbles need calm air
  if (has(text, ["bubble"])) return ["Sunny", "Cloudy"];

  // Default outdoor: fair-weather friendly (not rain, not snow)
  return ["Sunny", "Cloudy", "Windy"];
}

export function activityMatchesWeather(activity: Activity, weather: Weather): boolean {
  if (weather === "Any") return true;
  return getActivityWeathers(activity).includes(weather);
}
