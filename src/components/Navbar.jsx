import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  FileDown,
  Menu,
  X,
  Sparkles,
  Code2,
  Briefcase,
  User,
  FolderGit2,
  Send,
  Layers,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Theme Management (Default: Warm Editorial Light Theme, with Deep Charcoal Dark Theme option)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    const favicon = document.querySelector("link[rel*='icon']");
    if (favicon) {
      favicon.href = theme === 'dark' ? '/logo-dark.png' : '/logo-light.png';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Services', href: '#services', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand">
          <div className="brand-symbol">
            <img src="/logo-light.png" alt="Kamaljeet Kaur Logo" className="brand-logo-img logo-light" />
            <img src="/logo-dark.png" alt="Kamaljeet Kaur Logo" className="brand-logo-img logo-dark" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-sub">SDE • Full Stack</span>
          </div>
        </a>

        {/* Status indicator */}
        <div className="nav-status-pill">
          <span className="status-dot"></span>
          <span>Open to SDE Roles</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Theme Toggle & Resume) */}
        <div className="nav-actions">
          {/* Functional Theme Toggle */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href={personalInfo.resumeUrl}
            download
            className="btn btn-primary nav-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDown size={17} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-header">
            <span className="drawer-title">Navigation</span>
            <div className="mobile-drawer-actions">
              <button
                type="button"
                className="theme-toggle-btn mobile-drawer-theme-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button 
                type="button" 
                className="drawer-close" 
                onClick={() => setMobileMenuOpen(false)} 
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-drawer-footer">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
