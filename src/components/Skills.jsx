import React, { useState } from 'react';
import { skillsData, codingProfiles } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Server, 
  Cpu, 
  Sparkles, 
  Cloud,
  Coffee,
  Atom,
  Globe,
  Palette,
  Layers,
  Network,
  Share2,
  ShieldCheck,
  Boxes,
  HardDrive,
  GitBranch,
  Send,
  FileCode,
  Bot,
  Zap,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Coffee,
  Code2,
  Terminal,
  Cpu,
  Database,
  Atom,
  Globe,
  Layout,
  Palette,
  Sparkles,
  Layers,
  Server,
  Network,
  Share2,
  ShieldCheck,
  Boxes,
  HardDrive,
  GitBranch,
  Send,
  FileCode,
  Bot,
  Cloud,
  Zap
};

export default function Skills() {
  const categories = ['All', ...Object.keys(skillsData)];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getFilteredCategories = () => {
    if (selectedCategory === 'All') {
      return Object.entries(skillsData);
    }
    return [[selectedCategory, skillsData[selectedCategory]]];
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        <div className="section-header">
          <div className="section-chip">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span>Technology Stack</span>
          </h2>
          <p className="section-desc">
            Equipped with core software engineering tools across the full lifecycle—from data structures and API design to scalable cloud deployment.
          </p>

          {/* Filter Bar */}
          <div className="skills-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`skill-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Verified Coding Profiles & Evidence Strip */}
        <div className="coding-profiles-banner glass-card">
          <div className="profiles-header">
            <div className="profiles-header-left">
              <div className="profiles-icon-circle">
                <Code2 size={20} className="text-cyan" />
              </div>
              <div>
                <h3 className="profiles-title">Verifiable Coding & Problem-Solving Profiles</h3>
                <p className="profiles-sub">Track record across data structure challenges, contests, and open-source repositories</p>
              </div>
            </div>
            <div className="profiles-badge">
              <CheckCircle2 size={14} className="text-emerald" />
              <span>100+ DSA Problems Solved</span>
            </div>
          </div>

          <div className="coding-profiles-grid">
            {codingProfiles.map((cp, idx) => (
              <a 
                key={idx} 
                href={cp.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="coding-profile-card"
                aria-label={`Visit ${cp.platform} profile`}
              >
                <div className="profile-card-top">
                  <span className="profile-platform">{cp.platform}</span>
                  <ExternalLink size={13} className="profile-external-icon" />
                </div>
                <div className="profile-metric">{cp.metric}</div>
                <div className="profile-badge-chip">{cp.badge}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-categories-wrapper">
          {getFilteredCategories().map(([categoryName, skills]) => (
            <div key={categoryName} className="skill-category-block">
              <div className="skill-category-header">
                <span className="category-indicator"></span>
                <h3 className="skill-category-title">{categoryName}</h3>
                <span className="skill-count-badge">{skills.length} technologies</span>
              </div>

              <div className="skills-grid">
                {skills.map((skill, idx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={idx} className="skill-card glass-card">
                      <div className="skill-card-top">
                        <div className="skill-avatar">
                          <IconComponent size={18} className="text-cyan" />
                        </div>
                        <span className="skill-category-tag">{categoryName}</span>
                      </div>

                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-focus-tag">{skill.focus}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
