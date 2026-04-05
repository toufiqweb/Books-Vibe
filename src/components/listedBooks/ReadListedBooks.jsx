import React, { useContext } from "react";
import { BookContext } from "../context/BookProvider";
import ListedBookCard from "../../ui/ListedBookCard";

const ReadListedBooks = () => {
  const { readListBooks } = useContext(BookContext);
  
  return (
    <div className="container mx-auto p-4 space-y-4">
      {/* Card 1 */}
      
        {
            readListBooks.map(book => <ListedBookCard book={book}/>)
        }
    
    </div>
  );
};

export default ReadListedBooks;
