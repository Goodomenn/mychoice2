import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  Sparkles, 
  Globe2 
} from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || 'Nihug (Ethiopian Niger Seed)';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: initialProduct,
    volume: '',
    message: '',
  });

  useEffect(() => {
    const prod = searchParams.get('product');
    if (prod) {
      setFormData((prev) => ({ ...prev, inquiryType: prod }));
    }
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* ================= HEADER BANNER ================= */}
      <section
        style={{
          padding: '5rem 0 3.5rem',
          background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.12) 0%, rgba(9, 13, 22, 0) 100%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <span className="glass-badge" style={{ color: '#fbbf24', borderColor: 'rgba(251, 191, 36, 0.3)' }}>
            <MessageSquare size={14} /> Direct Trade Communications
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '1rem 0',
            }}
          >
            Contact <span style={{ color: '#f59e0b' }}>Our Trade Desk</span>
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.15rem',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.65',
            }}
          >
            Whether you need green coffee samples, commodity contract quotes (FOB/CIF), or import partnership
            discussions, our team in Addis Ababa is ready to assist.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Left Column: Contact Cards & Location */}
            <div>
              <span className="section-tag">Direct Information</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Headquarters in Addis Ababa
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                Visit our corporate office or contact our commodities department. We facilitate sample dispatches via DHL /
                FedEx to verified buyers worldwide.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Card 1: Address */}
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} color="#f59e0b" />
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Addis Ababa Headquarters
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Bole Airport Road, Around Skylight Hotel Area<br />
                      Addis Ababa, Ethiopia<br />
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>License: 14/666/128419/2005 | VAT: 80692</span>
                    </p>
                  </div>
                </div>

                {/* Card 2: Phone & Hotlines */}
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} color="#22c55e" />
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Hotlines & WhatsApp
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Addis HQ: <strong style={{ color: '#e2e8f0' }}>+251 911 420 000</strong><br />
                      Operations Direct: <strong style={{ color: '#e2e8f0' }}>+251 116 183 163</strong><br />
                      Field Dispatch (24/7): <strong style={{ color: '#e2e8f0' }}>+251 911 234 567</strong>
                    </p>
                  </div>
                </div>

                {/* Card 3: Email Channels */}
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} color="#38bdf8" />
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Official Email Desks
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      General: <strong style={{ color: '#e2e8f0' }}>info@mychoiceethiopia.com</strong><br />
                      Logistics & Trade: <strong style={{ color: '#e2e8f0' }}>logistics@mychoiceethiopia.com</strong><br />
                      Expeditions: <strong style={{ color: '#e2e8f0' }}>travel@mychoiceethiopia.com</strong>
                    </p>
                  </div>
                </div>

                {/* Card 4: Operating Hours & Regional Hubs */}
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(236, 72, 153, 0.15)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={22} color="#ec4899" />
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Operating Hours & Regional Hubs
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Addis HQ: <strong style={{ color: '#e2e8f0' }}>Mon – Sat: 08:00 – 18:30 EAT</strong><br />
                      Semera Hub (Afar): <strong style={{ color: '#e2e8f0' }}>semera@mychoiceethiopia.com (24/7)</strong><br />
                      Mekelle Hub (Tigray): <strong style={{ color: '#e2e8f0' }}>mekelle@mychoiceethiopia.com</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Glass Inquiry Form */}
            <div>
              <div
                className="glass-panel"
                style={{
                  padding: '3rem 2.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%)',
                }}
              >
                <div style={{ marginBottom: '2rem' }}>
                  <span className="glass-badge" style={{ marginBottom: '0.75rem' }}>
                    <Sparkles size={14} /> Trade Inquiry Form
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Send Us an Inquiry
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.925rem' }}>
                    Fill in the form below and our international sales representative will respond within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div
                    style={{
                      padding: '2.5rem',
                      textAlign: 'center',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '1rem',
                    }}
                  >
                    <CheckCircle2 size={48} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} />
                    <h4 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                      Inquiry Received Successfully!
                    </h4>
                    <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Your inquiry regarding{' '}
                      <strong style={{ color: '#f59e0b' }}>{formData.inquiryType}</strong> has been routed to our export
                      team. We will contact you at <strong style={{ color: '#ffffff' }}>{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="glass-button glass-button-secondary"
                      style={{ fontSize: '0.875rem' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                        Your Full Name / Company Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe / Global Coffee Imports LLC"
                        className="glass-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                          Official Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="glass-input"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className="glass-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                          Destination Country / Port
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="e.g. Hamburg, Germany"
                          className="glass-input"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                          Estimated Volume
                        </label>
                        <input
                          type="text"
                          name="volume"
                          value={formData.volume}
                          onChange={handleChange}
                          placeholder="e.g. 1x20ft FCL (19.2 MT)"
                          className="glass-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                        Product of Interest
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="glass-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Nihug (Ethiopian Niger Seed)" style={{ background: '#0f172a', color: '#ffffff' }}>
                          Nihug (Ethiopian Niger Seed / ኑግ)
                        </option>
                        <option value="Corn (Ethiopian Maize)" style={{ background: '#0f172a', color: '#ffffff' }}>
                          Corn (Ethiopian Maize / በቆሎ)
                        </option>
                        <option value="Raw Cotton (Ginned Lint)" style={{ background: '#0f172a', color: '#ffffff' }}>
                          Raw Cotton (Ginned Lint / ጥጥ)
                        </option>
                        <option value="Green Gram (Mung Bean)" style={{ background: '#0f172a', color: '#ffffff' }}>
                          Green Gram (Mung Bean / ማሾ)
                        </option>
                        <option value="Sorghum (Highland Sorghum)" style={{ background: '#0f172a', color: '#ffffff' }}>
                          Sorghum (Highland Sorghum / ማሽላ)
                        </option>
                        <option value="General Trade Consultation" style={{ background: '#0f172a', color: '#ffffff' }}>
                          General Trade Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                        Message / Specific Requirements *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please include grade specifications, delivery timeline, sample requirements, and target Incoterms (FOB/CIF)."
                        className="glass-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="glass-button glass-button-primary"
                      style={{ padding: '0.9rem', width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
                    >
                      <Send size={18} /> Submit Trade Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
