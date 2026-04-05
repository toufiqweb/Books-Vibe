import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("Book already exit to wish list");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to wish list`);
    }

    console.log(storedBooks);
  };
  //   /////////////////////////////////////////////
  const handleWishList = (currentBook) => {
    const isExistReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistReadList) {
      toast.error("this book is already exist in read list");
      return;
    }

    const isExistBook = wishBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("Book already exit to wish list");
    } else {
      setWishBooks([...wishBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to wish list`);
    }

    console.log(storedBooks);
  };
  //   /////////////////////////////////////////////
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishBooks,
    setWishBooks,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
