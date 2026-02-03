"use client";

import { useEffect, useState } from "react";
import { movies } from "@/lib/movies";

const STORAGE_KEY = "my-list";

export function useMyList() {
  const [ids, setIds] = useState<number[]>([]);
  const [ready, setReady] = useState(false);

  // Load once on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setIds(JSON.parse(saved));
    } catch {
      setIds([]);
    } finally {
      setReady(true);
    }
  }, []);

  function persist(next: number[]) {
    setIds(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function toggle(id: number) {
    if (ids.includes(id)) {
      persist(ids.filter((x) => x !== id));
    } else {
      persist([...ids, id]);
    }
  }

  return {
    ready,
    ids,
    toggle,
    isSaved: (id: number) => ids.includes(id),
    items: movies.filter((m) => ids.includes(m.id)),
  };
}
