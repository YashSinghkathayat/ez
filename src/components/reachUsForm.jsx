import React, { useState } from "react";
import "./ReachUsForm.css";

function ReachUsForm() {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Status + loading states
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Frontend validation
  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("⚠️ Please fill all fields!");
      return false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("⚠️ Invalid email format!");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);
  setStatus("");

  try {
    // ✅ Step 1: define endpoint safely, no chance of newline or space
    const endpoint = "https://vernanbackend.ezlab.in/api/contact-us/";

    // ✅ Step 2: ensure 100% clean URL
    const cleanURL = endpoint.trim().replace(/\s/g, "");

    console.log("➡️ Sending to:", JSON.stringify(cleanURL)); // debug log

    const res = await fetch(cleanURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("✅ API response:", data);
      setStatus("✅ Form Submitted");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } else {
      setStatus("⚠️ Server error. Please try again later.");
    }
  } catch (error) {
    console.error("❌ Network error:", error);
    setStatus("⚠️ Network error. Check your connection.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="reach-card">
      <h2>Contact Us</h2>
      <p style={{ color: "#555" }}>We’d love to hear from you!</p>

      <form onSubmit={handleSubmit} className="reach-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default ReachUsForm;
