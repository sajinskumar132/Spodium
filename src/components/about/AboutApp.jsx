import React from "react";
import SimpleCard from "../helper_component/simple_card/SimpleCard";
import './aboutAppStyle.css'
import AboutAppImage from '../../assets/images/about_app_image.png'
function AboutApp() {
  return (
    <div id="about" className="about_app_main_container">
      <h1  className="about_app_main_header">About Our App</h1>
      <div className="about_app_sub_text_container" >
        <p className="about_app_main_sub_text">
            Spodium was born out of a vision to create a platform that seamlessly
            merges the thrill of sports betting with the power of social networking.
            Our journey began with a small team of tech innovators who saw an
            opportunity to revolutionize the way people engage with sports and
            games.
        </p>
      </div>
     
      <div className="about_app_sub_container">
        <div>
          <img src={AboutAppImage} className="about_app_sub_container_image"/>
        </div>
        <div className="about_app_card_container">
          <SimpleCard
            title={"Creative design"}
            description={
              "Discover Spodium, where innovation meets aesthetics. Our app features a sleek and modern design crafted to elevate your sports betting experience."
            }
          />
          <SimpleCard
            title={"easy to use"}
            description={
              "Navigating Spodium is a breeze. Our user-friendly interface makes it easy for both novice and experienced bettors to explore, place bets, and connect with fellow sports enthusiasts."
            }
          />
          <SimpleCard
            title={"Best user experince"}
            description={
              "At Spodium, user experience is paramount. We're committed to providing you with the best possible experience, from seamless navigation to lightning-fast performance."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
