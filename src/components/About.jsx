import React from 'react';
import MagicBento from './MagicBento';

const About = () => {
  return (
    <section className="about" id="diferenciais">
      <div className="section-head" style={{ marginBottom: '20px' }}>
        <div>
          <span className="tag">Por que a LF</span>
          <h2>Confiança que se vê no acabamento.</h2>
        </div>
      </div>
      <MagicBento 
        textAutoHide={false}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="184, 16, 42" // red color matching the theme
      />
    </section>
  );
};

export default About;
