import React from "react";

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, publisher, rating, tags } = book;

  return (
  <Link
  to={`/bookDetails/${bookId}`}
  className="group card bg-base-100 shadow-sm p-5 border border-[#dbdbdb] 
             rounded-2xl overflow-hidden
             transition-all duration-500
             hover:shadow-2xl hover:-translate-y-3 hover:border-green-500"
>
  {/* Image */}
  <figure className="p-14 rounded-2xl flex justify-center items-center bg-[#F3F3F3] relative overflow-hidden">
    
    {/* gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition duration-500"></div>

    <img
      src={image}
      alt={bookName}
      className="rounded-xl h-60 transition-transform duration-500 group-hover:scale-110"
    />
  </figure>

  {/* Content */}
  <div className="card-body">
    <div className="flex items-center gap-4">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="font-semibold py-1 px-3 text-green-500 bg-green-100 
                     rounded-full transition duration-300 
                     group-hover:bg-green-200"
        >
          {tag}
        </div>
      ))}
    </div>

    <h2 className="card-title text-xl transition duration-300 group-hover:text-green-600">
      {bookName}
    </h2>

    <p className="font-semibold text-black/70 text-md">
      By : {author}
    </p>

    <div className="border-t-2 border-dashed border-black/20 my-4"></div>

    <div className="card-actions justify-between text-lg">
      <div className="text-black/80 font-semibold">{publisher}</div>

      <div className="flex items-center gap-2 font-bold">
        <p>{rating}</p>
        <FaRegStar className="transition duration-300 group-hover:text-yellow-400" />
      </div>
    </div>
  </div>
</Link>
  );
};

export default Book;
