import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faSlack,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Components/navbar";
import '../homepage.css'


const Homepage = (props) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const description = `Wee are a ${props.data.address.city} based ${props.data.occupation}. ${props.data.description}`;
    let currentIndex = 0;
    let timer;

    const type = () => {
      if (currentIndex < description.length - 1) {
        setTypedText((prevText) => prevText + description[currentIndex]);
        currentIndex++;
        timer = setTimeout(type, 100);
      }
    };

    type();

    return () => {
      clearTimeout(timer);
    };
  }, [props.data.description, props.data.address.city, props.data.occupation]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div
        className="bg-cover text-white w-screen h-screen flex items-center flex-wrap justify-center"
        style={{ backgroundImage: `url("/images/bg2.jpg")` }}
      >
        <div className="text-center mx-auto sm:w-1/2 w-3/4">
          <h1 className="text-white pb-8 font-bold text-4xl sm:text-5xl md:text-7xl lg-text-9xl, xl:text-10xl font-merriweather animate-bounce" >We Are {props.data.name}.</h1>
          <p className="text-white text-base pt-8 sm:text-base mg:text-xl xl:text-2xl"  style={{ fontFamily: "roboto, sans-serif" }}>{typedText}</p>
          <div className="social-icons mt-4 pt-8 space-x-8 flex items-center justify-center">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-xl sm:text-3xl" />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-xl sm:text-3xl" />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-xl sm:text-3xl" />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl sm:text-3xl" />
            </a>
            <a href="https://www.github.com">
              <FontAwesomeIcon icon={faGithub} className="text-white text-xl sm:text-3xl" />
            </a>
            <a href="https://www.slack.com">
              <FontAwesomeIcon icon={faSlack} className="text-white text-xl sm:text-3xl" />
            </a>
            
            <a href="https://www.youtube.com/@drexelai3224">
              <FontAwesomeIcon icon={faYoutube} className="text-white text-xl sm:text-3xl"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage