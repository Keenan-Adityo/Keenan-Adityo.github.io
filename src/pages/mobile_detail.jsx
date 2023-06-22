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
          <p>{data.name}</p>
        </div>
        <p className="text-4xl my-3 text-center font-semibold">
          Mobile Application
        </p>
        <div className="flex flex-row my-3 justify-center">
          {mobileData.name}
        </div>
        <p className="text-4xl my-3 text-center font-semibold">Website</p>
        <div className="flex flex-row my-3 justify-center">
          {websiteData.map((website) => (
            <Card
              name={website.name}
              imgUrl={website.imageUrl}
              built={website.built}
            />
          ))}
        </div>
        
      </div>
    );
}

export default MobileDetail;
