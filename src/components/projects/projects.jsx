import React from "react";
import "./projects.css";

const images = ["./images/1.png", "./images/2.png", "./images/3.png", "./images/4.png"];

const Projects = () => {
  // duplicate images for seamless looping
  const scrollingImages = [...images, ...images];

  return (
    <section className="projects">
      <h1>Projects Pictures</h1>
      <p>Some screenshots from my projects</p>

      <div className="ticker-wrapper">
        <div className="ticker">
          {scrollingImages.map((src, index) => (
            <div className="image-card" key={index}>
              <img src={src} alt={`Project ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;