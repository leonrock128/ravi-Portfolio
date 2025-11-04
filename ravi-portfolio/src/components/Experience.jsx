import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
          <h2>Experience & Certifications</h2>
          <div className="timeline">
              <div className="timeline-item reveal" data-side="right">
                  <div className="timeline-content">
                      <span className="timeline-date">Nov 2024 – Dec 2024</span>
                      <h3>Intern at Teachnook.</h3>
                      <p>Software Developer-Remote</p>
                  </div>
              </div>
              <div className="timeline-item reveal" data-side="left">
                  <div className="timeline-content">
                      <span className="timeline-date">Certification</span>
                      <h3>Oracle Cloud Infrastructure Foundations.</h3>
                      <p>Oracle University</p>
                  </div>
              </div>
              <div className="timeline-item reveal" data-side="right">
                  <div className="timeline-content">
                      <span className="timeline-date">Certification</span>
                      <h3>Selenium WebDriver.</h3>
                      <p>Infosys Springboard</p>
                  </div>
              </div>
              <div className="timeline-item reveal" data-side="left">
                  <div className="timeline-content">
                      <span className="timeline-date">Certification</span>
                      <h3>AWS Cloud Foundation.</h3>
                      <p>Amazon Web Services</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Experience