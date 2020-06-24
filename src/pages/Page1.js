import React from "react";
import "../styles/Page1.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page1() {
  return (
    <div className="home">
      <Navbar />
      <h1>Hackathon Doctolib Page 1</h1>
      <div className="">
        <button>Mes analyses</button>
        <button>Lien avec mon médecin</button>
        <button>Gros gros bouton</button>
      </div>
      <Footer />
    </div>
  );
}

export default Page1;
