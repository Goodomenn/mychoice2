import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>
      {/* Top Bar */}
      <div
        style={{
          background: 'rgba(9, 13, 22, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.8rem',
          color: '#94a3b8',
          padding: '0.4rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={13} color="#f59e0b" /> Woreda 09, Gurdsholla, Dawit Building, Addis Ababa
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={13} color="#22c55e" /> +251-116-67-57-76
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={13} color="#38bdf8" /> mychoiceethiopia@gmail.com
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '0.15rem 0.6rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.75rem',
              }}
            >
              <Globe size={12} color="#f59e0b" /> Global Trade Member (ECTA & EPOSPEA)
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav
        style={{
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
          padding: '0.9rem 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Brand Logo (Left) */}
          <div style={{ justifySelf: 'start' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <img 
                src="/logo.png" 
                alt="MyChoice Ethiopia Agro Logo" 
                style={{ width: '44px', height: '44px', objectFit: 'contain', flexShrink: 0 }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
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
                    fontSize: '1.0rem',
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
                    fontSize: '0.6rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    marginTop: '0.15rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Import & Export Trading PLC
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links (Center) */}
          <div
            style={{
              justifySelf: 'center',
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: isActive ? '#f59e0b' : '#e2e8f0',
                  position: 'relative',
                  padding: '0.4rem 0',
                  transition: 'all 0.2s ease',
                  borderBottom: isActive ? '2px solid #f59e0b' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Spacer & Mobile Toggle (Right) */}
          <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                color: '#ffffff',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer',
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(9, 13, 22, 0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: isActive ? '#f59e0b' : '#e2e8f0',
                  padding: '0.65rem 0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '0.5rem',
                  background: isActive ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                })}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} color="#94a3b8" />
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Style for responsive toggle */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
