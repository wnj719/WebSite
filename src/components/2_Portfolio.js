import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'exhibition',
      title: '디지털 아트 전시',
      image: '/api/placeholder/600/400',
      alt: '전시 프로젝트 1'
    },
    {
      id: 2,
      category: 'media-art',
      title: '인터랙티브 미디어',
      image: '/api/placeholder/600/400',
      alt: '미디어아트 프로젝트 1'
    },
    {
      id: 3,
      category: 'solution',
      title: 'AR 전시 솔루션',
      image: '/api/placeholder/600/400',
      alt: '솔루션 프로젝트 1'
    },
    {
      id: 4,
      category: 'exhibition',
      title: '공간 매핑 프로젝션',
      image: '/api/placeholder/600/400',
      alt: '전시 프로젝트 2'
    },
    {
      id: 5,
      category: 'media-art',
      title: '사운드 아트',
      image: '/api/placeholder/600/400',
      alt: '미디어아트 프로젝트 2'
    },
    {
      id: 6,
      category: 'solution',
      title: '몰입형 VR 체험',
      image: '/api/placeholder/600/400',
      alt: '솔루션 프로젝트 2'
    }
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">포트폴리오</h2>

        <div className="portfolio-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            전체
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'exhibition' ? 'active' : ''}`}
            onClick={() => handleFilterChange('exhibition')}
          >
            전시
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'media-art' ? 'active' : ''}`}
            onClick={() => handleFilterChange('media-art')}
          >
            미디어아트
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'solution' ? 'active' : ''}`}
            onClick={() => handleFilterChange('solution')}
          >
            솔루션
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="portfolio-item" data-category={item.category}>
              {index === 0 && (
                <div
                  className="portfolio-placeholder"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#888',
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    zIndex: 1,
                  }}
                >
                  PTAH LABS<br />Exhibition Sample
                </div>
              )}
              <img
                src={item.image}
                alt={item.alt}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-category">{item.category === 'media-art' ? '미디어아트' : item.category === 'exhibition' ? '전시' : '솔루션'}</p>
                <a href="#" className="btn">자세히 보기</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;