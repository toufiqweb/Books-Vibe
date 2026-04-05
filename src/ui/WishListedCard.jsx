import React from "react";

const WishListedCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    publisher,
    category,
    totalPages,
    yearOfPublishing,
    rating,
    tags,
  } = book;
  return (
    <div
      className="border border-base-300 rounded-3xl p-4 sm:p-6 flex items-center flex-col sm:flex-row gap-4 sm:gap-6 
                bg-white overflow-hidden transition-all duration-500 
                hover:shadow-2xl hover:border-green-500 hover:-translate-y-3 
                group relative"
    >
      {/* Image Section - More Dramatic */}
      <div
        className="flex justify-center sm:justify-start p-8 rounded-2xl items-center bg-[#F3F3F3] 
                  transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-green-50 group-hover:to-emerald-50 
                  group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
      >
        {/* Subtle shine effect on hover */}
        <div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent 
                    -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        ></div>

        <img
          src={image}
          alt={bookName}
          className="w-32 h-40 rounded-2xl object-cover shadow-lg transition-all duration-500 
                 group-hover:scale-125 group-hover:-rotate-6 group-hover:shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1 transition-all duration-500">
        {/* Title - Dramatic hover */}
        <h2
          className="text-xl sm:text-3xl font-bold tracking-tight transition-all duration-500 
                   group-hover:text-green-600 group-hover:scale-105 origin-left"
        >
          {bookName}
        </h2>

        {/* Author */}
        <p
          className="text-lg text-gray-500 mt-1 mb-3 transition-all duration-500 
                  group-hover:text-emerald-600 group-hover:tracking-wide"
        >
          By: {author}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
          <span className="font-medium text-gray-500">Tags</span>

          <div className="flex items-center gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="font-semibold py-1.5 px-4 text-green-600 bg-green-100 rounded-full 
                       transition-all duration-300 hover:bg-green-500 hover:text-white 
                       hover:scale-125 hover:-rotate-3 active:scale-90"
              >
                {tag}
              </div>
            ))}
          </div>

          <span className="ml-auto text-gray-500 transition-all duration-500 group-hover:text-green-500">
            {yearOfPublishing}
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-4">
          <p className="transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">
            Publisher: {publisher}
          </p>
          <p className="transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">
            Pages: {totalPages}
          </p>
        </div>

        <hr className="border-base-300 mb-4 transition-all duration-500 group-hover:border-green-300" />

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center gap-4">
          <span
            className="badge bg-blue-100 text-blue-700 border-none px-4 py-1.5 text-sm 
                       transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
          >
            {category}
          </span>

          <span
            className="badge bg-orange-100 text-orange-700 border-none px-4 py-1.5 text-sm 
                       transition-all duration-300 hover:bg-orange-600 hover:text-white hover:scale-110"
          >
            ★ {rating}
          </span>

          {/* Dramatic Button */}
          <button
            className="btn btn-sm rounded-full bg-linear-to-r from-green-500 to-emerald-600 
                         hover:from-green-600 hover:to-emerald-700 text-white border-none 
                         px-8 py-2.5 font-semibold text-base shadow-md
                         transition-all duration-300 hover:shadow-xl hover:scale-110 
                         active:scale-95 flex items-center gap-2 group-hover:tracking-wider"
          >
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute top-4 right-4 w-6 h-6 bg-green-500/10 rounded-full 
                  transition-all duration-500 opacity-0 group-hover:opacity-100 
                  group-hover:scale-150"
      ></div>
    </div>
  );
};

export default WishListedCard;
