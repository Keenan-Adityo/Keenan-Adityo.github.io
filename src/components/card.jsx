import React from "react";

function Card({ name, imgUrl, built }) {
  return (
      <div className="flex flex-col container w-auto mx-3 bg-white p-3 rounded-xl drop-shadow-md">
        <img src={'https://raw.githubusercontent.com/Keenan-Adityo/Keenan-Adityo.github.io/main/src/assets/images/' + imgUrl} alt="portfolio" className="max-h-96 rounded-xl min-2-[188px]" />
        <p className="text-2xl text-black font-semibold">{name}</p>
        <p>{built}</p>
      </div>
  );
}

export default Card;
