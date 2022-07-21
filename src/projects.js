import React from "react";
import Github from "./images/Github.png";

export default function Projects({name, description1, description2, stack1, stack2, stack3, image, source}) {
  return (
    <section className="my-projects">
      <div className="my-project-details">
        <figure className="project-pictures">
          <img src={image} alt="Project Pictures"/>
        </figure>
        <aside>
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
            <a href={source} target="_blank">Source Code</a>
          </h4>
        </aside>
      </div>
    </section>
  );
}