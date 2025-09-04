export interface Activity {
  id: string;
  title: string;
  description: string;
  age: string[];
  mood: Mood[];
  environment: 'Indoor' | 'Outdoor' | 'Both';
  cost: 'Free' | 'Paid';
  parenting: 'Hands On' | 'Hands Off';
  duration: string;
  setupTime: string;
  energyLevel: 'Low' | 'Medium' | 'High';
  materials: string[];
}

export type Mood = 'Irritated' | 'Tantrum' | 'Sad' | 'Sleepy' | 'Tired' | 'Energetic' | 'Impatient' | 'Bored' | 'Happy' | 'Clingy';

// Sample activity data based on the requirements
export const activitiesData: Activity[] = [
  {
    id: '1',
    title: 'Sensory Water Play',
    description: 'Let your toddler splash and explore with measuring cups in a shallow tub of water.',
    age: ['1-2', '3-4'],
    mood: ['Energetic', 'Bored'],
    environment: 'Indoor',
    cost: 'Free',
    parenting: 'Hands On',
    duration: '20-30 minutes',
    setupTime: '5 minutes',
    energyLevel: 'Medium',
    materials: ['Large bowl or tub', 'Water', 'Measuring cups', 'Towels']
  },
  {
    id: '2',
    title: 'Nature Scavenger Hunt',
    description: 'Create a simple list of items for kids to find outdoors like leaves, rocks, or flowers.',
    age: ['3-4', '5-7', '8-10'],
    mood: ['Bored', 'Energetic'],
    environment: 'Outdoor',
    cost: 'Free',
    parenting: 'Hands Off',
    duration: '30-45 minutes',
    setupTime: '10 minutes',
    energyLevel: 'High',
    materials: ['Paper list', 'Small bag or basket']
  },
  {
    id: '3',
    title: 'Quiet Reading Corner',
    description: 'Set up a cozy space with pillows and favorite books for independent reading time.',
    age: ['3-4', '5-7', '8-10'],
    mood: ['Sleepy', 'Tired', 'Sad'],
    environment: 'Indoor',
    cost: 'Free',
    parenting: 'Hands Off',
    duration: '15-30 minutes',
    setupTime: '5 minutes',
    energyLevel: 'Low',
    materials: ['Pillows', 'Blankets', 'Books']
  },
  {
    id: '4',
    title: 'Dance Party',
    description: 'Put on favorite songs and have an energetic dance session in the living room.',
    age: ['1-2', '3-4', '5-7'],
    mood: ['Energetic', 'Happy'],
    environment: 'Indoor',
    cost: 'Free',
    parenting: 'Hands On',
    duration: '10-20 minutes',
    setupTime: '2 minutes',
    energyLevel: 'High',
    materials: ['Music player', 'Open space']
  },
  {
    id: '5',
    title: 'Playdough Creations',
    description: 'Free-form sculpting and creating with colorful playdough.',
    age: ['1-2', '3-4', '5-7'],
    mood: ['Bored', 'Irritated'],
    environment: 'Indoor',
    cost: 'Paid',
    parenting: 'Hands On',
    duration: '20-40 minutes',
    setupTime: '5 minutes',
    energyLevel: 'Low',
    materials: ['Playdough', 'Cookie cutters', 'Rolling pin', 'Table covering']
  },
  {
    id: '6',
    title: 'Bubble Popping',
    description: 'Blow bubbles for toddlers to chase and pop around the yard.',
    age: ['0-1', '1-2', '3-4'],
    mood: ['Happy', 'Energetic'],
    environment: 'Outdoor',
    cost: 'Paid',
    parenting: 'Hands On',
    duration: '15-25 minutes',
    setupTime: '2 minutes',
    energyLevel: 'Medium',
    materials: ['Bubble solution', 'Bubble wand']
  },
  {
    id: '7',
    title: 'Building Block Towers',
    description: 'Stack blocks as high as possible, then knock them down with joy.',
    age: ['1-2', '3-4'],
    mood: ['Bored', 'Energetic'],
    environment: 'Indoor',
    cost: 'Paid',
    parenting: 'Hands Off',
    duration: '15-30 minutes',
    setupTime: '2 minutes',
    energyLevel: 'Medium',
    materials: ['Building blocks']
  },
  {
    id: '8',
    title: 'Cuddle and Story Time',
    description: 'Snuggle up together with a favorite book for one-on-one bonding time.',
    age: ['0-1', '1-2', '3-4', '5-7'],
    mood: ['Clingy', 'Sad', 'Sleepy'],
    environment: 'Indoor',
    cost: 'Free',
    parenting: 'Hands On',
    duration: '10-20 minutes',
    setupTime: '1 minute',
    energyLevel: 'Low',
    materials: ['Books', 'Comfortable seating']
  },
  {
    id: '9',
    title: 'Sidewalk Chalk Art',
    description: 'Draw colorful pictures and hopscotch courts on the driveway or sidewalk.',
    age: ['3-4', '5-7', '8-10'],
    mood: ['Bored', 'Happy'],
    environment: 'Outdoor',
    cost: 'Paid',
    parenting: 'Hands Off',
    duration: '30-60 minutes',
    setupTime: '2 minutes',
    energyLevel: 'Medium',
    materials: ['Sidewalk chalk', 'Paved surface']
  },
  {
    id: '10',
    title: 'Calm Breathing Exercise',
    description: 'Practice deep breathing together using fun animal breaths like "bunny sniffs" and "dragon breaths".',
    age: ['3-4', '5-7', '8-10'],
    mood: ['Irritated', 'Tantrum', 'Sad'],
    environment: 'Indoor',
    cost: 'Free',
    parenting: 'Hands On',
    duration: '5-10 minutes',
    setupTime: '1 minute',
    energyLevel: 'Low',
    materials: ['Quiet space']
  },
  {
    id: '11',
    title: 'Backyard Obstacle Course',
    description: 'Set up cones, jump ropes, and hula hoops for an active outdoor challenge.',
    age: ['5-7', '8-10', '10-12'],
    mood: ['Energetic', 'Impatient'],
    environment: 'Outdoor',
    cost: 'Paid',
    parenting: 'Hands On',
    duration: '20-45 minutes',
    setupTime: '15 minutes',
    energyLevel: 'High',
    materials: ['Cones', 'Jump rope', 'Hula hoops', 'Timer']
  },
  {
    id: '12',
    title: 'Independent Puzzle Time',
    description: 'Age-appropriate jigsaw puzzles for quiet, focused solo play.',
    age: ['3-4', '5-7', '8-10'],
    mood: ['Tired', 'Bored'],
    environment: 'Indoor',
    cost: 'Paid',
    parenting: 'Hands Off',
    duration: '15-45 minutes',
    setupTime: '2 minutes',
    energyLevel: 'Low',
    materials: ['Jigsaw puzzles', 'Flat surface']
  },
  {
    id: '13',
    title: 'Kitchen Science Experiments',
    description: 'Simple experiments like baking soda volcanoes or color-changing milk.',
    age: ['5-7', '8-10', '10-12'],
    mood: ['Bored', 'Happy'],
    environment: 'Indoor',
    cost: 'Free',
    parenting: 'Hands On',
    duration: '20-40 minutes',
    setupTime: '10 minutes',
    energyLevel: 'Medium',
    materials: ['Baking soda', 'Vinegar', 'Food coloring', 'Small containers']
  },
  {
    id: '14',
    title: 'Trampoline Jumping',
    description: 'Supervised bouncing and simple tricks on a backyard trampoline.',
    age: ['5-7', '8-10', '10-12'],
    mood: ['Energetic', 'Impatient'],
    environment: 'Outdoor',
    cost: 'Paid',
    parenting: 'Hands On',
    duration: '15-30 minutes',
    setupTime: '2 minutes',
    energyLevel: 'High',
    materials: ['Trampoline', 'Safety net']
  },
  {
    id: '15',
    title: 'Mindful Coloring',
    description: 'Detailed coloring books or pages for relaxation and focus.',
    age: ['5-7', '8-10', '10-12'],
    mood: ['Irritated', 'Tired', 'Sad'],
    environment: 'Indoor',
    cost: 'Paid',
    parenting: 'Hands Off',
    duration: '20-60 minutes',
    setupTime: '2 minutes',
    energyLevel: 'Low',
    materials: ['Coloring books', 'Colored pencils or markers']
  }
];

// Goal mapping logic as specified in requirements
export const goalMapping = {
  'Calm Down': ['Irritated', 'Tantrum', 'Sad', 'Sleepy', 'Tired'] as const,
  'Burn Energy': ['Energetic', 'Impatient'] as const,
  'Beat Boredom': ['Bored'] as const,
  'Connect': ['Happy', 'Clingy'] as const,
  'Quiet Time': ['Sleepy', 'Tired', 'Sad'] as const
} as const;

export type Goal = keyof typeof goalMapping;