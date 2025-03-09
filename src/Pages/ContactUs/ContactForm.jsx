import React, { useState } from "react";
import { Send_Message } from "../../Actions";
import { useDispatch } from "react-redux";
const ContactForm = () => {
  const dispatch = useDispatch();
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [responseMessage, setResponseMessage] = useState(""); // API Response

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setResponseMessage(""); // Reset message

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        contact: formData.contact,
        message: formData.message
      }
      console.log("Sending Payload:", JSON.stringify(payload));
      const response = await dispatch(Send_Message(payload));

      if (response && response.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          contact: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setResponseMessage("Error connecting to the server.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="ftco-section contact-section ftco-no-pt">
      <div className="container">
        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form onSubmit={handleSubmit} className="bg-light p-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel" // Changed from "number" to "tel" to prevent scientific notation issues
                  className="form-control"
                  placeholder="Contact"
                  name="contact"
                  pattern="\d{10}" // Ensures exactly 10 digits
                  maxLength="10" // Restricts input to 10 digits
                  value={formData.contact}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                    if (value.length <= 10) {
                      setFormData({ ...formData, contact: value });
                    }
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value={loading ? "Sending..." : "Send Message"}
                  className="btn btn-primary py-3 px-5"
                  disabled={loading}
                />
              </div>
              {responseMessage && (
                <p className={responseMessage.includes("success") ? "text-success" : "text-danger"}>
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
