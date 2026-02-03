import Image from "next/image";



export default function VideoCard({
  title,
  image,
  meta,
}: any) {
  return (
    <div className="space-y-2 cursor-pointer">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-sm font-semibold text-white line-clamp-2">
        {title}
      </h3>

      {meta && (
        <p className="text-xs text-gray-400">
          {meta}
        </p>
      )}
    </div>
  );
}
