import React, { useEffect } from "react";

const projectData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1723662018915-0e3660ce8288?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60",
    title: "AI/ML-Based Disease Diagnosis and Medicine Delivery System",
    desc: "A smart AI-powered healthcare platform built using Python and the MERN stack, integrating Cloudinary for image management and JWT for secure authentication.",
    tags: ["React", "Node.js", "MongoDB", "Python", "TailwindCSS", "JWT"],
    link: "https://github.com/leonrock128/Medical_Bot",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwbWVkaWElMjBBcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    title: "Social Media App",
    desc: "Built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for real-time messaging, Cloudinary for media storage, and JWT for secure authentication.",
    tags: ["React", "MongoDB", "Express.js", "Socket.io", "Cloudinary", "JWT"],
    link: "https://github.com/leonrock128/Social_Media_FullStack",
  },
  {
    img: "https://cdn.prioxis.com/website/Images/OpenCV01.webp",
    title: "AI Vision Lab: Hands-On OpenCV Projects",
    desc: "Explore practical and interactive Computer Vision projects using Python and OpenCV for learning, experimentation, and real-world AI applications.",
    tags: ["Python", "OpenCV", "cvzone","Mediapipe","imutils"],
    link: "https://github.com/leonrock128/OpenCV-Projects",
  },
  {
    img: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    title: "Student Management CRUD Application with Spring Boot and MySQL",
    desc: "A Spring Boot and MySQL student management system enabling CRUD operations with a user-friendly Thymeleaf interface.",
    tags: ["SpringBoot", "Thymeleaf", "MySQL", "Spring Security"],
    link: "https://github.com/leonrock128/spring_form",
  },
  {
    img: "https://media.istockphoto.com/id/1415740411/photo/empty-classroom.jpg?s=1024x1024&w=is&k=20&c=vhDaYGTmRt67fvpnswPTW1lw6tcMVaIc6ukPZRnjkLg=",
    title: "Comprehensive School Management System",
    desc: "A MERN stack school management system to streamline administration, track attendance, assess performance, and facilitate seamless communication.",
    tags: ["React","Express.js", "Redux", "MongoDB", "Material UI",],
    link: "https://github.com/leonrock128/SCHOOL-MANAGEMENT-SYSTEM",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1702599186035-12de78195138?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1bWJhciUyMHNwaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    title: "Lumbar Spine Degenerative Disease Classification",
    desc: "A hybrid DenseNet-CNN model for accurately classifying lumbar spine images as degenerative or normal.",
    tags: ["Python", "TensorFlow", "Keras","CNN", "DenseNet","Matplotlib"],
    link: "https://github.com/leonrock128/Lumbar_Spine",
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");

    function openCard(card) {
      const project = {
        image: card.querySelector("img").src,
        title: card.querySelector("h3").innerText,
        description: card.querySelector("p").innerText,
        tags: Array.from(card.querySelectorAll(".tags span")).map(
          (s) => s.innerText
        ),
        link: card.getAttribute("data-link"),
      };

      document.getElementById("modal-img").src = project.image;
      document.getElementById("modal-title").innerText = project.title;
      document.getElementById("modal-description").innerText =
        project.description;
      document.getElementById("modal-tags").innerHTML = project.tags
        .map((t) => `<span>${t}</span>`)
        .join("");
      document.getElementById("modal-link").href = project.link;
      modal.classList.add("visible");
    }

    cards.forEach((c) => c.addEventListener("click", () => openCard(c)));

    if (closeBtn)
      closeBtn.addEventListener("click", () =>
        modal.classList.remove("visible")
      );

    function modalClick(e) {
      if (e.target === modal) modal.classList.remove("visible");
    }

    modal.addEventListener("click", modalClick);

    return () => {
      cards.forEach((c) =>
        c.removeEventListener("click", () => openCard(c))
      );
      modal.removeEventListener("click", modalClick);
      if (closeBtn)
        closeBtn.removeEventListener("click", () =>
          modal.classList.remove("visible")
        );
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData.map((p, idx) => (
            <div
              className="project-card reveal"
              key={idx}
              data-link={p.link} 
            >
              <img src={p.img} alt={p.title} />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                
                {/* <button className="view-btn">View Project</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal Section */}
      <div id="project-modal" className="modal" aria-hidden="true">
        <div className="modal-content">
          <span className="close-btn" id="modal-close">
            &times;
          </span>
          <img id="modal-img" src="null" alt="project" />
          <h3 id="modal-title"></h3>
          <p id="modal-description"></p>
          <div id="modal-tags" className="tags"></div>
          <a
            id="modal-link"
            className="btn"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
