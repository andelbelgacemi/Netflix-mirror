"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useMyList } from "@/lib/useMyList";

export default function MyListPage() {
  const { items, ready } = useMyList();

  if (!ready) return null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-24 px-6 md:px-16">
        <h1 className="text-3xl font-bold mb-8">My List</h1>

        {items.length === 0 ? (
          <p className="text-gray-400">
            You haven’t added anything yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {items.map((show) => (
              <Link key={show.id} href={`/show/${show.id}`}>
                <div className="relative aspect-[2/3] rounded-md overflow-hidden hover:scale-105 transition">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
                  <p className="absolute bottom-3 left-3 text-sm font-semibold">
                    {show.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
