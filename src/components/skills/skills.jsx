import React from "react";
import "./skills.css";
import CurvedLoop from "@/components/CurvedLoop";
import FlipCard from "@/components/skills/FlipCard";
import { MdDesignServices } from "react-icons/md";
import { FaLaptop, FaLaptopCode } from "react-icons/fa";
import { GoTools } from "react-icons/go";

const Skills = () => {
  const TechItem = ({ icon, label, alt }) => (
    <p>
      <img src={icon} alt={alt} />
      {label}
    </p>
  );

  const techIcons = {
    figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    affinity:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    photoshop:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    html:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    css:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    php:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    csharp:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    sql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    github:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    git:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    vscode:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    vs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
  };

  const designTech = [
    { icon: techIcons.figma, label: "Figma", alt: "Figma" },
    { icon: techIcons.affinity, label: "Affinity", alt: "Affinity" },
    { icon: techIcons.photoshop, label: "Adobe Photoshop", alt: "Photoshop" },
  ];

  const frontendTech = [
    { icon: techIcons.react, label: "React", alt: "React" },
    { icon: techIcons.html, label: "HTML", alt: "HTML" },
    { icon: techIcons.css, label: "CSS3", alt: "CSS3" },
    { icon: techIcons.javascript, label: "Javascript", alt: "Javascript" },
  ];

  const backendTech = [
    { icon: techIcons.python, label: "Python", alt: "Python" },
    { icon: techIcons.php, label: "PHP", alt: "PHP" },
    { icon: techIcons.csharp, label: "C#", alt: "C#" },
    { icon: techIcons.sql, label: "MySQL/MSSQL", alt: "SQL Databases" },
  ];

  const otherTech = [
    { icon: techIcons.github, label: "Github", alt: "Github" },
    { icon: techIcons.git, label: "Git", alt: "Git" },
    { icon: techIcons.vscode, label: "VS Code", alt: "vS Code" },
    { icon: techIcons.vs, label: "Visual Studio", alt: "Visual Studio" },
  ];

  return (
    <div className="skills">
      {/* intro */}
      <div className="skills-container">
        <section className="skill-intro">
          <h1>Experience</h1>
        </section>

        <section className="skill-description">
          <p>
            When developing a project, it’s important to understand how
            different skills work together, from creating the design to making
            sure everything functions properly behind the scenes.
          </p>
        </section>

        {/* skill cards*/}
        <div className="skills-content">
          <FlipCard icon={<MdDesignServices />} title="Design">
            <div className="tech-icon">
              {designTech.map((tech, index) => (
                <section className="haha" key={index}>
                  <TechItem
                    icon={tech.icon}
                    label={tech.label}
                    alt={tech.alt}
                  />
                </section>
              ))}
            </div>
          </FlipCard>

          <FlipCard icon={<FaLaptop />} title="Frontend">
            <div className="tech-icon">
              {frontendTech.map((tech, index) => (
                <section className="haha" key={index}>
                  <TechItem
                    icon={tech.icon}
                    label={tech.label}
                    alt={tech.alt}
                  />
                </section>
              ))}
            </div>
          </FlipCard>

          <FlipCard icon={<FaLaptopCode />} title="Backend">
            <div className="tech-icon">
              {backendTech.map((tech, index) => (
                <section className="haha" key={index}>
                  <TechItem
                    icon={tech.icon}
                    label={tech.label}
                    alt={tech.alt}
                  />
                </section>
              ))}
            </div>
          </FlipCard>

          <FlipCard icon={<GoTools />} title="Development Tools">
            <div className="tech-icon">
              {otherTech.map((tech, index) => (
                <section className="haha" key={index}>
                  <TechItem
                    icon={tech.icon}
                    label={tech.label}
                    alt={tech.alt}
                  />
                </section>
              ))}
            </div>
          </FlipCard>
        </div>
      </div>

      {/* curved loop */}
      <section className="curved-loop">
        <CurvedLoop
          marqueeText="Deep Dive ✦ and ✦ Know Me ✦ More! ✦"
          speed={4}
          curveAmount={200}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </section>
    </div>
  );
};

export default Skills;
