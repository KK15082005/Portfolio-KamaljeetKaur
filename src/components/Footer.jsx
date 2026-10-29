import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowUp,
  Heart,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">

        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-symbol">
              <img src="/logo.png" alt="Kamaljeet Kaur Logo" className="brand-logo-img" />
            </div>
            <div>
              <span className="footer-brand-name">{personalInfo.name}</span>
              <p className="footer-brand-sub">Full Stack Developer & SDE Candidate</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Modern Web Standards.
          </p>

          <div className="footer-socials">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
