import Image from "next/image";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://assignment-008-azure.vercel.app/data.json");

  const books = await res.json();

  const book = books.find((p) => p.id == id);

  if (!book) {
    return (
      <div
        className="min-h-screen flex container mx-auto
       items-center justify-center"
      >
        <h2 className="text-xl font-semibold">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto flex items-center justify-center p-4">
      <div className="card bg-base-100 shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Image */}
        <figure className="w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src={book.image_url || "/placeholder-book.png"}
            alt={book.title || "Book Image"}
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body p-4 md:p-6">
          <h2 className="card-title text-xl md:text-2xl">{book.title}</h2>

          <p className="text-sm md:text-base text-base-content/70 mt-2">
            {book.description}
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm md:text-base font-medium">
              Author: <span className="font-normal">{book.author}</span>
            </p>

            <p className="text-sm md:text-base">Category: {book.category}</p>

            <p className="text-sm md:text-base">
              Available: {book.available_quantity}
            </p>
            <button className="btn btn-neutral">Borrow This Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
