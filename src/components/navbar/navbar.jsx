import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
    const navbar = navbarRef.current;

    const updateTextColor = () => {
      const sections = document.querySelectorAll("section");
      const navbarY = navbar.getBoundingClientRect().bottom;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarY && rect.bottom >= navbarY) {
          const theme = section.getAttribute("data-theme");
          setTextColor(theme === "light" ? "#000" : "#fff");
        }
      });
    };

    const handleScroll = () => {
      if (window.scrollY > 10) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");

      updateTextColor();
    };

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navbar.style.setProperty("--x", `${x}px`);
      navbar.style.setProperty("--y", `${y}px`);
    };

    // Add listeners
    window.addEventListener("scroll", handleScroll);
    navbar.addEventListener("mousemove", handleMouseMove);
    updateTextColor();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navbar.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="navbar"
      ref={navbarRef}
      style={{ "--nav-text-color": textColor }}
    >
      <h1>GtKM!</h1>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#socials">Socials</a></li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
