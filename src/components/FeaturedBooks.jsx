import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch("https://assignment-008-azure.vercel.app/data.json");

  const data = await res.json();

  const featured = data.slice(0, 4);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-5">Featured Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {featured.map((f) => (
          <BookCard key={f.id} featured={f} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
