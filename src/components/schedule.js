const Schedule = () => {

  return (
  <section className="schedule-section" id="schedule">
      <div className="container">
        <div className="section-label">SCHEDULE</div>
        <div className="section-title">Day one agenda</div>
        <div className="schedule-item">
          <div className="schedule-time">9:00 AM</div>
          <div className="schedule-dot"></div>
          <div>
            <div className="schedule-event">Opening ceremony & keynote</div>
            <div className="schedule-speaker">Amaka Obi — Sports Director, CAF</div>
          </div>
        </div>
        <div className="schedule-item">
          <div className="schedule-time">11:00 AM</div>
          <div className="schedule-dot"></div>
          <div>
            <div className="schedule-event">The future of football in Africa</div>
            <div className="schedule-speaker">Panel discussion</div>
          </div>
        </div>
        <div className="schedule-item">
          <div className="schedule-time">1:00 PM</div>
          <div className="schedule-dot"></div>
          <div>
            <div className="schedule-event">Lunch break & networking</div>
            <div className="schedule-speaker">Main hall</div>
          </div>
        </div>
        <div className="schedule-item">
          <div className="schedule-time">2:30 PM</div>
          <div className="schedule-dot"></div>
          <div>
            <div className="schedule-event">Sports tech & innovation showcase</div>
            <div className="schedule-speaker">Emeka Bello — SportsTech Africa</div>
          </div>
        </div>
        <div className="schedule-item">
          <div className="schedule-time">4:30 PM</div>
          <div className="schedule-dot"></div>
          <div>
            <div className="schedule-event">Athlete branding masterclass</div>
            <div className="schedule-speaker">Fatima Nwosu</div>
          </div>
        </div>
      </div>
    </section>
 
   )
}

export default Schedule;