import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div style={{ height: "100vh", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8f9fa", padding: "30px" }}>
        <img src="" alt="notFound" />
        <div className="contentName">
          <h1>TOMIWA CLEANING SERVICES</h1>
          <p>...We make every corner shine</p>
          <button>Book now</button>
        </div>
      </div>
    </section>
  )
}