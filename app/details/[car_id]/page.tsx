"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type Car = {
  car_brand: string;
  car_color: string;
  car_desc: string;
  car_gear: String;
  car_img_srcs: string[];
  car_km: number;
  car_model: string;
  car_name: string;
  car_serie: string;
  car_type: string;
  car_value: number;
  car_year: number;
  fuel_type: string;
};

const page = () => {
  const [car, setCar] = useState<Car>({
    car_brand: "Tesla",
    car_color: "Grey",
    car_desc: "2nd hand, 14.920km",
    car_gear: "Automatic",
    car_img_srcs: [
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775832.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775j9i.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775a7u.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775sa0.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_11320857753bu.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775z9i.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775kma.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775aj5.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775lho.jpg",
      "https://i0.shbdn.com/photos/08/57/75/x5_1132085775mdv.jpg",
    ],
    car_km: 14920,
    car_model: "P100D",
    car_name: "TESLA MODEL S P100D",
    car_serie: "Model S",
    car_type: "Sedan",
    car_value: 130.432,
    car_year: 2017,
    fuel_type: "Electric",
  });
  const [mainImageSrc, setMainImageSrc] = useState(car.car_img_srcs[0]);
  const isInitialized = useRef(false);
  const handleImgClick = (src: string) => {
    setMainImageSrc(src);
  };

  const handleBuyClick = () => {
    redirect("/payment");
  };

  useEffect(() => {
    if (!isInitialized.current) {
      car.car_img_srcs.forEach((src) => {
        const image_selector = document.getElementById("image-selector");
        const img_el = document.createElement("img");
        img_el.src = src;
        img_el.onclick = () => handleImgClick(img_el.src);
        img_el.style.width = "100px";
        img_el.className = "hover:ring-1 ring-secondary";

        if (image_selector) image_selector.appendChild(img_el);
      });
      isInitialized.current = true;
    }
  }, []);

  return (
    <div className="grid grid-cols-2 w-4/6">
      <div id="images" className="flex flex-col gap-8 p-8">
        <div>
          <img id="main-car-img" src={mainImageSrc} className="w-full"></img>
        </div>
        <div id="image-selector" className="flex flex-wrap gap-4"></div>
      </div>

      <div
        id="details"
        className="flex flex-col gap-2 *:ring-1 *:ring-secondary *:p-2 p-8"
      >
        <div>
          <span className="font-semibold">Brand:</span> {car.car_brand}
        </div>
        <div>
          <span className="font-semibold">Serie:</span> {car.car_serie}
        </div>
        <div>
          <span className="font-semibold">Model:</span> {car.car_model}
        </div>
        <div>
          <span className="font-semibold">Year:</span> {car.car_year}
        </div>
        <div>
          <span className="font-semibold">Fuel:</span> {car.fuel_type}
        </div>
        <div>
          <span className="font-semibold">Gear:</span> {car.car_gear}
        </div>
        <div>
          <span className="font-semibold">KM:</span> {car.car_km}
        </div>
        <div>
          <span className="font-semibold">Case Type:</span> {car.car_type}
        </div>
        <div>
          <span className="font-semibold">Price:</span>{" "}
          <span className="text-xl font-bold">{car.car_value}$</span>
        </div>
        <a
          className="bg-secondary hover:bg-primary hover:text-white transition ease-out text-center"
          href="/payment/"
        >
          Buy
        </a>
      </div>
    </div>
  );
};

export default page;
