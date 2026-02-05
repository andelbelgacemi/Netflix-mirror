import LongCard from "@/components/cards/LongCard";
import { movies } from "@/lib/movies";

export default function CarouselRow() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-white px-16">
        Featured Today
      </h2>

      <div className="flex
      gap-6
      overflow-x-auto
      overflow-y-visible
      py-4
      scroll-smooth">
        {movies.map((movie) => (
          <LongCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
