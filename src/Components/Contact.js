import React, { useState } from "react";
import "../dist/css/Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="outside">
      <div className="wrapper">
        <div className="form-container">
          <div className="forms">
            <div id="anchor-contact" className="contact-title">
              Get in Touch
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label" htmlFor="name">
                  Name
                </label>
                <br />
                <input type="text" id="name" required />
              </div>
              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <br />
                <input type="email" id="email" required />
              </div>
              <div>
                <label className="label" htmlFor="message">
                  Message
                </label>{" "}
                <br />
                <textarea id="message" required />
              </div>
              <button className="submit" type="submit">
                {status}
              </button>
            </form>
          </div>
          <div className="form-info">
            <div className="phone">
              <b>Phone</b>
              <p>206-261-2816</p>
            </div>
            <div className="social">
              <a href="https://github.com/ken-steckler">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ken-steckler/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
