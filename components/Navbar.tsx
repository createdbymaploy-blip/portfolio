import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <nav className="floating-nav">
        <div className="nav-left">
          <img src="/assets/logo.png" alt="Logo" className="nav-logo-img" />
          <span className="nav-brand">maploy</span>
        </div>
        <div className="nav-center-links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#faq">faq</a>
        </div>
        <div className="nav-right-btn">
          <a href="#contact" className="ui-badge btn-nav-contact">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;