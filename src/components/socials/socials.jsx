import React from "react";
import "./socials.css";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <section className="socials-title">
        <h1>Let’s build something meaningful together!</h1>
        <p>Feel free to reach out — I’m always open to new ideas, collaborations, or just a quick hello.</p>
      </section>
      <div className="contents">
      <div className="social-card">
        <a href="https://www.linkedin.com/in/karl-allican-masa/">
          <h1>
            <FaLinkedin />
          </h1>
          <h2>LinkedIn</h2>
        </a>
      </div>

      <div className="social-card">
        <a href="mailto:masa.karlallican.02252002@gmail.com">
          <h1>
            <SiGmail />
          </h1>
          <h2>Gmail</h2>
        </a>
      </div>

      <div className="social-card">
        <a href="https://github.com/AllicanMasa">
          <h1>
            <FaGithub />
          </h1>
          <h2>GitHub</h2>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Socials;
