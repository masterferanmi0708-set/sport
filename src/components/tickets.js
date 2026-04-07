const Tickets = () => {

  return (
  <section className="tickets-section" id="tickets">
      <div className="container">
        <div className="section-label">TICKETS</div>
        <div className="section-title">Secure your spot today</div>
        <p>
          Limited tickets available. Join 2,000+ sports professionals at Lagos
          Sports Summit 2026.
        </p>
        <div className="row g-3 justify-content-center">
          <div className="col-12 col-md-4">
            <div className="ticket-card">
              <div className="ticket-type">Standard</div>
              <div className="ticket-price">$49</div>
              <button className="ticket-btn">Register</button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="ticket-card featured">
              <div className="ticket-type">VIP</div>
              <div className="ticket-price">$149</div>
              <button className="ticket-btn">Register</button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="ticket-card">
              <div className="ticket-type">Group (5+)</div>
              <div className="ticket-price">$199</div>
              <button className="ticket-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
 
   )
}

export default Tickets;