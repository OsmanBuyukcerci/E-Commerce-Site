"use client";

import { useEffect, useRef, useState } from "react";

const page = () => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNo1, setCardNo1] = useState("");
  const [cardNo2, setCardNo2] = useState("");
  const [cardNo3, setCardNo3] = useState("");
  const [cardNo4, setCardNo4] = useState("");
  const [month, setMonth] = useState("01");
  const [yearInput, setYear] = useState("24");

  const onlyNum = (event: any) => {
    let value = event.target.value;
    event.target.value = value.replace(/\D/g, "");
  };

  const date = new Date();
  let year = date.getFullYear();

  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      const select = document.getElementById("expire-date-input");
      let last_two_digit = year % 100;
      const final_year = last_two_digit + 36;

      for (last_two_digit; last_two_digit <= final_year; last_two_digit++) {
        const option = document.createElement("option");

        if (select && option) {
          option.innerText = last_two_digit.toString();
          option.value = last_two_digit.toString();
          select.appendChild(option);
        }
      }
      isInitialized.current = true;
    }
  });

  return (
    <div className="flex">
      <div className="grid grid-cols-2 gap-8 w-[65rem]">
        <div id="input-card">
          <form className="flex flex-col space-y-4 p-4 shadow-xl rounded-lg">
            <div className="flex flex-col gap-2 px-2">
              <div>
                <p>Card No</p>
              </div>
              <div className="flex gap-4 *:ring-1 *:ring-black *:py-1 *:w-20 *:text-center w-full">
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                    setCardNo1(e.target.value);
                  }}
                ></input>
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                    setCardNo2(e.target.value);
                  }}
                ></input>
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                    setCardNo3(e.target.value);
                  }}
                ></input>
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                    setCardNo4(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-2">
              <div>
                <p>Name on Card</p>
              </div>
              <div>
                <input
                  className="w-full py-1 px-2 ring-1 ring-black"
                  maxLength={50}
                  onChange={(e) => {
                    setNameOnCard(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex items-center gap-12 w-full px-2">
              <div className="flex flex-col w-auto">
                <div className="font-semibold">Month</div>
                <select
                  className="py-2 px-4 ring-black ring-1"
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                >
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Year</div>
                <select
                  id="expire-date-input"
                  className="ring-black ring-1 py-2 px-4"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                ></select>
              </div>
            </div>
            <div className="flex flex-col px-2">
              <div>
                <p>CVV</p>
              </div>
              <div>
                <input
                  type="text"
                  maxLength={3}
                  className="ring-1 ring-black w-20 py-1 text-center"
                  onChange={(e) => {
                    onlyNum(e);
                  }}
                ></input>
              </div>
            </div>
          </form>
        </div>

        <div
          id="card-preview"
          className="bg-gradient-to-br from-primary via-secondary to-primary rounded-lg relative *:text-white *:font-bold shadow-md"
        >
          <div className="absolute left-12 top-24">
            <img
              src="https://cdn-icons-png.freepik.com/512/6404/6404100.png"
              className="w-12"
            ></img>
          </div>
          <div id="card-no-preview" className="absolute left-12 top-40">
            <span className="text-lg ">
              {cardNo1} {cardNo2} {cardNo3} {cardNo4}
            </span>
          </div>
          <div id="name-preview" className="absolute left-12 bottom-6">
            {nameOnCard}
          </div>
          <div className="absolute flex gap-2 left-40 top-48">
            <div className="flex flex-col text-sm">
              <span>VALID</span>
              <span>THRU</span>
            </div>
            <div>
              {month}/{yearInput}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex gap-2">
            <input type="checkbox"></input>
            <div className="text-sm">I want to use 3D</div>
            <a href="#" className="text-sm text-blue">
              What is 3D?
            </a>
          </div>
          <div>
            <button className="py-2 px-4 rounded-lg bg-secondary hover:bg-primary text-white text-xl font-semibold">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
