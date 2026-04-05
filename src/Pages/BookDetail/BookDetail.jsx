import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../components/context/BookProvider";

const BookDetail = () => {
  const { bookParamsId } = useParams();
  const books = useLoaderData();
  //   console.log(bookParamsId, books, " book detail");

  //   console.log(books);

  const matchedBookData = books.find((book) => book.bookId == bookParamsId);

//   console.log(matchedBookData);
  const {
    author,
    bookId,
    bookName,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = matchedBookData;


  const {handleMarkAsRead} = useContext(BookContext)

 

  return (
    <div className="max-w-6xl mx-auto p-8 bg-base-100 min-h-[40vh] flex items-center  my-10">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full">
        {/* Left Side - Book Cover */}
        <div className="flex-1 p-20 rounded-2xl flex justify-center items-center bg-[#F3F3F3]">
          <div className="relative shadow-2xl rounded-xl overflow-hidden group">
            {/* Book Cover */}
            <img src={image} alt="" />
          </div>
        </div>

        {/* Right Side - Book Information */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p className="text-xl text-base-content/70 mt-2">
              By : {publisher}
            </p>
          </div>

          <div className="badge badge-neutral text-sm px-4 py-1.5">
            {author}
          </div>

          {/* Review */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Review :</h3>
            <p className="text-base-content/80 leading-relaxed text-[15.5px]">
              {review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-3">
            <h3 className="font-semibold text-lg ">Tag :</h3>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="font-semibold py-1 px-2  text-green-500 bg-green-100 rounded-full"
              >
                #{tag}
              </div>
            ))}
          </div>

          {/* Book Meta Info */}
          <div className=" pt-4 ">
            <div className="">
              <div className="flex justify-between items-center gap-2 ">
                <p className="text-xl text-base-content/60 text-left">
                  Number of Pages
                </p>
                <p className="text-2xl font-semibold mt-1 text-left">
                  {totalPages}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <p className="text-xl text-base-content/60 text-left">
                  Year of Publishing
                </p>
                <p className="text-2xl font-semibold mt-1 text-left">
                  {yearOfPublishing}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <p className="text-xl text-base-content/60 text-left">Rating</p>
                <p className="text-2xl font-semibold mt-1 text-left">
                  {rating}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <p className="text-xl text-base-content/60 text-left">
                  Publisher
                </p>
                <p className="text-2xl font-semibold mt-1 text-left">
                  {publisher}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={() => handleMarkAsRead(matchedBookData)}
              className="btn btn-primary  text-lg font-semibold rounded-xl"
            >
              Mark as Read
            </button>
            <button className="btn btn-outline  text-lg font-semibold rounded-xl">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
