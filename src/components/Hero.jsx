import React from 'react';
import BorderGlow from './BorderGlow';
const Hero = () => {
  return (
    <section className="hero">
      <div className="stripes">
        <div className="stripe"></div><div className="stripe"></div><div className="stripe"></div>
        <div className="stripe"></div><div className="stripe"></div><div className="stripe"></div>
      </div>

      <div className="hero-car">
      </div>

      <div className="hero-content">
        <div className="eyebrow">Extrema · Minas Gerais</div>
        <h1>COMPRE<br/><span className="accent">VEICULOS</span> <span className="redline">EM EXTREMA</span></h1>
        <p className="sub">Curadoria de veículos seminovos selecionados peça por peça. Na LF Veículos, cada carro do pátio passa por inspeção completa antes de chegar até você — sofisticação, procedência e potência em cada detalhe.</p>
        <div className="hero-ctas">
          <a className="btn-glass solid" href="#estoque">Ver Estoque Completo</a>
          <a className="btn-glass" href="https://wa.me/5535998259732" target="_blank" rel="noopener noreferrer">Agendar Visita</a>
        </div>
      </div>

      <div className="hero-meta">
        <BorderGlow glowColor="350 80 40" backgroundColor="rgba(246,244,241,0.05)" borderRadius={4} glowRadius={30} edgeSensitivity={20} className="m" colors={['#e01a35', '#b8102a', '#ff4d6d']}>
          <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '8px' }}>
            <b>120 +</b>
            <span>Veículos no pátio</span>
          </div>
        </BorderGlow>
        <BorderGlow glowColor="350 80 40" backgroundColor="rgba(246,244,241,0.05)" borderRadius={4} glowRadius={30} edgeSensitivity={20} className="m" colors={['#e01a35', '#b8102a', '#ff4d6d']}>
          <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '8px' }}>
            <b>15 +</b>
            <span>Anos de mercado nacional</span>
          </div>
        </BorderGlow>
        <BorderGlow glowColor="350 80 40" backgroundColor="rgba(246,244,241,0.05)" borderRadius={4} glowRadius={30} edgeSensitivity={20} className="m" colors={['#e01a35', '#b8102a', '#ff4d6d']}>
          <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '8px' }}>
            <b>4.9 ★</b>
            <span>Avaliação de clientes</span>
          </div>
        </BorderGlow>
        <BorderGlow glowColor="350 80 40" backgroundColor="rgba(246,244,241,0.05)" borderRadius={4} glowRadius={30} edgeSensitivity={20} className="m" colors={['#e01a35', '#b8102a', '#ff4d6d']}>
          <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '8px' }}>
            <b>até 18:30</b>
            <span>Atendimento hoje</span>
          </div>
        </BorderGlow>
      </div>

      <div className="scroll-cue"><div className="line"></div></div>
    </section>
  );
};

export default Hero;
