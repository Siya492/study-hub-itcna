"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { UserProgress } from "@/types";

/**
 * Custom hook to track and update the current user's study progress.
 *
 * Returns:
 *  - progress: array of UserProgress records
 *  - loading: whether the initial fetch is in progress
 *  - markStudied: function to mark a topic as studied
 *  - isStudied: helper to check if a specific topic is studied
 *  - studiedCount: total number of studied topics
 *
 * TODO: Wire up real Supabase queries once auth is implemented.
 * TODO: Add optimistic updates so the UI feels instant.
 * TODO: Add error state and retry logic.
 * TODO: Consider caching with React Query or SWR for deduplication.
 */
export function useProgress() {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);

  // TODO: Fetch the authenticated user's progress rows on mount.
  //
  // Steps:
  //   1. Get current user via supabase.auth.getUser()
  //   2. Query: supabase.from("progress").select("*").eq("user_id", user.id)
  //   3. Map rows to UserProgress[]
  //   4. Set state
  useEffect(() => {
    async function fetchProgress() {
      try {
        const supabase = createClient();

        // TODO: Uncomment when auth is ready
        // const { data: { user } } = await supabase.auth.getUser();
        // if (!user) { setLoading(false); return; }
        //
        // const { data, error } = await supabase
        //   .from("progress")
        //   .select("*")
        //   .eq("user_id", user.id);
        //
        // if (error) throw error;
        //
        // setProgress(
        //   (data ?? []).map((row) => ({
        //     userId: row.user_id,
        //     topicId: row.topic_id,
        //     studied: row.studied,
        //     studiedAt: row.studied_at,
        //   }))
        // );

        // Placeholder: start with empty progress
        setProgress([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProgress();
  }, []);

  // TODO: Upsert a progress row and update local state.
  //
  // Steps:
  //   1. Get current user
  //   2. Upsert into "progress" table: { user_id, topic_id, studied: true, studied_at: now() }
  //   3. On success, update local state optimistically
  //   4. On failure, roll back optimistic update and show error
  const markStudied = useCallback(async (topicId: string) => {
    // const supabase = createClient();
    // const { data: { user } } = await supabase.auth.getUser();
    // if (!user) return;
    //
    // const { error } = await supabase
    //   .from("progress")
    //   .upsert({
    //     user_id: user.id,
    //     topic_id: topicId,
    //     studied: true,
    //     studied_at: new Date().toISOString(),
    //   });
    //
    // if (error) { console.error(error); return; }

    // Optimistic local update (works even before Supabase is wired up)
    setProgress((prev) => {
      const exists = prev.find((p) => p.topicId === topicId);
      if (exists) {
        return prev.map((p) =>
          p.topicId === topicId
            ? { ...p, studied: true, studiedAt: new Date().toISOString() }
            : p
        );
      }
      return [
        ...prev,
        {
          userId: "local",
          topicId,
          studied: true,
          studiedAt: new Date().toISOString(),
        },
      ];
    });
  }, []);

  /** Check if a specific topic has been studied */
  const isStudied = useCallback(
    (topicId: string) => progress.some((p) => p.topicId === topicId && p.studied),
    [progress]
  );

  /** Count of studied topics */
  const studiedCount = progress.filter((p) => p.studied).length;

  return { progress, loading, markStudied, isStudied, studiedCount };
}
