import React from "react";
import displayPicture from "./images/dp.jpg" 
import downloadIcon from "./images/download-svgrepo-com.svg"; 
import Email from "./images/Email.png"; 
import Github from "./images/Github.png";
import LinkedIn from "./images/LinkedIn.png";
import Twitter from "./images/Twitter.png";
import WhatsApp from "./images/WhatsApp.png";
import webIcon from "./images/web-icon.jpg";
import code from "./images/Code.png";
import info from "./API"
import Projects from "./projects";

export default function HomePage() {
const style = {
  width: "50px",
  height: "50px"
}

const videoStyle = {
  width: '100%',
  height: '300px'

}

const apiInfo = info.map((data) => {
  return (
    <Projects
      key={data.id}
      name={data.name}
      description1={data.description1}
      description2={data.description2}
      stack1={data.stack1}
      stack2={data.stack2}
      stack3={data.stack3}
      image={data.image}
      source={data.source}
    />
  );
})

  return (
    <main className="main-body">
      <nav className="navBar">
        <img src="cover.png" alt="TOG Official Logo" className="tog-logo" />
        <ul className="navigators">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <section className="introduction">
        <div className="biography-section">
          <div className="brief-bio">
            <h4>Hello there, I am</h4>
            <h1>IFEANYI</h1>
            <p>
              I am very passionate about Web Development with a demonstrated
              history of implementing programming knowledge and skills in the
              software industry. To solve programming problems, I employ my
              skills in HTML, CSS, JavaScript, React, Typescript, SQL and PHP.{" "}
            </p>
            <p>
              Given any team, I try my best to be a valuable member of that
              team, and also, promote a team working spirit amongst colleagues
              to maximize productivity.
            </p>
            <p>
              I look forward to continuos learning while implementing new
              technologies and simultaneously boosting my relevance in any given
              work space.
            </p>
            <div className="contact-me-download-resume">
              <h4>
                Download Resume <img src={downloadIcon} alt="" />
              </h4>
            </div>
          </div>
          <div className="display-picture">
            <figure>
              <img
                src={displayPicture}
                alt="Ifeanyi's Portrait"
                className="my-picture"
              />
            </figure>
          </div>
        </div>
      </section>
      <div className="social-handles">
        <figure>
          <a
            href="mailto: theonyekagroup@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Email} alt="Email Logo" />
          </a>
          <figcaption>Email</figcaption>
        </figure>
        <figure>
          <a
            href="https://github.com/I-am-ifeanyi?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github Logo" />
          </a>
          <figcaption>Github</figcaption>
        </figure>
        <figure>
          <a
            href="https://www.linkedin.com/in/ifeanyi-onyeka/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          <figcaption>LinkedIn</figcaption>
        </figure>
        <figure>
          <a
            href="https://twitter.com/ifeanyi_onyeka"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="Twitter Logo" />
          </a>
          <figcaption>Twitter</figcaption>
        </figure>
        <figure>
          <a
            href="https://api.whatsapp.com/send?phone=2348063611278"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WhatsApp} alt="WhatsApp Logo" />
          </a>
          <figcaption>whatsapp</figcaption>
        </figure>
      </div>
      <section className="my-services">
        <div className="services-option">
          <div className="primary-service">
            <div className="service-details">
              <img src={webIcon} alt="" style={style} />
              <div className="details">
                <h1>Web Development</h1>
                <p>
                  I care deeply about creating world-class, useful, and
                  beautiful products that help people and make a difference. I
                  can be as involved in your project as you need me to be; from
                  the seed of the idea, to sketches, creative direction, design,
                  copywriting, system design, front-end and to a limited extent,
                  the backend.
                </p>
              </div>
            </div>
          </div>
          <div className="primary-service">
            <div className="service-details">
              <img src={code} alt="" style={style} />
              <div className="details">
                <h1>App Development</h1>
                <p>
                  I have an assemble of experienced mobile app developers who
                  has demonstrated a track record of success creating apps that
                  are both well-received and commercially viable. Skilled with
                  working as a team and incorporating input into projects.
                  Ability to always look for ways to improve upon an already
                  existing app to keep people downloading it and enjoying it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-option">
          <h1>About my awesome services</h1>
          <iframe
            src="https://www.youtube.com/embed/xiNW9-Pwqq8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="video"
            style={videoStyle}
          />
        </div>
      </section>

      <h1 className="caseStudies">Sample Projects</h1>
      {apiInfo}
    </main>
  );
}