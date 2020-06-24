import React from "react";
import '../styles/Home.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const url = 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-doctor-male-doctor-female-doctor-png-transparent-bottom-png-image_4636719.jpg';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img src={url} alt='banniere' className='banniere' />
      <div className='test'>
        <button>S'inscire</button>
        <button>Se connecter</button>
      </div>
      <p>Paragraphe blabla infos très gros pavé pour tout expliquer</p>
      <Footer />
    </div>
  );
};

export default Home;
