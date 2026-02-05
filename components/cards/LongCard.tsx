import Image from "next/image";
import Link from "next/link";

type LongCardProps = {
  id: number | string;
  title: string;
  image: string;
};

export default function LongCard({
  id,
  title,
  image,
}: LongCardProps) {
  return (
    <Link href={`/show/${id}`} className="group">
      <div
        className="
          relative
          min-w-[420px]
          h-[240px]
          rounded-xl
          overflow-hidden
          bg-black
          transition-all
          duration-300
          ease-out
          group-hover:-translate-y-2
          group-hover:shadow-2xl
        "
      >
        {/* Image (NO SCALE) */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-semibold text-white line-clamp-1">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
