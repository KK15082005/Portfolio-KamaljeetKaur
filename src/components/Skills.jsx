import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Server, 
  Cpu, 
  Sparkles, 
  Check, 
  Cloud 
} from 'lucide-react';

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
            Equipped with modern engineering tools across the full application lifecycle, from system design and algorithms to deployment.
          </p>

          {/* Filter Bar */}
          <div className="skills-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Grid */}
        <div className="skills-categories-wrapper">
          {getFilteredCategories().map(([categoryName, skills]) => (
            <div key={categoryName} className="skill-category-block">
              <div className="skill-category-header">
                <span className="category-indicator"></span>
                <h3 className="skill-category-title">{categoryName}</h3>
                <span className="skill-count-badge">{skills.length} skills</span>
              </div>

              <div className="skills-grid">
                {skills.map((skill, idx) => (
                  <div key={idx} className="skill-card glass-card">
                    <div className="skill-card-top">
                      <div className="skill-avatar">
                        <Terminal size={18} className="text-cyan" />
                      </div>
                      <span className={`skill-level-pill ${
                        skill.level.includes('Specialist') || skill.level.includes('Expert')
                          ? 'level-expert'
                          : skill.level.includes('Advanced')
                          ? 'level-advanced'
                          : 'level-intermediate'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="skill-name">{skill.name}</div>

                    <div className="skill-progress-track">
                      <div 
                        className="skill-progress-bar"
                        style={{
                          width: skill.level.includes('Specialist') || skill.level.includes('Expert')
                            ? '95%'
                            : skill.level.includes('Advanced')
                            ? '85%'
                            : '75%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
