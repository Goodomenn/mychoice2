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
  Globe2,
  Users,
  ShieldCheck,
  Lock
} from 'lucide-react';

const personnelList = [
  {
    roleNum: '01',
    category: 'Principal Contact Person',
    name: 'Teklay Mengesha',
    title: 'Vice Manager',
    office: '+251-116-67-57-76',
    mobile: '+251-929-92-31-31 / +251-941-61-65-61/62',
    email: 'mychoiceethiopia@gmail.com',
  },
];

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
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 1rem 0',
            }}
          >
            Contact <span style={{ color: '#f59e0b' }}>My Choice Ethiopia Agro</span>
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.15rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.65',
            }}
          >
            Reach our Head Office in Addis Ababa for agricultural commodity contracts, trade partnerships, and verified sample dispatches.
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
            {/* Left Column: Head Office Card & Key Personnel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span className="section-tag">Direct Presence</span>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                  Head Office & Executive Management
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  Our corporate headquarters in Addis Ababa manages all export contracts, crop aggregation logistics, and international trade communications.
                </p>
              </div>

              {/* Head Office Addis Ababa */}
              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#f59e0b',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.06em',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    HEAD OFFICE • ADDIS ABABA
                  </span>
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  Head Office – Yeka Sub City
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <MapPin size={17} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Woreda 09, Gurdsholla, Dawit Building, 3rd Floor, Room 303/304, Addis Ababa, Ethiopia</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <Phone size={17} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>
                      Office: <strong>+251-116-67-57-76</strong><br />
                      Mobile: <strong>+251-929-92-31-31 / +251-941-61-65-61/62</strong>
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                    <Mail size={17} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#38bdf8' }}>mychoiceethiopia@gmail.com</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                    <Clock size={17} color="#eab308" style={{ flexShrink: 0 }} />
                    <span>Monday – Saturday: 8:00 AM – 6:00 PM (EAT)</span>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '1.15rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed rgba(255, 255, 255, 0.12)',
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                  }}
                >
                  <strong style={{ color: '#f59e0b' }}>Principal Contact:</strong> Teklay Mengesha, Vice Manager
                </div>
              </div>

              {/* Personnel Directory Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(15, 23, 42, 0.7) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <Users size={20} color="#f59e0b" />
                  <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>
                    Principal Personnel & Management
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  {personnelList.map((p) => (
                    <div key={p.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.35rem' }}>
                        <strong style={{ color: '#ffffff', fontSize: '1rem' }}>{p.name}</strong>
                        <span style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: '600' }}>{p.title}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0.2rem 0 0.4rem' }}>
                        {p.category}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                        <span>Office: {p.office}</span><br />
                        <span>Mobile: {p.mobile}</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#38bdf8', marginTop: '0.35rem' }}>
                        Email: {p.email}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security & Banking Notice */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Lock size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.3rem' }}>
                    Security Notice: Official Banking Information
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.825rem', lineHeight: '1.5', margin: 0 }}>
                    In compliance with cybersecurity and anti-fraud regulations, Commercial Bank of Ethiopia (CBE) accounts are not displayed on open digital channels. Complete verified settlement details are provided on official company letterhead upon contract signing.
                  </p>
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
                  position: 'sticky',
                  top: '6rem',
                }}
              >
                <div style={{ marginBottom: '2rem' }}>
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
                    Your message will be automatically routed to Vice Manager Teklay Mengesha.
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
                      Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Vice Manager Teklay Mengesha and our trade desk have received your inquiry regarding{' '}
                      <strong style={{ color: '#f59e0b' }}>{formData.inquiryType}</strong>. We will contact you at <strong style={{ color: '#ffffff' }}>{formData.email}</strong> promptly.
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
                        placeholder="e.g. John Doe / Global Agritrade LLC"
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
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+251 ..."
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
                          placeholder="e.g. Djibouti / Hamburg / Dubai"
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
                        <option value="General Agricultural Trade / Investment Consultation" style={{ background: '#0f172a', color: '#ffffff' }}>
                          General Agricultural Trade / Investment Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                        Message / Order Specifications *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please include crop specifications, purity/moisture criteria, target delivery schedule, and preferred Incoterms (FOB/CIF)."
                        className="glass-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="glass-button glass-button-primary"
                      style={{ padding: '0.9rem', width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
                    >
                      <Send size={18} /> Transmit Inquiry to Desk
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748b', marginTop: '0.5rem' }}>
                      Verified Legal Credentials: Business License #14/666/128419/2005 • VAT Registration #80692 • SIGTAS Active
                    </div>
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
