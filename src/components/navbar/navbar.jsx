import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
    const navbar = navbarRef.current;

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navbar.style.setProperty("--x", `${x}px`);
      navbar.style.setProperty("--y", `${y}px`);
    };

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

    navbar.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", updateTextColor);
    updateTextColor();

    return () => {
      navbar.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", updateTextColor);
    };
  }, []);

  return (
    <div className="navbar" ref={navbarRef} style={{ color: textColor }}>
      <h1 style={{ color: textColor }}>GtKM!</h1>
      <ul className="navbar-menu">
        <li><a href="#home" style={{ color: textColor }}>Home</a></li>
        <li><a href="#about" style={{ color: textColor }}>About</a></li>
        <li><a href="#projects" style={{ color: textColor }}>Projects</a></li>
        <li><a href="#skills" style={{ color: textColor }}>Skills</a></li>
        <li><a href="#socials" style={{ color: textColor }}>Socials</a></li>
      </ul>
      <div className="nav-connect" style={{ color: textColor }}>
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;