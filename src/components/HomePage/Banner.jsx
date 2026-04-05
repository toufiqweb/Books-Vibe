import React from "react";
import heroImage from "../../assets/heroImage.png";
const Banner = () => {
  return (
    <div className="hero bg-base-300 min-h-[60vh] container mx-auto rounded-2xl my-10">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between  w-full">
        <img src={heroImage} className="max-w-sm" />
        <div>
          <h1 className="text-6xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-success text-white mt-10">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
