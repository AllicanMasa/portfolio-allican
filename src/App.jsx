import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Socials from "./components/socials/socials";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" data-theme="dark">
        <Header />
      </section>

      <section id="about" data-theme="dark">
        <About />
      </section>

      <section id="projects" data-theme="dark">
        <Projects />
      </section>

      <section id="skills" data-theme="dark">
        <Skills />
      </section>

      <section id="socials" data-theme="dark">
        <Socials />
      </section>
    </div>
  );
};

export default App;
