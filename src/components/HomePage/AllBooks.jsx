import React, { use } from "react";
import Book from "../../ui/Book";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);

  return (
    <div className="container mx-auto my-20">
      <h1 className="font-bold text-4xl text-center">Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 py-15 px-5">
        {
            books.map(book => <Book key={book.bookId} book={book}/>)
        }
      </div>
    </div>
  );
};

export default AllBooks;
