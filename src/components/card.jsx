import React from "react";

function Card({ name, imgUrl, built }) {
  return (
      <div className="container w-60 mx-3 bg-white p-3 rounded-xl drop-shadow-md">
        <img src={imgUrl} alt="portfolio" className="w-60 h-60 rounded-xl" />
        <p className="text-3xl text-black font-semibold">{name}</p>
        <p>{built}</p>
      </div>
  );
}

export default Card;
