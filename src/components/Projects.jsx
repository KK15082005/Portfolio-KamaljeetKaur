import React, { useState } from 'react';
import { initialProjectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import AddProjectModal from './AddProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Search, 
  Plus, 
  TrendingUp, 
  ArrowUpRight, 
  Trash2,
  AlertCircle
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('custom_portfolio_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...initialProjectsData];
      }
    } catch (e) {
      console.error(e);
    }
    return initialProjectsData;
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = ['All', 'AI & Full-Stack', 'Full-Stack', 'Frontend'];

  // Handle adding project
  const handleAddProject = (newProject) => {
    const updated = [newProject, ...projects];
    setProjects(updated);
    try {
      const customOnly = updated.filter(p => !initialProjectsData.some(init => init.id === p.id));
      localStorage.setItem('custom_portfolio_projects', JSON.stringify(customOnly));
    } catch (e) {
      console.error(e);
    }
  };

  // Handle removing a custom project
  const handleRemoveCustomProject = (id, e) => {
    e.stopPropagation();
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    try {
      const customOnly = updated.filter(p => !initialProjectsData.some(init => init.id === p.id));
      localStorage.setItem('custom_portfolio_projects', JSON.stringify(customOnly));
    } catch (e) {
      console.error(e);
    }
  };

  // Flagship project (PrepPilot-AI)
  const flagshipProject = projects.find(p => p.id === 'preppilot-ai') || projects[0];

  // Filtered projects
  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tech.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <div className="section-header">
          <div className="section-chip">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Key Full-Stack & <span>AI Projects</span>
          </h2>
          <p className="section-desc">
            Production-grade web platforms, scalable microservices, and AI integrations built with modern architecture.
          </p>
        </div>

        {/* FLAGSHIP HERO SPOTLIGHT: PREPPILOT-AI */}
        {flagshipProject && (
          <div className="flagship-card glass-card">
            <div className="flagship-grid">
              
              <div className="flagship-image-col">
                <div className="flagship-image-wrapper">
                  <img 
                    src={flagshipProject.image} 
                    alt={flagshipProject.title} 
                    className="flagship-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/portfolio.png';
                    }}
                  />
                  <div className="flagship-image-glow"></div>
                </div>
              </div>

              <div className="flagship-content-col">
                <div className="flagship-badge-row">
                  <span className="badge-flagship-label">
                    <Sparkles size={13} />
                    <span>Flagship Project</span>
                  </span>
                  <span className="badge-flagship-competition">
                    <span>Microsoft Imagine Cup '26</span>
                  </span>
                  {flagshipProject.metrics && (
                    <span className="badge-flagship-metric">
                      <TrendingUp size={13} />
                      <span>{flagshipProject.metrics}</span>
                    </span>
                  )}
                </div>

                <h3 className="flagship-title">{flagshipProject.title}</h3>
                <p className="flagship-tagline">{flagshipProject.tagline}</p>
                <p className="flagship-desc">{flagshipProject.description}</p>

                {/* Tech Chips */}
                <div className="flagship-tech-chips">
                  {flagshipProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-chip">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flagship-actions">
                  {flagshipProject.demoUrl && flagshipProject.demoUrl !== '#' && (
                    <a 
                      href={flagshipProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      <span>Explore Live Platform</span>
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {flagshipProject.githubUrl && (
                    <a 
                      href={flagshipProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button 
                    className="btn btn-outline"
                    onClick={() => setSelectedProject(flagshipProject)}
                  >
                    <span>Architecture & Decisions</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* CONTROLS BAR: CATEGORIES, SEARCH & ADD PROJECT BUTTON */}
        <div className="projects-controls-bar glass-card">
          
          {/* Categories */}
          <div className="projects-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`project-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Add Project button */}
          <div className="projects-actions-group">
            <div className="project-search-box">
              <Search size={15} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by tech or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="project-search-input"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>×</button>
              )}
            </div>

            {/* The tool to add projects */}
            <button 
              className="btn btn-primary add-project-trigger-btn"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={15} />
              <span>Add / Preview Project</span>
            </button>
          </div>

        </div>

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="projects-empty-state glass-card">
            <FolderGit2 size={40} className="text-muted" />
            <h3>No projects found</h3>
            <p>Try adjusting your search query or selected category filter.</p>
            <button className="btn btn-secondary mt-3" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const isCustom = !initialProjectsData.some(init => init.id === project.id);
              const hasValidDemo = project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== project.githubUrl;

              return (
                <div 
                  key={project.id} 
                  className="project-card glass-card"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Thumbnail */}
                  <div className="project-thumbnail-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-thumbnail"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/portfolio.png';
                      }}
                    />
                    <div className="project-thumb-overlay">
                      <span className="thumb-inspect-chip">
                        <span>Inspect Architecture</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                    {/* Category & Status badges */}
                    <div className="project-thumb-badges">
                      <span className="project-category-badge">{project.category}</span>
                      {project.featured && (
                        <span className="project-featured-badge">
                          <Sparkles size={11} />
                          <span>Featured</span>
                        </span>
                      )}
                      {isCustom && (
                        <span className="project-custom-badge">User Added</span>
                      )}
                    </div>

                    {isCustom && (
                      <button 
                        className="project-remove-btn"
                        onClick={(e) => handleRemoveCustomProject(project.id, e)}
                        title="Remove custom project"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="project-card-body">
                    <div className="project-card-title-row">
                      <h3 className="project-card-title">{project.title}</h3>
                      {project.period && (
                        <span className="project-card-period">{project.period}</span>
                      )}
                    </div>

                    <p className="project-card-tagline">{project.tagline}</p>

                    {project.metrics && (
                      <div className="project-metric-pill">
                        <TrendingUp size={12} className="text-cyan" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Chips */}
                    <div className="project-tech-chips">
                      {project.tech.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="tech-chip text-xs">{t}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-chip text-xs text-muted">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
                      {hasValidDemo && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-action-link"
                          title="Open Live Platform"
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-action-link"
                          title="View Source Code"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}

                      <button 
                        className="project-details-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span>Architecture</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* MODALS */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {showAddModal && (
        <AddProjectModal 
          onClose={() => setShowAddModal(false)}
          onAddProject={handleAddProject}
        />
      )}

    </section>
  );
}
