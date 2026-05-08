import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Text */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-base-content/70">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="btn btn-primary btn-wide">Go Home</button>
          </Link>

          <Link href="/books">
            <button className="btn btn-outline btn-primary btn-wide">
              Browse Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
