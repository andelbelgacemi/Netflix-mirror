"use client";

import VideoCard from "@/components/cards/VideoCard";
import { saveRecent } from "@/lib/recent";

export default function TopContentRow({ videos = [] }: any) {
  if (!videos.length) return null; 

  return (
    <section className="px-6 md:px-16 space-y-4">
      <h2 className="text-xl font-bold text-white">
        Top Content This Week
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {videos.map((v: any) => (
          <a
            key={v.id}
            href={`https://youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              saveRecent({
                id: v.id,
                type: "youtube",
                title: v.title,
                image: v.thumbnail,
              })
            }
          >
            <VideoCard
              title={v.title}
              image={v.thumbnail}
              meta={`${v.views.toLocaleString()} views`}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
