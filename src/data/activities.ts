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

const ALL_AGES = ['0-1', '1-3', '3-6', '6-10', '10+'];
const OLDER = ['3-6', '6-10', '10+'];
const YOUNGER = ['0-1', '1-3', '3-6'];
const MID = ['1-3', '3-6', '6-10'];
const ALL_MOODS: Mood[] = ['Irritated', 'Tantrum', 'Sad', 'Sleepy', 'Tired', 'Energetic', 'Impatient', 'Bored', 'Happy', 'Clingy'];
const CALM: Mood[] = ['Irritated', 'Tantrum', 'Sad', 'Sleepy', 'Tired'];
const ACTIVE: Mood[] = ['Energetic', 'Impatient', 'Bored', 'Happy'];
const QUIET: Mood[] = ['Sleepy', 'Tired', 'Sad', 'Clingy'];
const FUN: Mood[] = ['Bored', 'Happy', 'Energetic'];

// Balanced across Environment × Cost × Parenting so any filter combo yields 5+ results.
export const activitiesData: Activity[] = [
  // ============ INDOOR • FREE • HANDS ON ============
  { id: 'ifon-1', title: 'Sensory Water Play', description: 'Splash and explore with measuring cups in a shallow tub of water.', age: ALL_AGES, mood: [...FUN, 'Irritated'], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '20-30 min', setupTime: '5 min', energyLevel: 'Medium', materials: ['Tub', 'Water', 'Cups', 'Towels'] },
  { id: 'ifon-2', title: 'Dance Party', description: 'Blast favorite songs and dance around the living room together.', age: ALL_AGES, mood: [...ACTIVE, 'Happy'], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '10-20 min', setupTime: '2 min', energyLevel: 'High', materials: ['Music', 'Open space'] },
  { id: 'ifon-3', title: 'Cuddle and Story Time', description: 'Snuggle up together with a favorite book for one-on-one bonding.', age: ALL_AGES, mood: [...QUIET, 'Clingy', 'Tantrum'], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '10-20 min', setupTime: '1 min', energyLevel: 'Low', materials: ['Books', 'Comfy seat'] },
  { id: 'ifon-4', title: 'Calm Breathing Animals', description: 'Practice bunny sniffs and dragon breaths together to reset big feelings.', age: MID.concat('10+'), mood: [...CALM, 'Clingy'], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '5-10 min', setupTime: '1 min', energyLevel: 'Low', materials: ['Quiet space'] },
  { id: 'ifon-5', title: 'Kitchen Science', description: 'Baking soda volcanoes or color-changing milk experiments.', age: OLDER, mood: [...FUN], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '20-40 min', setupTime: '10 min', energyLevel: 'Medium', materials: ['Baking soda', 'Vinegar', 'Food coloring'] },
  { id: 'ifon-6', title: 'Pillow Fort Building', description: 'Team up to build a cozy fort out of cushions and blankets.', age: MID.concat('10+'), mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '20-40 min', setupTime: '5 min', energyLevel: 'Medium', materials: ['Pillows', 'Blankets', 'Chairs'] },
  { id: 'ifon-7', title: 'Silly Face Mirror Game', description: 'Take turns making the goofiest faces in a mirror to spark giggles.', age: YOUNGER, mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '5-15 min', setupTime: '0 min', energyLevel: 'Low', materials: ['Mirror'] },
  { id: 'ifon-8', title: 'Freeze Dance', description: 'Music on, then pause it and everybody freezes. Repeat until worn out.', age: MID.concat('10+'), mood: [...ACTIVE], environment: 'Indoor', cost: 'Free', parenting: 'Hands On', duration: '10-20 min', setupTime: '1 min', energyLevel: 'High', materials: ['Music'] },

  // ============ INDOOR • FREE • HANDS OFF ============
  { id: 'ifoff-1', title: 'Quiet Reading Corner', description: 'A cozy nook with pillows and books for independent reading.', age: OLDER, mood: [...QUIET, 'Bored'], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '15-30 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Pillows', 'Books'] },
  { id: 'ifoff-2', title: 'Sock Basketball', description: 'Toss rolled-up socks into a laundry basket from across the room.', age: MID.concat('10+'), mood: [...ACTIVE], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '10-20 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Socks', 'Basket'] },
  { id: 'ifoff-3', title: 'Draw Your Day', description: 'Kids sketch scenes from their day on scrap paper.', age: OLDER, mood: [...QUIET, 'Bored', 'Happy'], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '15-45 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Paper', 'Pencils'] },
  { id: 'ifoff-4', title: 'Board Game Solo Mode', description: 'Set up a solo-friendly game like solitaire or a puzzle challenge.', age: OLDER, mood: ['Bored', 'Tired', 'Impatient'], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '20-40 min', setupTime: '3 min', energyLevel: 'Low', materials: ['Cards or game'] },
  { id: 'ifoff-5', title: 'Sticker Book Session', description: 'Hand over a sticker sheet and blank paper and let them create.', age: YOUNGER.concat('6-10'), mood: [...FUN, 'Clingy'], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '15-30 min', setupTime: '1 min', energyLevel: 'Low', materials: ['Stickers', 'Paper'] },
  { id: 'ifoff-6', title: 'Audiobook Chill', description: 'Put on a story or podcast and let them relax while listening.', age: OLDER, mood: [...QUIET, 'Clingy', 'Tantrum'], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '20-45 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Speaker or headphones'] },
  { id: 'ifoff-7', title: 'Tummy Time Mat', description: 'Baby-safe mat with a mirror and rattles for solo exploration.', age: ['0-1'], mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '5-15 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Playmat', 'Baby toys'] },
  { id: 'ifoff-8', title: 'Room Tidy Race', description: 'Set a timer and challenge them to tidy as much as possible.', age: OLDER, mood: [...ACTIVE], environment: 'Indoor', cost: 'Free', parenting: 'Hands Off', duration: '10-15 min', setupTime: '1 min', energyLevel: 'Medium', materials: ['Timer'] },

  // ============ INDOOR • PAID • HANDS ON ============
  { id: 'ipon-1', title: 'Playdough Creations', description: 'Free-form sculpting with colorful playdough and cookie cutters.', age: MID, mood: [...FUN, 'Irritated', 'Tantrum'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '20-40 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Playdough', 'Cutters', 'Rolling pin'] },
  { id: 'ipon-2', title: 'Baking Together', description: 'Follow a simple cookie or muffin recipe as a team.', age: MID.concat('10+'), mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '45-60 min', setupTime: '10 min', energyLevel: 'Medium', materials: ['Recipe ingredients', 'Mixing bowls'] },
  { id: 'ipon-3', title: 'Painting Party', description: 'Set up watercolors or finger paints on butcher paper.', age: MID.concat('10+'), mood: [...FUN, 'Sad'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '20-45 min', setupTime: '10 min', energyLevel: 'Low', materials: ['Paints', 'Paper', 'Brushes'] },
  { id: 'ipon-4', title: 'Board Game Night', description: 'Pick a family favorite and play a round together.', age: OLDER, mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '30-60 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Board game'] },
  { id: 'ipon-5', title: 'Bubble Bath Spa', description: 'Warm bath with bubbles, bath toys, and calm music.', age: YOUNGER, mood: [...CALM, 'Clingy'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '20-30 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Bubble bath', 'Bath toys'] },
  { id: 'ipon-6', title: 'Slime Workshop', description: 'Mix up a batch of stretchy slime together.', age: OLDER, mood: [...FUN, 'Impatient'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '20-40 min', setupTime: '10 min', energyLevel: 'Medium', materials: ['Glue', 'Activator', 'Food coloring'] },
  { id: 'ipon-7', title: 'Lego Build Challenge', description: 'Pick a theme and race the timer to build it together.', age: OLDER, mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '20-45 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Lego bricks', 'Timer'] },
  { id: 'ipon-8', title: 'Baby Sensory Bottles', description: 'Shake and explore glitter bottles together on the floor.', age: ['0-1', '1-3'], mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Paid', parenting: 'Hands On', duration: '10-20 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Sensory bottles'] },

  // ============ INDOOR • PAID • HANDS OFF ============
  { id: 'ipoff-1', title: 'Building Block Towers', description: 'Stack blocks as high as possible, then knock them down.', age: YOUNGER.concat('6-10'), mood: [...FUN], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '15-30 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Blocks'] },
  { id: 'ipoff-2', title: 'Jigsaw Puzzle Time', description: 'Age-appropriate puzzles for quiet, focused solo play.', age: OLDER, mood: [...QUIET, 'Bored'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '15-45 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Jigsaw puzzle'] },
  { id: 'ipoff-3', title: 'Mindful Coloring', description: 'Detailed coloring pages for relaxation and focus.', age: OLDER, mood: [...CALM, 'Bored'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '20-60 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Coloring book', 'Markers'] },
  { id: 'ipoff-4', title: 'Magnetic Tiles Play', description: 'Open-ended building with magnetic tiles on the rug.', age: MID.concat('10+'), mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '20-45 min', setupTime: '1 min', energyLevel: 'Low', materials: ['Magnetic tiles'] },
  { id: 'ipoff-5', title: 'Kids Yoga Video', description: 'Follow along with a kid-friendly yoga session on screen.', age: MID.concat('10+'), mood: [...CALM, 'Energetic'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '15-30 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Tablet or TV', 'Mat'] },
  { id: 'ipoff-6', title: 'Craft Kit Session', description: 'Break out a store-bought craft kit and let them follow the guide.', age: OLDER, mood: [...FUN, 'Impatient', 'Tired'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '30-60 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Craft kit'] },
  { id: 'ipoff-7', title: 'Baby Playmat Gym', description: 'Baby explores dangling toys and textures on an activity gym.', age: ['0-1'], mood: [...ALL_MOODS], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '10-20 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Activity gym'] },
  { id: 'ipoff-8', title: 'Model Kit Assembly', description: 'Big kids tackle a model car, plane, or figure independently.', age: ['6-10', '10+'], mood: [...QUIET, 'Bored', 'Impatient'], environment: 'Indoor', cost: 'Paid', parenting: 'Hands Off', duration: '45-90 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Model kit'] },

  // ============ OUTDOOR • FREE • HANDS ON ============
  { id: 'ofon-1', title: 'Nature Walk Chat', description: 'Slow stroll pointing out bugs, leaves, and clouds together.', age: ALL_AGES, mood: [...ALL_MOODS], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '20-40 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Comfy shoes'] },
  { id: 'ofon-2', title: 'Puddle Jumping', description: 'Rain boots on and jump every puddle you find.', age: MID.concat('10+'), mood: [...ACTIVE, 'Irritated'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '15-30 min', setupTime: '5 min', energyLevel: 'High', materials: ['Rain boots', 'Rain jacket'] },
  { id: 'ofon-3', title: 'Cloud Watching', description: 'Lie in the grass and name shapes in the clouds together.', age: OLDER, mood: [...CALM, 'Clingy'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '15-30 min', setupTime: '1 min', energyLevel: 'Low', materials: ['Blanket'] },
  { id: 'ofon-4', title: 'Stroller Adventure', description: 'Long stroller loop pointing out sights to baby.', age: ['0-1', '1-3'], mood: [...ALL_MOODS], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '30-60 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Stroller'] },
  { id: 'ofon-5', title: 'Backyard Picnic', description: 'Pack snacks in a basket and eat on a blanket outside.', age: ALL_AGES, mood: [...ALL_MOODS], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '30-60 min', setupTime: '10 min', energyLevel: 'Low', materials: ['Blanket', 'Snacks'] },
  { id: 'ofon-6', title: 'Stick Sword Fight', description: 'Find safe sticks and stage a friendly duel with rules.', age: OLDER, mood: [...ACTIVE], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '15-30 min', setupTime: '2 min', energyLevel: 'High', materials: ['Sticks'] },
  { id: 'ofon-7', title: 'Tag or Chase', description: 'Old-fashioned tag in the yard until everyone is winded.', age: MID.concat('10+'), mood: [...ACTIVE], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '15-30 min', setupTime: '0 min', energyLevel: 'High', materials: ['Open space'] },
  { id: 'ofon-8', title: 'Star Gazing', description: 'Head out after dark with a blanket and spot constellations.', age: OLDER, mood: [...QUIET, 'Clingy'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands On', duration: '20-40 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Blanket'] },

  // ============ OUTDOOR • FREE • HANDS OFF ============
  { id: 'ofoff-1', title: 'Nature Scavenger Hunt', description: 'Give them a list of items to find outside like leaves and rocks.', age: OLDER, mood: [...FUN, 'Impatient'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '30-45 min', setupTime: '10 min', energyLevel: 'High', materials: ['Paper list', 'Bag'] },
  { id: 'ofoff-2', title: 'Yard Free Play', description: 'Send them outside with no agenda and let imagination take over.', age: MID.concat('10+'), mood: [...ALL_MOODS], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '30-60 min', setupTime: '0 min', energyLevel: 'High', materials: ['Yard'] },
  { id: 'ofoff-3', title: 'Rock Collecting', description: 'Hunt for the coolest rocks in the yard or on a walk.', age: MID.concat('10+'), mood: [...QUIET, 'Bored'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '20-40 min', setupTime: '1 min', energyLevel: 'Medium', materials: ['Small bucket'] },
  { id: 'ofoff-4', title: 'Bug Hunting', description: 'Grab a jar and go find crawly critters to observe.', age: OLDER, mood: [...FUN, 'Impatient'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '20-45 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Jar with holes'] },
  { id: 'ofoff-5', title: 'Bike or Scooter Loop', description: 'Independent laps around the driveway or safe path.', age: OLDER, mood: [...ACTIVE], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '20-45 min', setupTime: '5 min', energyLevel: 'High', materials: ['Bike', 'Helmet'] },
  { id: 'ofoff-6', title: 'Tree Climbing', description: 'Let confident kids scramble up a safe, low-branched tree.', age: ['6-10', '10+'], mood: [...ACTIVE, 'Bored'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '15-30 min', setupTime: '0 min', energyLevel: 'High', materials: ['A good tree'] },
  { id: 'ofoff-7', title: 'Fresh-Air Nap', description: 'Blanket in a shady spot for a stroller or lounge-chair snooze.', age: YOUNGER, mood: [...QUIET, 'Tantrum', 'Clingy'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '30-60 min', setupTime: '5 min', energyLevel: 'Low', materials: ['Blanket'] },
  { id: 'ofoff-8', title: 'Journaling in the Yard', description: 'Notebook + pencil on the porch for quiet writing or sketching.', age: ['6-10', '10+'], mood: [...QUIET, 'Bored'], environment: 'Outdoor', cost: 'Free', parenting: 'Hands Off', duration: '20-45 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Notebook', 'Pencil'] },

  // ============ OUTDOOR • PAID • HANDS ON ============
  { id: 'opon-1', title: 'Bubble Popping', description: 'Blow bubbles for kids to chase and pop across the yard.', age: ALL_AGES, mood: [...FUN, 'Clingy'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '15-25 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Bubble solution', 'Wand'] },
  { id: 'opon-2', title: 'Backyard Obstacle Course', description: 'Set up cones, ropes, and hoops for an active challenge.', age: OLDER, mood: [...ACTIVE], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '20-45 min', setupTime: '15 min', energyLevel: 'High', materials: ['Cones', 'Jump rope', 'Hoops'] },
  { id: 'opon-3', title: 'Water Balloon Toss', description: 'Fill balloons and play catch — step back after every throw.', age: OLDER, mood: [...ACTIVE], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '15-30 min', setupTime: '10 min', energyLevel: 'High', materials: ['Water balloons'] },
  { id: 'opon-4', title: 'Sprinkler Run', description: 'Set up a sprinkler and cheer them through the spray.', age: MID.concat('10+'), mood: [...ACTIVE, 'Irritated'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '20-40 min', setupTime: '5 min', energyLevel: 'High', materials: ['Sprinkler', 'Hose'] },
  { id: 'opon-5', title: 'Kite Flying', description: 'Head to an open field and get a kite airborne together.', age: OLDER, mood: [...ACTIVE, 'Happy'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '30-60 min', setupTime: '5 min', energyLevel: 'Medium', materials: ['Kite', 'Open space'] },
  { id: 'opon-6', title: 'Toddler Splash Pool', description: 'Small inflatable pool with cups and floaties supervised closely.', age: YOUNGER, mood: [...FUN, 'Irritated'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '20-40 min', setupTime: '10 min', energyLevel: 'Medium', materials: ['Kiddie pool', 'Water'] },
  { id: 'opon-7', title: 'Gardening Time', description: 'Plant seeds or pull weeds together in the garden bed.', age: MID.concat('10+'), mood: [...CALM, 'Bored'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '20-45 min', setupTime: '5 min', energyLevel: 'Medium', materials: ['Seeds', 'Trowel', 'Gloves'] },
  { id: 'opon-8', title: 'Fishing Trip', description: 'Head to a local pond with poles and bait for a slow afternoon.', age: ['6-10', '10+'], mood: [...CALM, 'Bored'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands On', duration: '60-120 min', setupTime: '15 min', energyLevel: 'Low', materials: ['Fishing rod', 'Bait'] },

  // ============ OUTDOOR • PAID • HANDS OFF ============
  { id: 'opoff-1', title: 'Sidewalk Chalk Art', description: 'Draw pictures and hopscotch on the driveway.', age: OLDER, mood: [...FUN, 'Bored'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '30-60 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Sidewalk chalk'] },
  { id: 'opoff-2', title: 'Trampoline Time', description: 'Supervised solo bouncing and simple tricks on the trampoline.', age: OLDER, mood: [...ACTIVE], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '15-30 min', setupTime: '2 min', energyLevel: 'High', materials: ['Trampoline', 'Safety net'] },
  { id: 'opoff-3', title: 'Sandbox Play', description: 'Buckets, shovels, and trucks in the sandbox for open play.', age: YOUNGER.concat('6-10'), mood: [...FUN, 'Clingy'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '30-60 min', setupTime: '2 min', energyLevel: 'Medium', materials: ['Sandbox', 'Toys'] },
  { id: 'opoff-4', title: 'Swing Set Time', description: 'Let them swing and climb on the backyard playset.', age: MID.concat('10+'), mood: [...ALL_MOODS], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '20-45 min', setupTime: '0 min', energyLevel: 'Medium', materials: ['Swing set'] },
  { id: 'opoff-5', title: 'Basketball Hoop Shots', description: 'Free-shoot at the driveway hoop and beat their own record.', age: ['6-10', '10+'], mood: [...ACTIVE, 'Impatient'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '20-45 min', setupTime: '1 min', energyLevel: 'High', materials: ['Basketball', 'Hoop'] },
  { id: 'opoff-6', title: 'Skateboard Practice', description: 'Helmet and pads on for driveway board practice.', age: ['6-10', '10+'], mood: [...ACTIVE, 'Bored'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '20-45 min', setupTime: '5 min', energyLevel: 'High', materials: ['Skateboard', 'Helmet', 'Pads'] },
  { id: 'opoff-7', title: 'Baby Grass Blanket', description: 'Lay baby on a blanket with a few toys in the shade.', age: ['0-1', '1-3'], mood: [...ALL_MOODS], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '10-25 min', setupTime: '3 min', energyLevel: 'Low', materials: ['Blanket', 'Baby toys'] },
  { id: 'opoff-8', title: 'Hammock Reading', description: 'Book plus hammock in the shade for a calm outdoor read.', age: ['6-10', '10+'], mood: [...QUIET, 'Bored'], environment: 'Outdoor', cost: 'Paid', parenting: 'Hands Off', duration: '30-60 min', setupTime: '2 min', energyLevel: 'Low', materials: ['Hammock', 'Book'] },
];

// Goal → Mood mapping used by the filter UI.
export const goalMapping = {
  'Calm Down': ['Irritated', 'Tantrum', 'Sad', 'Sleepy', 'Tired'] as const,
  'Burn Energy': ['Energetic', 'Impatient'] as const,
  'Beat Boredom': ['Bored'] as const,
  'Connect': ['Happy', 'Clingy'] as const,
  'Quiet Time': ['Sleepy', 'Tired', 'Sad'] as const,
} as const;

export type Goal = keyof typeof goalMapping;
