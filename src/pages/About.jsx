import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Globe, 
  ArrowRight, 
  Users, 
  Building2, 
  Sparkles,
  Check
} from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'We operate with full disclosure in all international contracts, weight certifications, and grading reports.',
      icon: ShieldCheck,
      color: '#22c55e',
    },
    {
      title: 'Highland Quality Standards',
      desc: 'Our commodities pass rigorous moisture, defect, and sensory evaluations in certified laboratories before export.',
      icon: Award,
      color: '#f59e0b',
    },
    {
      title: 'Farmer Welfare & Sustainability',
      desc: 'We maintain direct ties with cooperative unions, supporting fair remuneration and sustainable agro-forestry practices.',
      icon: Users,
      color: '#38bdf8',
    },
    {
      title: 'Reliable Global Supply Chain',
      desc: 'End-to-end multimodal transport management ensuring timely delivery from Djibouti Port to ports worldwide.',
      icon: Globe,
      color: '#ec4899',
    },
  ];


  const associations = [
    { name: 'ECTA', desc: 'Ethiopia Coffee and Tea Authority', badge: 'Certified Exporter' },
    { name: 'EPOSPEA', desc: 'Ethiopian Pulses, Oilseeds and Spices Processors-Exporters Association', badge: 'Active Member' },
    { name: 'ECX', desc: 'Ethiopia Commodity Exchange', badge: 'Authorized Trader' },
    { name: 'AACCSA', desc: 'Addis Ababa Chamber of Commerce and Sectoral Associations', badge: 'Member' },
    { name: 'ECCSA', desc: 'Ethiopian Chamber of Commerce and Sectoral Associations', badge: 'Member' },
  ];

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* ================= HEADER BANNER ================= */}
      <section
        style={{
          padding: '5rem 0 3.5rem',
          background: 'linear-gradient(180deg, rgba(21, 128, 61, 0.15) 0%, rgba(9, 13, 22, 0) 100%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <span className="glass-badge" style={{ marginBottom: '1rem' }}>
            <Building2 size={14} /> Established Excellence
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
            }}
          >
            About <span style={{ color: '#22c55e' }}>My Choice Ethiopia Agro</span> Trading PLC
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.15rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.65',
            }}
          >
            Bridging Ethiopian agricultural richness with international buyers through certified quality, ethical sourcing,
            and professional supply chain management.
          </p>
        </div>
      </section>

      {/* ================= STORY & OVERVIEW ================= */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                A Trusted Partner in International Commerce
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                My Choice Ethiopia Agro Import Export Trading PLC is a premier trading house headquartered in Addis Ababa,
                Ethiopia. Guided by deep industry expertise and an extensive network of cooperative unions, we export the
                finest agricultural commodities produced in the fertile highlands of Ethiopia.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                From organic Arabica coffee beans harvested from the pristine forests of Yirgacheffe and Sidama, to premium
                whitish Humera sesame seeds and protein-rich pulses, every shipment is processed and graded to meet the
                rigorous requirements of international buyers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Fully licensed by Ministry of Trade and Regional Integration',
                  'Registered with Ethiopian Coffee & Tea Authority (ECTA)',
                  'Direct traceability to cooperative washing and processing stations',
                  'State-of-the-art sorting, grading, and packaging capabilities',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'rgba(34, 197, 94, 0.2)',
                        border: '1px solid rgba(34, 197, 94, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={13} color="#22c55e" />
                    </div>
                    <span style={{ color: '#e2e8f0', fontSize: '0.925rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glass Visual Card */}
            <div
              className="glass-panel"
              style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="glass-badge" style={{ color: '#fbbf24', borderColor: 'rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.1)' }}>
                  <Sparkles size={14} /> At a Glance
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Ethiopian Origin Guarantee
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Headquarters</div>
                  <div style={{ color: '#ffffff', fontWeight: '600', fontSize: '1.05rem' }}>Addis Ababa, Ethiopia</div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Core Export Portfolio</div>
                  <div style={{ color: '#22c55e', fontWeight: '600', fontSize: '1.05rem' }}>
                    Arabica Coffee, Oilseeds, Pulses, Spices
                  </div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Core Import Portfolio</div>
                  <div style={{ color: '#f59e0b', fontWeight: '600', fontSize: '1.05rem' }}>
                    Ceramics, Industrial Chemicals, Medicals
                  </div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Global Export Reach</div>
                  <div style={{ color: '#ffffff', fontWeight: '600', fontSize: '1.05rem' }}>
                    USA, Germany, Japan, UAE, Saudi Arabia, China, UK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Guiding Principles</span>
            <h2 className="section-title">Our Vision & Mission</h2>
            <p className="section-subtitle">
              Driving sustainable prosperity through ethical trade practices and global partnerships.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Vision Card */}
            <div
              className="glass-card"
              style={{
                padding: '3rem 2.5rem',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                background: 'linear-gradient(135deg, rgba(21, 128, 61, 0.15) 0%, rgba(15, 23, 42, 0.7) 100%)',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(34, 197, 94, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                }}
              >
                <Eye size={28} color="#22c55e" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.65rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}
              >
                Our Vision
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.75' }}>
                To become East Africa's most recognized and dependable trading enterprise, acknowledged internationally
                for superior product authenticity, transparent business conduct, and fostering long-term relationships
                that benefit both our customers and rural farming communities.
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="glass-card"
              style={{
                padding: '3rem 2.5rem',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(15, 23, 42, 0.7) 100%)',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                }}
              >
                <Target size={28} color="#f59e0b" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.65rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}
              >
                Our Mission
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.75' }}>
                To consistently supply uncompromised, laboratory-graded agricultural commodities to international markets
                while providing reliable, high-grade industrial and consumer import solutions that fuel Ethiopia's
                economic infrastructure and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The fundamental beliefs guiding every shipment, partner negotiation, and community initiative.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '2.25rem 1.75rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `${val.color}18`,
                      border: `1px solid ${val.color}33`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={24} color={val.color} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {val.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.65' }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & ASSOCIATIONS ================= */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Endorsement</span>
            <h2 className="section-title">Certifications & Associations</h2>
            <p className="section-subtitle">
              We operate under the regulatory oversight and active membership of Ethiopia's leading trade boards.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {associations.map((assoc, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      color: '#f59e0b',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {assoc.name}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {assoc.desc}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    background: 'rgba(34, 197, 94, 0.15)',
                    color: '#86efac',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                  }}
                >
                  {assoc.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '3rem 2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(21, 128, 61, 0.2), rgba(15, 23, 42, 0.9))',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Interested in Partnering With Us?
            </h3>
            <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
              Speak with our commercial trade team in Addis Ababa for licensing documentation, sample shipments, and
              custom procurement contracts.
            </p>
            <Link to="/contact" className="glass-button glass-button-primary">
              Contact Us Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
