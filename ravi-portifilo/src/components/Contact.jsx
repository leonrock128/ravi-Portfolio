import React, { useRef} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const button = e.target.querySelector("button");
    button.innerText = "Sending...";

    emailjs
      .sendForm(
        "service_4qqjqkd",   // EmailJS Service ID
        "template_fopcoo2",  // EmailJS Template ID
        formRef.current,
        "0lcJpYSb2CLYGKIkx"    // EmailJS Public Key
      )
      .then(
        () => {
          button.innerText = "Message Sent!";
          button.style.backgroundColor = "#28a745";
          formRef.current.reset();

          setTimeout(() => {
            button.innerText = "Send Message";
            button.style.backgroundColor = "";
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          button.innerText = "Failed to Send";
          button.style.backgroundColor = "#dc3545";

          setTimeout(() => {
            button.innerText = "Send Message";
            button.style.backgroundColor = "";
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container reveal">
        <h2>Get In Touch</h2>
        <p>
          Have a question or want to work together? Leave your details and I'll
          get back to you.
        </p>
        <div className="contact-info">
          <a href="mailto:ravilagadapati127@gmail.com">
            <i className="fas fa-envelope"></i> ravilagadapati127@gmail.com
          </a>
          <a href="tel:+916305544531">
            <i className="fas fa-phone"></i> +91 6305544531
          </a>
        </div>
        <form ref={formRef} onSubmit={sendEmail} id="contact-form" className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

