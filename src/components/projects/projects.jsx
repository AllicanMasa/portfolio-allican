import React, { useState, useEffect } from "react";
import "./projects.css";

const data = [
  {
    title: "Capstone: Design Software & E-Commerce Platform with 3D Avatar",
    images: [
      "@/../images/7.png",
      "@/../images/8.png",
      "@/../images/9.png",
    ],
    details:
      "Contributed to an innovative e-commerce platform by creating detailed system flowcharts, supporting process planning, gathering requirements, and developing comprehensive documentation for potential implementation.",
  },
  {
    title: "Gym Management System with Fitness Tracking & Reports",
    images: ["@/../images/5.png", "@/../images/6.png"],
    details:
      "Developed a full-stack Gym Management System with automated membership, payment tracking, fitness monitoring, and coach-managed workout plans, featuring responsive web and desktop interfaces, PHP/MySQL backend, automated reports, and comprehensive documentation.",
  },
  {
    title:
      "Resort Reservation System with 360° View, PayPal Integration & Chatbot",
    images: [
      "@/../images/1.png",
      "@/../images/2.png",
      "@/../images/3.png",
      "@/../images/4.png",
    ],
    details:
      "Developed a full-stack Resort Booking System with user account management, facility reservations, automated receipts, PayPal integration, 360° virtual tours, a chatbot, and an admin dashboard, supported by technical planning and documentation.",
  },
];

export default function Projects() {
  const [cardIndex, setCardIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) =>
        prev === data[cardIndex].images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cardIndex]);

  const prevSlide = () => {
    setCardIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    setImageIndex(0);
  };

  const nextSlide = () => {
    setCardIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    setImageIndex(0);
  };

  return (
    <section className="projects">
      <div className="projects-intro">
        <h1>College Projects</h1>
        <p>
          Here are some of my college projects. I started exploring web
          development early on, building my first PHP website while
          collaborating with the lead programmer. Over time, I gained experience
          in C# and Python, focusing on building functional systems, writing
          clear documentation, and creating simple, user-friendly interfaces
          where needed.
        </p>
      </div>
      <div className="carousel-container">
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="card">
          <div className="card-title">{data[cardIndex].title}</div>

          <div className="card-image">
            <img
              src={data[cardIndex].images[imageIndex]}
              alt={data[cardIndex].title}
            />
          </div>

          <div className="card-details">{data[cardIndex].details}</div>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === cardIndex ? "active" : ""}`}
            onClick={() => {
              setCardIndex(i);
              setImageIndex(0);
            }}
          />
        ))}
      </div>
    </section>
  );
}
