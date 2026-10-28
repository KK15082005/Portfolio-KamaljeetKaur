import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Terminal, 
  HeartHandshake, 
  Rocket, 
  Code 
} from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: Terminal,
      title: "Algorithmic Problem Solving",
      desc: "Disciplined Java DSA foundation with 100+ solved problems across LeetCode and GFG, prioritizing optimal time and space complexity."
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      desc: "Developing responsive React user interfaces, performant Node.js/Express APIs, and structured MongoDB database models."
    },
    {
      icon: Rocket,
      title: "Production Ownership",
      desc: "Shipping features in an active startup environment at VenueBook, resolving production bugs and improving query efficiency."
    },
    {
      icon: HeartHandshake,
      title: "Technical Mentorship",
      desc: "Guiding 100+ junior engineers through algorithmic concepts, code walkthroughs, and interview problem-solving approaches."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-chip">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering with <span>Purpose & Precision</span>
          </h2>
          <p className="section-desc">
            Bridging strong algorithmic foundations with modern full-stack development to build dependable, user-focused products.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Image with Clean Modern Frame */}
          <div className="about-visual">
            <div className="about-frame">
              <img 
                src={personalInfo.aboutImage} 
                alt="Kamaljeet Kaur - Computer Science Student & Full Stack Developer" 
                className="about-image"
                loading="lazy"
                decoding="async"
              />
              <div className="about-badge-card">
                <GraduationCap size={22} className="text-cyan" />
                <div>
                  <div className="about-badge-title">B.Tech CSE (2023–27)</div>
                  <div className="about-badge-sub">Computer Science & Engineering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Principles */}
          <div className="about-content">
            <div className="bio-card glass-card">
              <h3 className="bio-title">Hello, I'm Kamaljeet Kaur</h3>
              <p className="bio-text">
                I'm a Computer Science Engineering student focused on building robust, responsive web applications and solving complex algorithmic challenges. My core strengths are in the <strong>MERN stack (React, Node.js, Express, MongoDB)</strong> and <strong>Data Structures & Algorithms in Java</strong>.
              </p>
              <p className="bio-text">
                As a <strong>Full Stack Developer Intern</strong> at <strong>VenueBook</strong>, I contribute to the core booking platform, develop RESTful microservices, and optimize MongoDB data queries. Alongside development, I serve as a <strong>DSA Teaching Assistant</strong>, mentoring 100+ students in algorithmic problem-solving and clean code practices.
              </p>
              <p className="bio-text">
                I am driven by practical engineering, readable architectures, and continuous technical growth. I am actively preparing for <strong>Software Development Engineer (SDE)</strong> and <strong>Full Stack Developer</strong> opportunities at product-driven technology companies.
              </p>

              {/* Quick Info Grid */}
              <div className="quick-info-grid">
                <div className="info-item">
                  <MapPin size={16} className="text-cyan" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <Briefcase size={16} className="text-cyan" />
                  <span>Full Stack Intern @ VenueBook</span>
                </div>
                <div className="info-item">
                  <GraduationCap size={16} className="text-cyan" />
                  <span>B.Tech CSE (2023–2027), DITM</span>
                </div>
                <div className="info-item">
                  <Mail size={16} className="text-cyan" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>

            {/* Principles Cards */}
            <div className="principles-grid">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="principle-card">
                    <div className="principle-icon-box">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="principle-title">{p.title}</h4>
                      <p className="principle-desc">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
