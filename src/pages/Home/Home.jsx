import React, { lazy, Suspense } from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import herobanner from "../../netflix_react_assets/hero_banner.jpg";
import herotitle from "../../netflix_react_assets/hero_title.png";
import playicon from "../../netflix_react_assets/play_icon.png";
import infoicon from "../../netflix_react_assets/info_icon.png";
// const Titlecards=lazy(()=>import("../../Components/Titlecards/Titlecards"))
import Titlecards from "../../Components/Titlecards/Titlecards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={herobanner} className="banner" />
        <div className="hero-caption">
          <img src={herotitle} alt="" className="capt-img"/>
          <p>
            Discovering his ties to a secret ancient order,a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn "> <img src={playicon} alt="" />Play</button>
            <button className="btn dark-btn"> <img src={infoicon} alt="" />More info</button>
          </div>
          <div className="titlecards"><Titlecards category={"now_playing"}/>
          </div>
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"BlockBuster Movies"} category={"top_rated"}/>
      <Titlecards title={"Only on Netflix"} category={"popular"}/>
      <Titlecards title={"Upcoming"} category={"upcoming"}/>
      <Titlecards title={"Top picks for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
    </Suspense>
  );
};

export default Home;
