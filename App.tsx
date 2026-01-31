import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import ParticleRing from './components/ParticleRing';
import Hero from './components/Hero';
import CompanyBackground from './components/CompanyBackground';
import ProductSection from './components/ProductSection';
import ValuePropSection from './components/ValuePropSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import { AppMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.NORMAL);

  const toggleMode = useCallback(() => {
    setMode(prev => prev === AppMode.NORMAL ? AppMode.ACTIVE : AppMode.NORMAL);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Performance optimization: Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle hash scrolling on initial load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
          // Clear the hash so that a refresh stays at the top/home
          history.replaceState(null, '', window.location.pathname);
        }, 100);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }}></div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-blue-900/5 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[220px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="relative">
        <section id="hero" className="relative min-h-screen overflow-hidden flex items-center">
          <ParticleRing mode={mode} />
          <Hero onToggleMode={toggleMode} />
        </section>

        <section id="company" className="relative border-t border-white/10 reveal">
          <CompanyBackground />
        </section>

        <section id="solution" className="relative border-t border-white/10 reveal">
          <ProductSection />
        </section>

        <section id="detailed-benefits" className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              <div className="glass-effect p-8 md:p-10 lg:p-14 rounded-[32px] md:rounded-[40px] border border-white/20 flex flex-col justify-between hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all duration-500 group reveal-left">
                <div>
                  <span className="text-blue-300 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 block">Lab Intelligence</span>
                  <h3 className="text-[30px] md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 transition-colors group-hover:text-blue-100">How Clinomic Labs Helps <span className="font-medium text-white">Laboratories</span></h3>
                  <p className="text-white text-[16px] md:text-base mb-8 md:mb-10 leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">
                    Turn Routine CBCs into a Value-Added Screening Service. Extract additional clinical insight from tests you already perform—without changing workflows, equipment, or sample collection.
                  </p>
                  <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                    {[
                      { t: "No additional cost per sample", d: "Works entirely on existing CBC data." },
                      { t: "Software-only integration", d: "Seamlessly connects via HL7 or CSV." },
                      { t: "Differentiated CBC reports", d: "Adds a clinically interpretable B12 risk flag." },
                      { t: "Scales with lab volume", d: "Designed for high-throughput environments." }
                    ].map((item, idx) => (
                      <li key={idx} className="group/item">
                        <div className="text-[16px] md:text-sm font-medium text-blue-200 mb-1 group-hover/item:text-blue-300 transition-colors">{item.t}</div>
                        <div className="text-[16px] md:text-xs text-white/80 font-light leading-relaxed group-hover/item:text-white transition-colors">{item.d}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 md:pt-8 border-t border-white/10">
                  <p className="text-[9px] md:text-[10px] text-blue-400 font-bold uppercase tracking-widest italic">Move from test providers to preventive screening partners.</p>
                </div>
              </div>

              <div className="glass-effect p-8 md:p-10 lg:p-14 rounded-[32px] md:rounded-[40px] border border-white/20 flex flex-col justify-between hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all duration-500 group reveal-right">
                <div>
                  <span className="text-blue-300 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 block">Patient Care</span>
                  <h3 className="text-[30px] md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 transition-colors group-hover:text-blue-100">How Clinomic Labs Helps <span className="font-medium text-white">Patients</span></h3>
                  <p className="text-white text-[16px] md:text-base mb-8 md:mb-10 leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">
                    Earlier Awareness Without Additional Tests. Many patients with Vitamin B12 deficiency remain undiagnosed until symptoms become severe.
                  </p>
                  <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                    {[
                      { t: "No extra blood draw", d: "Screening performed using existing CBC results." },
                      { t: "Earlier identification", d: "Flag risk before irreversible complications develop." },
                      { t: "Supports timely follow-up", d: "Encourages medical consultation when needed." },
                      { t: "Clear, simple results", d: "Risk categories presented in non-alarming language." }
                    ].map((item, idx) => (
                      <li key={idx} className="group/item">
                        <div className="text-[16px] md:text-sm font-medium text-blue-200 mb-1 group-hover/item:text-blue-300 transition-colors">{item.t}</div>
                        <div className="text-[16px] md:text-xs text-white/80 font-light leading-relaxed group-hover/item:text-white transition-colors">{item.d}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 md:pt-8 border-t border-white/10">
                  <p className="text-[9px] md:text-[10px] text-blue-400 font-bold uppercase tracking-widest italic">Supports informed conversations—earlier and more effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="value" className="relative border-t border-white/10 reveal">
          <ValuePropSection />
        </section>

        <section id="pricing" className="relative border-t border-white/10 reveal">
          <PricingSection />
        </section>

        <section id="contact" className="relative border-t border-white/10 reveal">
          <ContactSection />
        </section>
      </main>

      <div className="fixed top-[-50px] left-[-50px] w-96 h-96 bg-blue-500/5 blur-[160px] rounded-full pointer-events-none z-20"></div>
    </div>
  );
};

export default App;