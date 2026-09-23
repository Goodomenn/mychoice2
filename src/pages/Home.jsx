import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Layers, 
  Users, 
  Phone, 
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  const actualProducts = [
    {
      id: 'nihug',
      number: '01',
      title: 'Nihug (Ethiopian Niger Seed)',
      localName: 'ኑግ (Noug / Nihug)',
      category: 'Oilseed Commodity',
      desc: 'Historic Ethiopian highland oilseed yielding 38% to 42% edible oil with rich linoleic essential fatty acids. Highly sought after worldwide as premier high-energy wild bird seed ("Nyjer").',
      image: '/products/nihug.png',
      badgeColor: '#f59e0b',
      link: '/products#nihug',
      highlights: ['38% – 42% Oil Content', 'Min 98.5% Purity', 'Gondar & Gojjam Origin'],
    },
    {
      id: 'corn',
      number: '02',
      title: 'Corn (Ethiopian Maize)',
      localName: 'በቆሎ (Bekolo)',
      category: 'Cereal & Grain Crop',
      desc: 'Sun-ripened golden field maize with firm kernels and high starch content. Sourced from prime grain belts for industrial milling, animal feed formulations, and food manufacturing.',
      image: '/products/corn.png',
      badgeColor: '#fbbf24',
      link: '/products#corn',
      highlights: ['Min 99.0% Purity', 'Max 13% Moisture', 'Bako & Gojjam Belts'],
    },
    {
      id: 'cotton',
      number: '03',
      title: 'Raw Cotton (Ginned Lint)',
      localName: 'ጥጥ (Tit)',
      category: 'Natural Fiber Crop',
      desc: 'Naturally brilliant white ginned lint cotton harvested from fertile irrigated river valleys. Exceptional 28–30mm staple length and high tensile strength for global textile spinning mills.',
      image: '/products/cotton.png',
      badgeColor: '#22c55e',
      link: '/products#cotton',
      highlights: ['28–30mm Staple Length', '28–31 GPT Strength', 'Awash & Afar Basins'],
    },
    {
      id: 'green-gram',
      number: '04',
      title: 'Green Gram (Mung Bean)',
      localName: 'ማሾ (Masho)',
      category: 'High-Protein Pulse',
      desc: 'Small, glossy cylindrical green pulse legumes loaded with plant protein. Highly exported to Asian and Middle Eastern markets for fresh bean sprouting, noodles, and culinary processing.',
      image: '/products/green-gram.png',
      badgeColor: '#10b981',
      link: '/products#green-gram',
      highlights: ['3.2–3.8mm Caliber', 'High Sprout Germination', 'North Shewa Origin'],
    },
    {
      id: 'sorghum',
      number: '05',
      title: 'Sorghum (Highland Sorghum)',
      localName: 'ማሽላ (Mashilla)',
      category: 'Ancient Cereal Grain',
      desc: 'Ancient drought-resilient 100% gluten-free grain rich in antioxidants, iron, and dietary fiber. Ideal for healthy baking flour blends, commercial brewing, and animal nutrition.',
      image: '/products/sorghum.png',
      badgeColor: '#d97706',
      link: '/products#sorghum',
      highlights: ['100% Gluten-Free', 'Min 98.5% Purity', 'Wollo & Hararghe Plateaus'],
    },
  ];

  const valueProps = [
    {
      title: 'Direct Regional Cooperative Sourcing',
      desc: 'We work hand-in-hand with agricultural farming clusters across Amhara, Oromia, Afar, and Shewa, ensuring verified origin traceability and ethical fair remuneration.',
      icon: Layers,
    },
    {
      title: 'Laboratory Tested & Graded',
      desc: 'Every commodity consignment is mechanically cleaned, air-sifted, moisture-controlled, and certified to meet European, Asian, and American import specifications.',
      icon: ShieldCheck,
    },
    {
      title: 'Multimodal Djibouti Export Logistics',
      desc: 'End-to-end multimodal container coordination from central Ethiopian bonded terminals through Djibouti Port directly to your destination harbor.',
      icon: Truck,
    },
    {
      title: 'Reliable International Contracts',
      desc: 'Transparent Incoterms (FOB, CFR, CIF), pre-shipment sample dispatches via international couriers, and secure institutional banking terms.',
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
          minHeight: '82vh',
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
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'rgba(21, 128, 61, 0.16)',
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
            background: 'rgba(245, 158, 11, 0.13)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            {/* Top Glass Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="glass-badge">
                <Sparkles size={15} /> Premier Ethiopian Agricultural Export House
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 5vw, 4.1rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Exporting Ethiopia's Finest <span style={{ color: '#22c55e' }}>Nihug, Corn, Cotton,</span>{' '}
              <span style={{ color: '#f59e0b' }}>Green Gram & Sorghum</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '760px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              Direct source supply of laboratory-graded oilseeds, grain cereals, natural fibers, and protein-rich pulses.
              Cleaned, standardized, and packaged in Ethiopia for international markets.
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
                View All 5 Export Products <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="glass-button glass-button-secondary">
                Request Trade Quotation (FOB / CIF)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMODITIES SHOWCASE ================= */}
      <section className="section" style={{ position: 'relative', zIndex: 20 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct From Source</span>
            <h2 className="section-title">Our 5 Core Export Products</h2>
            <p className="section-subtitle">
              Sustainably cultivated in the fertile agricultural valleys of Ethiopia, mechanically cleaned, and prepared for
              export across global commercial ports.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.25rem',
            }}
          >
            {actualProducts.map((prod) => (
              <div
                key={prod.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                }}
              >
                {/* Product Image Cover */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    background: '#0f172a',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Top Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(9, 13, 22, 0.85)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: `1px solid ${prod.badgeColor}77`,
                      color: prod.badgeColor,
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                    }}
                  >
                    Product {prod.number}
                  </div>

                  {/* Category Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      right: '0.85rem',
                      background: 'rgba(9, 13, 22, 0.85)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {prod.category}
                  </div>
                </div>

                {/* Product Content Body */}
                <div
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      {prod.localName}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: '800',
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                        lineHeight: '1.3',
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

                    {/* Highlights Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                      {prod.highlights.map((h, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px',
                            color: '#e2e8f0',
                            fontWeight: '500',
                          }}
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <Link
                      to={prod.link}
                      style={{
                        color: prod.badgeColor,
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      Read Full Details <ArrowRight size={15} />
                    </Link>

                    <Link
                      to={`/contact?product=${encodeURIComponent(prod.title)}`}
                      className="glass-button glass-button-primary"
                      style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quality & Sourcing Integrity</span>
            <h2 className="section-title">Why Partner With Us?</h2>
            <p className="section-subtitle">
              We operate with rigorous quality control, full Ethiopian trade licensing, and established transport routes to
              deliver reliability on every shipment.
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
                'radial-gradient(circle at center, rgba(21, 128, 61, 0.25) 0%, rgba(15, 23, 42, 0.85) 100%)',
              border: '1px solid rgba(134, 239, 172, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <span className="glass-badge" style={{ marginBottom: '1.25rem' }}>
                <CheckCircle2 size={14} /> Ready for Global Commodity Orders
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
                Connect With Our Commodities Export Desk
              </h2>
              <p
                style={{
                  color: '#cbd5e1',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '2.25rem',
                }}
              >
                Inquire about current spot rates, upcoming harvest contracts, sample dispatches, and customized container
                bagging for Nihug, Corn, Cotton, Green Gram, and Sorghum.
              </p>

              {/* Direct Contacts Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '2.5rem',
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={15} color="#22c55e" /> +251-116-67-57-76
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={15} color="#38bdf8" /> mychoiceethiopia@gmail.com
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={15} color="#f59e0b" /> Gurdsholla, Dawit Building, Addis Ababa
                </span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="glass-button glass-button-primary" style={{ padding: '0.85rem 2.25rem' }}>
                  Submit Trade Inquiry <ArrowRight size={18} />
                </Link>
                <Link to="/products" className="glass-button glass-button-secondary" style={{ padding: '0.85rem 2rem' }}>
                  Explore Product Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
