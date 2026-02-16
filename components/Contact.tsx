import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="cta-section">
      {/* Static Stars Background */}
      <div className="cta-star"></div>
      <div className="cta-star"></div>
      <div className="cta-star"></div>
      <div className="cta-star"></div>
      <div className="cta-star"></div>
      <div className="cta-star"></div>
      <div className="cta-star"></div>

      <div className="cta-container">
        <div className="ui-badge">
          <span className="badge-dot" style={{ color: '#4ade80' }}>•</span> available for work
        </div>
        <h2 className="cta-title">
          you have the vision. i have the tools.<br/>
          <em>ready to build something iconic together?</em>
        </h2>
        <div className="cta-actions">
          <a href="https://t.me/maploy" target="_blank" rel="noreferrer" className="btn-raycast">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            telegram
          </a>
          <a href="https://x.com/maploy_yo" target="_blank" rel="noreferrer" className="btn-raycast">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.662L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" fill="black"/>
            </svg>
            twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;