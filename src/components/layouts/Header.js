import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      // const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
      
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.padding = '';
        header.style.boxShadow = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    // sessionStorage\uc5d0 \uc2a4\ud06c\ub864 \uc704\uce58\ub97c 0\uc73c\ub85c \uc800\uc7a5\ud558\uc5ec \uc0c8\ub85c\uace0\uce68 \ud6c4\uc5d0\ub3c4 \ucd5c\uc0c1\ub2e8\uc73c\ub85c \uc774\ub3d9\n    sessionStorage.setItem('scrollPosition', '0');
    window.location.href = '/';
  };

  return (
    <header>
      <div className="container header-container">
        <a href="/" className="logo" onClick={handleHomeClick}>
          <img src="./images/logo/2x/SignColor@2x.png" alt="PTAH LABS" className="logo-image" />
          PTAHLABS
        </a>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className={`nav-link ${activeSection === '' ? 'active' : ''}`} onClick={handleHomeClick}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={closeMenu}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#ci" className={`nav-link ${activeSection === 'ci' ? 'active' : ''}`} onClick={closeMenu}>CI</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;