import React from 'react';

const Hero: React.FC = () => {
  // Using absolute paths from the root /assets folder
  // This is the most reliable way if assets are served statically
  const marqueeImages = [
    "/assets/preview1_1.gif",
    "/assets/preview2_1.gif",
    "/assets/preview3_1.gif",
    "/assets/preview4_1.gif",
    "/assets/preview5_1.gif",
    "/assets/preview6_1.gif",
    "/assets/preview7_1.gif",
    "/assets/preview8_1.gif",
    "/assets/preview9_1.gif",
  ];

  // Repeat for smooth scroll
  const marqueeItems = [...marqueeImages, ...marqueeImages];

  return (
    <section id="home" className="home-section">
      <div className="queen-layer">
        {/* Absolute path to Queen.png */}
        <img 
          src="/assets/Queen.png" 
          alt="Chess Queen" 
          className="floating-queen"
        />
      </div>
      
      <div className="content-layer">
        <h1 className="home-title">
          frame by frame <br />
          <em>story by story</em>
        </h1>
        <p className="home-subtitle">
          i specialize in designing powerful visual narratives<br />
          that help creators strengthen their brand.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-raycast">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3H3V10H10V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3H14V10H21V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 14H14V21H21V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14H3V21H10V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            projects
          </a>
          <a href="#contact" className="btn-raycast">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            contact
          </a>
        </div> 
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((src, index) => (
            <div className="marquee-item" key={index}>
              <img src={src} alt={`preview ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;