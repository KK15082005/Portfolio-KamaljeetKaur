import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  CheckCircle2,
  Terminal,
  Layers
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './BrandIcons';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: 55% Content */}
        <div className="hero-content">
          
          {/* Eyebrow Label */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Available for SDE & Full Stack Roles</span>
          </div>

          {/* Exact Headline: ~3 Lines on Desktop */}
          <h1 className="hero-title">
            Hi, I'm <span className="name-gradient">{personalInfo.name}</span>,<br />
            Full Stack Developer &<br />
            Aspiring Software Engineer.
          </h1>

          {/* Supporting Copy (2-3 lines on desktop) */}
          <p className="hero-subtitle">
            I build responsive full-stack applications with React, Node.js, and MongoDB, 
            backed by hands-on engineering internship experience and disciplined algorithmic problem solving in Java.
          </p>

          {/* Skills Bullets */}
          <div className="hero-bullets">
            <div className="hero-bullet">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>Full-Stack Development with React, Node.js & MongoDB</span>
            </div>
            <div className="hero-bullet">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>Algorithmic Problem Solving in Java (DSA)</span>
            </div>
            <div className="hero-bullet">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>RESTful API Development & Microservices Architecture</span>
            </div>
          </div>

          {/* Calls to Action */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
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
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Neatly Below CTAs */}
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

        {/* Right Column: 45% Portrait with Restrained Styling */}
        <div className="hero-visual">
          <div className="portrait-container">
            
            {/* Elegant Shaped Image Frame */}
            <div className="portrait-frame">
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Full Stack Developer & Aspiring Software Engineer`} 
                className="portrait-img"
                fetchPriority="high"
              />
              <div className="portrait-gradient-overlay"></div>

              {/* Floating Role Card on Profile Picture */}
              <div className="portrait-floating-card">
                <span className="floating-dot"></span>
                <div className="floating-card-body">
                  <span className="floating-card-tag">CURRENT ROLE</span>
                  <span className="floating-card-text">Full Stack Intern @ VenueBook</span>
                </div>
              </div>
            </div>

            {/* Exactly Two Compact Badges (Positioned cleanly without covering face) */}
            <div className="portrait-badge badge-top-right">
              <Layers size={14} className="text-cyan" />
              <span>MERN Stack</span>
            </div>

            <div className="portrait-badge badge-bottom-left">
              <Terminal size={14} className="text-cyan" />
              <span>Java DSA</span>
            </div>

          </div>
        </div>

      </div>

      {/* Clean Statistics Section Below Hero */}
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
