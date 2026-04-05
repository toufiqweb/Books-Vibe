import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert("Book already added to wish list");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
    }

    console.log(storedBooks);
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
