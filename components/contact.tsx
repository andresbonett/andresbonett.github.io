import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let&#39;s work together...</h2>
      </div>
      <div className="contact-links">
        <a
          id="profile-link"
          href="https://www.linkedin.com/in/andresbonett/"
          target="_blank"
          rel="noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          id="profile-link"
          href="https://github.com/andresbonett"
          target="_blank"
          rel="noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://twitter.com/andresbonettm"
          target="_blank"
          rel="noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="https://t.me/andresbonett"
          target="_blank"
          rel="noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-telegram-plane"></i> Telegram
        </a>
      </div>
    </section>
  );
};

export default Contact;
