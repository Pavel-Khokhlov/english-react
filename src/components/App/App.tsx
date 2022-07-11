import React from "react";
import { Routes, Route } from "react-router-dom";
import Achive from "../Pages/Achive/Achive";
import Contacts from "../Pages/Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Pages/Main/Main";
import Price from "../Pages/Price/Price";

import "./App.sass";
import Feedbacks from "../Pages/Feedbacks/Feedbacks";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
