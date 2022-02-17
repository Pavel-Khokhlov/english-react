import React from "react";
import { Routes, Route } from "react-router-dom";
import Achive from "../Achive/Achive";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PopupMenu from "../PopupMenu/PopupMenu";
import "./App.sass";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/achive" element={<Achive />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <PopupMenu />
    </>
  );
}

export default App;
