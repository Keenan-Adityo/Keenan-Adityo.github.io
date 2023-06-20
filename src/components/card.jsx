import React from "react";

function Card({name, imgUrl}) {
  return (
    <div className="container w-96 mx-3 bg-white p-3 rounded-xl drop-shadow-md">
      <img
        src= {imgUrl}
        alt="portfolio"
        className="w-96 h-96"
      />
      <p className="text-3xl text-black">{name}</p>
    </div>
  );
}

export default Card;
