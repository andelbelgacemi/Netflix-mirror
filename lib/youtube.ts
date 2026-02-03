const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export type YouTubeVideo = {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  channel: string;
};

type YouTubeApiVideo = {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails?: {
      high?: {
        url: string;
      };
    };
  };
  statistics?: {
    viewCount?: string;
  };
};

type YouTubeApiResponse = {
  items?: YouTubeApiVideo[];
};

export async function getTopYouTubeVideos(): Promise<YouTubeVideo[]> {
  if (!API_KEY) return [];

  const url = `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=12&key=${API_KEY}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];

    const data: YouTubeApiResponse = await res.json();
    if (!data.items) return [];

    return data.items.map((video) => ({
      id: video.id,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails?.high?.url ?? "",
      views: Number(video.statistics?.viewCount ?? 0),
      channel: video.snippet.channelTitle,
    }));
  } catch {
    return [];
  }
}
