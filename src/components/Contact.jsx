import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  FileDown, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    'E-mail': '',
    'Mobile-No': '',
    Message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMsg('');

    try {
      const formPayload = new FormData();
      formPayload.append('Name', formData.Name);
      formPayload.append('E-mail', formData['E-mail']);
      formPayload.append('Mobile-No', formData['Mobile-No']);
      formPayload.append('Message', formData.Message);

      await fetch(personalInfo.googleSheetWebhook, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors' // Google Apps Script standard handling
      });

      setStatus('success');
      setFeedbackMsg('Thank you! Your message has been sent directly to Kamaljeet.');
      setFormData({
        Name: '',
        'E-mail': '',
        'Mobile-No': '',
        Message: ''
      });

      setTimeout(() => {
        setStatus('idle');
        setFeedbackMsg('');
      }, 6000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setFeedbackMsg('Unable to send message right now. Please email directly at kaur.kamaljeet1505@gmail.com.');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="section-header">
          <div className="section-chip">
            <Send size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span>Remarkable</span>
          </h2>
          <p className="section-desc">
            Currently open to Full-time Software Engineering roles, Full Stack Internships, and high-impact engineering collaborations.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              
              <div className="contact-status-box">
                <span className="contact-status-dot"></span>
                <div>
                  <div className="contact-status-title">Status: Available</div>
                  <div className="contact-status-sub">Actively interviewing for SDE / Full Stack roles</div>
                </div>
              </div>

              <h3 className="contact-col-title">Contact Channels</h3>
              <p className="contact-col-desc">
                Whether you have an opportunity, want to discuss scalable MERN/Java architectures, or simply want to connect—reach out!
              </p>

              <div className="contact-channels-list">
                <a href={`mailto:${personalInfo.email}`} className="contact-channel-item">
                  <div className="channel-icon-circle">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div className="channel-content">
                    <div className="channel-label">Email</div>
                    <div className="channel-value">{personalInfo.email}</div>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="contact-channel-item">
                  <div className="channel-icon-circle">
                    <Phone size={18} className="text-cyan" />
                  </div>
                  <div className="channel-content">
                    <div className="channel-label">Phone / WhatsApp</div>
                    <div className="channel-value">{personalInfo.phone}</div>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="channel-icon-circle">
                    <MapPin size={18} className="text-cyan" />
                  </div>
                  <div className="channel-content">
                    <div className="channel-label">Location</div>
                    <div className="channel-value">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="contact-socials-block">
                <span className="socials-heading">Professional Profiles</span>
                <div className="contact-social-icons">
                  <a 
                    href={personalInfo.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href={personalInfo.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>

                  <a 
                    href={personalInfo.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Resume download button */}
              <div className="contact-resume-cta">
                <a 
                  href={personalInfo.resumeUrl} 
                  download 
                  className="btn btn-secondary w-full"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileDown size={18} />
                  <span>Download Updated Resume (PDF)</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Google Sheets Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <div className="form-header-badge">
                  <MessageSquare size={16} className="text-cyan" />
                  <span>Send a Message</span>
                </div>
                <h3 className="form-card-title">Send Inquiry Directly</h3>
                <p className="form-card-sub">
                  Messages are sent directly to my dashboard via Google Apps Script.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="Name" 
                    placeholder="e.g. John Doe"
                    value={formData.Name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="E-mail" 
                      placeholder="e.g. recruiter@company.com"
                      value={formData['E-mail']}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group flex-1">
                    <label className="form-label">Phone / Mobile No *</label>
                    <input 
                      type="tel" 
                      name="Mobile-No" 
                      placeholder="e.g. +91 9876543210"
                      value={formData['Mobile-No']}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Query / Message *</label>
                  <textarea 
                    name="Message" 
                    rows="5"
                    placeholder="Tell me about your role, project, or collaboration opportunity..."
                    value={formData.Message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Feedback message banner */}
                {feedbackMsg && (
                  <div className={`form-feedback-banner ${status}`}>
                    {status === 'success' ? (
                      <CheckCircle2 size={18} className="text-emerald" />
                    ) : (
                      <AlertCircle size={18} className="text-rose" />
                    )}
                    <span>{feedbackMsg}</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
