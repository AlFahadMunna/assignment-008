import BookCard from "@/components/BookCard";
import Category from "@/components/Category";
import SearchBar from "@/components/SearchBar";

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } = await searchParams;

  const res = await fetch("https://assignment-008-azure.vercel.app/data.json");
  const featured = await res.json();

  const categoryRes = await fetch(
    "https://assignment-008-azure.vercel.app/category.json",
  );
  const categories = await categoryRes.json();

  // category filter
  const categoryFiltered = category
    ? featured.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase(),
      )
    : featured;

  // search filter (added)
  const filteredBooks = search
    ? categoryFiltered.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      )
    : categoryFiltered;

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl font-bold m-4">All Books</h1>
        <SearchBar />
      </div>

      <div className="md:grid md:grid-cols-12 gap-4 flex flex-col">
        <div className="grid col-span-3 mt-6">
          <Category categories={categories} />
        </div>

        <div className="grid grid-cols-1 col-span-9 md:grid-cols-4 gap-6 mt-6 col-span-9">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} featured={book} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
