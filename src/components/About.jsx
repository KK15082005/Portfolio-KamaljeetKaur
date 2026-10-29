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
            Engineering with <span>Purpose & Discipline</span>
          </h2>
          <p className="section-desc">
            Bridging strong software engineering foundations with practical full-stack development to build dependable web applications.
          </p>
        </div>

        {/* TOP ROW: Balanced Two-Column Intro (Photo & Bio) */}
        <div className="about-grid">
          
          {/* Left Column: Image & Highlights */}
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

            {/* Quick credentials strip under photo */}
            <div className="about-visual-highlights">
              <div className="visual-highlight-chip">
                <span className="highlight-dot"></span>
                <span>Full Stack Intern @ VenueBook</span>
              </div>
              <div className="visual-highlight-chip">
                <span className="highlight-dot"></span>
                <span>DSA Teaching Assistant (Java)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Quick Info */}
          <div className="about-content">
            <div className="bio-card glass-card">
              <h3 className="bio-title">Hello, I'm Kamaljeet Kaur</h3>
              <p className="bio-text">
                I'm a Computer Science Engineering student graduating in 2027, with hands-on experience in full-stack development and building web applications. During my internship at VenueBook, I've worked on frontend improvements, backend integration, APIs and database-related tasks.
              </p>
              <p className="bio-text">
                Alongside my internship, I'm building PrepPilot AI, an AI-powered interview preparation platform, and strengthening my problem-solving and software engineering fundamentals. I enjoy understanding how applications work end to end, from the user interface to the database, and continuously improving through practical development.
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
          </div>

        </div>

        {/* BOTTOM ROW: Full-Width 4-Pillar Grid */}
        <div className="about-principles-section">
          <div className="principles-section-header">
            <span className="principles-tag">CORE ENGINEERING PILLARS</span>
          </div>

          <div className="principles-grid">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="principle-card glass-card">
                  <div className="principle-icon-box">
                    <Icon size={18} />
                  </div>
                  <div className="principle-content">
                    <h4 className="principle-title">{p.title}</h4>
                    <p className="principle-desc">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
