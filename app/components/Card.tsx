"use client";

interface CardProps {
  car_id: number;
  car_color: string;
  car_desc: string;
  car_img_src: string;
  car_name: string;
  car_type: string;
  car_value: number;
  car_year: number;
}

import React, { useEffect, useRef, useState } from "react";

const Card = ({
  car_id,
  car_color,
  car_desc,
  car_img_src,
  car_name,
  car_type,
  car_value,
  car_year,
}: CardProps) => {
  const [href, setHref] = useState("");
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      setHref("/details/" + car_id);
    }
  }, []);

  return (
    <div className="rounded-lg shadow-md transition ease-in flex flex-col gap-2 items-center justify-center p-4 w-64  bg-gradient-to-br from-primary via-secondary to-primary text-white relative hover:scale-105 delay-75">
      <div className="flex">
        {/* Car Image */}
        <img className="w-full" src={car_img_src}></img>
      </div>

      {/* Car Name */}
      <div className="w-full text-left text-lg font-bold line-clamp-1">
        {car_name}
      </div>

      {/* Car Description */}
      <div>
        <p className="line-clamp-4">{car_desc}</p>
        <p>Type: {car_type}</p>
        <p>{car_year}</p>
        <p>Color: {car_color}</p>
      </div>

      <div className="flex w-full m-2 items-center">
        {/* Vakye */}
        <div className="flex w-full justify-start text-lg font-bold">
          {car_value}$
        </div>

        {/* Buttons */}
        <div className="flex gap-4 *:font-bold *:p-1 *:rounded-lg">
          <a
            id="details-link"
            href={href}
            className="underline hover:no-underline"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
