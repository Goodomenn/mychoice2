import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShieldCheck, Truck, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Imports() {
  const divisions = [
    {
      title: 'Ceramics & Sanitary Ware',
      desc: 'Importing high-end porcelain floor tiles, wall ceramics, and modern sanitary fixtures for luxury real estate developments, commercial towers, and hospitality projects across Ethiopia.',
      points: ['Direct factory partnerships in Europe and Asia', 'Rigorous water-absorption and load-bearing testing', 'Comprehensive supply for large infrastructure projects'],
    },
    {
      title: 'Industrial & Agro Chemicals',
      desc: 'Supplying certified fertilizers, protective compounds, water treatment chemicals, and raw ingredients to Ethiopian manufacturers, flower exporters, and agro-processors.',
      points: ['Full compliance with Ethiopian EPA standards', 'Certificate of Analysis (COA) with every lot', 'Secure bonded warehousing in Addis Ababa'],
    },
    {
      title: 'Medical Supplies & Equipment',
      desc: 'Partnering with certified global medical technology manufacturers to import diagnostic tools, clinic equipment, and disposable healthcare supplies into Ethiopia.',
      points: ['Ethiopian EFDA (Food and Drug Authority) compliant', 'Hospital-grade diagnostic devices', 'Reliable cold-chain handling when required'],
    },
    {
      title: 'Consumer Food & Beverage Commodities',
      desc: 'Importing high-demand consumer staples including refined edible sunflower and palm oils, wheat flour, and packaged food items to support national food security.',
      points: ['Quality inspection at port of origin', 'Bulk container and vessel charter shipments', 'Efficient inland multimodal distribution'],
    },
  ];

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Header Banner */}
      <section
        style={{
          padding: '5rem 0 3.5rem',
          background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.15) 0%, rgba(9, 13, 22, 0) 100%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <span className="glass-badge" style={{ color: '#fbbf24', borderColor: 'rgba(251, 191, 36, 0.3)' }}>
            <Building2 size={14} /> National Infrastructure Support
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
            Import <span style={{ color: '#f59e0b' }}>Supply Solutions</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Supplying Ethiopian industries, real estate developers, and healthcare facilities with top-tier international
            commodities, raw materials, and finished goods.
          </p>
        </div>
      </section>

      {/* Main Divisions */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {divisions.map((div, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.5rem 2rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Package size={24} color="#f59e0b" />
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
                  {div.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {div.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {div.points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} color="#22c55e" /> {pt}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="glass-button glass-button-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
                >
                  Partner With Import Division <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
