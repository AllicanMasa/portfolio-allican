import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./header.css";

const Greetings = [
  "Hello, welcome to my website!",              
  "Bonjour, bienvenue sur mon site Web !",      
  "Hola, ¡bienvenido a mi sitio web!",
  "こんにちは、私のウェブサイトへようこそ！",
  "안녕하세요, 제 웹사이트에 오신 것을 환영합니다!",
  "Ciao, benvenuto sul mio sito web!",
  "Hallo, willkommen auf meiner Website!",
  "你好，欢迎来到我的网站！",
  "Kamusta, welcome sa aking website!",
  "Здравствуйте, добро пожаловать на мой сайт!",
];

const Header = () => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState("day");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) setTimeOfDay("day");
    else setTimeOfDay("night");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % Greetings.length;

      // Morph animation simulation
      gsap.to(textRef.current, {
        duration: 0.6,
        scale: 0.85,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          textRef.current.innerText = Greetings[nextIndex];
          gsap.fromTo(
            textRef.current,
            { scale: 1.15, opacity: 0 },
            { duration: 0.8, scale: 1, opacity: 1, ease: "power2.out" }
          );
          setIndex(nextIndex);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <header className={`header ${timeOfDay}`}>
      <div className="header-box">
        <h1 ref={textRef} className="morph-text">
          {Greetings[index]}
        </h1>
      </div>
    </header>
  );
};

export default Header;