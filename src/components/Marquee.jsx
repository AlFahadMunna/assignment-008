import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-primary h-20 container mx-auto border border-black rounded flex items-center text-xl font-semibold text-white ">
      <Marquee pauseOnHover className="h-full">
        New Arrivals: [Whispers of the Ocean | Next.js in Action | Quantum World
        | The Midnight Letter] | Special Discount on Memberships..
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
