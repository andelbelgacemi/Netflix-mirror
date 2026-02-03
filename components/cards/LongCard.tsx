import Image from "next/image";
import Link from "next/link";



export default function LongCard({
  id,
  title,
  image,
}: any) {
  return (
    <Link href={`/show/${id}`}>
      <div className="relative min-w-[420px] h-[240px] rounded-lg overflow-hidden card cursor-pointer">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white line-clamp-1">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
