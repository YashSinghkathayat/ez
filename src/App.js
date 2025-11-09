/**
 * @fileoverview Main application component for the EY Campus assignment
 * Defines layout with a hero section, contact form, and footer.
 */

import React from "react";
import ReachUsForm from "./components/reachUsForm"; // Ensure import matches file casing

/**
 * App Component
 * Root component that structures the entire home page.
 * @returns {JSX.Element} Rendered layout.
 */
function App() {
  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          background: "#111",
          color: "#f4d03f",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h2>EY Campus - Front-End Intern Assignment</h2>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #fdfdfd 0%, #fffbea 100%)",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "2.2rem" }}>
          Build Your Future with <span style={{ color: "#f4d03f" }}>EY</span>
        </h1>
        <p style={{ color: "#666", fontSize: "1rem", marginTop: "10px" }}>
          This is a single-page React application designed to demonstrate front-end
          development skills including responsive design, API integration, and form validation.
        </p>
      </section>

      {/* Contact Form Section */}
      <main>
        <ReachUsForm />
      </main>

      {/* Footer Section */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#555",
          paddingBottom: "20px",
          borderTop: "1px solid #ddd",
          paddingTop: "10px",
        }}
      >
        © 2025 Yash Singh Kathayat | EY Front-End Internship Assignment
      </footer>
    </div>
  );
}

export default App;
