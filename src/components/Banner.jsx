// components/Banner.jsx

import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner-logo.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-[85vh] bg-base-200 container mx-auto">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-20 max-w-7xl mx-auto px-6 py-10">
        {/* Banner Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={banner}
            alt="Books Banner"
            className="w-full rounded-3xl shadow-2xl object-cover h-[250px] sm:h-[350px] md:h-[450px]"
          />
        </div>

        {/* Banner Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Find Your <span className="text-primary">Next Read</span>
          </h1>

          <p className="py-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Discover thousands of books shared by readers around the world.
            Borrow, exchange, and explore your favorite stories anytime.
          </p>

          <Link href="/all-books">
            <button className="btn btn-primary btn-wide">Browse Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
