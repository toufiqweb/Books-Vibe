import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';

const WishListedBooks = () => {
      const { wishListBooks } = useContext(BookContext);
    
    return (
         <div className="container mx-auto p-4 space-y-4">
      {/* Card 1 */}
      
        {
            wishListBooks.map(book => <WishListedBooks book={book}/>)
        }
    
    </div>
    );
};

export default WishListedBooks;