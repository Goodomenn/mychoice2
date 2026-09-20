import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Wheat, Package, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      category: 'coffee',
      title: 'Sidama Washed & Natural (Grade 1 & 2)',
      tag: 'Specialty Arabica',
      specs: ['Altitude: 1,900 - 2,200 MASL', 'Cup Profile: Floral, citrus, sweet berry notes', 'Moisture: 10.5% - 11.5%', 'Process: Fully Washed / Natural Sun-dried'],
      desc: 'World-renowned for its vibrant citrus acidity, rich body, and floral jasmine bouquet. Harvested from ancient heirloom trees in the Sidama highlands.',
      icon: Coffee,
      color: '#22c55e',
    },
    {
      category: 'coffee',
      title: 'Yirgacheffe Speciality (Grade 1 & 2)',
      tag: 'Micro-Lot Arabica',
      specs: ['Altitude: 1,850 - 2,100 MASL', 'Cup Profile: Bergamot, lemon zest, tea-like body', 'Moisture: < 11.5%', 'Process: Washed & Natural'],
      desc: 'Regarded as one of the most distinctive coffees globally. Offers an extraordinary aromatic profile with delicate body and lemongrass finish.',
      icon: Coffee,
      color: '#22c55e',
    },
    {
      category: 'coffee',
      title: 'Guji Highlands Heirloom',
      tag: 'Specialty Grade',
      specs: ['Altitude: 2,000 - 2,300 MASL', 'Cup Profile: Ripe stone fruit, peach, dark chocolate', 'Moisture: 11.0%', 'Process: Natural / Anaerobic options'],
      desc: 'Emerging from dense rainforest soils, Guji coffees produce intense sweetness, heavy fruit forward notes, and balanced acidity.',
      icon: Coffee,
      color: '#22c55e',
    },
    {
      category: 'oilseeds',
      title: 'Humera White Sesame Seeds',
      tag: 'World Standard',
      specs: ['Purity: Min 99.5%', 'Oil Content: 50% - 54%', 'Free Fatty Acids (FFA): Max 1.5%', 'Moisture: Max 6.0%'],
      desc: 'Renowned worldwide for its bright whitish color, large seed size, and distinctly sweet aroma. The premier choice for bakery and tahini producers in Japan, Israel, and Europe.',
      icon: Wheat,
      color: '#f59e0b',
    },
    {
      category: 'oilseeds',
      title: 'Wollega Mixed Sesame Seeds',
      tag: 'High Oil Yield',
      specs: ['Purity: Min 99.0%', 'Oil Content: 52% - 55%', 'Moisture: Max 6.5%', 'Natural Machine Cleaned'],
      desc: 'Brownish/amber sesame seeds characterized by very high oil extraction yield, highly prized by industrial oil crushers and confectioners.',
      icon: Wheat,
      color: '#f59e0b',
    },
    {
      category: 'oilseeds',
      title: 'Ethiopian Niger Seeds (Neug)',
      tag: 'Birdseed & Oil',
      specs: ['Purity: Min 98.5%', 'Oil Content: 38% - 42%', 'Moisture: Max 7.0%', 'Foreign Matter: Max 1.5%'],
      desc: 'Indigenous Ethiopian oilseed rich in linoleic acid, widely exported for bird feed formulations and premium industrial edible oil processing.',
      icon: Wheat,
      color: '#f59e0b',
    },
    {
      category: 'pulses',
      title: 'Desi & Kabuli Chickpeas',
      tag: 'Protein Rich',
      specs: ['Size: 7mm - 9mm (Kabuli)', 'Purity: Min 99.0%', 'Moisture: Max 11.0%', 'Damaged/Splits: Max 2.0%'],
      desc: 'Carefully sorted and machine cleaned chickpeas, with uniform caliber, high nutritional content, and minimal cooking time.',
      icon: Package,
      color: '#38bdf8',
    },
    {
      category: 'pulses',
      title: 'Red Speckled & Kidney Beans',
      tag: 'Canning Grade',
      specs: ['Purity: Min 99.0%', 'Moisture: Max 12.0%', 'Machine Cleaned & Hand Picked Selected (HPS)', 'Count: 180-220/100g'],
      desc: 'Sturdy, vibrant kidney beans favored by global canning manufacturers and culinary packaging brands for their uniform texture and color integrity.',
      icon: Package,
      color: '#38bdf8',
    },
    {
      category: 'spices',
      title: 'Dried Split Ginger & Turmeric',
      tag: 'Aromatic & Pure',
      specs: ['Purity: Min 98.0%', 'Volatile Oil: Min 1.5% - 2.5%', 'Curcumin (Turmeric): Min 4.5%', 'Moisture: Max 10.0%'],
      desc: 'Sun-dried high-potency ginger and finger turmeric, prized by international spice extractors, herbal tea blenders, and pharmaceutical producers.',
      icon: Sparkles,
      color: '#e11d48',
    },
  ];

  const filtered = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Header Banner */}
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
            <Coffee size={14} /> Ethiopian Agricultural Portfolio
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
            Export <span style={{ color: '#22c55e' }}>Products Catalog</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Explore our laboratory-graded green coffee beans, high-purity oilseeds, protein-rich pulses, and authentic spices.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginTop: '2.5rem',
            }}
          >
            {[
              { id: 'all', label: 'All Commodities' },
              { id: 'coffee', label: 'Arabica Coffee' },
              { id: 'oilseeds', label: 'Sesame & Oilseeds' },
              { id: 'pulses', label: 'Pulses & Beans' },
              { id: 'spices', label: 'Natural Spices' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  background: activeCategory === tab.id ? '#22c55e' : 'rgba(255, 255, 255, 0.08)',
                  color: activeCategory === tab.id ? '#090d16' : '#cbd5e1',
                  border: activeCategory === tab.id ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filtered.map((prod, idx) => {
              const Icon = prod.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `${prod.color}18`,
                          border: `1px solid ${prod.color}33`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={24} color={prod.color} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          padding: '0.2rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: '#e2e8f0',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
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

                    <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                      {prod.desc}
                    </p>

                    <div
                      style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#f59e0b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        Technical Specifications:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {prod.specs.map((s, i) => (
                          <li key={i} style={{ fontSize: '0.825rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                            <Check size={12} color="#22c55e" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="glass-button glass-button-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem' }}
                  >
                    Inquire For Price & Samples <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
