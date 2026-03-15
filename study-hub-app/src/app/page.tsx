/**
 * Dashboard — the landing page after login.
 *
 * TODO: This page will eventually show:
 *  - Overall progress ring (X of Y topics studied)
 *  - Weak-area alerts (tags where accuracy < 60%)
 *  - "Continue where you left off" — last viewed topic
 *  - Quick-access cards to Quizzes, Flashcards, Journey Map
 *  - Weekly breakdown bar chart
 */
export default function DashboardPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      {/* Hero heading */}
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="text-[#6c63ff]">Dashboard</span> — Coming Soon
      </h1>

      <p className="max-w-xl text-lg text-[#a0a0b8]">
        This is where your personalised study overview will live. You will see
        your progress across all 12 weeks, weak-area alerts, and quick links
        to quizzes and flashcards.
      </p>

      {/* Feature preview cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Progress Tracker",
            desc: "Visual ring showing topics completed",
            color: "#43e97b",
          },
          {
            title: "Weak Areas",
            desc: "Tags where you need more practice",
            color: "#ff6584",
          },
          {
            title: "Quick Quiz",
            desc: "Jump into a random quiz session",
            color: "#6c63ff",
          },
          {
            title: "Journey Map",
            desc: "Visual roadmap of your learning path",
            color: "#f9d423",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/5 bg-[#1a1a2e] p-6 text-left transition hover:border-white/10"
          >
            <div
              className="mb-3 h-2 w-10 rounded-full"
              style={{ backgroundColor: card.color }}
            />
            <h2 className="text-sm font-semibold">{card.title}</h2>
            <p className="mt-1 text-xs text-[#a0a0b8]">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
