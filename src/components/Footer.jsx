import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

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
      {/* Main Footer Content */}
      <div className="container" style={{ padding: '3.5rem 1.5rem 2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Col 1: Brand Logo */}
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <img 
                src="/logo.png" 
                alt="MyChoice Ethiopia Agro Logo" 
                style={{ width: '48px', height: '48px', objectFit: 'contain', flexShrink: 0 }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    lineHeight: '1.15',
                  }}
                >
                  MY CHOICE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    color: '#f59e0b',
                    lineHeight: '1.15',
                  }}
                >
                  ETHIOPIA AGRO
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    marginTop: '0.2rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Import & Export Trading PLC
                </span>
              </div>
            </div>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.85rem',
                lineHeight: '1.6',
                marginTop: '1rem',
                maxWidth: '300px',
              }}
            >
              Ethiopia&apos;s origin agricultural commodity export partner, connecting direct farm harvests with global buyers.
            </p>
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
