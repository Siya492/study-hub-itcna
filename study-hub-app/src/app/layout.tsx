import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ITCNA1-12 Study Hub",
  description:
    "Interactive study companion for CompTIA A+ / ITCNA1-12 — triple-layer explanations, quizzes, flashcards, and progress tracking.",
};

// TODO: Replace the nav placeholder below with a proper <Sidebar /> or
//       <TopNav /> component once the navigation is built out.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0f0f1a] text-[#e8e8f0] min-h-screen`}
      >
        {/* ---- Navigation placeholder ---- */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#1a1a2e]/80 backdrop-blur border-b border-white/5">
          <span className="text-lg font-bold tracking-tight text-[#6c63ff]">
            ITCNA1-12 Study Hub
          </span>
          {/* TODO: Add nav links — Dashboard, Topics, Quizzes, Journey, Settings */}
          {/* TODO: Add user avatar / sign-in button from Supabase auth */}
        </nav>

        {/* ---- Page content ---- */}
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
