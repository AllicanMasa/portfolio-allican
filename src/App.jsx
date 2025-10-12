import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Content from "./components/content/content";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" data-theme="light">
        <Header />
      </section>

      <section id="content" data-theme="dark">
        <Content />
      </section>

      <section id="about" data-theme="light">
        <About />
      </section>

      <section id="projects" data-theme="dark">
        <Projects />
      </section>

      <section id="contact" data-theme="light">
        <Contact />
      </section>
    </div>
  );
};

export default App;