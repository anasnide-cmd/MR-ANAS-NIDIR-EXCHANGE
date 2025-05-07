import React, { useEffect } from "react"; import "../index.css";

const Home = () => { useEffect(() => { const themeToggle = document.getElementById("themeToggle"); if (themeToggle) { themeToggle.addEventListener("click", () => { const currentTheme = document.documentElement.getAttribute("data-theme"); document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark"); }); }

const ScrollReveal = window.ScrollReveal;
if (ScrollReveal) {
  ScrollReveal().reveal(".sr-top", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    scale: 0.95,
    opacity: 0,
    easing: "ease-in-out",
    reset: false
  });

  ScrollReveal().reveal(".sr-bottom", {
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    scale: 0.95,
    opacity: 0,
    easing: "ease-in-out",
    reset: false
  });

  ScrollReveal().reveal(".sr-left", {
    origin: "left",
    distance: "60px",
    duration: 1000,
    opacity: 0,
    easing: "ease-in-out",
    reset: false
  });

  ScrollReveal().reveal(".sr-right", {
    origin: "right",
    distance: "60px",
    duration: 1000,
    opacity: 0,
    easing: "ease-in-out",
    reset: false
  });
}

}, []);

return ( <div data-theme="dark"> <div className="theme-switch" id="themeToggle"> <span className="w-5 h-5 text-[var(--gold)] dark:hidden">☀️</span> <span className="w-5 h-5 text-[var(--gold)] hidden dark:block">🌙</span> </div>

<div className="fixed top-6 left-6 z-50">
    <a href="/login" className="gold-button px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition">
      Profile
    </a>
  </div>

  <main className="relative">
    <section className="relative min-h-screen flex items-center">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-80 z-0">
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative max-w-7xl mx-auto px-4 py-24 z-10 text-center">
        <div className="mb-8 sr-top">
          <div className="inline-block p-4 luxury-border rounded-full">
            <div className="text-[var(--gold)] text-sm tracking-widest">EST. 2024</div>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gold-gradient leading-tight sr-top">MANEX</h1>
        <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 sr-bottom">
          The Pinnacle of <span className="text-[var(--gold)]">Digital Wealth Management</span>
        </p>
        <a href="#cta-section" className="inline-flex items-center px-12 py-5 gold-button font-semibold rounded-full transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] text-lg sr-left">
          Begin Your Journey
          <span className="w-6 h-6 ml-3">→</span>
        </a>
      </div>
    </section>

    <section id="cta-section" className="py-24 bg-[var(--bg-secondary)] text-center">
      <h2 className="text-4xl font-semibold mb-4 sr-top">Ready to Explore?</h2>
      <p className="text-xl text-[var(--text-secondary)] mb-6 sr-bottom">
        Join us today and experience the future of digital wealth management.
      </p>
      <a href="#" className="inline-flex items-center px-8 py-4 gold-button font-semibold rounded-full text-lg sr-right">
        Get Started
      </a>
    </section>

    <footer className="bg-[var(--bg-primary)] text-center py-12 text-[var(--text-secondary)] sr-left">
      <p>&copy; 2024 MANEX. All Rights Reserved.</p>
    </footer>
  </main>
</div>

); };

export default Home;

