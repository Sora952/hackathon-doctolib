import React from "react";
import "../styles/Home.css";
import Header from "../components/Navbar";
import { Link } from "react-router-dom";
import img from "../images/img.jpg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <img src={img} alt="banniere" className="banniere" />
      <div className="auth-button">
        <Link to="/sign">
          <button className="button-sign-in">S'inscire</button>
        </Link>
        <Link to="/login">
          <button className="button-login">Se connecter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
