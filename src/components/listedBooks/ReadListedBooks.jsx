import React, { useContext } from "react";
import { BookContext } from "../context/BookProvider";
import ListedBookCard from "../../ui/ListedBookCard";
import { useNavigate } from "react-router";

const ReadListedBooks = () => {
  const { readListBooks } = useContext(BookContext);
  const navigate = useNavigate("");

  return (
    <div className="container mx-auto p-4 space-y-4">
      {readListBooks.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 bg-base-200 rounded-2xl border border-dashed border-base-300">
          <div className="text-6xl mb-4">📚</div>

          <h2 className="text-xl font-semibold mb-2">No Books in Read list</h2>

          <p className="text-gray-500 mb-4 max-w-md">
            You haven't added any books yet. Start exploring and add your
            favorite books to your Read list.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="btn bg-green-500 hover:bg-green-600 text-white border-none rounded-full px-6"
          >
            Browse Books
          </button>
        </div>
      ) : (
        readListBooks.map((book) => (
          <ListedBookCard key={book.bookId} book={book} />
        ))
      )}
    </div>
  );
};

export default ReadListedBooks;
