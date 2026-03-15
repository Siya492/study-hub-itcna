# ITCNA1-12 Study Hub — Web App

A full-stack study platform for the ITCNA1-12 Computer Network and Security module.
Built with Next.js, Supabase, and Tailwind CSS.

## Tech Stack

| Layer      | Technology              |
|------------|------------------------|
| Frontend   | Next.js 15 + React 19  |
| Styling    | Tailwind CSS v4        |
| Database   | Supabase (PostgreSQL)  |
| Auth       | Supabase Auth          |
| Hosting    | Vercel                 |
| Language   | TypeScript             |

## Project Structure

```
study-hub-app/
├── public/                  # Static assets (icons, images)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout (nav, theme, auth provider)
│   │   ├── page.tsx         # Dashboard (home)
│   │   ├── study/
│   │   │   └── [id]/page.tsx    # Individual topic study page
│   │   ├── acronyms/page.tsx
│   │   ├── flashcards/page.tsx
│   │   ├── quiz/page.tsx
│   │   ├── cheat-sheet/page.tsx
│   │   ├── exam-traps/page.tsx
│   │   ├── journey/page.tsx
│   │   ├── test-prep/page.tsx
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   └── signup/page.tsx
│   │   └── admin/
│   │       └── page.tsx     # Content management (add/edit topics)
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Base components (Button, Card, Badge, etc.)
│   │   ├── nav/             # Navigation bar
│   │   ├── dashboard/       # Dashboard widgets (progress, mastery grid)
│   │   ├── study/           # Study page components (ExplainTabs, KeyFacts)
│   │   ├── quiz/            # Quiz components (QuizCard, QuizOption)
│   │   ├── flashcards/      # Flashcard components (FlipCard)
│   │   ├── traps/           # Exam trap cards
│   │   └── journey/         # Journey map components
│   ├── lib/                 # Utilities and configuration
│   │   ├── supabase/
│   │   │   ├── client.ts    # Supabase browser client
│   │   │   ├── server.ts    # Supabase server client
│   │   │   └── middleware.ts
│   │   ├── data/            # Static content data (migrated from HTML)
│   │   │   ├── topics.ts
│   │   │   ├── acronyms.ts
│   │   │   ├── flashcards.ts
│   │   │   ├── quizzes.ts
│   │   │   ├── exam-traps.ts
│   │   │   ├── journey-layers.ts
│   │   │   └── cheat-sheet.ts
│   │   └── utils.ts         # Helper functions
│   ├── hooks/               # Custom React hooks
│   │   ├── useProgress.ts   # Track studied topics
│   │   ├── useWeakAreas.ts  # Track wrong answers
│   │   ├── useQuiz.ts       # Quiz state management
│   │   └── useAuth.ts       # Auth state
│   └── types/               # TypeScript type definitions
│       └── index.ts
├── supabase/
│   ├── migrations/          # Database schema migrations
│   │   └── 001_initial.sql
│   └── seed.sql             # Seed data (topics, quizzes, etc.)
├── .env.local.example       # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm or pnpm
- A Supabase account (free at supabase.com)

### Setup
```bash
cd study-hub-app
npm install
cp .env.local.example .env.local
# Add your Supabase URL and anon key to .env.local
npm run dev
```

### Database Setup
1. Create a new Supabase project
2. Run the migration: `supabase/migrations/001_initial.sql`
3. Seed the data: `supabase/seed.sql`

## Features (Migrated from HTML prototype)
- [x] Dashboard with progress tracking
- [x] 19 study topics with triple-layer explanations
- [x] 80+ searchable acronyms
- [x] Flashcards with flip animation
- [x] 58 quiz questions with explanations
- [x] Cheat sheet with comparison tables
- [x] Exam traps (17 commonly confused pairs)
- [x] The Journey (connected topic map)
- [x] Test prep exam simulator
- [x] Revision section with weak area tracking

## Features (New — enabled by full-stack)
- [ ] User accounts (email + Google login)
- [ ] Progress syncs across all devices
- [ ] Lecturer admin dashboard
- [ ] Class-wide analytics (which topics students struggle with)
- [ ] Add/edit content without code changes
- [ ] Study streaks and leaderboards
- [ ] Push notifications before test day
- [ ] Multi-module support (expand beyond ITCNA1-12)
