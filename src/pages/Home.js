import React from "react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const url = 'https://assets.doctolib.fr/assets/patient/cover/cover-home-973bcf95feaf0a034f59ebef00b73d4ab3a7965c746780cb29d0399bc60b4961.png';

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <img src={url} alt='banniere' className='banniere' />
      <div className='auth-button'>

        <Link to='/sign'>
          <button className='button-sign-in'>S'inscire</button>
        </Link>

        <Link to='/login'>
          <button className='button-login'>Se connecter</button>
        </Link>

      </div>
      <p></p>

      <Footer />
    </div>
  );
};

export default Home;
