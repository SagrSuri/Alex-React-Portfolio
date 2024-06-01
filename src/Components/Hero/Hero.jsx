import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_image} alt="profile_image" />
      <h1>
        <span>I'm Alex Bennett,</span> frontend developer based in USA.
      </h1>
      <p>
        I am frontend developer from California, USA with 10 years of experience
        in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
