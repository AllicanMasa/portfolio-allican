"use client";
import React from "react";
import Orb from "@/components/orb";
import "./header.css";

const Header = () => {
  return (
    <header className="header relative overflow-hidden min-h-screen">
      <div className="intro">
        <h1 className="intro-text">BUILD WITH ME</h1>
        <p>Design. Code. Ship.</p>
        <div className="resume">
          <a
            href={`${import.meta.env.BASE_URL}resume/Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
        </div>
        <div className="connect">
          <a href="#socials">Contact me</a>
        </div>
      </div>
      <div className="absolute inset-0">
        <Orb
          hue={10}
          hoverIntensity={0.7}
          rotateOnHover={true}
          forceHoverState={false}
          autorotate={true}
          backgroundColor="#000000"
        />
      </div>
    </header>
  );
};

export default Header;
