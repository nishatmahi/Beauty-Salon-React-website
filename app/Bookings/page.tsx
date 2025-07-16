"use client";
import { useState } from "react";

// Example services - you can customize these!
const services = [
  "Spa Therapy",
  "Professional Haircut",
  "Manicure & Pedicure",
  "Bridal Makeup",
  "Hair Color & Styling",
];

export default function BookingPage() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Submit form
  async function handleSubmit(e) {
  e.preventDefault();

  const res = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", date: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  } else {
    alert("Booking failed!");
  }
}

  return (
    <main>
      {/* Parallax Banner */}
      <div
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6621181/pexels-photo-6621181.jpeg')",
          height: "54vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "2.7rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            textShadow: "2px 2px 12px #222",
            fontFamily: "Times New Roman, serif",
            background: "rgba(0,0,0,0.20)",
            padding: "1rem 2rem",
            borderRadius: "10px",
          }}
        >
          Book Your Appointment
        </h1>
      </div>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          boxShadow: "0 4px 24px #0001",
          borderRadius: "20px",
          marginTop: "-50px",
          marginBottom: "20px",
          position: "relative",
          zIndex: 1,
          padding: "2.7rem 2rem 2.2rem 2rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left Column: Info */}
        <div style={{ flex: 1, minWidth: "270px" }}>
          <h2
            style={{
              fontFamily: "Times New Roman, serif",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: ".5rem",
              color: "#b18c81ff",
            }}
          >
            Glamour Beauty Parlour
          </h2>
          <p style={{ color: "#594e43", marginBottom: "1.5rem" }}>
            Reserve your slot for premium beauty services.  
            Our team will confirm your appointment via phone or email.
          </p>
          <ul style={{ listStyle: "none", padding: 0, color: "#675c50", fontSize: "1rem" }}>
            <li>
              <strong>📍 Address:</strong> 123 Main Road, Dhaka
            </li>
            <li>
              <strong>📞 Phone:</strong> +880-1711-3456781
            </li>
            <li>
              <strong>⏰ Hours:</strong> 10:00AM - 8:00PM (Everyday)
            </li>
          </ul>
          <div style={{ marginTop: "2.3rem", color: "#b18c81", fontWeight: 500 }}>
            * All bookings are subject to confirmation.
          </div>
        </div>
        {/* Right Column: Booking Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            minWidth: "290px",
            background: "#f5e8da",
            padding: "2rem 1.5rem",
            borderRadius: "14px",
            boxShadow: "0 2px 10px #0001",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {submitted && (
            <div
              style={{
                background: "#b18c81",
                color: "white",
                padding: ".7rem 1.2rem",
                borderRadius: "7px",
                textAlign: "center",
                marginBottom: "5rem",
                fontWeight: 600,
                letterSpacing: ".5px",
              }}
            >
              Thank you! Your booking has been submitted.
            </div>
          )}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            style={inputStyle}
            type="tel"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            style={inputStyle}
            type="email"
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Preferred Date"
            required
            style={inputStyle}
            type="date"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              color: form.service ? "#222" : "#999",
              fontFamily: "inherit",
            }}
          >
            <option value="">Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Additional requests (optional)"
            rows={3}
            style={{
              ...inputStyle,
              resize: "vertical",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#b18c81",
              color: "#fff",
              padding: ".8rem 0",
              fontWeight: 600,
              fontSize: "1.13rem",
              border: "none",
              borderRadius: "4px",
              fontFamily: "Times New Roman, serif",
              letterSpacing: ".5px",
              marginTop: ".3rem",
              cursor: "pointer",
              boxShadow: "0 2px 10px #0001",
              transition: "background .2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#93745d"}
            onMouseOut={e => e.currentTarget.style.background = "#b18c81"}
          >
            Book Now
          </button>
        </form>
      </section>
    </main>
  );
}

// Input style for all inputs
const inputStyle = {
  fontSize: "1rem",
  padding: ".7rem .9rem",
  border: "1.6px solid #e3cec3",
  borderRadius: "6px",
  outline: "none",
  fontFamily: "Times New Roman, serif",
  marginBottom: 0,
  background: "#fff",
  color: "#222",
  transition: "border .2s",
};

