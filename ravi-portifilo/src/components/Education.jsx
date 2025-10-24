import React from 'react'

const Education = () => {
  return (
    <section id="education" className="education">
        <div className="container">
            <h2>Education</h2>
            <div className="timeline">
                <div className="timeline-item reveal" data-side="right">
                    <div className="timeline-content">
                        <span className="timeline-date">2022 - Present</span>
                        <h3>B.Tech, Computer Science</h3>
                        <p>VIT-AP University</p>
                        <p className="grade">CGPA: 8.03</p>
                    </div>
                </div>
                <div className="timeline-item reveal" data-side="left">
                    <div className="timeline-content">
                        <span className="timeline-date">2020 - 2022</span>
                        <h3>Board of Intermediate Education</h3>
                        <p>Sri Chaitanya Boys Junior College, Vijayawada</p>
                        <p className="grade">Percentage: 96.9%</p>
                    </div>
                </div>
                <div className="timeline-item reveal" data-side="right">
                    <div className="timeline-content">
                        <span className="timeline-date">2019 - 2020</span>
                        <h3>Board of Secondary Education</h3>
                        <p>Geethanjali High School,Vinukonda</p>
                        <p className="grade">Percentage: 99.7%</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education