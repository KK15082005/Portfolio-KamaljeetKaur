import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './BrandIcons';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Content */}
        <div className="hero-content">
          
          {/* Eyebrow Label */}
          <div className="hero-badge">
            <span className="hero-badge-text">Full Stack Developer & SDE Candidate</span>
          </div>

          {/* Exact Headline */}
          <h1 className="hero-title">
            I build web products that solve <span className="name-gradient">real problems.</span>
          </h1>

          {/* Exact Supporting Paragraph */}
          <p className="hero-subtitle">
            I'm Kamaljeet Kaur, a Computer Science Engineering student and Full Stack Developer Intern at VenueBook. I work across frontend interfaces, backend APIs and databases, and I'm interested in building reliable software and AI-powered applications that solve practical problems.
          </p>

          {/* Two Prominent Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </a>
            
            <a 
              href={personalInfo.resumeUrl} 
              download 
              className="btn btn-secondary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileDown size={16} />
              <span>View Résumé</span>
            </a>
          </div>

          {/* Understated Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href={personalInfo.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

        </div>

        {/* Right Column: Clean Portrait */}
        <div className="hero-visual">
          <div className="portrait-container">
            
            {/* Elegant Portrait Frame */}
            <div className="portrait-frame">
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Full Stack Developer Intern at VenueBook`} 
                className="portrait-img"
                fetchPriority="high"
              />
              <div className="portrait-gradient-overlay"></div>

              {/* Tasteful Role Caption */}
              <div className="portrait-floating-card">
                <div className="floating-card-body">
                  <span className="floating-card-tag">CURRENT ROLE</span>
                  <span className="floating-card-text">Full Stack Intern @ VenueBook</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Clean Statistics Row */}
      <div className="container hero-stats-container">
        <div className="stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
