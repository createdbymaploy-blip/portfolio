import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Maska', views: '200k+ views', img: '/assets/project1.png', icon: '/assets/icon1.png' },
    { title: 'Maska', views: '90k+ views', img: '/assets/project2.png', icon: '/assets/icon1.png' },
    { title: 'Maska', views: '25k+ views', img: '/assets/project3.png', icon: '/assets/icon1.png' },
    { title: 'Pasha FOCUS', views: '8k+ subs', img: '/assets/project4.jpg', icon: '/assets/icon2.png' },
    { title: 'maploy', views: '1.2k+ subs', img: '/assets/project5.png', icon: '/assets/icon3.png' },
    { title: 'maploy', views: '1.2k+ subs', img: '/assets/project6.png', icon: '/assets/icon3.png' },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header-wrapper">
          <div className="ui-badge">
            <span className="badge-dot">•</span> portfolio
          </div>
          <h2 className="section-title-large">
            selected<br />
            <em>projects</em>
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a href="#" className="project-card" key={i}>
              <div className="card-image-wrapper">
                <img src={p.img} alt={p.title} />
                <div className="play-icon-overlay">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="card-details-row">
                <div className="channel-left">
                  <div className="channel-avatar">
                    <img src={p.icon} alt={p.title} />
                  </div>
                  <h3 className="channel-name">{p.title}</h3>
                </div>
                <div className="views-right">
                  <span className="views-count">{p.views}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;