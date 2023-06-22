import { useState } from "react";
import bgImage from "./assets/background.png";
import viteLogo from "/vite.svg";
import Card from "./components/card.jsx";
import "./App.css";
import Home from "./pages/home";
import MobileDetail from "./pages/mobile_detail";
import { getMobileData } from "./data/mobileapps";
import { getWebsiteData } from "./data/website";
import {
  RouterProvider,
  Link,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/" element={<MobileDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
