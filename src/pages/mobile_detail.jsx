import Card from "../components/card.jsx";
import "../App.css";
import { getMobileData } from "../data/mobileapps.js";
import { getWebsiteData } from "../data/website.js";
import { useLocation } from "react-router-dom";

function MobileDetail() {
  const location = useLocation();
  const data = location.state?.data;
  const mobileData = getMobileData();

  const websiteData = getWebsiteData();
  return (
    <div className="flex flex-col p-5 bg-[url('/assets/background.png')]">
      <div className="flex flex-row justify-center my-3">
        <h1 className="text-5xl">Sad Keenanda Adityo</h1>
        <p>Portfolio</p>
      </div>
      <p className="text-4xl mt-4 text-center font-semibold">{data.name}</p>
      <p className="text-xl text-center">({data.built}) </p>
      <p className="text-2xl text-center">{data.description} </p>
      <div className="flex flex-row my-3 justify-center">
      {data.imageUrl.map((data) => (
          <img src={'../src/assets/images/' + data} alt={data} className="h-96 mx-4" />
        ))}
      </div>
      
    </div>
  );
}

export default MobileDetail;
