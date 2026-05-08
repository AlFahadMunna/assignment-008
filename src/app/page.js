import Banner from "@/components/Banner";
import MarqueeSection from "@/components/Marquee";
import Image from "next/image";

// https://assignment-008-navy.vercel.app/data.json
export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSection />
    </div>
  );
}
