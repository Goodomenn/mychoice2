import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  FileText
} from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'nihug',
      number: '01',
      title: 'Nihug (Ethiopian Niger Seed)',
      localName: 'ኑግ (Noug / Nihug)',
      scientificName: 'Guizotia abyssinica',
      category: 'Oilseed Commodity',
      badgeColor: '#f59e0b',
      image: '/products/nihug.png',
      whatItIs: 'An indigenous Ethiopian oilseed cultivated in the temperate highland plateaus, celebrated as one of the country’s most historic and vital oil crops.',
      explanation: 'Nihug produces a light, clear, highly nutritious edible oil with a nutty aroma and rich concentration of linoleic essential fatty acids (yielding 38% to 42% high-grade oil). Globally, it is in strong continuous demand across North America and Europe as the premier high-energy component for wild bird feed (commonly known as "Nyjer"). Sourced from dedicated farming unions across the fertile soils of Gondar, Gojjam, and Wollega, our Nihug is machine-cleaned, air-sifted, and tested to meet stringent international purity and moisture limits.',
      specs: [
        { label: 'Purity', value: 'Min 98.5% – 99.0%' },
        { label: 'Oil Content', value: '38% – 42%' },
        { label: 'Moisture Content', value: 'Max 7.0%' },
        { label: 'Free Fatty Acids (FFA)', value: 'Max 1.5%' },
        { label: 'Foreign Matter', value: 'Max 1.0%' },
        { label: 'Origin', value: 'Gondar, Gojjam & Wollega Highlands' },
      ],
      packaging: '50kg or 25kg PP bags, custom branded, or bulk container liners.',
    },
    {
      id: 'corn',
      number: '02',
      title: 'Corn (Ethiopian Maize)',
      localName: 'በቆሎ (Bekolo)',
      scientificName: 'Zea mays',
      category: 'Cereal & Grain Crop',
      badgeColor: '#fbbf24',
      image: '/products/corn.png',
      whatItIs: 'High-yield golden field corn harvested from Ethiopia’s prime grain-producing valleys, naturally sun-dried and rich in natural starch and nutrients.',
      explanation: 'Ethiopian corn is known for its firm golden yellow kernels, natural sweet taste, and high carbohydrate content. It serves as a vital staple commodity across East Africa and international trading hubs for industrial milling, animal feed formulations, ethanol synthesis, and food processing. Harvested under the natural highland sunshine, our maize is mechanically cleaned, sorted to eliminate broken grains and foreign dust, and strictly tested for moisture control and aflatoxin compliance.',
      specs: [
        { label: 'Purity', value: 'Min 99.0%' },
        { label: 'Moisture Content', value: 'Max 13.0%' },
        { label: 'Broken Kernels', value: 'Max 2.5%' },
        { label: 'Foreign Matter', value: 'Max 1.0%' },
        { label: 'Aflatoxin Control', value: 'Compliant with international food standards' },
        { label: 'Origin', value: 'Bako, Jimma & East Gojjam Belts' },
      ],
      packaging: '50kg or 100kg new woven polypropylene (PP) bags, or 20ft/40ft bulk container.',
    },
    {
      id: 'cotton',
      number: '03',
      title: 'Raw Cotton (Ginned Lint)',
      localName: 'ጥጥ (Tit)',
      scientificName: 'Gossypium hirsutum',
      category: 'Natural Fiber Crop',
      badgeColor: '#22c55e',
      image: '/products/cotton.png',
      whatItIs: 'Naturally brilliant white ginned lint cotton harvested from Ethiopia’s expansive low-lying irrigated agricultural river basins.',
      explanation: 'Ethiopian raw cotton is highly valued by global textile manufacturers and spinning mills for its high fiber tensile strength, consistent staple length, and clean white luster. Grown in optimal tropical sunshine with pure volcanic river irrigation in the Awash and Afar basins, the seed cotton is carefully picked, precision-ginned to remove seeds and plant residue, and pressed into standard high-density export bales with low trash content and zero chemical synthetic contaminants.',
      specs: [
        { label: 'Staple Length', value: '28mm – 30mm (Medium-Long Staple)' },
        { label: 'Micronaire', value: '3.8 – 4.5' },
        { label: 'Tensile Strength', value: '28 – 31 GPT (grams per tex)' },
        { label: 'Trash Content', value: 'Max 3.0%' },
        { label: 'Moisture Content', value: 'Max 8.0%' },
        { label: 'Origin', value: 'Awash Valley, Afar & Gambella Basins' },
      ],
      packaging: 'Standard export compressed bales (~220kg - 230kg) bound with high-tensile wire.',
    },
    {
      id: 'green-gram',
      number: '04',
      title: 'Green Gram (Mung Bean)',
      localName: 'ማሾ (Masho)',
      scientificName: 'Vigna radiata',
      category: 'High-Protein Pulse',
      badgeColor: '#10b981',
      image: '/products/green-gram.png',
      whatItIs: 'Small, glossy cylindrical green pulse legumes grown in eastern and central Ethiopia, loaded with plant-based protein, dietary fiber, and essential minerals.',
      explanation: 'Locally known as "Masho", Ethiopian Green Gram has emerged as one of the country’s most sought-after agricultural export commodities. Celebrated globally in Asian, Middle Eastern, and European markets for bean sprout production, plant protein extraction, healthy noodles, and savory culinary dishes. Our green grams boast bright natural coloration, fast cooking times, high germination rates for commercial sprouters, and are meticulously cleaned using modern gravimetric sorting and hand-picking (HPS).',
      specs: [
        { label: 'Caliber / Seed Size', value: '3.2mm – 3.8mm uniform caliber' },
        { label: 'Purity', value: 'Min 99.0%' },
        { label: 'Moisture Content', value: 'Max 10.5%' },
        { label: 'Damaged / Splits', value: 'Max 1.5%' },
        { label: 'Foreign Matter', value: 'Max 0.5%' },
        { label: 'Origin', value: 'Shoa Robit, North Shewa & Hararghe' },
      ],
      packaging: '25kg or 50kg export-grade PP bags or multi-wall craft paper bags.',
    },
    {
      id: 'sorghum',
      number: '05',
      title: 'Sorghum (Highland Sorghum)',
      localName: 'ማሽላ (Mashilla)',
      scientificName: 'Sorghum bicolor',
      category: 'Ancient Cereal Grain',
      badgeColor: '#d97706',
      image: '/products/sorghum.png',
      whatItIs: 'A drought-resilient ancient cereal grain with dense panicles of nutritious seeds, deeply rooted in Ethiopian agricultural heritage.',
      explanation: 'Naturally 100% gluten-free and packed with phenolic antioxidants, iron, calcium, and complex fibers, Ethiopian Sorghum is experiencing soaring international popularity. Used for health flours, premium commercial brewing, gluten-free bakery blends, and animal nutrition concentrates. Grown on pristine dryland highland soils without synthetic intensive fertilizers, our sorghum is carefully de-hulled, machine cleaned, and inspected for uniform grain structure and zero pest infestation.',
      specs: [
        { label: 'Purity', value: 'Min 98.5%' },
        { label: 'Moisture Content', value: 'Max 12.0%' },
        { label: 'Foreign Matter', value: 'Max 1.5%' },
        { label: 'Broken Grains', value: 'Max 2.0%' },
        { label: 'Insect / Weevil Free', value: '100% Fumigated & Verified' },
        { label: 'Origin', value: 'Wollo, Hararghe & Tigray Valleys' },
      ],
      packaging: '50kg or 100kg heavy-duty PP bags, palletized or containerized.',
    },
  ];

  return (
    <div style={{ paddingBottom: '7rem' }}>
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
            <Sparkles size={14} /> Official Agricultural Export Catalog
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
            Our Export <span style={{ color: '#22c55e' }}>Products</span>
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.15rem',
              maxWidth: '720px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.65',
            }}
          >
            Directly sourced from cooperative farms across Ethiopia, sorted and cleaned in certified facilities,
            and delivered to global ports with full traceability and export documentation.
          </p>

          {/* Quick jump anchor navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.6rem',
              flexWrap: 'wrap',
            }}
          >
            {products.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="glass-button glass-button-secondary"
                style={{
                  fontSize: '0.85rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                }}
              >
                <span style={{ color: p.badgeColor, fontWeight: '700' }}>{p.number}.</span> {p.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STACKED PRODUCTS SECTIONS ================= */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {products.map((item, index) => {
            const isReversed = index % 2 === 1; // Alternating layout for aesthetic flow

            return (
              <div
                key={item.id}
                id={item.id}
                className="glass-card"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 3rem)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  scrollMarginTop: '120px',
                }}
              >
                <div
                  className={`product-section-grid ${isReversed ? 'grid-reversed' : ''}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 420px) 1fr',
                    gap: 'clamp(2rem, 3.5vw, 3.5rem)',
                    alignItems: 'center',
                  }}
                >
                  {/* Product Image Column */}
                  <div style={{ order: isReversed ? 2 : 1 }}>
                    <div
                      style={{
                        position: 'relative',
                        borderRadius: '1.25rem',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                        background: '#0f172a',
                        aspectRatio: '1 / 1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                          display: 'block',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />

                      {/* Number Overlay Tag */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          background: 'rgba(9, 13, 22, 0.85)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          border: `1px solid ${item.badgeColor}66`,
                          color: item.badgeColor,
                          fontWeight: '800',
                          fontSize: '0.9rem',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '9999px',
                        }}
                      >
                        Product {item.number}
                      </div>

                      {/* Category Tag */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '1rem',
                          right: '1rem',
                          background: 'rgba(9, 13, 22, 0.85)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {item.category}
                      </div>
                    </div>
                  </div>

                  {/* Product Explanation & Details Column */}
                  <div style={{ order: isReversed ? 1 : 2 }}>
                    {/* Header tags */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          padding: '0.2rem 0.7rem',
                          borderRadius: '9999px',
                          background: `${item.badgeColor}22`,
                          color: item.badgeColor,
                          border: `1px solid ${item.badgeColor}55`,
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.category}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>
                        {item.scientificName}
                      </span>
                    </div>

                    {/* Main Title & Local Name */}
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)',
                        fontWeight: '800',
                        color: '#ffffff',
                        marginBottom: '0.35rem',
                        lineHeight: '1.2',
                      }}
                    >
                      {item.title}
                    </h2>
                    <div style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                      Local Origin: {item.localName}
                    </div>

                    {/* What It Is Card */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderLeft: `4px solid ${item.badgeColor}`,
                        borderRadius: '0.75rem',
                        padding: '1rem 1.25rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          fontWeight: '700',
                          color: item.badgeColor,
                          letterSpacing: '0.05em',
                          marginBottom: '0.35rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <ShieldCheck size={15} /> What It Is
                      </div>
                      <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        {item.whatItIs}
                      </p>
                    </div>

                    {/* Detailed Explanation */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          fontWeight: '700',
                          color: '#cbd5e1',
                          letterSpacing: '0.05em',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <FileText size={15} color="#22c55e" /> Detailed Explanation & Export Value
                      </div>
                      <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.75', margin: 0 }}>
                        {item.explanation}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link
                        to={`/contact?product=${encodeURIComponent(item.title)}`}
                        className="glass-button glass-button-primary"
                        style={{ fontSize: '0.9rem', padding: '0.7rem 1.6rem' }}
                      >
                        Inquire About {item.title.split(' ')[0]} <ArrowRight size={16} />
                      </Link>

                      <Link
                        to="/contact"
                        className="glass-button glass-button-secondary"
                        style={{ fontSize: '0.9rem', padding: '0.7rem 1.4rem' }}
                      >
                        Request Sample Dispatch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= INQUIRY CTA BANNER ================= */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '3.5rem 2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(21, 128, 61, 0.25) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(134, 239, 172, 0.3)',
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
              Need Quotations or Custom Consignment Specs?
            </h3>
            <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
              We furnish prospective buyers with laboratory test sheets, fumigation certificates, certificate of origin,
              and fast international air-freight samples.
            </p>
            <Link to="/contact" className="glass-button glass-button-primary" style={{ padding: '0.85rem 2.25rem' }}>
              Contact Our Trade Desk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Responsive Grid Override for Mobile */}
      <style>{`
        @media (max-width: 900px) {
          .product-section-grid {
            grid-template-columns: 1fr !important;
          }
          .product-section-grid > div {
            order: 1 !important;
          }
          .product-section-grid > div:nth-child(2) {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  );
}
