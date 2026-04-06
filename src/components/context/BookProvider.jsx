import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFromLocalDB,
} from "../../utlis/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readListBooks, setReadListBooks] = useState(() =>
    getAllReadListFromLocalDB(),
  );
  const [wishListBooks, setWishListBooks] = useState([]);

  // useEffect(() => {
  //   const getAllReadListFromLocalDB = getAllReadListFromLocalDB();
  //   setReadListBooks(getAllReadListFromLocalDB);
  // }, []);

  const handleMarkAsRead = (currentBook) => {
    addReadListToLocalDB(currentBook);
    const isExistBook = readListBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("Book already exit to wish list");
    } else {
      setReadListBooks([...readListBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to wish list`);
    }

    console.log(readListBooks);
  };
  //   /////////////////////////////////////////////
  const handleWishList = (currentBook) => {
    const isExistReadList = readListBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistReadList) {
      toast.error("this book is already exist in read list");
      return;
    }

    const isExistBook = wishListBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("Book already exit to wish list");
    } else {
      setWishListBooks([...wishListBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to wish list`);
    }

    console.log(readListBooks);
  };
  //   /////////////////////////////////////////////
  const data = {
    readListBooks,
    setReadListBooks,
    handleMarkAsRead,
    wishListBooks,
    setWishListBooks,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
