import Card from "../components/card.jsx";
import "../App.css";
import { getMobileData } from "../data/mobileapps.js";
import { getWebsiteData } from "../data/website.js";
import { useLocation } from "react-router-dom";

function WebDetail() {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-row justify-center my-3">
        <h1 className="text-5xl">Sad Keenanda Adityo</h1>
        <p>Portfolio</p>
      </div>
      <p className="text-4xl mt-4 text-center font-semibold">{data.name}</p>
      <p className="text-xl text-center">({data.built}) </p>
      <p className="text-2xl text-center">{data.description} </p>
      <div className="flex flex-row my-3 justify-center">
        {data.imageUrl.map((data) => (
          <img
            src={
              "https://raw.githubusercontent.com/Keenan-Adityo/Keenan-Adityo.github.io/main/src/assets/images/" +
              data
            }
            alt={data}
            className="h-96 mx-4"
          />
        ))}
      </div>
      <p className="text-3xl mt-4 text-center font-semibold">Features</p>
      <div className="max-w-fit my-3 justify-center mx-auto">
        {data.features.map((data, index) => (
          <p className="text-xl">
            {++index}. {data}
          </p>
        ))}
      </div>
      <p className="text-3xl mt-4 text-center font-semibold">Tech Stack</p>
      <div className="max-w-fit my-3 justify-center mx-auto">
      {data.techstack.map((data, index) => (
        <p className="text-xl">
          {++index}. {data}
        </p>
      ))}
      </div>
    </div>
  );
}

export default WebDetail;
