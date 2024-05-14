import React from "react";

const Card = () => {
  return (
    <div className="shadow-md transition ease-in-out flex flex-col gap-2 items-center justify-center p-4 w-64">
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
          <button className="bg-green hover:bg-dgreen">
            <svg
              className="fill-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
