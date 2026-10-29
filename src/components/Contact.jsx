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
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMsg('Please complete all required fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setFeedbackMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setFeedbackMsg('');

    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (web3FormsKey) {
        // Web3Forms delivery option
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: formData.name
          })
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Submission failed');
        }
      } else if (formspreeEndpoint) {
        // Formspree delivery option
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        });

        if (!response.ok) {
          throw new Error('Formspree delivery failed');
        }
      } else if (personalInfo.googleSheetWebhook) {
        // Default Google Apps Script webhook integration
        const formPayload = new FormData();
        formPayload.append('Name', formData.name);
        formPayload.append('E-mail', formData.email);
        formPayload.append('Subject', formData.subject);
        formPayload.append('Message', formData.message);

        await fetch(personalInfo.googleSheetWebhook, {
          method: 'POST',
          body: formPayload,
          mode: 'no-cors'
        });
      }

      setStatus('success');
      setFeedbackMsg('Thank you! Your message has been sent successfully. I will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
        setFeedbackMsg('');
      }, 7000);
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setFeedbackMsg(`Unable to send message right now. Please email directly at ${personalInfo.email}.`);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-chip">
            <Send size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Have an opportunity or a <span>project in mind?</span>
          </h2>
          <p className="section-desc">
            I'm open to Full Stack Developer and Software Engineer opportunities, internships, and meaningful collaborations. If you think my experience could be a good fit for your team, feel free to get in touch. I'd be happy to connect.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              
              <div className="contact-status-box">
                <span className="contact-status-dot"></span>
                <div>
                  <div className="contact-status-title">Status: Open to Opportunities</div>
                  <div className="contact-status-sub">Seeking Full Stack, SDE & Software Engineer Roles</div>
                </div>
              </div>

              <h3 className="contact-col-title">Direct Communication</h3>
              <p className="contact-col-desc">
                Feel free to email directly, connect via LinkedIn, or reach out regarding roles in Delhi NCR or remote.
              </p>

              <div className="contact-channels-list">
                <a href={`mailto:${personalInfo.email}`} className="contact-channel-item" title="Send direct email">
                  <div className="channel-icon-circle">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div className="channel-content">
                    <div className="channel-label">Direct Email</div>
                    <div className="channel-value">{personalInfo.email}</div>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="contact-channel-item" title="Call or WhatsApp">
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

              {/* Professional Profiles */}
              <div className="contact-socials-block">
                <span className="socials-heading">Professional Profiles</span>
                <div className="contact-social-icons">
                  <a 
                    href={personalInfo.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href={personalInfo.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>

                  <a 
                    href={personalInfo.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label="Instagram Profile"
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
                  <span>Download Résumé (PDF)</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <div className="form-header-badge">
                  <MessageSquare size={16} className="text-cyan" />
                  <span>Direct Message</span>
                </div>
                <h3 className="form-card-title">Send a Message</h3>
                <p className="form-card-sub">
                  Inquiries are delivered directly to my inbox and tracked dashboard.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name *</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    name="name" 
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address *</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    name="email" 
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    autoComplete="email"
                  />
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject *</label>
                  <input 
                    id="contact-subject"
                    type="text" 
                    name="subject" 
                    placeholder="e.g. SDE Opportunity / Technical Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message *</label>
                  <textarea 
                    id="contact-message"
                    name="message" 
                    rows="5"
                    placeholder="Tell me about your role, project, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Feedback Message Banner */}
                {feedbackMsg && (
                  <div className={`form-feedback-banner ${status}`} role="alert">
                    {status === 'success' ? (
                      <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="text-rose flex-shrink-0" />
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
