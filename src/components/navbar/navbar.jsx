import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { PiAlienBold } from "react-icons/pi";

const Navbar = () => {
  const navbarRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const [textColor, setTextColor] = useState("#fff");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

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
      setIsVisible(true);

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      updateTextColor();
    };

    const handleNavbarMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      navbar.style.setProperty("--x", `${e.clientX - rect.left}px`);
      navbar.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    const handleGlobalMouseMove = (e) => {
      if (window.innerHeight - e.clientY < 120) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleGlobalMouseMove);
    navbar.addEventListener("mousemove", handleNavbarMouseMove);

    updateTextColor();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      navbar.removeEventListener("mousemove", handleNavbarMouseMove);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`navbar ${isVisible ? "visible" : "hidden"}`}
      style={{ "--nav-text-color": textColor }}
    >
      <h1>
        <PiAlienBold />
      </h1>

      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#socials">Socials</a>
        </li>
      </ul>

      <div className="nav-connect">
        <a
          href={`${import.meta.env.BASE_URL}resume/Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get my resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
