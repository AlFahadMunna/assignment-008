import BookCard from "@/components/BookCard";

const AllBooksPage = async () => {
  const res = await fetch("https://assignment-008-azure.vercel.app/data.json");
  const featured = await res.json();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold m-4">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {featured.map((f) => (
          <BookCard key={f.id} featured={f} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
