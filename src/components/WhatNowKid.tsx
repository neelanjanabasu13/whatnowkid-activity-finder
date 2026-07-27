import { useState, useMemo } from "react";
import { activitiesData, goalMapping, Goal, Activity } from "@/data/activities";
import { FilterChip } from "./FilterChip";
import { SegmentedControl } from "./SegmentedControl";
import { ToggleSwitch } from "./ToggleSwitch";
import { ActivityCard } from "./ActivityCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Shuffle, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { activityMatchesWeather, WEATHER_OPTIONS, type Weather } from "@/lib/weather";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ageRanges = ['0-1', '1-3', '3-6', '6-10', '10+'];
const goals: Goal[] = ['Calm Down', 'Burn Energy', 'Beat Boredom', 'Connect', 'Quiet Time'];

export const WhatNowKid = () => {
  // Filter states
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<Goal[]>([]);
  const [environment, setEnvironment] = useState<string>('Any');
  const [weather, setWeather] = useState<Weather>('Any');
  const [parentingStyle, setParentingStyle] = useState<'left' | 'right'>('left');
  const [showResults, setShowResults] = useState(false);
  const [showSingle, setShowSingle] = useState(false);

  // Toggle age selection
  const toggleAge = (age: string) => {
    setSelectedAges(prev => 
      prev.includes(age) 
        ? prev.filter(a => a !== age)
        : [...prev, age]
    );
  };

  // Toggle goal selection
  const toggleGoal = (goal: Goal) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  // Filter activities based on selections
  const filteredActivities = useMemo(() => {
    return activitiesData.filter((activity: Activity) => {
      // Age filter
      if (selectedAges.length > 0) {
        const hasMatchingAge = selectedAges.some(age => activity.age.includes(age));
        if (!hasMatchingAge) return false;
      }

      // Goal filter (mapped to moods)
      if (selectedGoals.length > 0) {
        const relevantMoods = selectedGoals.flatMap(goal => goalMapping[goal]);
        const hasMatchingMood = activity.mood.some(mood => relevantMoods.includes(mood as any));
        if (!hasMatchingMood) return false;
      }

      // Environment filter
      if (environment !== 'Any' && activity.environment !== environment && activity.environment !== 'Both') {
        return false;
      }

      // Weather filter
      if (!activityMatchesWeather(activity, weather)) {
        return false;
      }

      // Parenting style filter
      const parentingStyleValue = parentingStyle === 'left' ? 'Hands Off' : 'Hands On';
      if (activity.parenting !== parentingStyleValue) {
        return false;
      }

      return true;
    });
  }, [selectedAges, selectedGoals, environment, weather, parentingStyle]);

  const handleShowActivities = () => {
    setShowResults(true);
    setShowSingle(false);
  };

  const handleFeelingLucky = () => {
    setShowResults(false);
    setShowSingle(true);
  };

  const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];

  const hasFilters = selectedAges.length > 0 || selectedGoals.length > 0 || environment !== 'Any' || weather !== 'Any';

  return (
    <main className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-full font-semibold shadow-button">
              <Sparkles className="w-4 h-4" />
              Activity Finder
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-rainbow bg-clip-text text-transparent font-fredoka animate-fade-in mb-4">
            WhatNow Kid
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Instant activity ideas, zero mental load. Find the perfect activity for your child's age, mood, and energy level.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-2xl p-6 md:p-10 shadow-card mb-8 border border-card-border">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {/* Age */}
            <div>
              <h2 className="text-sm font-semibold text-text-primary mb-4">Age Range</h2>
              <div className="flex flex-wrap gap-2">
                {ageRanges.map((age) => (
                  <FilterChip
                    key={age}
                    selected={selectedAges.includes(age)}
                    onClick={() => toggleAge(age)}
                  >
                    {age}
                  </FilterChip>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div>
              <h2 className="text-sm font-semibold text-text-primary mb-4">Goal</h2>
              <div className="flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <FilterChip
                    key={goal}
                    selected={selectedGoals.includes(goal)}
                    onClick={() => toggleGoal(goal)}
                  >
                    {goal}
                  </FilterChip>
                ))}
              </div>
            </div>

            {/* Environment */}
            <div>
              <h2 className="text-sm font-semibold text-text-primary mb-4">Environment</h2>
              <SegmentedControl
                options={['Any', 'Indoor', 'Outdoor']}
                value={environment}
                onChange={setEnvironment}
              />
            </div>

            {/* Weather */}
            <div>
              <h2 className="text-sm font-semibold text-text-primary mb-4">Weather</h2>
              <div className="flex flex-wrap gap-2">
                {WEATHER_OPTIONS.map((w) => (
                  <FilterChip
                    key={w}
                    selected={weather === w}
                    onClick={() => setWeather(w)}
                  >
                    {w === 'Sunny' ? '☀️ Sunny'
                      : w === 'Cloudy' ? '☁️ Cloudy'
                      : w === 'Rainy' ? '🌧️ Rainy'
                      : w === 'Windy' ? '💨 Windy'
                      : w === 'Snowy' ? '❄️ Snowy'
                      : w}
                  </FilterChip>
                ))}
              </div>
            </div>

            {/* Parenting Style */}
            <div className="md:col-span-2">
              <h2 className="text-sm font-semibold text-text-primary mb-4">Parenting Style</h2>
              <ToggleSwitch
                leftLabel="Hands Off"
                rightLabel="Hands On"
                value={parentingStyle}
                onChange={setParentingStyle}
              />
            </div>
          </div>
        </div>




        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={handleShowActivities}
            variant="hero"
            className="text-lg px-8 py-4 h-auto rounded-xl"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Show Activities
          </Button>
          <Button
            onClick={handleFeelingLucky}
            variant="playful"
            className="text-lg px-8 py-4 h-auto rounded-xl"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            I'm Feeling Lucky
          </Button>
        </div>

        {/* Results */}
        {(showResults || showSingle) && (
          <div className="space-y-6">
            {/* Result Count */}
            <div className="text-center">
              <p className="text-lg text-text-secondary">
                {showSingle 
                  ? filteredActivities.length > 0 
                    ? "Here's a lucky pick for you!"
                    : "No activities match your criteria"
                  : `Showing ${filteredActivities.length} activity ${filteredActivities.length === 1 ? 'idea' : 'ideas'}`
                }
              </p>
            </div>

            {/* Activities */}
            {filteredActivities.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎈</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No activities found
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  Try broadening your search by selecting fewer filters or different options.
                </p>
              </div>
            ) : (
              <div className={cn(
                showSingle 
                  ? "flex justify-center" 
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              )}>
                {showSingle ? (
                  randomActivity && (
                    <div className="max-w-md">
                      <ActivityCard activity={randomActivity} />
                    </div>
                  )
                ) : (
                  filteredActivities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* Welcome State */}
        {!showResults && !showSingle && (
          <div className="text-center py-12">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Ready to discover amazing activities?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {hasFilters 
                ? "Great! You've set some preferences. Now click a button above to find the perfect activities for your little one."
                : "Start by selecting some filters above, then discover activities tailored just for you and your child!"
              }
            </p>
          </div>
        )}
      </div>
    </main>
  );
};