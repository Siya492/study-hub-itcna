-- =============================================================================
-- ITCNA1-12 Study Hub — Initial Database Schema
-- =============================================================================
-- Run this migration in Supabase SQL Editor or via `supabase db push`.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. profiles — extends Supabase auth.users with app-specific fields
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
  id         UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      TEXT NOT NULL,
  display_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Auto-create a profile row when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'display_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 2. topics — study content (triple-layer explanations)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS topics (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title      TEXT NOT NULL,
  icon       TEXT NOT NULL DEFAULT '',
  week       INT NOT NULL CHECK (week BETWEEN 1 AND 12),
  tag        TEXT NOT NULL,
  textbook   TEXT NOT NULL DEFAULT '',
  lecturer   TEXT NOT NULL DEFAULT '',
  reallife   TEXT NOT NULL DEFAULT '',
  key_facts  TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- 3. progress — tracks which topics each user has studied
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS progress (
  user_id    UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  topic_id   UUID NOT NULL REFERENCES topics(id)   ON DELETE CASCADE,
  studied    BOOLEAN NOT NULL DEFAULT FALSE,
  studied_at TIMESTAMPTZ,
  PRIMARY KEY (user_id, topic_id)
);

-- ---------------------------------------------------------------------------
-- 4. quiz_attempts — logs every answer a user gives
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id         TEXT NOT NULL,
  selected_answer INT  NOT NULL,
  is_correct      BOOLEAN NOT NULL,
  attempted_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast lookups of a user's recent attempts
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user
  ON quiz_attempts (user_id, attempted_at DESC);

-- ---------------------------------------------------------------------------
-- 5. weak_areas — aggregated per-tag accuracy for each user
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS weak_areas (
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  topic_tag   TEXT NOT NULL,
  wrong_count INT  NOT NULL DEFAULT 0,
  total_count INT  NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, topic_tag)
);

-- =============================================================================
-- Row Level Security (RLS)
-- =============================================================================
-- Enable RLS on all tables so data is isolated per user.

ALTER TABLE profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics         ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress       ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts  ENABLE ROW LEVEL SECURITY;
ALTER TABLE weak_areas     ENABLE ROW LEVEL SECURITY;

-- ---- profiles ----
-- Users can read & update only their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- ---- topics ----
-- Topics are readable by any authenticated user (shared content)
CREATE POLICY "Authenticated users can read topics"
  ON topics FOR SELECT
  TO authenticated
  USING (true);

-- ---- progress ----
-- Users can read/insert/update only their own progress
CREATE POLICY "Users can view own progress"
  ON progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON progress FOR UPDATE
  USING (auth.uid() = user_id);

-- ---- quiz_attempts ----
-- Users can read/insert only their own attempts
CREATE POLICY "Users can view own quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ---- weak_areas ----
-- Users can read/insert/update only their own weak areas
CREATE POLICY "Users can view own weak areas"
  ON weak_areas FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own weak areas"
  ON weak_areas FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own weak areas"
  ON weak_areas FOR UPDATE
  USING (auth.uid() = user_id);
