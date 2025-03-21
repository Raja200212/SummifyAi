import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          sendEmailNotification(formData.email);
          setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const sendEmailNotification = (userEmail) => {
    const emailParams = {
      to_email: userEmail,
      subject: "Thank you for contacting us!",
      message: "We have received your message and will get back to you soon.",
    };

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_NOTIFICATION_TEMPLATE_ID", emailParams, "YOUR_USER_ID")
      .then(
        () => {
          console.log("Notification email sent successfully!");
        },
        () => {
          console.error("Failed to send notification email.");
        }
      );
  };

  return (
    <div className="container mt-5 text-light  p-4 rounded border-[3px] border-white-300" style={{ maxWidth: "500px", backgound:"#030617" }}>
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input type="text" className="form-control me-2" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
          <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <select className="form-select" name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="">Choose a Subject</option>
            <option value="Support">Support</option>
            <option value="Sales">Sales</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Enter your message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
