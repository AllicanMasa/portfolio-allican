import React from "react";
import "./about.css";
import portfolio from "../../assets/images/portfolio.png";

const About = () => {
  return (
    <section className="about">
      <div className="content">
        <div className="image-wrapper">
          <img src={portfolio} alt="Portfolio" />
        </div>
        <div className="text-box">
          <h1>Hi, I'm Allican</h1>
          <p>
            A BS Information Technology graduate with hands-on experience in
            UI/UX design, programming, and system analysis.
          </p>

          <ul>
            <li>🎓 BSIT graduate, Quezon City University (Batch 2025)</li>
            <li>
              🎨 UI/UX Designer since 2nd year, focused on usability and clean
              interfaces
            </li>
            <li>
              💻 Experience as Programmer, System Analyst, and Documentation
              Lead
            </li>
            <li>🔄 Involved in the full system development lifecycle</li>
            <li>
              📊 Led analysis and documentation for a 3-platform interconnected
              system
            </li>
          </ul>
        </div>
        <div className="mobile-version">
          <p>
            A BSIT graduate from Quezon City University (Batch 2025), working as
            a UI/UX Designer since second year with a focus on usability and
            clean interfaces, with experience as a Programmer, System Analyst,
            and Documentation Lead, actively involved in the full system
            development lifecycle, and leading analysis and documentation for a
            three-platform interconnected system.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
