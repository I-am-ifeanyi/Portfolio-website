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
import resume from "./images/ifeanyi-resume.pdf";
import hamburger from "./images/hamburger.jpg";
import closeMenu from "./images/menu-close.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function HomePage() {

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
const style = {
  width: "50px",
  height: "50px"
}

const videoStyle = {
  width: '100%',
  height: '300px'

}

const [lightMode, setLightMode] = React.useState(true);
const [navBar, setNavBar] = React.useState(false);

const showNav = () => setNavBar((prev) => !prev);

const toggle = () => setLightMode((prev) => !prev); 

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
      demo={data.demo}
      lightMode={lightMode}
      
    />
    
  );
  
})




const toggleLight = {
  width: "50px",
  height: "20px",
  borderRadius: "30px",
  backgroundColor: "rgb(7, 7, 53)",
  margin: "10px",
  position: "fixed",
  right: "0"
}

const toggleDark = {
  width: "50px",
  height: "20px",
  borderRadius: "30px",
  backgroundColor: "white",
  margin: "10px",
  position: "fixed",
  right: "0",
};

const toggleLeft = {
  width: "30px",
  height: "19px",
  borderRadius: "30px",
  backgroundColor: "white",
}

const toggleRight = {
  width: "30px",
  height: "19px",
  borderRadius: "30px",
  backgroundColor: "rgb(7, 7, 53)",
  float: "right",
};

const changeLight = {
  backgroundColor: "#E5E5E5",
  width: "100%",
  height: "auto"
  
}

const changeDark = {
  backgroundColor: "#121212",
  width: "100%",
  height: "auto",
  color: 'white',
};




  return (
    <main className="main-body" style={lightMode ? changeLight : changeDark}>
      <header>
        <div onClick={toggle} style={lightMode ? toggleLight : toggleDark}>
          <div style={lightMode ? toggleLeft : toggleRight}></div>
        </div>
        <img
          src={navBar ? closeMenu : hamburger}
          alt=""
          className="hamburger"
          onClick={showNav}
        />
      </header>

      <nav className={navBar ? "navBar" : "navBar2"}>
        <img src="cover.png" alt="TOG Official Logo" className="tog-logo" />
        <ul className="navigators">
          <li>
            <a href={<HomePage />}>Home</a>
          </li>
          <li>
            <a href="#brief-bio" onClick={showNav}>
              About
            </a>
          </li>
          <li>
            <a href="#my-projects" onClick={showNav}>
              Work
            </a>
          </li>
          <li>
            <a href="#my-contacts" onClick={showNav}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>

      <section className="introduction">
        <div className="biography-section">
          <div
            className="brief-bio"
            id="brief-bio"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
            <div className="my-stack">
              <div></div>
              <h3>MY STACK</h3>
              <div></div>
            </div>
            <div className="stack-images">
              <img
                src="https://www.svgrepo.com/show/303500/react-1-logo.svg"
                alt=""
              />
              <img
                src="https://w7.pngwing.com/pngs/286/519/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-azure-sql-data-warehouse-logo-text-logo-microsoft-azure.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                alt=""
              />

              <img
                src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"
                alt=""
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNlIpuOHHIQyGK5ken1X3hO4kDoUe0n2SCmqpmf9I0ThNz1aaSafx_Fc9zPCntXs6bZU&usqp=CAU"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png
"
                alt=""
              />
            </div>
            <div className="contact-me-download-resume">
              <h4>
                <a href={resume} download={resume}>
                  Download Resume <img src={downloadIcon} alt="" />
                </a>
              </h4>
            </div>
          </div>
          <div
            className="display-picture"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
      <div id="my-contacts"></div>
      <div
        className={lightMode ? "social-handles" : "social-handles2"}
        data-aos="flip-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
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
          <div className={lightMode ? "primary-service" : "primary-service2"}>
            <div className={lightMode ? "service-details" : "service-details2"}>
              <img src={webIcon} alt="" style={style} />
              <div
                className="details"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
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
          <div className={lightMode ? "primary-service" : "primary-service2"}>
            <div className={lightMode ? "service-details" : "service-details2"}>
              <img src={code} alt="" style={style} />
              <div
                className="details"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
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
        <div
          className="services-option"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1>Introduction</h1>
          <iframe
            src="https://www.youtube.com/embed/1KJfVGpNRnM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
            style={videoStyle}
          />
        </div>
      </section>

      <h1
        className="caseStudies"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Sample Projects
      </h1>
      {apiInfo}
      <footer className={lightMode ? "foot" : "footy"}>
        <h5>
          Find an issue with this page? &nbsp;
          <a href="https://github.com/I-am-ifeanyi/Portfolio-website.git">
            feel free to fix it on Github
          </a>
        </h5>
        <h5>Copyright &copy; 2022. All rights reserved.</h5>
        <h4>
          Created with React by
          <a href="https://www.linkedin.com/in/ifeanyi-onyeka/"> Ifeanyi</a>
        </h4>
      </footer>
    </main>
  );
}