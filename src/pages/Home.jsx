import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  Wheat, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Package, 
  Layers, 
  Users 
} from 'lucide-react';

export default function Home() {
  const exportProducts = [
    {
      title: 'Premium Green Coffee Beans',
      tag: 'Arabica Origin',
      desc: 'Access Ethiopia exports organic Arabica coffee from the birthplace of coffee. Over 90% is traditionally shade-grown by smallholders in high-altitude volcanic soils.',
      varieties: ['Sidama G1-G2', 'Yirgacheffe Washed', 'Guji Speciality', 'Harar Longberry', 'Limu & Jimma'],
      icon: Coffee,
      badgeColor: '#22c55e',
      link: '/products',
    },
    {
      title: 'High-Grade Oilseeds',
      tag: 'Export Grade',
      desc: 'Sourced from the fertile northwest regions of Humera and Wollega. Known globally for high oil content, natural purity, and distinct sweet nutty flavor.',
      varieties: ['Humera White Sesame', 'Wollega Mixed Sesame', 'Ethiopian Niger Seed', 'Sunflower Seeds'],
      icon: Wheat,
      badgeColor: '#f59e0b',
      link: '/products',
    },
    {
      title: 'Nutritious Pulses & Legumes',
      tag: 'Pure & Cleaned',
      desc: 'Protein-dense pulses harvested from the central highlands. Processed in state-of-the-art cleaning facilities to meet international food safety standards.',
      varieties: ['Desi & Kabuli Chickpeas', 'Red Speckled Kidney Beans', 'White Pea Beans', 'Green Mung Beans'],
      icon: Package,
      badgeColor: '#38bdf8',
      link: '/products',
    },
    {
      title: 'Authentic Ethiopian Spices',
      tag: 'Natural Aromatics',
      desc: 'Aromatic Ethiopian spices celebrated across global gourmet and pharmaceutical industries for their potent flavor profiles and high essential oil content.',
      varieties: ['Dried Split Ginger', 'Polished Turmeric Fingers', 'Black Cumin (Korerima)', 'Ethiopian Cardamom'],
      icon: Sparkles,
      badgeColor: '#e11d48',
      link: '/products',
    },
  ];

  const valueProps = [
    {
      title: 'Direct Highland Sourcing',
      desc: 'We partner directly with cooperative unions and smallholders across Oromia, Sidama, and Amhara regions, ensuring complete ethical traceability.',
      icon: Layers,
    },
    {
      title: 'ECX & ECTA Quality Grading',
      desc: 'Every consignment undergoes stringent laboratory inspection, moisture testing, and cup profiling before dispatch.',
      icon: ShieldCheck,
    },
    {
      title: 'Reliable Multimodal Logistics',
      desc: 'Full-service freight forwarding and customs coordination from Addis Ababa through Djibouti Port to international destinations.',
      icon: Truck,
    },
    {
      title: 'Transparent Global Contracts',
      desc: 'Flexible Incoterms (FOB, CFR, CIF) and secure international banking arrangements for seamless multinational partnerships.',
      icon: Users,
    },
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 0 5rem',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.4) 0%, rgba(9, 13, 22, 0.85) 100%)',
        }}
      >
        {/* Glow ambient spots */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(21, 128, 61, 0.15)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.12)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            {/* Top Glass Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="glass-badge">
                <Sparkles size={15} /> Premier Ethiopian Import & Export Trading House
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Connecting <span style={{ color: '#22c55e' }}>Ethiopia's Finest</span> Agricultural Commodities to the{' '}
              <span style={{ color: '#f59e0b' }}>World</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '740px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              Access Ethiopia Import Export Trading PLC is a trusted licensed supplier of premium grade Arabica green
              coffee, export-standard oilseeds, pulses, and traditional spices, backed by comprehensive import solutions.
            </p>

            {/* Hero CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/products" className="glass-button glass-button-primary">
                Explore Export Products <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="glass-button glass-button-secondary">
                Request Trade Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPORT COMMODITIES SECTION ================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct From Source</span>
            <h2 className="section-title">Premium Export Commodities</h2>
            <p className="section-subtitle">
              Sourced from the most fertile agro-ecological zones of Ethiopia, harvested with traditional care, and
              processed to meet strict European, Asian, and American import standards.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {exportProducts.map((prod, idx) => {
              const Icon = prod.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2.25rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                        }}
                      >
                        <Icon size={26} color={prod.badgeColor} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: `${prod.badgeColor}22`,
                          color: prod.badgeColor,
                          border: `1px solid ${prod.badgeColor}44`,
                        }}
                      >
                        {prod.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {prod.title}
                    </h3>

                    <p
                      style={{
                        color: '#94a3b8',
                        fontSize: '0.925rem',
                        lineHeight: '1.65',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {prod.desc}
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          fontWeight: '700',
                          color: '#cbd5e1',
                          marginBottom: '0.6rem',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Key Varieties:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {prod.varieties.map((v, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.78rem',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '6px',
                              color: '#e2e8f0',
                            }}
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/products"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: prod.badgeColor,
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      marginTop: 'auto',
                    }}
                  >
                    View Technical Specifications <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Value Proposition</span>
            <h2 className="section-title">Why Partner With Access Ethiopia?</h2>
            <p className="section-subtitle">
              We operate with full licensing, governmental compliance, and unmatched local sourcing networks to deliver
              reliability at every stage of the shipment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {valueProps.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '2.25rem 1.75rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(34, 197, 94, 0.12)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <IconComp size={22} color="#22c55e" />
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
                    {prop.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.65' }}>{prop.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION GLASS BANNER ================= */}
      <section style={{ padding: '3rem 0 6rem' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              background:
                'radial-gradient(circle at center, rgba(21, 128, 61, 0.25) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(134, 239, 172, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <span className="glass-badge" style={{ marginBottom: '1.25rem' }}>
                <CheckCircle2 size={14} /> Ready for Global Orders
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  lineHeight: '1.2',
                }}
              >
                Initiate Your Commodity Order or Trade Inquiry Today
              </h2>
              <p
                style={{
                  color: '#cbd5e1',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '2.25rem',
                }}
              >
                Connect directly with our international trading desk for sample requests, official FOB/CIF price quotes,
                and custom consignment specifications.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="glass-button glass-button-primary" style={{ padding: '0.85rem 2.25rem' }}>
                  Contact Our Trade Desk <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="glass-button glass-button-secondary" style={{ padding: '0.85rem 2rem' }}>
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
