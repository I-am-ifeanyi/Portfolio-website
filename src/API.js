import React from "react";
import weatherApp from "./images/weather-app.png";
import portfolio from "./images/portfolio-website.png";
import uslaccAfrica from "./images/uslaccafrica-website.png";

const info = [
  {
    id: 0,
    name: "Weather App",
    description1:
      "This is a personal project I did to specifically perfect my consumption of APIs and I am proud of what I was able to achieve working on this project.",
    description2:
      "Basically, the weather parameters or values I get on request is for the weather condition of Abuja, Nigeria. Similar projects will be made dynamic to allow the user choose a preferred location; with other desired features added.",
    image: weatherApp,
    stack1: "ReactJS",
    stack2: "Figma Design",
    stack3: "Tommorrow.ai weather API",
    source: "https://github.com/I-am-ifeanyi/Weather-App.git",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description1:
      "This is my personal portfolio website where I get to showcase some of the projects I'm working on. It gives me the liberty to express my knowledge and experience in software development.",
    description2: false,
    image: portfolio,
    stack1: "ReactJS",
    stack2: "Figma Design",
    stack3: "API",
    source: "https://github.com/I-am-ifeanyi/Portfolio-website.git",
  },
  {
    id: 3,
    name: "Uslacc Africa",
    description1:
      "Official website of Unites States Latino American Chamber of commerce",
    image: uslaccAfrica,
    stack1: "HTML",
    stack2: "CSS",
    stack3: false,
    source: "https://github.com/I-am-ifeanyi/Uslacc-Africa.org.git",
  },
];

export default info


