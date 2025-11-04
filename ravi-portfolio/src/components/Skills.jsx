import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container reveal">
        <h2>Technical Skills</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Programming</h3>
            <div className="skills-list">
              <div className="skill-box">
                <i className="fab fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-js"></i>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-css3-alt"></i>
                <span>CSS3</span>
              </div>
              <div className="skill-box">
                <i className="fa-brands fa-php"></i>
                <span>PHP</span>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <div className="skills-list">
              <div className="skill-box">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-box">
                <span>Express.js</span>
              </div>
              <div className="skill-box">
                <span>Tailwind CSS</span>
              </div>
              <div className="skill-box">
                <span>Spring Boot</span>
              </div>
              <div className="skill-box">
                <span>Spring Security</span>
              </div>
              <div className="skill-box">
                <span>MongoDB</span>
              </div>
              <div className="skill-box">
                <i className="fa-solid fa-database"></i>
                <span>MySql</span>
              </div>
              <div className="skill-box">
                <span>FastAPI</span>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Testing & DevOps</h3>
            <div className="skills-list">
              <div className="skill-box">
                <span>Selenium WebDriver</span>
              </div>
              <div className="skill-box">
                <span>JUnit</span>
              </div>
              <div className="skill-box">
                <span>Postman</span>
              </div>
              <div className="skill-box">
                <i className="fa-brands fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-box">
                <span>Kubernetes</span>
              </div>
              <div className="skill-box">
                <i className="fa-brands fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="skill-box">
                <span>CI/CD pipelines</span>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <div className="skill-box">
                <i className="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="skill-box">
                <i className="fa-brands fa-square-figma"></i>
                <span>Figma</span>
              </div>
              <div className="skill-box">
                <span>Github Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
