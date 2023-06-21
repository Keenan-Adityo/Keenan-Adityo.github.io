import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/card.jsx";
import "./App.css";
import { getMobileData } from "./data/mobileapps";
import { getWebsiteData } from "./data/website";

function App() {
  const mobileData = getMobileData();
  const websiteData = getWebsiteData();
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center my-3">
          <h1 className="text-5xl">Sad Keenanda Adityo</h1>
          <p>Portfolio</p>
        </div>
        <p className="text-4xl my-3">Mobile Application</p>
        <div className="flex flex-row my-3">
          {mobileData.map((mobile) => (
            <Card name={mobile.name} imgUrl={mobile.imageUrl} />
          ))}
        </div>
        <p className="text-4xl my-3">Website</p>
        <div className="flex flex-row my-3 justify-center">
          {websiteData.map((website) => (
            <Card name={website.name} imgUrl={website.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
