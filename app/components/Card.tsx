"use client";

import React from "react";

const Card = () => {
  return (
    <div className="rounded-lg shadow-md transition ease-in-out flex flex-col gap-2 items-center justify-center p-4 w-64  bg-gradient-to-br from-primary via-accent to-secondary text-white relative">
      <div className="flex">
        {/* Product Image */}
        <img
          className="w-full"
          src="https://i5.walmartimages.com/seo/Great-Value-Milk-Whole-Vitamin-D-Gallon-Plastic-Jug_6a7b09b4-f51d-4bea-a01c-85767f1b481a.86876244397d83ce6cdedb030abe6e4a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        ></img>
      </div>

      {/* Product Name */}
      <div className="w-full text-left text-lg font-bold line-clamp-1">
        Milk
      </div>

      {/* Product Description */}
      <div>
        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus laboriosam impedit quaerat est sint ratione repellat
          itaque delectus dolore at architecto perspiciatis iste, voluptatum
          blanditiis enim aut tempore laborum sequi?
        </p>
      </div>

      <div className="flex w-full m-2 items-center">
        {/* Price */}
        <div className="flex w-full justify-start text-lg font-bold">3$</div>

        {/* Buttons */}
        <div className="flex gap-4 *:font-bold *:p-1 *:rounded-lg">
          <a href="#" className="underline hover:no-underline">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
