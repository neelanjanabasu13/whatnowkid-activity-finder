import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CATEGORIES: { title: string; intro: string; items: string[] }[] = [
  {
    title: "Quiet Time & Calm Down (Hands Off)",
    intro:
      "Low-energy, low-supervision ideas for when everyone needs to reset. Most need nothing but what's already in the room.",
    items: [
      "Build a pillow fort and read inside it",
      "Sticker book marathon on the kitchen floor",
      "Sort a jar of buttons or coins by color",
      "Trace hands on paper and decorate each finger",
      "Silent 'spot the color' hunt around the house",
      "Play with dry rice or pasta in a big bowl",
      "Line up every stuffed animal by size",
      "Make a paper-plate mask with markers",
      "Fold laundry with you — matching socks is a game",
      "Draw a self-portrait in a hand mirror",
      "Rip old magazines to make a collage",
      "Wrap small toys in tissue paper and unwrap them",
      "Blow bubbles in a bath or sink of water",
      "Trace shapes with a wet paintbrush on the sidewalk",
      "Roll a ball back and forth while you cook",
      "Play 'zookeeper' — feed every stuffed animal a snack",
      "Read the same picture book three ways: fast, slow, whisper",
      "Sort the crayon bin by color",
      "Set up a tea party for dolls",
      "Sit at the window and count red cars",
    ],
  },
  {
    title: "Burn Energy (Indoor)",
    intro:
      "For rainy days, tiny apartments, and pre-nap wiggles. No gear beyond a couch cushion.",
    items: [
      "Living-room obstacle course with cushions",
      "Freeze dance to any music playlist",
      "Balloon volleyball — the floor is lava",
      "Hallway bowling with plastic cups",
      "Animal walks down the hall (bear, crab, frog)",
      "Musical statues with the lamp on/off",
      "Indoor scavenger hunt for six items you name",
      "Yoga poses copied from a picture book",
      "'Follow the leader' up and down the stairs",
      "Sock skating on a smooth floor",
      "Tape a target on the wall, toss soft toys",
      "Dance-off, parents included",
      "Simon Says with silly moves",
      "Push a laundry basket around like a race car",
      "Blanket sled — pull them across the rug",
    ],
  },
  {
    title: "Outdoor Adventures (Free)",
    intro:
      "Weather-friendly, wallet-friendly ideas. Great for backyards, sidewalks, or the nearest park bench.",
    items: [
      "Puddle jumping in rain boots",
      "Collect ten different leaves and name them",
      "Draw a chalk town on the driveway",
      "Cloud watching — what animal do you see?",
      "Backyard bug safari with a magnifying glass",
      "Pinecone stacking contest",
      "Walk barefoot on grass, sand, and pavement — rate each",
      "Race sticks in a gutter stream",
      "Nature bracelet: masking tape sticky side out, add petals",
      "Shadow tag on a sunny sidewalk",
      "Rock painting with water instead of paint",
      "Find something in every color of the rainbow",
      "'Silent minute' listening walk — name every sound",
      "Build a fairy house from twigs and moss",
      "Kick a ball as far as you can, then run to it",
    ],
  },
  {
    title: "Creative & Crafty (Mess-Friendly)",
    intro:
      "Screen-free doesn't have to mean supply-store runs. These use what's in the recycling bin.",
    items: [
      "Cardboard-box car with paper-plate wheels",
      "Egg-carton caterpillar with pipe-cleaner legs",
      "Paper-bag puppet show",
      "Toilet-roll binoculars for the safari",
      "Homemade playdough (flour, salt, water, oil)",
      "Coffee-filter tie-dye with washable markers",
      "Bottle-cap mosaic on a paper plate",
      "String-and-cereal necklace",
      "Sponge stamping on butcher paper",
      "Salt tray for finger-writing practice",
      "Draw a comic strip about the family dog",
      "Family portrait using only shapes",
      "Design a superhero cape from an old T-shirt",
      "Build a marble run from paper-towel tubes and tape",
      "Snowflake cutting from used printer paper",
    ],
  },
  {
    title: "Together Time (Hands On)",
    intro:
      "Ten-to-twenty-minute ideas that count as connection without requiring a full afternoon.",
    items: [
      "Cook one snack together — count the steps",
      "Bake and decorate a single cookie each",
      "Read a chapter, then act it out",
      "Teach them a card game you loved as a kid",
      "Make up a bedtime story, one sentence each",
      "Interview each other with five silly questions",
      "Family talent show, five acts max",
      "Plant a seed in a cup and check it daily",
      "Wash the car (or a bike) together",
      "Write a letter to a grandparent and mail it",
      "Do a puzzle upside down on the coffee table",
      "Build the tallest LEGO tower you can in ten minutes",
      "Cook 'chopped' — three fridge items, one plate",
      "Learn a handshake, practice till you both nod",
      "Take turns drawing on each other's back — guess the shape",
    ],
  },
  {
    title: "Solo Play (For When You Need Five Minutes)",
    intro:
      "Independent-play prompts that don't require you to hover. Perfect for the last email of the day.",
    items: [
      "Give them a bowl of water and a paintbrush",
      "Set a timer: 'invent one new game before it dings'",
      "Empty cabinet + plastic containers = kitchen city",
      "Tape a road on the floor for toy cars",
      "Pillowcase full of dress-up clothes",
      "Dump the LEGO bin and 'build the biggest thing'",
      "One roll of masking tape, no rules",
      "Cardboard-box hideout — decorate the inside",
      "Ice cubes in a bowl with tongs",
      "Water table on the patio, cups only",
      "Sticker chart: cover the paper before mom comes back",
    ],
  },
];

