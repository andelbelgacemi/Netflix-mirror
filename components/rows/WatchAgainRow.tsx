"use client";

import { useEffect, useState } from "react";
import WatchAgainCard from "@/components/cards/WatchAgainCard";
import { getRecent, RecentItem } from "@/lib/recent";

export default function WatchAgainRow() {
  const [items, setItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    setItems(getRecent());
  }, []);

  if (!items.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-white px-6 md:px-16">
        Watch Again
      </h2>

      <div className="row px-6 md:px-16">
        {items.map((item) => (
          <WatchAgainCard
            key={`${item.type}-${item.id}`}
            id={item.id}
            title={item.title}
            image={item.image}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
}
