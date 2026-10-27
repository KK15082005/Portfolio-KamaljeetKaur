import React from 'react';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  TrendingUp 
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header Image */}
        <div className="modal-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/portfolio.png';
            }}
          />
          <div className="modal-image-gradient"></div>
          
          <div className="modal-header-tags">
            <span className="modal-badge-category">{project.category}</span>
            {project.featured && (
              <span className="modal-badge-featured">
                <Sparkles size={13} />
                <span>Featured Project</span>
              </span>
            )}
            {project.metrics && (
              <span className="modal-badge-metrics">
                <TrendingUp size={13} />
                <span>{project.metrics}</span>
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
            {project.period && (
              <div className="modal-period">
                <Calendar size={14} />
                <span>{project.period}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-desc">{project.description}</p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Engineering Highlights</h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="modal-highlight-item">
                    <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Tech Stack & Integrations</h4>
              <div className="modal-tech-chips">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="modal-actions">
            {project.demoUrl && project.demoUrl !== '#' && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <span>Live Deployment</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}

            <button className="btn btn-outline" onClick={onClose}>
              <span>Close</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
