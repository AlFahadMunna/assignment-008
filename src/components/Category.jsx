"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Category = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");

  const uniqueCategories = categories.filter(
    (cat, index, self) =>
      index === self.findIndex((c) => c.category === cat.category),
  );

  const handleFilter = (category) => {
    if (category === activeCategory) {
      router.push("/all-books");
    } else {
      router.push(`/all-books?category=${category}`);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* All Button */}
      <button
        onClick={() => router.push("/all-books")}
        className={`btn w-full ${
          !activeCategory ? "btn-primary" : "btn-outline"
        }`}
      >
        All
      </button>

      {/* Category Buttons */}
      {uniqueCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleFilter(cat.category)}
          className={`btn w-full transition-all duration-200 ${
            activeCategory === cat.category ? "btn-primary" : "btn-outline"
          }`}
        >
          {cat.category}
        </button>
      ))}
    </div>
  );
};

export default Category;
