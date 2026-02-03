"use client";

import { useMyList } from "@/lib/useMyList";

export default function MyListButton({ id }: { id: number }) {
  const { isSaved, toggle, ready } = useMyList();

  if (!ready) return null;

  const saved = isSaved(id);

  return (
    <button
      onClick={() => toggle(id)}
      className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition"
    >
      {saved ? "✓ In My List" : "+ Add to My List"}
    </button>
  );
}
