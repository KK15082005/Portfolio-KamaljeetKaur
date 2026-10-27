import React from 'react';
import { servicesData } from '../data/portfolioData';
import { 
  Layers, 
  Layout, 
  Coffee, 
  Bot, 
  GraduationCap, 
  ArrowRight, 
  Check 
} from 'lucide-react';

export default function Services() {
  const iconMap = {
    Layout,
    Coffee,
    Bot,
    GraduationCap
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">

        <div className="section-header">
          <div className="section-chip">
            <Layers size={14} />
            <span>Offerings & Expertise</span>
          </div>
          <h2 className="section-title">
            What I <span>Bring to Teams</span>
          </h2>
          <p className="section-desc">
            Leveraging engineering depth, architectural discipline, and algorithmic problem solving to deliver measurable impact.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc, idx) => {
            const Icon = iconMap[svc.icon] || Layout;
            return (
              <div key={idx} className="service-card glass-card">
                <div className="service-icon-box">
                  <Icon size={28} className="text-cyan" />
                </div>

                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>

                <div className="service-tags">
                  {svc.tags.map((tag, i) => (
                    <span key={i} className="service-tag-chip">
                      <Check size={12} className="text-cyan" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="service-card-accent"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
