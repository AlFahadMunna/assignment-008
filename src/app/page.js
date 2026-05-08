import Banner from "@/components/Banner";
import CommunityStats from "@/components/CommunityStats";
import FeaturedBooks from "@/components/FeaturedBooks";
import MarqueeSection from "@/components/Marquee";
import Newsletter from "@/components/NewsLetter";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSection />
      <FeaturedBooks />
      <CommunityStats />
      <Newsletter />
    </div>
  );
}
