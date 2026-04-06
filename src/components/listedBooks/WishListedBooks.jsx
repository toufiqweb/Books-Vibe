import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookProvider";
import WishListedCard from "../../ui/WishListedCard";
import { useNavigate } from "react-router";

const WishListedBooks = ({sortingType}) => {
  const { wishListBooks } = useContext(BookContext);
  const navigate = useNavigate("");

   const [filteredWishList, setFilteredWishList] = useState(wishListBooks);
  
    useEffect(() => {
      if (sortingType) {
        if (sortingType === "pages") {
          const sortedData = [...wishListBooks].sort(
            (a, b) => a.totalPages - b.totalPages,
          );
          console.log(sortedData);
          setFilteredWishList(sortedData)
          
        } else if (sortingType === "rating") {
           const sortedData = [...wishListBooks].sort(
            (a, b) => a.rating - b.rating,
          );
          console.log(sortedData);
          setFilteredWishList(sortedData)
          
        }
      }
    }, [sortingType , wishListBooks]);

  return (
    <div className="container mx-auto p-4 space-y-2">
      
      {filteredWishList.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 bg-base-200 rounded-2xl border border-dashed border-base-300">
          <div className="text-6xl mb-4">📚</div>

          <h2 className="text-xl font-semibold mb-2">No Books in Wishlist</h2>

          <p className="text-gray-500 mb-4 max-w-md">
            You haven't added any books yet. Start exploring and add your
            favorite books to your wishlist.
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
        filteredWishList.map((book) => (
          <WishListedCard key={book.bookId} book={book} />
        ))
      )}
    </div>
  );
};

export default WishListedBooks;
