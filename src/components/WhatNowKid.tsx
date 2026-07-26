import { useState, useMemo } from "react";
import { activitiesData, goalMapping, Goal, Activity } from "@/data/activities";
import { FilterChip } from "./FilterChip";
import { SegmentedControl } from "./SegmentedControl";
import { ToggleSwitch } from "./ToggleSwitch";
import { ActivityCard } from "./ActivityCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Shuffle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-kids-activities.jpg";

const ageRanges = ['0-1', '1-3', '3-6', '6-10', '10+'];
const goals: Goal[] = ['Calm Down', 'Burn Energy', 'Beat Boredom', 'Connect', 'Quiet Time'];

export const WhatNowKid = () => {
  // Filter states
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<Goal[]>([]);
  const [environment, setEnvironment] = useState<string>('Any');
  const [cost, setCost] = useState<string>('Any');
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

      // Cost filter
      if (cost !== 'Any' && activity.cost !== cost) {
        return false;
      }

      // Parenting style filter
      const parentingStyleValue = parentingStyle === 'left' ? 'Hands Off' : 'Hands On';
      if (activity.parenting !== parentingStyleValue) {
        return false;
      }

      return true;
    });
  }, [selectedAges, selectedGoals, environment, cost, parentingStyle]);

  const handleShowActivities = () => {
    setShowResults(true);
    setShowSingle(false);
  };

  const handleFeelingLucky = () => {
    setShowResults(false);
    setShowSingle(true);
  };

  const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];

  const hasFilters = selectedAges.length > 0 || selectedGoals.length > 0 || environment !== 'Any' || cost !== 'Any';

  return (
    <main className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with Hero Image */}
        <div className="text-center mb-12">
          {/* Activity Finder Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-full font-semibold shadow-button">
              <Sparkles className="w-4 h-4" />
              Activity Finder
            </div>
          </div>
          
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-card">
            <img 
              src={heroImage} 
              alt="Children engaged in various fun activities - playing, reading, creating art, and exploring" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-0 right-0">
              <div className="inline-flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-rainbow bg-clip-text text-transparent font-fredoka">
                  WhatNow Kid — Instant Activity Ideas for Parents
                </h1>
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Instant activity ideas, zero mental load.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card mb-8 border border-card-border">
          <div className="space-y-8">
            {/* Age */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Age Range</h3>
              <div className="flex flex-wrap gap-3">
                {ageRanges.map((age) => (
                  <FilterChip
                    key={age}
                    selected={selectedAges.includes(age)}
                    onClick={() => toggleAge(age)}
                  >
                    {age} years
                  </FilterChip>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">What's the goal?</h3>
              <div className="flex flex-wrap gap-3">
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

            {/* Environment & Cost */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Environment</h3>
                <SegmentedControl
                  options={['Any', 'Indoor', 'Outdoor']}
                  value={environment}
                  onChange={setEnvironment}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Cost</h3>
                <SegmentedControl
                  options={['Any', 'Free', 'Paid']}
                  value={cost}
                  onChange={setCost}
                />
              </div>
            </div>

            {/* Parenting Style */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Parenting Style</h3>
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