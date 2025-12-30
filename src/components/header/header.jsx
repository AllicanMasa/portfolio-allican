'use client';
import React from "react";
import gsap from "gsap";
import Orb from "@/components/orb";
import "./header.css";

const Header = () => {
  return (
    <header className="header relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Orb
          hue={10}
          hoverIntensity={0.7}
          rotateOnHover={true}
          forceHoverState={false}
          autorotate={true}
          backgroundColor="#000000"
        />
      </div>

      <div className="header-box relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="morph-text text-center text-4xl md:text-6xl font-bold text-white pointer-events-allow">
          BWISET NA REACT 'TO
        </h1>
      </div>
    </header>
  );
};

export default Header;