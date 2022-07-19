import React from "react";
import displayPicture from "./images/dp.jpg" 
import downloadIcon from "./images/download-svgrepo-com.svg"; 

export default function HomePage() {
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
              <h4>Contact Me</h4>
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
      <div className="social-handles"></div>
    </main>
  );
}