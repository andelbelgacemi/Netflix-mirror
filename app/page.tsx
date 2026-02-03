import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import CarouselRow from "@/components/cards/CarouselRow";
import Banner from "@/components/banner";
import TopContentRow from "@/components/rows/TopContentRow";
import WatchAgainRow from "@/components/rows/WatchAgainRow";
import { getTopYouTubeVideos } from "@/lib/youtube";
export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main>
      <Navbar />
      <Banner />
      <CarouselRow />
      <TopContentRow videos={await getTopYouTubeVideos()} />
      <WatchAgainRow />
    </main>
  );
}
