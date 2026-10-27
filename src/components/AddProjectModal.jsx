import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Copy, 
  Check, 
  Sparkles, 
  Eye, 
  Code, 
  ExternalLink, 
  Upload, 
  Image as ImageIcon 
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function AddProjectModal({ onClose, onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Full-Stack',
    tagline: '',
    period: '2026',
    featured: true,
    image: '/project1.png',
    demoUrl: '',
    githubUrl: '',
    metrics: '',
    description: '',
    highlights: '',
    tech: 'React.js, Node.js, Express.js, MongoDB'
  });

  const [copied, setCopied] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const getCleanObject = () => {
    const id = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'custom-project';
    const techArray = formData.tech.split(',').map(t => t.trim()).filter(Boolean);
    const highlightsArray = formData.highlights.split('\n').map(h => h.trim()).filter(Boolean);

    return {
      id,
      title: formData.title || 'Untitled Project',
      category: formData.category,
      tagline: formData.tagline || 'A new innovative engineering solution',
      period: formData.period || '2026',
      featured: formData.featured,
      image: formData.image || '/portfolio.png',
      demoUrl: formData.demoUrl || '#',
      githubUrl: formData.githubUrl || 'https://github.com',
      metrics: formData.metrics,
      description: formData.description || 'Project description outlining the technical problem and architecture.',
      highlights: highlightsArray.length > 0 ? highlightsArray : ['Designed and implemented full application logic.'],
      tech: techArray.length > 0 ? techArray : ['React.js', 'JavaScript']
    };
  };

  const handleAddToView = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a project title.');
      return;
    }
    const newProj = getCleanObject();
    onAddProject(newProj);
    setSuccessMessage('Project added to your live portfolio! Scroll down to see it.');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleCopyCode = () => {
    const obj = getCleanObject();
    const formattedCode = `  {
    id: "${obj.id}",
    title: "${obj.title}",
    category: "${obj.category}",
    tagline: "${obj.tagline}",
    period: "${obj.period}",
    featured: ${obj.featured},
    image: "${obj.image}",
    demoUrl: "${obj.demoUrl}",
    githubUrl: "${obj.githubUrl}",
    metrics: "${obj.metrics}",
    description: "${obj.description.replace(/"/g, '\\"')}",
    highlights: ${JSON.stringify(obj.highlights, null, 6)},
    tech: ${JSON.stringify(obj.tech)}
  },`;

    navigator.clipboard.writeText(formattedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const preview = getCleanObject();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content glass-card add-project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="add-modal-header">
          <div className="add-modal-title-group">
            <div className="add-modal-icon-badge">
              <Plus size={20} className="text-cyan" />
            </div>
            <div>
              <h2 className="add-modal-title">Add & Preview Project</h2>
              <p className="add-modal-sub">
                Fill out the details below. Preview updates instantly on the right!
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Content Layout: Left Form, Right Live Preview */}
        <div className="add-modal-layout">
          
          {/* Left: Input Form */}
          <form className="add-modal-form" onSubmit={handleAddToView}>
            
            <div className="form-group">
              <label className="form-label">Project Title *</label>
              <input 
                type="text" 
                name="title" 
                placeholder="e.g. HealthPulse AI"
                value={formData.title} 
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">Category</label>
                <select 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="AI & Full-Stack">AI & Full-Stack</option>
                  <option value="Full-Stack">Full-Stack</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Java & DSA">Java & DSA</option>
                  <option value="Leadership & Web">Leadership & Web</option>
                </select>
              </div>

              <div className="form-group flex-1">
                <label className="form-label">Timeline / Period</label>
                <input 
                  type="text" 
                  name="period" 
                  placeholder="e.g. Oct 2026"
                  value={formData.period} 
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Tagline (One-sentence summary)</label>
              <input 
                type="text" 
                name="tagline" 
                placeholder="e.g. AI-driven personalized health analytics platform"
                value={formData.tagline} 
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">Live Demo URL</label>
                <input 
                  type="url" 
                  name="demoUrl" 
                  placeholder="https://..."
                  value={formData.demoUrl} 
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group flex-1">
                <label className="form-label">GitHub URL</label>
                <input 
                  type="url" 
                  name="githubUrl" 
                  placeholder="https://github.com/..."
                  value={formData.githubUrl} 
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">Screenshot Path</label>
                <input 
                  type="text" 
                  name="image" 
                  placeholder="e.g. /project1.png or /preppilot-ai.png"
                  value={formData.image} 
                  onChange={handleChange}
                  className="form-input"
                />
                <span className="form-hint">Tip: Place images in the <code>public/</code> folder.</span>
              </div>

              <div className="form-group flex-1">
                <label className="form-label">Key Metric / Badge</label>
                <input 
                  type="text" 
                  name="metrics" 
                  placeholder="e.g. 500+ Active Users"
                  value={formData.metrics} 
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Tech Stack (comma-separated)</label>
              <input 
                type="text" 
                name="tech" 
                placeholder="React.js, Node.js, Express.js, MongoDB, Gemini API"
                value={formData.tech} 
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Detailed Description</label>
              <textarea 
                name="description" 
                rows="3"
                placeholder="What problem does this project solve? What did you build?"
                value={formData.description} 
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Key Highlights (1 per line)</label>
              <textarea 
                name="highlights" 
                rows="3"
                placeholder="• Built end-to-end full-stack platform with secure JWT auth&#10;• Reduced latency by 30% through indexing&#10;• Implemented real-time voice interaction"
                value={formData.highlights} 
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-checkbox-row">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="featured" 
                  checked={formData.featured} 
                  onChange={handleChange}
                />
                <span>Highlight as Featured Project</span>
              </label>
            </div>

            {/* Actions */}
            <div className="add-modal-actions">
              <button type="submit" className="btn btn-primary">
                <Plus size={16} />
                <span>Add to Live Portfolio</span>
              </button>

              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={handleCopyCode}
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? 'Code Copied!' : 'Copy Code for portfolioData.js'}</span>
              </button>
            </div>

            {successMessage && (
              <div className="success-banner">
                <Check size={16} />
                <span>{successMessage}</span>
              </div>
            )}

          </form>

          {/* Right: Live Card Preview */}
          <div className="add-modal-preview">
            <div className="preview-label">
              <Eye size={15} />
              <span>Real-Time Live Card Preview</span>
            </div>

            <div className="preview-card glass-card">
              <div className="preview-img-container">
                <img 
                  src={preview.image} 
                  alt={preview.title} 
                  className="preview-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/portfolio.png';
                  }}
                />
                <span className="preview-cat-badge">{preview.category}</span>
                {preview.featured && (
                  <span className="preview-featured-badge">
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              <div className="preview-card-body">
                <div className="preview-card-title-row">
                  <h3 className="preview-card-title">{preview.title}</h3>
                  <span className="preview-card-period">{preview.period}</span>
                </div>
                <p className="preview-card-tagline">{preview.tagline}</p>
                <p className="preview-card-desc">{preview.description}</p>

                <div className="preview-card-chips">
                  {preview.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="tech-chip text-xs">{t}</span>
                  ))}
                  {preview.tech.length > 4 && (
                    <span className="tech-chip text-xs text-muted">+{preview.tech.length - 4} more</span>
                  )}
                </div>

                <div className="preview-card-actions">
                  <span className="btn btn-primary text-xs pointer-events-none">
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </span>
                  <span className="btn btn-secondary text-xs pointer-events-none">
                    <Github size={12} />
                    <span>GitHub</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="preview-guide-box glass-card">
              <div className="guide-title">
                <Code size={14} className="text-cyan" />
                <span>How to make this permanent</span>
              </div>
              <p className="guide-text">
                Click <strong>"Copy Code for portfolioData.js"</strong> and paste it directly inside <code>src/data/portfolioData.js</code> in the <code>initialProjectsData</code> list. It will stay permanently saved in your codebase!
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
