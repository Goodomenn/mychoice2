import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(9, 13, 22, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        marginTop: 'auto',
      }}
    >
      {/* Top Certifications Strip */}
      <div
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.5rem 0',
          background: 'rgba(255, 255, 255, 0.02)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Award size={20} color="#f59e0b" />
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>
              ECTA Certified Coffee Exporter
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={20} color="#22c55e" />
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>
              EPOSPEA Registered Member
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Globe size={20} color="#38bdf8" />
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>
              ECX Verified Quality Assurance
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container" style={{ padding: '4rem 1.5rem 2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Col 1: About */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #15803d 0%, #d97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                }}
              >
                M
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#ffffff',
                }}
              >
                MY CHOICE <span style={{ color: '#f59e0b' }}>ETHIOPIA AGRO</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              My Choice Ethiopia Agro Import Export Trading PLC is a premier Ethiopian trading house connecting global markets
              with authentic, certified organic Arabica coffee, premium oilseeds, nutritious pulses, and spices.
            </p>
            <div className="glass-badge" style={{ fontSize: '0.78rem' }}>
              Licensed Import & Export Enterprise
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                position: 'relative',
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link
                  to="/"
                  style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ArrowRight size={14} /> Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ArrowRight size={14} /> About Us & Story
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ArrowRight size={14} /> Export Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ArrowRight size={14} /> Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Commodities */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
              }}
            >
              Export Commodities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
              <li>🌱 Nihug (Ethiopian Niger Seed)</li>
              <li>🌱 Golden Corn (Ethiopian Maize)</li>
              <li>🌱 Raw Ginned Lint Cotton</li>
              <li>🌱 Green Gram (Mung Bean / Masho)</li>
              <li>🌱 Highland Sorghum (Mashilla)</li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
              }}
            >
              Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94a3b8', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Woreda 09, Gurdsholla, Dawit Building, 3rd Floor, Room 303/304, Addis Ababa, Ethiopia</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                <span>+251-116-67-57-76 / +251-929-92-31-31</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>mychoiceethiopia@gmail.com</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.25rem' }}>
                License No: 14/666/128419/2005 | VAT: 80692 | SIGTAS Active
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} My Choice Ethiopia Agro Import Export Trading PLC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/about" style={{ color: '#94a3b8' }}>Privacy Policy</Link>
            <Link to="/about" style={{ color: '#94a3b8' }}>Terms of Trade</Link>
            <Link to="/contact" style={{ color: '#94a3b8' }}>Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
