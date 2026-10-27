import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  Award, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './BrandIcons';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Content */}
        <div className="hero-content">
          
          {/* Top Pill */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Full Stack Developer & SDE Candidate</span>
            <span className="hero-badge-tag">MERN + Java</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            <br />
            Architecting Scalable Full-Stack & AI Systems.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Founding Engineering Team Intern at <strong className="text-highlight">VenueBook</strong> • 
            Java DSA Teaching Assistant • Microsoft Imagine Cup '26 Participant. 
            Transforming product ideation into high-performance full-stack architectures.
          </p>

          {/* Key Quick Highlights */}
          <div className="hero-bullets">
            <div className="hero-bullet">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Full-Stack MERN & Microservices</span>
            </div>
            <div className="hero-bullet">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>100+ DSA Problems Solved in Java</span>
            </div>
            <div className="hero-bullet">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>AI Integration (Gemini API & Azure)</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <ArrowRight size={18} />
            </a>
            
            <a 
              href={personalInfo.resumeUrl} 
              download 
              className="btn btn-secondary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Socials */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={personalInfo.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

        </div>

        {/* Right Column: Profile & Floating Tech Badges */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            
            {/* Glowing Ring Background */}
            <div className="profile-glow-ring"></div>

            {/* Profile Image Container */}
            <div className="profile-image-frame">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="profile-img"
              />
              <div className="profile-overlay-gradient"></div>

              {/* Status Floating Chip */}
              <div className="profile-status-card">
                <div className="status-avatar-dot"></div>
                <div>
                  <div className="status-title">Current Role</div>
                  <div className="status-desc">Full Stack Intern @ VenueBook</div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top-left">
              <Terminal size={18} className="text-cyan" />
              <span>Java DSA Specialist</span>
            </div>

            <div className="floating-badge badge-bottom-right">
              <Cpu size={18} className="text-indigo" />
              <span>PrepPilot-AI Creator</span>
            </div>

            <div className="floating-badge badge-top-right">
              <Layers size={18} className="text-emerald" />
              <span>MERN Stack</span>
            </div>

          </div>
        </div>

      </div>

      {/* Stats Counter Ribbon */}
      <div className="container hero-stats-container">
        <div className="stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-number text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
