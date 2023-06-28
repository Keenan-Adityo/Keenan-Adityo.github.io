import Card from "../components/card.jsx";
import "../App.css";
import { getMobileData } from "../data/mobileapps";
import { getWebsiteData } from "../data/website";
import { Link } from "react-router-dom";
import { getCertificationsData } from "../data/certifications.js";

function Home() {
  const mobileData = getMobileData();
  const websiteData = getWebsiteData();
  const certificationsData = getCertificationsData();
  return (
    <div className="flex flex-col p-5 ">
      <div className="flex flex-row justify-center my-3">
        <h1 className="text-5xl">Sad Keenanda Adityo</h1>
        <p>Portfolio</p>
      </div>
      <p className="text-4xl my-3 text-center font-semibold">
        Mobile Application
      </p>
      <div className="flex flex-row my-3 justify-center">
        {mobileData.map((mobile) => (
          <Link to="/detail" state={{ data: mobile }}>
            <Card
              name={mobile.name}
              imgUrl={mobile.imageUrl[0]}
              built={mobile.built}
            />
          </Link>
        ))}
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
      <p className="  text-4xl my-3 text-center font-semibold">Certification</p>
      <div className="flex flex-row my-3 justify-center">
        {certificationsData.map((certifications) => (
          <Link to={certifications.link}>
            <Card
              name={certifications.name}
              imgUrl={certifications.imageUrl}
              built={certifications.built}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
