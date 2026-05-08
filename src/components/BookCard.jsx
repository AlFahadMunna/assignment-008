import Image from "next/image";
import Link from "next/link";

const BookCard = ({ featured }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-xl overflow-hidden">
      {/* Book Image */}
      <figure className="relative aspect-square w-full">
        <Image
          src={featured?.image_url}
          alt={featured?.title || "Book Image"}
          fill
          sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vh, 33vh"
          className="object-cover"
        />
        <div className="badge badge-ghost badge-sm absolute right-2 top-2">
          {featured?.category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-xl">{featured?.title}</h2>

        {/* Author */}
        <p className="text-sm text-base-content/70">By {featured?.author}</p>
        {/* Button */}
        <div className="card-actions justify-end mt-5">
          <Link href={`/all-books/${featured.id}`}>
            <button className="btn w-full btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
