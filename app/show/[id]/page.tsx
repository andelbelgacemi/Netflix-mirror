"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { movies } from "@/lib/movies";
import { saveRecent } from "@/lib/recent";
import Navbar from "@/components/navbar";
import MyListButton from "@/components/MyListButton";

export default function ShowPage() {
  const params = useParams();
  const showId = Number(params.id);

  const show = movies.find((m) => m.id === showId);

  useEffect(() => {
    if (!show) return;

    saveRecent({
      id: String(show.id),
      type: "movie",
      title: show.title,
      image: show.image,
    });
  }, [show]);

  if (!show) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center text-white">
        Show not found
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="relative h-[80vh]">
        <Image
          src={show.image}
          alt={show.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90" />

        <div className="absolute bottom-24 left-16 max-w-xl space-y-4">
          <h1 className="text-5xl font-extrabold">{show.title}</h1>
          <p className="text-gray-300">{show.subtitle}</p>
          <MyListButton id={show.id} />
        </div>
      </section>
      <section className="px-16 py-16">
        <h2 className="text-2xl font-bold mb-6">Official Trailer</h2>
        <div className="aspect-video max-w-4xl">
          <iframe
            src={`https://www.youtube.com/embed/${show.trailerId}`}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
