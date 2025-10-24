import React from 'react'

const Certifications = () => {
  return (
      <section id="certifications" className="certifications">
            <div className="container">
                <h2>Certifications</h2>
                <div className="cert-grid">
                    <a href="https://drive.google.com/file/d/122uQZiLZj7crtjAzd8pk3u5IQ9-glYht/view?usp=drive_link" target="_blank" className="cert-card reveal">
                        <div className="cert-icon"><i className="fa-solid fa-code"></i></div>
                        <h3>Web Devlopment</h3>
                        <p>Teachnook</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1i1p458QL7o1kklRtgVSakxJQM3gOzDUo/view?usp=drive_link" target="_blank" className="cert-card reveal">
                        <div className="cert-icon"><i className="fa-solid fa-database"></i></div>
                        <h3>Oracle Cloud Infrastructure Foundations </h3>
                        <p>Oracle University</p>
                    </a>
                    <a href="https://www.credly.com/badges/a8728ef9-7c67-46f9-a9b4-34d69d4e9cc2" target="_blank" className="cert-card reveal">
                        <div className="cert-icon"><i className="fab fa-aws"></i></div>
                        <h3>AWS Cloud Foundation</h3>
                        <p>Amazon Web Services</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1h-kimjgiYnzmzm5Xxk5orLw-7jd7EJuR/view?usp=drive_link" target="_blank" className="cert-card reveal">
                        <div className="cert-icon"><i className="fa-solid fa-laptop-code"></i></div>
                        <h3> Selenium WebDriver</h3>
                        <p>Infosys Springboard</p>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Certifications