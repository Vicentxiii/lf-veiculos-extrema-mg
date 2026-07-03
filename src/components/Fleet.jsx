import React, { useMemo } from 'react';
import Carousel from './Carousel';

const fleet = [
  {make:'Ford', name:'Fiesta SE Sedan', specs:['Manual','1.6 Flex','138.007 km'], body:'sedan'},
  {make:'Honda', name:'Civic EXL', specs:['Automático','2.0 Flex','97.000 km'], body:'sedan'},
  {make:'Honda', name:'HR-V EX', specs:['Automático','1.8 Flex','195.000 km'], body:'suv'},
  {make:'Fiat', name:'Toro Endurance', specs:['Manual','1.8 Flex','89.000 km'], body:'pickup'},
  {make:'Hyundai', name:'HB20 Comfort Plus', specs:['Manual','1.6 Flex','139.000 km'], body:'hatch'},
  {make:'Volkswagen', name:'Fox GII', specs:['Manual','1.0 Flex','139.000 km'], body:'hatch'},
  {make:'Fiat', name:'Fastback Audace', specs:['Manual','1.6 Flex','42.000 km'], body:'suv'},
  {make:'Chevrolet', name:'Prisma LT', specs:['Automática','1.4 Flex','139.000 km'], body:'sedan'},
  {make:'Volkswagen', name:'Polo Comfortline', specs:['Automático','1.0 TSI Flex','81.000 km'], body:'hatch'},
  {make:'Volkswagen', name:'Virtus MSI', specs:['Automático','1.6 Flex','194.250 km'], body:'sedan'},
  {make:'Chevrolet', name:'S-10 High Country', specs:['Automática','2.8 4x4 Diesel','105.000 km'], body:'pickup'},
  {make:'Fiat', name:'Toro Volcano', specs:['Automática','2.0 4x4 Diesel','76.900 km'], body:'pickup'},
];

const icons = {
  sedan: <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 62 L22 62 L34 38 C40 30 52 26 66 26 L128 26 C142 26 152 30 160 40 L176 62 L190 62 L190 70 L10 70 Z" fill="#efece8" opacity="0.92"/><path d="M56 40 L70 30 L124 30 L142 40 Z" fill="#0a0908" opacity="0.85"/><circle cx="52" cy="68" r="13" fill="#0a0908"/><circle cx="52" cy="68" r="6" fill="#efece8"/><circle cx="150" cy="68" r="13" fill="#0a0908"/><circle cx="150" cy="68" r="6" fill="#efece8"/><rect x="14" y="58" width="16" height="5" fill="#e01a35"/><rect x="172" y="58" width="14" height="5" fill="#e01a35"/></svg>,
  suv: <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 62 L20 62 L28 34 C34 26 46 22 62 22 L134 22 C150 22 162 26 170 36 L182 62 L192 62 L192 72 L8 72 Z" fill="#efece8" opacity="0.92"/><path d="M50 34 L64 24 L132 24 L152 36 Z" fill="#0a0908" opacity="0.85"/><circle cx="50" cy="70" r="14" fill="#0a0908"/><circle cx="50" cy="70" r="6.5" fill="#efece8"/><circle cx="152" cy="70" r="14" fill="#0a0908"/><circle cx="152" cy="70" r="6.5" fill="#efece8"/><rect x="12" y="58" width="16" height="5" fill="#e01a35"/><rect x="174" y="58" width="14" height="5" fill="#e01a35"/></svg>,
  pickup: <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 60 L18 60 L26 32 C31 25 42 21 56 21 L96 21 L96 60 L6 60Z" fill="#efece8" opacity="0.92"/><path d="M46 33 L58 24 L92 24 L92 33 Z" fill="#0a0908" opacity="0.85"/><rect x="96" y="34" width="98" height="26" fill="#efece8" opacity="0.92"/><rect x="102" y="38" width="86" height="4" fill="#0a0908" opacity="0.5"/><circle cx="46" cy="68" r="13" fill="#0a0908"/><circle cx="46" cy="68" r="6" fill="#efece8"/><circle cx="160" cy="68" r="13" fill="#0a0908"/><circle cx="160" cy="68" r="6" fill="#efece8"/><rect x="10" y="56" width="14" height="5" fill="#e01a35"/></svg>,
  hatch: <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 62 L26 62 L36 36 C41 28 52 24 66 24 L118 24 C132 24 142 30 148 42 L162 62 L184 62 L184 70 L14 70 Z" fill="#efece8" opacity="0.92"/><path d="M58 36 L70 27 L114 27 L130 40 Z" fill="#0a0908" opacity="0.85"/><circle cx="54" cy="68" r="13" fill="#0a0908"/><circle cx="54" cy="68" r="6" fill="#efece8"/><circle cx="146" cy="68" r="13" fill="#0a0908"/><circle cx="146" cy="68" r="6" fill="#efece8"/><rect x="18" y="58" width="14" height="5" fill="#e01a35"/><rect x="168" y="58" width="14" height="5" fill="#e01a35"/></svg>,
};

const Fleet = () => {
  // Map fleet data to Carousel expected format
  const carouselItems = useMemo(() => {
    return fleet.map((car, index) => {
      const msg = encodeURIComponent(`Olá! Tenho interesse no ${car.make} ${car.name} do pátio da LF Veículos.`);
      
      // Creating the description with specs, make, price and contact button
      const descriptionContent = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="make" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e01a35', fontWeight: 700 }}>
            {car.make}
          </div>
          
          <div className="car-specs" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {car.specs.map((s, i) => (
              <span key={i} style={{ fontSize: '11px', color: '#8f8a86', border: '1px solid rgba(246,244,241,0.12)', padding: '5px 10px', borderRadius: '20px', letterSpacing: '0.02em' }}>
                {s}
              </span>
            ))}
          </div>
          
          <div className="car-foot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(246,244,241,0.08)' }}>
            <div className="car-price" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="label" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#58534f' }}>Valor</div>
              <div className="value" style={{ fontFamily: '"Bebas Neue"', fontSize: '18px', color: '#f6f4f1', letterSpacing: '0.02em' }}>Sob consulta</div>
            </div>
            <a className="car-link" href={`https://wa.me/5535998259732?text=${msg}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#f6f4f1', display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 14px', border: '1px solid rgba(246,244,241,0.25)', background: 'rgba(246,244,241,0.05)', borderRadius: '999px', textDecoration: 'none' }}>
              Detalhes →
            </a>
          </div>
        </div>
      );

      return {
        id: index,
        title: car.name,
        description: descriptionContent,
        icon: icons[car.body]
      };
    });
  }, []);

  return (
    <section className="fleet" id="estoque" style={{ overflow: 'hidden' }}>
      <div className="section-head">
        <div>
          <span className="tag">Estoque selecionado</span>
          <h2>O pátio, em detalhe.</h2>
        </div>
        <p>Sedãs, SUVs, picapes e utilitários revisados. Quilometragem real, valores sob consulta e negociação facilitada com entrada + financiamento.</p>
      </div>

      <div style={{ height: '400px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <Carousel
          items={carouselItems}
          baseWidth={320}
          autoplay={true}
          autoplayDelay={3500}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </section>
  );
};

export default Fleet;
