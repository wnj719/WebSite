const Partners = () => {
  const partners = [
    { id: 1, alt: '협력사 1' },
    { id: 2, alt: '협력사 2' },
    { id: 3, alt: '협력사 3' },
    { id: 4, alt: '협력사 4' },
    { id: 5, alt: '협력사 5' },
    { id: 6, alt: '협력사 6' },
    { id: 7, alt: '협력사 7' },
    { id: 8, alt: '협력사 8' }
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2 className="section-title">함께한 협력사</h2>

        <div className="partners-slider">
          <div className="partners-track">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-item">
                <img
                  src="/api/placeholder/180/100"
                  alt={partner.alt}
                  className="partner-logo"
                />
              </div>
            ))}
            {partners.map((partner) => (
              <div key={`${partner.id}-duplicate`} className="partner-item">
                <img
                  src="/api/placeholder/180/100"
                  alt={partner.alt}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;