import React from "react";
import "./projects.css";

export default function ProjectCard({ project, onView }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={project.images[0]} alt={project.title} />
      </div>

      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.shortdesc}</p>
      </div>
      <div className="modal-button">
          <button onClick={onView}>Read more</button>
        </div>
    </div>
  );
}
