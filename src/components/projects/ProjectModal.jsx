import React from 'react'
import "./projects.css";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="close" onClick={onClose}>✕</button>

        <div className="modal-images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>

        <div className="modal-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}