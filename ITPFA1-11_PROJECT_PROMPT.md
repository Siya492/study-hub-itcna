# ITPFA1-11 Study Hub — Project Prompt

Copy this entire file and paste it to Claude in a NEW conversation to build your study hub.

---

## Who I Am

I am Siyabonga, a visual learner studying ITPFA1-11 (2026) — IT Professional Skills. I learn best through:

1. **Triple-layer explanations** for every topic:
   - Textbook = formal definition
   - Lecturer = how Mr John Uuijiatalor explained it in class
   - Real Life = simple everyday analogy I can relate to
2. **All acronyms spelled out** with meanings
3. **Visual tools**: comparison tables, diagrams, color-coded content
4. **YouTube + Google Image links** so I can SEE real examples
5. **Self-testing**: flashcards, quizzes with explanations, exam simulators
6. **Connected thinking**: show me how topics link together, not isolated facts
7. **Exam trap awareness**: highlight commonly confused concepts

## What to Build

Build a single, self-contained `study_hub_itpfa.html` file (no internet needed, no installs) with the same structure as my ITCNA1-12 study hub. It should include:

### 9 Tabs:
1. **Dashboard** — topic cards, progress tracking, mastery grid, revision section, weak area tracker
2. **Study** — each topic with Textbook/Lecturer/Real Life tabs, key facts, comparison tables, visual resources
3. **Acronyms** — searchable dictionary of all module acronyms
4. **Flashcards** — flip cards, filterable by category, shuffle
5. **Quiz** — multiple choice with explanations, score tracking
6. **Cheat Sheet** — compact reference tables
7. **Exam Traps** — commonly confused concepts shown side-by-side with example trick questions
8. **The Journey** — visual map showing how ALL topics connect in layers
9. **Test Prep** — exam simulator with timer (Quick 20 / Standard 35 / Full)

### Design & UX Requirements:
- Dark theme (bg: #0f0f1a, accent: #6c63ff, green: #43e97b, red: #ff6584, yellow: #f9d423)
- Responsive for phone + desktop
- Progress saved in localStorage
- Week filter buttons on dashboard
- "Back to Week X" navigation when inside a topic (remembers which week filter was active)
- "Jump to" buttons for other topics in the same week when studying a topic
- Comparison tables inside study topics where natural comparisons exist
- Study tab shows a landing page with all topic buttons when no topic is selected (not a blank page)
- Quiz and Test Prep options must have **shuffled answer positions** every time (avoid answer bias like always being B)
- High contrast text on all quiz/flashcard options — white text on dark backgrounds, clearly readable
- All quiz options: `color:#fff; font-size:15px; font-weight:500; border:1.5px solid rgba(255,255,255,.18)`

### Dashboard Features:
- **Progress panel** at top: ring chart showing overall %, stats (studied, quiz accuracy, weak areas)
- **Mastery grid**: every topic as a colored dot (green=strong, yellow=needs work, red=weak, grey=not studied)
- **Revision section** (appears after marking topics as studied):
  - Condensed key facts per studied topic (expandable/collapsible)
  - "Quick Quiz" button — quiz ONLY from studied topics, shows results in a modal
  - Wrong answers in revision quiz results must have a **"Study this topic"** button that jumps to that topic's study page
- **Weak areas tracker**: tracks every wrong answer across all quizzes, shows weakest topics with accuracy bars, study/retry/details buttons
- "Quiz Weak Areas Only" and "Clear History" buttons

### Test Prep Features:
- Three modes: Quick (20 questions, 20 min), Standard (35, 30 min), Full (all, no timer)
- Question number map at top showing progress (green=correct, red=wrong, grey=unanswered)
- **Restart button** in the header area (NOT near Previous/Next to avoid accidental clicks)
- **Finish screen**: if unanswered questions exist, show a review screen with skipped questions pulsing red — user can jump back to them or submit anyway
- Only saves to history if ALL questions are answered
- **Test history**: visual bar chart of all past attempts, stats (best score, total attempts, passes, trend), timeline list with scores and dates. Persists in localStorage.
- Results show score by topic with bars + review of wrong answers

## Module Content

### Module: ITPFA1-11 — IT Professional Skills (2026)
**Lecturer:** Mr John Uuijiatalor
**Aim:** Prepare students for the 21st-century workplace by developing non-technical soft skills for IT professionals.

### Topics by Week:

**Week 1 — Professionalism (17-19 Feb 2026)**
- What is professionalism in IT?
- Professional behaviour and attitude
- First impressions and credibility
- Professional vs unprofessional conduct (examples)
- Why soft skills matter in a technical industry
- Communication skills for IT professionals
- Verbal, non-verbal, and written communication
- Active listening
- Email etiquette and professional correspondence

**Week 2 — Professionalism 2 (24-26 Feb 2026)**
- Workplace culture and adapting to environments
- Dress code and presentation standards
- Time management and punctuality
- Accountability and reliability
- Handling feedback (giving and receiving)
- Professional development and continuous learning
- Building a professional reputation

**Week 3 — Ethics and Self-Management (3-5 Mar 2026)**
- IT ethics and ethical decision-making
- Confidentiality and data privacy
- Intellectual property and plagiarism
- Codes of conduct in IT
- Self-management skills
- Goal setting (SMART goals)
- Stress management and work-life balance
- Emotional intelligence
- Self-motivation and discipline

**Week 4 — Etiquette & IT Professional Standards (10+ Mar 2026)**
- Business etiquette for IT professionals
- Meeting etiquette (in-person and virtual)
- Phone and video call etiquette
- Teamwork and collaboration
- Conflict resolution
- Dealing with difficult colleagues/customers
- Interpersonal skills
- Networking and relationship building
- Customer service skills for IT support

### IMPORTANT INSTRUCTIONS:

1. **Read my lecture transcripts first** if I provide them — use the lecturer's exact words and examples where possible
2. **Add comparison tables** where natural comparisons exist (e.g., Professional vs Unprofessional, Verbal vs Non-verbal vs Written communication, Ethics vs Etiquette)
3. **Make real-life examples South African** where possible — use local workplace scenarios
4. **Include exam traps** like: Ethics vs Etiquette, Hearing vs Active Listening, Assertive vs Aggressive, Confidentiality vs Privacy
5. **The Journey map** should show: Personal Foundation (self-management, ethics) → Communication Skills → Professional Conduct → Workplace Interaction (teamwork, customers)
6. **Quiz questions** should test application, not just definitions — "What should you do when..." scenarios
7. **Flashcards** should include scenario-based cards, not just definitions

### Study Page Features:
- Three explanation tabs: Textbook, Lecturer, Real Life
- **Comparison tables** below the explanation tabs (rendered from a getComparisonTable function)
- Key Facts to Memorize (bullet list)
- **Visual Resources** section: YouTube search links + Google Image search links for each topic
- "Mark as Studied" button synced with dashboard progress
- Inline CSS/SVG diagrams where applicable

### Flashcard Features:
- Flip animation (click or spacebar)
- Arrow keys to navigate
- Filter by category
- Shuffle button
- Category filter bar

### Quiz Features:
- Answer options shuffled every time (use a shuffleOpts function)
- Show explanation after answering
- Score counter
- "All Topics" and "Random 10" filter
- Restart button

## After Building

- Save as `study_hub_itpfa.html`
- Create `HOW_TO_USE.txt` (detailed version) and `HOW_TO_USE_WhatsApp.txt` (emoji WhatsApp-friendly version)
- I will provide lecture transcripts/notes to fill in gaps and add the lecturer's specific explanations
- The file must be fully self-contained — shareable as a single HTML file, works offline, no dependencies
