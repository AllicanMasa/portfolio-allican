import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./projects.css";

const projects = [
  {
    id: 1,
    title: "Capstone: Design Software & E-Commerce Platform with 3D Avatar",
    shortdesc: "Supported an e-commerce platform through system flowcharts, requirements gathering, and documentation.",
    description: "Contributed to an innovative e-commerce platform by creating detailed system flowcharts, supporting process planning, gathering requirements, and developing comprehensive documentation for potential implementation.",
    images: ["./images/7.png", "./images/8.png", "./images/9.png"],
  },
  {
    id: 2,
    title: "Gym Management System with Fitness Tracking & Reports",
    shortdesc: "Built a full-stack Gym Management System with membership, payment, and fitness tracking.",
    description: "Developed a full-stack Gym Management System with automated membership, payment tracking, fitness monitoring, and coach-managed workout plans, featuring responsive web and desktop interfaces, PHP/MySQL backend, automated reports, and comprehensive documentation.",
    images: ["./images/5.png", "./images/6.png"],
  },
  {
    id: 3,
    title: "Resort Reservation System with 360° View, PayPal Integration & Chatbot",
    shortdesc: "Built a full-stack Resort Booking System with online reservations and PayPal integration.",
    description: "Developed a full-stack Resort Booking System with user account management, facility reservations, automated receipts, PayPal integration, 360° virtual tours, a chatbot, and an admin dashboard, supported by technical planning and documentation.",
    images: ["./images/1.png", "./images/2.png", "./images/3.png", "./images/4.png"],
  },
  {
    id: 4,
    title: "Documentation: Technical User Manual",
    shortdesc: "Designed a technical user manual translating complex 3D apparel and e-commerce workflows into clear, user-friendly guides.",
    description: "Designed and structured a comprehensive technical user manual as a System Analyst, translating complex 3D apparel and e-commerce workflows into clear instructional modules, interface mappings, and user-centric guides to ensure seamless platform onboarding and system transparency.",
    images: ["./images/10.png"],
  },

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects">
      <div className="projects-intro">
        <h1>Projects & Experience</h1>
        <p>
          Here are some of my college projects. I started exploring web
          development early on, building my first PHP website while
          collaborating with the lead programmer. Over time, I gained experience
          in C# and Python, focusing on building functional systems, writing
          clear documentation, and creating simple, user-friendly interfaces
          where needed.
        </p>
      </div>
        <div className="card-wrapper">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
    </section>
  );
}
