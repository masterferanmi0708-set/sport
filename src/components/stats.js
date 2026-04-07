const Stats = () => {

  return (
  <section className="stats-section">
      <div className="container">
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <div className="num">40+</div>
              <div className="lbl">Speakers</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <div className="num">12</div>
              <div className="lbl">Sessions</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <div className="num">2,000</div>
              <div className="lbl">Attendees</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card">
              <div className="num">3</div>
              <div className="lbl">Stages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}

export default Stats;