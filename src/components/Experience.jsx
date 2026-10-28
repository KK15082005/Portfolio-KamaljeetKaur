import React, { useState } from 'react';
import { experiencesData, educationData, achievementsData } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  ExternalLink 
} from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section experience-section">
      <div className="container">

        <div className="section-header">
          <div className="section-chip">
            <Briefcase size={14} />
            <span>Work & Background</span>
          </div>
          <h2 className="section-title">
            Internships & <span>Experience</span>
          </h2>
          <p className="section-desc">
            Hands-on software development internships, academic mentorship, and verifiable technical achievements.
          </p>

          {/* Tab Selector */}
          <div className="tab-pill-switcher">
            <button 
              type="button"
              className={`tab-pill-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase size={15} />
              <span className="tab-label-desktop">Work & Internships ({experiencesData.length})</span>
              <span className="tab-label-mobile">Experience ({experiencesData.length})</span>
            </button>
            <button 
              type="button"
              className={`tab-pill-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={15} />
              <span>Education ({educationData.length})</span>
            </button>
            <button 
              type="button"
              className={`tab-pill-btn ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <Award size={15} />
              <span className="tab-label-desktop">Achievements ({achievementsData.length})</span>
              <span className="tab-label-mobile">Awards ({achievementsData.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: WORK & INTERNSHIPS */}
        {activeTab === 'experience' && (
          <div className="timeline-container">
            {experiencesData.map((exp, index) => (
              <div key={exp.id} className="timeline-card-wrapper">
                
                {/* Timeline node */}
                <div className="timeline-indicator">
                  <div className="timeline-dot" style={{ borderColor: exp.color }}>
                    <div className="timeline-dot-inner" style={{ backgroundColor: exp.color }}></div>
                  </div>
                  {index < experiencesData.length - 1 && <div className="timeline-line"></div>}
                </div>

                {/* Card Content */}
                <div className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-role-row">
                        <h3 className="timeline-role">{exp.role}</h3>
                        <span className="timeline-badge" style={{ backgroundColor: `${exp.color}18`, color: exp.color, borderColor: `${exp.color}40` }}>
                          {exp.badge}
                        </span>
                      </div>
                      <div className="timeline-company-row">
                        <Building2 size={15} className="text-cyan" />
                        <span className="timeline-company">{exp.company}</span>
                        <span className="timeline-divider">•</span>
                        <Calendar size={13} className="text-muted" />
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <ul className="timeline-highlights">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="timeline-highlight-item">
                        <CheckCircle2 size={15} className="highlight-icon text-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="timeline-tech-tags">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TAB 2: EDUCATION */}
        {activeTab === 'education' && (
          <div className="education-grid">
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-card glass-card">
                <div className="edu-icon-circle">
                  <GraduationCap size={22} className="text-cyan" />
                </div>
                <div className="edu-content">
                  <div className="edu-period">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">{edu.institution}</div>
                  
                  <div className="edu-score-pill">
                    <Sparkles size={13} className="text-amber" />
                    <span>{edu.score}</span>
                  </div>

                  <ul className="edu-highlights">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: ACHIEVEMENTS */}
        {activeTab === 'achievements' && (
          <div className="achievements-grid">
            {achievementsData.map((ach, idx) => (
              <div key={idx} className="achievement-card glass-card">
                <div className="achievement-icon-box">
                  <Award size={22} className="text-cyan" />
                </div>
                <div className="achievement-body">
                  <div className="achievement-header-row">
                    <div className="achievement-org">{ach.organization}</div>
                    {ach.badge && (
                      <span className="achievement-badge">{ach.badge}</span>
                    )}
                  </div>
                  <h3 className="achievement-title">{ach.title}</h3>
                  <p className="achievement-desc">{ach.description}</p>

                  {ach.link && (
                    <div className="achievement-link-wrapper">
                      <a 
                        href={ach.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="achievement-link-btn"
                        aria-label={`View evidence for ${ach.title}`}
                      >
                        <span>{ach.linkText || 'Verify Evidence'}</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
