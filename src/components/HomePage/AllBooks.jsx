import React, { use } from "react";
import Book from "../../ui/Book";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  //   console.log(books);

  return (
    <div className="container mx-auto my-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Explore Books</h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Discover amazing books from different categories and add them to your
          collection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="bg-base-200 rounded-2xl border border-base-300 shadow-sm hover:shadow-lg transition duration-300 p-4"
          >
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
