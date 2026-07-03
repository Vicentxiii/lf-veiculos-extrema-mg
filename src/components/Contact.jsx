import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contato">
      <div className="section-head">
        <div>
          <span className="tag">Visite o showroom</span>
          <h2>Fale com a LF Veículos.</h2>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Informações</h3>
          <div className="info-row">
            <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div><div className="lbl">Endereço</div><div className="val">Av. Tancredo de Almeida Neves, 337 — Centro, Extrema - MG, 37640-000</div></div>
          </div>
          <div className="info-row">
            <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1 .36 1.98.68 2.92a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.16-1.16a2 2 0 012.11-.45c.94.32 1.92.55 2.92.68A2 2 0 0122 16.92z"/></svg></div>
            <div><div className="lbl">Telefone / WhatsApp</div><div className="val">(35) 99825-9732</div></div>
          </div>
          <div className="info-row">
            <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
            <div><div className="lbl">Horário</div><div className="val">Fecha hoje às 18:30</div><div className="status-pill"><span className="dot"></span>Aberto agora</div></div>
          </div>
          <a className="btn-glass solid" style={{ marginTop: '30px', width: '100%', justifyContent: 'center' }} href="https://wa.me/5535998259732" target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
        </div>
        <div className="map-frame">
          <div className="map-pin">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Av. Tancredo de Almeida Neves, 337 — Centro, Extrema, MG<br/>7 min de carro · 33 min a pé do centro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
