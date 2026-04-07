const Speakers = () => {

  return (
  <section className="speakers-section" id="speakers">
      <div className="container">
        <div className="section-label">SPEAKERS</div>
        <div className="section-title">Featured guests</div>
        <div className="row g-3">
          <div className="col-6 col-md-4">
            <div className="speaker-card">
              <div className="avatar av-blue">AO</div>
              <div className="speaker-name">Amaka Obi</div>
              <div className="speaker-role">Sports Director, CAF</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="speaker-card">
              <div className="avatar av-teal">KA</div>
              <div className="speaker-name">Kola Adeyemi</div>
              <div className="speaker-role">Head Coach, Super Eagles</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="speaker-card">
              <div className="avatar av-amber">FN</div>
              <div className="speaker-name">Fatima Nwosu</div>
              <div className="speaker-role">Athlete & Brand Ambassador</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="speaker-card">
              <div className="avatar av-purple">EB</div>
              <div className="speaker-name">Emeka Bello</div>
              <div className="speaker-role">CEO, SportsTech Africa</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="speaker-card">
              <div className="avatar av-coral">ZM</div>
              <div className="speaker-name">Zara Mohammed</div>
              <div className="speaker-role">Olympic Gold Medalist</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="speaker-card">
              <div className="avatar av-green">TD</div>
              <div className="speaker-name">Tunde Dada</div>
              <div className="speaker-role">Sports Journalist, BBC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}

export default Speakers;