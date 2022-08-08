import React from "react";
import Github from "./images/Github.webp";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Projects({name, description1, description2, stack1, stack2, stack3, image, source, demo, lightMode}) {

  return (
    <section className="my-projects" id="my-projects">
      <div className="my-project-details">
        <figure className="project-pictures">
          <img src={image} alt="Project Pictures" />
        </figure>
        <aside
          className={lightMode ? "setAside" : "setAside2"}
          data-aos="fade-up-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1>{name}</h1>
          <p>{description1}</p>
          <p>{description2}</p>
          <div className="stacks">
            <h4>{stack1}</h4>
            <h4>{stack2}</h4>
            <h4>{stack3}</h4>
          </div>
          <h4>
            <img src={Github} alt="Github Logo" />
            <a href={source} target="_blank" rel="noreferrer">
              Source Code
            </a>
            <a href={demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </h4>
        </aside>
      </div>
    </section>
  );
}