import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">프타 랩스 (PTAH LABS)</h1>
        <p className="hero-subtitle">
          미디어아트와 전시 솔루션을 통해 혁신적인 디지털 경험을 창조합니다
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn">포트폴리오 보기</a>
          <a href="#contact" className="btn btn-secondary">문의하기</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;