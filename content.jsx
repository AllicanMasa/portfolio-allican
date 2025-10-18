import React from "react";
import "./content.css";
import portfolio from "../../assets/portfolio.png";

const Content = () => {
  return (
    <div className="content">
      <div className="glass-box">
        <img src={portfolio} alt="Portfolio" />
        <div className="text-box">
          <h1>Who is me? haha</h1>
          <p>
            Hello! I’m Karl Allican, a graduate of Bachelor of Science in
            Information Technology from Quezon City University, Batch 2025.
            Although I’m a fresh graduate, I started gaining experience in
            UI/UX design as early as my second year in college, creating
            user-friendly interfaces and improving system usability for academic
            projects. Over time, I also took on roles such as Programmer, System
            Analyst, and Documentation Lead, which allowed me to explore the
            full process of system development — from planning and analysis to
            design, implementation, and documentation. In my third year, I
            served as the Programmer and UI/UX Designer for a major project,
            where I was responsible for both coding and designing an engaging
            interface for users. By my fourth year, I transitioned into the role
            of System Analyst and Documentation Lead, where I created detailed
            flowcharts and technical documentation for a system composed of
            three interconnected platforms. Through these experiences, I learned
            how to analyze user needs, design intuitive interfaces, plan
            efficient workflows, and collaborate effectively with a team. I also
            developed strong problem-solving skills and a passion for creating
            digital solutions that combine functionality with good design.
          </p>
          <div className="content-action">
            <div className="content-connect">Connect with me</div>
            <div className="content-resume">My Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
