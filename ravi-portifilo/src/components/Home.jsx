import React,{useCallback,useEffect,useState} from "react";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains("dark"));

  useEffect(() => {
    const text = "Asspiring Full-Stack Developer Powered by AI/ML.";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypingText(prev => prev + text.charAt(i));
        i++;
      } else clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Optional: Watch for dark mode changes dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Initialize tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

// Particle options
  const particleOptions = {
    // fullScreen: { enable: true, zIndex: 1 },
    particles: {
      number: { value: 50, density: { enable: true } },
      color: { value: isDarkMode ? "#58a6ff" : "#0366d6" }, // change dynamically later if needed
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      links: {
        enable: true,
        distance: 150,
        color: isDarkMode ? "#dddedeff" : "#30363d",
        opacity: 0.9,
        width: 0.1
      },
      move: { enable: true, speed: 2, direction: "none", straight: false }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 150, links: { opacity: 1 } },
        push: { quantity: 1 },
      },
    },
    retina_detect: true
  };

  return (
    <header id="home" className="hero">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
      <div className="hero-content">
        <h1 className="reveal name-animation">RAVI TEJA LAGADAPATI</h1>
        <p className="tagline">
          <span id="typing-animation">{typingText}</span>
        </p>
        <div className="hero-social-links reveal">
          <a
            href="https://www.linkedin.com/in/ravi-l-70b894322/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/leonrock128" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://leetcode.com/u/L_Ravi/" target="_blank">
            <i className="fas fa-code"></i>
          </a>
          <a href="https://web.telegram.org/a/" target="_blank">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
      <div className="ml-symbol">
        <i className="fas fa-brain"></i>
      </div>
    </header>
  );
};

export default Home;
