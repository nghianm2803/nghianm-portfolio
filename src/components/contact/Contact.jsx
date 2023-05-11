import React, { useRef, useState } from "react";
import "./contact.css";
import { FaTelegram } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm("service_jz9tf5c", "template_yq1v8j9", form.current, "B9D1FhvAE3Pi2pmog").then(
      (result) => {
        console.log(result.text);
        setSubmitting(false);
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setSubmitting(false);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h3>Get In Touch</h3>
      <h1>Contact Me</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Minh Nghia</h5>
            <a href="https://t.me/DooCharSiu" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Minh Nghĩa</h5>
            <a href="https://m.me/doocharsiu" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your emaill" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
          {success && <p>Thank you for your message! I'll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
