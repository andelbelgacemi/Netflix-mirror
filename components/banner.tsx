"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { movies } from "@/lib/movies";
import { useState } from "react";

function getRandomMovie() {
  return movies[Math.floor(Math.random() * movies.length)];
}

export default function Banner() {
  // ✅ lazy initializer — runs once per mount
  const [movie] = useState(() => getRandomMovie());
  const router = useRouter();

  if (!movie) return null;

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-16">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            {movie.title}
          </h1>

          <p className="text-lg text-gray-300">
            {movie.subtitle}
          </p>

          <button
            onClick={() => router.push(`/show/${movie.id}`)}
            className="btn-primary"
          >
            ▶ Play
          </button>
        </div>
      </div>
    </section>
  );
}
