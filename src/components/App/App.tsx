import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Achive from "../Pages/Achive/Achive";
import Contacts from "../Pages/Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Pages/Main/Main";
import Price from "../Pages/Price/Price";
import {RecoilRoot} from 'recoil';

import "./App.sass";
import Feedbacks from "../Pages/Feedbacks/Feedbacks";
import PopupNotification from "../Modals/Notification/PopupNotification";

const VisitorAPI = require("visitorapi");

interface VisitorAPIProps {
  ipAddress: string;
  countryCode: string;
  countryName: string;
  region: string;
  city: string;
  cityLatLong: string;
  currencies: string;
  languages: string;
  browser: string;
  browserVersion: string;
  deviceBrand: string;
  deviceModel: string;
  deviceFamily: string;
  os: string;
  osVersion: string;
}

function App() {
  const [visitorData, setVisitorData] = useState({}); // store the whole json
  const Visitor_Data = sessionStorage.getItem('visitor_data');
  useEffect(() => {
    if (!Visitor_Data) {
      VisitorAPI(
        "R9nfBw2jsCXvbv4BWDXd",
        (data: VisitorAPIProps) => {
          setVisitorData(data);
          sessionStorage.setItem('visitor_data', JSON.stringify(data));
        }
      );
    } else {
      setVisitorData(JSON.parse(Visitor_Data));
    }
  },[Visitor_Data]);

  console.log(visitorData);

  return (
    <RecoilRoot>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/achivements" element={<Achive />} />
          <Route path="/price" element={<Price />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <PopupNotification />
    </RecoilRoot>
  );
}

export default App;
