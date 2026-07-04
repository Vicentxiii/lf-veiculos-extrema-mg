import React from 'react';
import LogoLoop from './LogoLoop';
import { SiFord, SiHonda, SiFiat, SiHyundai, SiVolkswagen, SiChevrolet, SiToyota, SiNissan, SiJeep, SiBmw, SiAudi, SiPorsche, SiVolvo, SiKia, SiMitsubishi, SiPeugeot, SiRenault, SiMaserati, SiFerrari, SiLamborghini, SiMini, SiChrysler } from 'react-icons/si';

const carBrands = [
  { node: <SiFord />, title: "Ford" },
  { node: <SiHonda />, title: "Honda" },
  { node: <SiFiat />, title: "Fiat" },
  { node: <SiHyundai />, title: "Hyundai" },
  { node: <SiVolkswagen />, title: "Volkswagen" },
  { node: <SiChevrolet />, title: "Chevrolet" },
  { node: <SiToyota />, title: "Toyota" },
  { node: <SiNissan />, title: "Nissan" },
  { node: <SiJeep />, title: "Jeep" },
  { node: <SiBmw />, title: "BMW" },
  { node: <SiAudi />, title: "Audi" },
  { node: <SiPorsche />, title: "Porsche" },
  { node: <SiVolvo />, title: "Volvo" },
  { node: <SiKia />, title: "Kia" },
  { node: <SiMitsubishi />, title: "Mitsubishi" },
  { node: <SiPeugeot />, title: "Peugeot" },
  { node: <SiRenault />, title: "Renault" },
  { node: <SiMaserati />, title: "Maserati" },
  { node: <SiFerrari />, title: "Ferrari" },
  { node: <SiLamborghini />, title: "Lamborghini" },
  { node: <SiMini />, title: "Mini" },
  { node: <SiChrysler />, title: "Chrysler" },
];

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
        <h1>COMPRE SEU <span className="accent">VEÍCULO</span> NOVO OU <span className="redline">SEMINOVO</span><br/><span className="redline">EM EXTREMA</span></h1>
        <p className="sub">Curadoria de veículos seminovos selecionados peça por peça. Na LF Veículos, cada carro do pátio passa por inspeção completa antes de chegar até você — sofisticação, procedência e potência em cada detalhe.</p>
        <div className="hero-ctas">
          <a className="btn-glass solid" href="#estoque">Ver Estoque Completo</a>
          <a className="btn-glass" href="https://wa.me/5535998259732" target="_blank" rel="noopener noreferrer">Agendar Visita</a>
        </div>
      </div>

      <div className="hero-meta">
        <LogoLoop
          logos={carBrands}
          speed={80}
          direction="left"
          logoHeight={42}
          gap={60}
          hoverSpeed={20}
          scaleOnHover={true}
        />
      </div>

      <div className="scroll-cue"><div className="line"></div></div>
    </section>
  );
};

export default Hero;
