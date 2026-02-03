import Image from "next/image";
import Link from "next/link";

export default function WatchAgainCard({
  id,
  title,
  image,
  type,
}: any) {
  const href =
    type === "movie"
      ? `/show/${id}`
      : `https://youtube.com/watch?v=${id}`;

  return (
    <Link href={href} target={type === "youtube" ? "_blank" : undefined}>
      <div className="relative min-w-[180px] h-[260px] rounded-md overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
        <p className="absolute bottom-3 left-3 text-sm text-white line-clamp-2">
          {title}
        </p>
      </div>
    </Link>
  );
}
