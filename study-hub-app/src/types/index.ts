// =============================================================================
// ITCNA1-12 Study Hub — Core TypeScript Types
// =============================================================================

/** A study topic (e.g. "Motherboard Components", "IP Addressing") */
export interface Topic {
  id: string;
  title: string;
  /** Emoji or Lucide icon name shown on cards */
  icon: string;
  /** Which week of the course this topic belongs to (1-12) */
  week: number;
  /** Short tag for grouping & weak-area tracking (e.g. "hardware", "networking") */
  tag: string;
  /** Triple-layer explanations */
  textbook: string;
  lecturer: string;
  reallife: string;
  /** Quick-reference bullet points */
  key_facts: string[];
}

/** An acronym with its expansion and a plain-English explanation */
export interface Acronym {
  id: string;
  /** The short form, e.g. "RAM" */
  acronym: string;
  /** Full expansion, e.g. "Random Access Memory" */
  full: string;
  /** One-sentence plain-English meaning */
  meaning: string;
  /** Which topic(s) this acronym relates to */
  topicIds: string[];
}

/** A single flashcard (front/back) */
export interface Flashcard {
  id: string;
  topicId: string;
  front: string;
  back: string;
  /** Difficulty rating used for spaced-repetition scheduling */
  difficulty: "easy" | "medium" | "hard";
}

/** A quiz question with multiple-choice answers */
export interface Quiz {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  /** Index into `options` for the correct answer */
  correctIndex: number;
  /** Explanation shown after answering */
  explanation: string;
}

/** An "exam trap" — a common mistake students make */
export interface ExamTrap {
  id: string;
  topicId: string;
  /** The misleading statement or common wrong answer */
  trap: string;
  /** Why it's wrong */
  why: string;
  /** The correct understanding */
  correct: string;
}

// =============================================================================
// Learning Journey types (visual roadmap)
// =============================================================================

/** One layer/section of the learning journey (maps to a week or theme) */
export interface JourneyLayer {
  id: string;
  title: string;
  week: number;
  nodes: JourneyNode[];
}

/** A single node on the journey map */
export interface JourneyNode {
  id: string;
  topicId: string;
  label: string;
  /** Whether the user has completed this node */
  completed: boolean;
  /** IDs of prerequisite nodes that should be done first */
  prerequisites: string[];
}

// =============================================================================
// User-specific data (stored in Supabase)
// =============================================================================

/** Tracks which topics a user has studied */
export interface UserProgress {
  userId: string;
  topicId: string;
  /** Whether the topic has been marked as studied */
  studied: boolean;
  /** Timestamp of when it was studied */
  studiedAt: string | null;
}

/** Aggregated weak-area data per topic tag */
export interface WeakArea {
  userId: string;
  /** The topic tag, e.g. "hardware", "networking" */
  topicTag: string;
  /** Number of wrong answers in this tag */
  wrongCount: number;
  /** Total attempts in this tag */
  totalCount: number;
}

// =============================================================================
// Supabase row types (mirrors the DB schema for type-safe queries)
// =============================================================================

/** Database row types — generated from supabase/migrations/001_initial.sql */
export namespace DB {
  export interface Profile {
    id: string;
    email: string;
    display_name: string | null;
    created_at: string;
  }

  export interface TopicRow {
    id: string;
    title: string;
    icon: string;
    week: number;
    tag: string;
    textbook: string;
    lecturer: string;
    reallife: string;
    key_facts: string[];
    created_at: string;
  }

  export interface ProgressRow {
    user_id: string;
    topic_id: string;
    studied: boolean;
    studied_at: string | null;
  }

  export interface QuizAttemptRow {
    id: string;
    user_id: string;
    quiz_id: string;
    selected_answer: number;
    is_correct: boolean;
    attempted_at: string;
  }

  export interface WeakAreaRow {
    user_id: string;
    topic_tag: string;
    wrong_count: number;
    total_count: number;
  }
}
