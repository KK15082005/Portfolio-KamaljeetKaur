import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Sparkles, 
  Terminal, 
  HeartHandshake, 
  Rocket, 
  Code 
} from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: Terminal,
      title: "Algorithmic Precision",
      desc: "Deep conceptual mastery in Java DSA (100+ problems on LeetCode/GFG). Clean, time-optimized, edge-case resilient solutions."
    },
    {
      icon: Rocket,
      title: "End-to-End Product Ownership",
      desc: "Hands-on experience in founding teams—architecting REST APIs, database schemas, microservices, and React frontends from scratch."
    },
    {
      icon: HeartHandshake,
      title: "Mentorship & Community",
      desc: "Guided 100+ juniors in DSA doubt resolution and mock reviews, plus leading 10+ peers in corporate placement relations."
    },
    {
      icon: Sparkles,
      title: "AI-First Engineering",
      desc: "Integrating cutting-edge LLMs (Google Gemini API, Azure OpenAI) into real-world student workflows, evidenced by PrepPilot-AI."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-chip">
            <User size={14} />
            <span>Biography & Core Focus</span>
          </div>
          <h2 className="section-title">
            Passionate About <span>Scalable Engineering</span> & Meaningful Impact
          </h2>
          <p className="section-desc">
            Bridging algorithmic problem-solving with full-stack development to build products that solve real-world student and business challenges.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Image with Glass Frame */}
          <div className="about-visual">
            <div className="about-frame glass-card">
              <img 
                src={personalInfo.aboutImage} 
                alt="Kamaljeet Kaur working" 
                className="about-image"
              />
              <div className="about-badge-card glass-card">
                <GraduationCap size={24} className="text-cyan" />
                <div>
                  <div className="about-badge-title">B.Tech CSE (2023–27)</div>
                  <div className="about-badge-sub">Consistently Top 10 in Class</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Principles */}
          <div className="about-content">
            <div className="bio-card glass-card">
              <h3 className="bio-title">Hello! I'm Kamaljeet.</h3>
              <p className="bio-text">
                I am a Computer Science Engineering undergraduate specializing in the <strong>MERN Stack</strong>, 
                <strong>Java Data Structures & Algorithms</strong>, and <strong>AI-driven application development</strong>.
              </p>
              <p className="bio-text">
                Currently, I contribute as a <strong>Full Stack Developer Intern</strong> within the founding engineering team at 
                <strong> VenueBook</strong>, where I develop core booking workflows, write scalable microservices, and optimize MongoDB/SQL queries. 
                Concurrently, as a <strong>Teaching Assistant</strong> at a stealth startup, I mentor over 100+ engineering students in Java DSA.
              </p>
              <p className="bio-text">
                My flagship project, <strong>PrepPilot-AI</strong>, was presented as a <strong>Microsoft Imagine Cup '26</strong> entry, 
                demonstrating my passion for turning complex AI APIs into intuitive, empowering tools.
              </p>

              {/* Quick Info Grid */}
              <div className="quick-info-grid">
                <div className="info-item">
                  <MapPin size={16} className="text-cyan" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <Briefcase size={16} className="text-cyan" />
                  <span>VenueBook Intern (Founding Team)</span>
                </div>
                <div className="info-item">
                  <GraduationCap size={16} className="text-cyan" />
                  <span>DITM, MDU Rohtak</span>
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
                  <div key={idx} className="principle-card glass-card">
                    <div className="principle-icon-box">
                      <Icon size={20} className="text-indigo" />
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
