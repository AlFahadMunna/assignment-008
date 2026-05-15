import Image from "next/image";
import Link from "next/link";

const BookCard = ({ featured }) => {
  if (!featured) return null;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-xl overflow-hidden">
      {/* Book Image */}
      <figure className="relative aspect-square w-full">
        <Image
          src={featured?.image_url || "/placeholder-book.png"}
          alt={featured?.title || "Book Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        {/* Button */}
        {featured?.id && (
          <div className="card-actions justify-end mt-5">
            <Link href={`/all-books/${featured.id}`} className="w-full">
              <button className="btn w-full btn-primary">View Details</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
