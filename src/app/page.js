import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import MarqueeSection from "@/components/Marquee";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSection />
      <FeaturedBooks />
    </div>
  );
}