const TOTAL = CATEGORIES.reduce((n, c) => n + c.items.length, 0);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "101 Screen-Free Activities for Kids",
  description:
    "A parent-tested guide to 101 screen-free activities for kids — quick to set up, low on materials, sorted by mood, energy, and supervision level.",
  author: { "@type": "Organization", name: "WhatNow Kid" },
  publisher: { "@type": "Organization", name: "WhatNow Kid" },
  mainEntityOfPage: "https://whatnow-play-finder.lovable.app/screen-free-activities",
};

const ScreenFreeActivities = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "101 Screen-Free Activities for Kids | WhatNow Kid";

    const setMeta = (name: string, attr: "name" | "property", content: string) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const desc =
      "101 screen-free activities for kids, from quiet-time crafts to backyard energy-burners. Quick to set up, low on materials, sorted by mood.";
    const metaDesc = setMeta("description", "name", desc);
    const ogTitle = setMeta("og:title", "property", "101 Screen-Free Activities for Kids");
    const ogDesc = setMeta("og:description", "property", desc);
    const ogUrl = setMeta("og:url", "property", "/screen-free-activities");
    const twTitle = setMeta("twitter:title", "name", "101 Screen-Free Activities for Kids");
    const twDesc = setMeta("twitter:description", "name", desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "/screen-free-activities");

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify(jsonLd);
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
      ld.remove();
      // leave og/twitter/description in place — Index sets its own on mount
      void metaDesc;
      void ogTitle;
      void ogDesc;
      void ogUrl;
      void twTitle;
      void twDesc;
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="underline underline-offset-4 hover:text-foreground">
            Home
          </Link>{" "}
          / Screen-Free Activities
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            101 Screen-Free Activities for Kids
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {TOTAL}+ ideas parents actually use — quick to start, light on materials, and organized
            by the mood you're trying to hit. Pull one from the list, or open the app for an
            instant suggestion tailored to age, energy, and setting.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/">Get an instant idea →</Link>
            </Button>
          </div>
        </header>

        <section className="mb-10 space-y-4 text-base leading-relaxed">
          <h2 className="text-2xl font-semibold">Why screen-free matters (without the guilt)</h2>
          <p>
            Screens aren't the enemy — decision fatigue is. When a kid says "I'm bored," the
            fastest, calmest response is a ready idea that fits the room you're in and the energy
            you have. This list is built around that: every activity below needs less than five
            minutes of setup and materials you already own.
          </p>
          <p>
            The ideas are grouped by <strong>what kind of moment you're in</strong>: winding down,
            burning energy, heading outside, getting crafty, playing together, or buying yourself
            five minutes.
          </p>
        </section>

        {CATEGORIES.map((cat) => (
          <section key={cat.title} className="mb-10">
            <h2 className="text-2xl font-semibold">{cat.title}</h2>
            <p className="mt-2 text-muted-foreground">{cat.intro}</p>
            <ol className="mt-4 list-decimal space-y-2 pl-6">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        ))}

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold">How to pick the right one</h2>
          <p>
            Ask two quick questions: <em>how much energy does the kid have</em>, and{" "}
            <em>how much energy do you have</em>? If both are high, head outside or start a fort.
            If theirs is high and yours is low, pick a Solo Play prompt. If both are low, a Quiet
            Time idea will reset everyone in ten minutes.
          </p>
          <p>
            The WhatNow Kid app does this filtering for you — pick age, mood, indoor or outdoor,
            and how hands-on you want to be, and it picks one idea so you don't have to.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Stop scrolling, start playing</h2>
          <p className="mt-2 text-muted-foreground">
            Open the app for a one-tap activity picker.
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link to="/">Try WhatNow Kid</Link>
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ScreenFreeActivities;
