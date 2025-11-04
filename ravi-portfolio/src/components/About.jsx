import React,{useEffect} from "react";

const aboutData = [
  {
    iconClass: "fas fa-laptop-code",
    title: "Full-Stack Development",
    desc: "I’m a passionate Full-Stack Developer with a strong foundation in AI/ML, DevOps, and Automation Testing. I specialize in building scalable and intelligent applications that combine automation, cloud, and deep learning to solve real-world problems.",
  },
  {
    iconClass: "fas fa-server",
    title: "MERN & Spring Boot",
    desc: "My experience spans across MERN and Spring Boot development, focusing on RESTful APIs, JWT authentication, Docker, CI/CD pipelines, and AWS deployments. I enjoy blending AI innovation with software engineering to create smarter and more efficient systems.",
  },
  {
    iconClass: "fas fa-cloud",
    title: "Cloud & AI Innovation",
    desc: "I’m always exploring ways to enhance my expertise in cloud computing, automation, and deep learning, while crafting clean, maintainable, and impactful code.",
  },
];

const About = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".about-card");
    const revealOnScroll = () => {
      cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          card.classList.add("reveal");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // initial check
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container reveal">
        <h2>About Me</h2>
        <div className="about-grid">
          {aboutData.map((item, index) => (
            <div key={index} className="about-card">
              <i className={`about-icon ${item.iconClass}`}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <a href="#projects" className="btn">
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default About;



