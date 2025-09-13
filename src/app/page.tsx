// src/app/page.tsx

import Services from "../components/Services"; // preferred (alias @ set by create-next-app)
import About from "../components/About"; 
import Contact from "../components/Contact"; 
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main>
      {/* ===== Your existing Hero (keep your current hero code) ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-indigo-700 bg-white/70 backdrop-blur">
            New • Modern site + AI chat
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Empowering Africa’s Digital Future
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
            Jeman Holdings delivers innovative solutions that help businesses grow
            and thrive in the modern digital economy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700"
            >
              Explore Services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-gray-900 font-medium shadow border hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      </section>

      {/* ===== Services section (we added this) ===== */}
      <Services />
      {/* About */}
      <About />
      <Contact /> 
       <Footer />   {/* 👈 Add this at the bottom */}
    
    </main>
  );
}
