import React from "react";
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

function App() {
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
