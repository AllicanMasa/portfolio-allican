import React from "react";
import "./projects.css";

const images = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-top">
        <h1>College Projects</h1>
        <p>
          Here are some of my college projects. I discovered my passion for
          UI/UX design in my first year and have been using Figma ever since.
          Later, I expanded into web development — starting with PHP (where I
          built my first website while collaborating closely with the lead
          programmer), then exploring C#, and eventually diving deeper into
          Python.
        </p>
      </div>
      <div className="ticker-wrapper">
        <div className="ticker">
          {images.map((src, i) => (
            <div className="image-card" key={i}>
              <img src={src} alt={`Project ${i + 1}`} loading="lazy" />
            </div>
          ))}
          {images.map((src, i) => (
            <div className="image-card" key={i + images.length}>
              <img src={src} alt={`Project ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="projects-bottom">
        <p>
          These projects reflect my growth as a designer and developer—from
          focusing on visual design to building functional, user-centered
          systems. Each project taught me how to think critically, collaborate
          effectively, and turn ideas into working solutions. They laid the
          foundation for the real-world projects I build today.
        </p>
      </div>
    </section>
  );
};

export default Projects;
