import React from "react";

function Card({ name, imgUrl, built }) {
  return (
      <div className="flex flex-col container w-auto mx-3 bg-white p-3 rounded-xl drop-shadow-md">
        <img src={'./src/assets/images/' + imgUrl} alt="portfolio" className="h-96 rounded-xl" />
        <p className="text-3xl text-black font-semibold">{name}</p>
        <p>{built}</p>
      </div>
  );
}

export default Card;
