import React, { useRef, useState, useCallback, useEffect } from 'react';

const fleet = [
  {make:'Ford', name:'Fiesta SE Sedan', specs:['Manual','1.6 Flex','138.007 km'], body:'sedan', img:'Fiesta se Sedan.jpg', badge:'💰 Melhor preço', price:'R$ 44.070'},
  {make:'Honda', name:'Civic EXL', specs:['Automático','2.0 Flex','97.000 km'], body:'sedan', img:'Civic EXL.jpg', badge:'🏅 Mais vendido', price:'R$ 127.568'},
  {make:'Honda', name:'HR-V EX', specs:['Automático','1.8 Flex','195.000 km'], body:'suv', img:'HR-VEX.webp', price:'R$ 104.940'},
  {make:'Fiat', name:'Toro Endurance', specs:['Manual','1.8 Flex','89.000 km'], body:'pickup', img:'Toro Endurance.jpeg', price:'R$ 85.638'},
  {make:'Hyundai', name:'HB20 Comfort Plus', specs:['Manual','1.6 Flex','139.000 km'], body:'hatch', img:'HB20 Comfort Plus.jpg', badge:'🔥 Mais popular', price:'R$ 55.603'},
  {make:'Volkswagen', name:'Fox GII', specs:['Manual','1.0 Flex','139.000 km'], body:'hatch', img:'FOX GII.jpg', price:'R$ 35.826'},
  {make:'Fiat', name:'Fastback Audace', specs:['Manual','1.6 Flex','42.000 km'], body:'suv', img:'FastBack Audace.webp', badge:'⭐ Tops da semana', price:'R$ 110.324'},
  {make:'Chevrolet', name:'Prisma LT', specs:['Automática','1.4 Flex','139.000 km'], body:'sedan', img:'Prisma LT.jpg', badge:'💰 Melhor preço', price:'R$ 60.396'},
  {make:'Volkswagen', name:'Polo Comfortline', specs:['Automático','1.0 TSI Flex','81.000 km'], body:'hatch', img:'Polo Comfortline.jpg', badge:'🔥 Mais popular', price:'R$ 78.948'},
  {make:'Volkswagen', name:'Virtus MSI', specs:['Automático','1.6 Flex','194.250 km'], body:'sedan', img:'Virtus MSI.jpg', price:'R$ 73.148'},
  {make:'Chevrolet', name:'S-10 High Country', specs:['Automática','2.8 4x4 Diesel','105.000 km'], body:'pickup', img:'S-10 High Country.jpg', badge:'⭐ Tops da semana', price:'R$ 173.652'},
  {make:'Fiat', name:'Toro Volcano', specs:['Automática','2.0 4x4 Diesel','76.900 km'], body:'pickup', img:'Toro Volcano.webp', badge:'🏅 Mais vendido', price:'R$ 112.194'},
];

const Fleet = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0, scrollLeft: 0, clicked: false,
    vel: 0, lastX: 0, lastTime: 0,
  });
  const momentumRef = useRef(null);

  const onMouseDown = useCallback((e) => {
    const el = carouselRef.current;
    if (!el) return;
    cancelAnimationFrame(momentumRef.current);
    setIsDragging(true);
    dragState.current = {
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      clicked: true,
      vel: 0,
      lastX: e.pageX,
      lastTime: performance.now(),
    };
    el.style.cursor = 'grabbing';
  }, []);

  const onMouseMove = useCallback((e) => {
    const el = carouselRef.current;
    if (!el || !dragState.current.clicked) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (dragState.current.startX - x) * 1.2;
    el.scrollLeft = dragState.current.scrollLeft + walk;

    const now = performance.now();
    const dt = now - dragState.current.lastTime;
    if (dt > 0) {
      const dx = e.pageX - dragState.current.lastX;
      dragState.current.vel = dx / dt * 16;
    }
    dragState.current.lastX = e.pageX;
    dragState.current.lastTime = now;
  }, []);

  const onMouseUp = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setIsDragging(false);
    dragState.current.clicked = false;
    el.style.cursor = 'grab';

    const absVel = Math.abs(dragState.current.vel);
    if (absVel > 0.3) {
      const momentum = () => {
        const vel = dragState.current.vel;
        if (Math.abs(vel) < 0.1) return;
        dragState.current.vel *= 0.95;
        el.scrollLeft -= dragState.current.vel;
        momentumRef.current = requestAnimationFrame(momentum);
      };
      momentumRef.current = requestAnimationFrame(momentum);
    }
  }, []);

  useEffect(() => () => cancelAnimationFrame(momentumRef.current), []);

  const scrollFleet = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="fleet" id="estoque">
      <div className="section-head">
        <div>
          <span className="tag">Estoque selecionado</span>
          <h2>O pátio, em detalhe.</h2>
        </div>
        <p>Sedãs, SUVs, picapes e utilitários revisados. Quilometragem real, valores sob consulta e negociação facilitada com entrada + financiamento.</p>
      </div>

      <div className="carousel-nav">
        <div className="nav-btn" onClick={() => scrollFleet(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <div className="nav-btn" onClick={() => scrollFleet(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>

      <div className="carousel-wrap">
        <div className={`carousel${isDragging ? ' dragging' : ''}`} ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            const me = new MouseEvent('mousedown', { pageX: touch.pageX, pageY: touch.pageY });
            onMouseDown(me);
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            const me = new MouseEvent('mousemove', { pageX: touch.pageX, pageY: touch.pageY });
            onMouseMove(me);
          }}
          onTouchEnd={onMouseUp}
        >
          {fleet.map((car, index) => {
            const msg = encodeURIComponent(`Olá! Tenho interesse no ${car.make} ${car.name} do pátio da LF Veículos.`);
            return (
              <div className="car-card" key={index}>
                <div className="car-visual">
                  <div className="plate">LF · Seminovo</div>
                  {car.badge && <span className="car-badge">{car.badge}</span>}
                  <img src={`/carros/${car.img}`} alt={car.name} />
                </div>
                <div className="car-body">
                  <div className="make">{car.make}</div>
                  <h3>{car.name}</h3>
                  <div className="car-specs">
                    {car.specs.map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <div className="car-foot">
                    <div className="car-price">
                      <div className="label">Valor</div>
                      <div className="value">{car.price}</div>
                    </div>
                    <a className="car-link" href={`https://wa.me/5535998259732?text=${msg}`} target="_blank" rel="noopener noreferrer">
                      Detalhes →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
