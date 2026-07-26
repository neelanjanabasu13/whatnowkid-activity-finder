# WhatNow Kid — Instant Activity Ideas for Parents

[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)](https://ui.shadcn.com/)

**Live site:** [https://whatnowkid-activity-finder.lovable.app](https://whatnowkid-activity-finder.lovable.app)

WhatNow Kid is a playful, zero-friction activity finder for parents, caregivers, and teachers. Pick a child’s age, the goal of the moment, and a few quick preferences, and get instant, curated screen-free activity ideas — no more blank-staring at a rainy afternoon.

---

## What the app does

- **355+ curated activities** across every age, mood, environment, cost, and parenting style.
- **Smart filtering** matches activities to the *moment*, not just the child’s age.
- **Zero mental load** — one click for a full list, or “I’m Feeling Lucky” for a single random pick.
- **Completely screen-free focus** — every idea gets kids moving, creating, calming, or connecting.
- **Guide pages** like `/screen-free-activities` help parents discover even more unplugged ideas.

---

## How to use the filters

The filter panel is the heart of the app. Mix and match any combination:

### 1. Age Range
Choose one or more age groups:

- `0-1` — Infant sensory and calm-down ideas
- `1-3` — Toddler movement and exploration
- `3-6` — Preschool creativity and play
- `6-10` — School-age projects and games
- `10+` — Older kid challenges and independent play

### 2. Goal
Pick what you need the activity to *do* for your child’s mood:

- **Calm Down** — sensory, soothing, low-stimulation ideas
- **Burn Energy** — active, physical, high-movement play
- **Beat Boredom** — quick novelty and engagement boosters
- **Connect** — together-time activities for bonding
- **Quiet Time** — independent, low-energy, reset activities

### 3. Environment
- **Any** — indoors or outdoors
- **Indoor** — rainy-day, small-space friendly
- **Outdoor** — yard, park, or nature play

### 4. Cost
- **Any** — free or paid
- **Free** — uses household items only
- **Paid** — may use small craft supplies, toys, or inexpensive materials

### 5. Parenting Style
- **Hands Off** — child-led or minimal supervision
- **Hands On** — caregiver joins in or guides the activity

### Results
Click **Show Activities** to see every match, or **I’m Feeling Lucky** for one random idea. Every combination of filters is guaranteed to return **5+ activities**.

---

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or your preferred package manager

> The fastest way to manage Node versions is with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### 1. Clone the repo

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_REPO_NAME>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:8080` with hot reload enabled.

### 4. Build for production

```bash
npm run build
```

The production bundle is written to `dist/`.

---

## Project structure

```
├── public/                  # Static assets, sitemap, robots.txt, llms.txt
├── src/
│   ├── components/          # UI components (filters, cards, switches)
│   ├── data/                # 355+ activity records and goal mappings
│   ├── pages/               # Route-level pages (Index, ScreenFree, 404)
│   ├── hooks/               # Shared React hooks
│   ├── lib/                 # Utilities and cn() helper
│   ├── index.css            # Global styles and Tailwind tokens
│   └── App.tsx              # Route definitions
├── index.html               # App shell, SEO meta tags
├── tailwind.config.ts       # Tailwind theme and custom animations
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## Tech stack

- **Vite** — fast build tooling and dev server
- **React 18** — UI library
- **TypeScript** — type-safe development
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible, composable components
- **Lucide React** — icon set

---

## Editing this project

You can edit this project in three ways:

1. **In Lovable** — visit the project at https://lovable.dev/projects/509402bb-333e-4da8-b500-62f38c8ea43e and prompt changes directly. Commits sync automatically.
2. **In your local IDE** — clone the repo, make changes, and push. Pushes sync back to Lovable.
3. **In GitHub / Codespaces** — edit files directly on GitHub or open a Codespace.

---

## Deploying

To publish or update the live site, open the project in [Lovable](https://lovable.dev/projects/509402bb-333e-4da8-b500-62f38c8ea43e) and go to **Share → Publish**.

You can also connect a custom domain under **Project → Settings → Domains**.

---

## License

This project is open for personal and educational use. See [LICENSE](./LICENSE) if included, or add your preferred license.

---

Made with ❤️ for parents who need a win on a hard day.
