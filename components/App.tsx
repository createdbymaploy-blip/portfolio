import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import FAQ from './FAQ';
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Background blobs */}
      <div className="aurora-background">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
        <div className="aurora-overlay"></div>
      </div>

      <Navbar />
      
      {/* Main Content */}
      <Hero />
      
      <div className="main-content">
        <About />
        <Portfolio />
        <FAQ />
        <Contact />
        
        <footer className="simple-footer">
            <p className="copyright">© {new Date().getFullYear()} bulat cherry & maploy</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
