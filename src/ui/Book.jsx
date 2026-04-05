import React from "react";

import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, image, publisher, rating, tags } = book;

  return (
    <div className="card bg-base-100  shadow-sm p-5  border border-[#dbdbdb] rounded-2xl ">
      <figure className="p-14 rounded-2xl flex justify-center items-center bg-[#F3F3F3]">
        <img src={image} alt={bookName} className="rounded-xl h-60" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="font-semibold py-1 px-2  text-green-500 bg-green-100 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-xl">{bookName}</h2>
        <p className="font-semibold text-black/70 text-md">By : {author}</p>

        <div className="border-t-2 border-dashed border-black/20 my-4 "></div>
        <div className="card-actions justify-between text-lg">
          <div className="text-black/80 font-semibold">{publisher}</div>
          <div className="flex items-center gap-2 font-bold ">
            <p className="border-black/20">{rating}</p>
            <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
