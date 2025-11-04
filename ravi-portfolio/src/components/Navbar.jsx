import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [clickCount, setClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [tempBg, setTempBg] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const clickTimeoutRef = useRef(null);

  // Scroll & window resize
  useEffect(() => {
    document.body.classList.add('dark');

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledRatio = window.scrollY / (scrollableHeight || 1);
      const bar = document.querySelector('.scroll-progress-bar');
      if (bar) bar.style.transform = `scaleX(${scrolledRatio})`;
    };
    window.addEventListener('scroll', onScroll);

    const updateDimensions = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Theme toggle
  useEffect(() => {
    const btnIcon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      btnIcon?.classList.replace('fa-moon', 'fa-sun');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      btnIcon?.classList.replace('fa-sun', 'fa-moon');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  // Logo click handler (Easter Egg)
  const handleLogoClick = (e) => {
    e.preventDefault();

    setClickCount(prev => {
      const newCount = prev + 1;

      if (newCount === 2) {
        // Confetti
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);

        // Toast message
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2500);

        // Temporary background
        setTempBg(true);
        setTimeout(() => setTempBg(false), 2000);

        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        return 0; // reset click count
      }

      // Reset click count if idle
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = setTimeout(() => setClickCount(0), 1000);

      return newCount;
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="nav-logo" onClick={handleLogoClick}>
            RTL
          </a>

          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button onClick={toggleTheme} id="theme-toggle" className="theme-toggle-btn" aria-label="Toggle theme">
                <i className="fas fa-sun"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Confetti */}
      {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={150} gravity={0.3} />}

      {/* Floating Toast Message */}
      {showMessage && <div className="toast-message">🎉 You found the Easter Egg! 🎉</div>}

      {/* Temporary Background Overlay */}
      {tempBg && <div className="temp-bg-overlay" />}

      <div className="scroll-progress-bar"></div>

      {/* Floating message animation */}
      <style>{`@keyframes floatUp {
        0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        50% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
      }`}</style>
    </>
  );
};

export default Navbar;
