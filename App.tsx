import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ParticleRing from './components/ParticleRing';
import Hero from './components/Hero';
import { AppMode } from './types';

const CompanyBackground = lazy(() => import('./components/CompanyBackground'));
const ProductSection = lazy(() => import('./components/ProductSection'));
const ValuePropSection = lazy(() => import('./components/ValuePropSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

const App: React.FC = () => {
  const [mode] = useState<AppMode>(AppMode.NORMAL);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)');
      revealElements.forEach(el => observer.observe(el));
    };

    // Observe initially and re-observe after lazy components load
    observeElements();
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Handle hash scrolling on initial load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
          history.replaceState(null, '', window.location.pathname);
        }, 100);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-blue-500/30 font-body" style={{ overflowX: 'clip' }}>
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: `url("/carbon-fibre.png")` }}></div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-blue-900/5 rounded-full blur-[80px] md:blur-[180px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[80px] md:blur-[220px]"></div>
      </div>

      <Navbar />

      <main className="relative pb-0 md:pb-0">
        <section id="hero" className="relative min-h-screen overflow-hidden flex items-center scroll-mt-20 md:scroll-mt-24">
          <ParticleRing mode={mode} />
          <Hero />
        </section>

        <Suspense fallback={<div className="flex items-center justify-center min-h-[200px]"><div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" /></div>}>
          <section id="company" className="relative md:border-t md:border-white/10 scroll-mt-20 md:scroll-mt-24 min-h-[200px]">
            <CompanyBackground />
          </section>

          <section id="solution" className="relative md:border-t md:border-white/10 scroll-mt-20 md:scroll-mt-24 min-h-[200px]">
            <ProductSection />
          </section>

          <section id="value" className="relative md:border-t md:border-white/10 scroll-mt-20 md:scroll-mt-24 min-h-[200px]">
            <ValuePropSection />
          </section>

          <section id="pricing" className="relative md:border-t md:border-white/10 scroll-mt-20 md:scroll-mt-24 min-h-[200px]">
            <PricingSection />
          </section>

          <section id="contact" className="relative md:border-t md:border-white/10 scroll-mt-20 md:scroll-mt-24 min-h-[200px]">
            <ContactSection />
          </section>
        </Suspense>
      </main>

      <div className="fixed top-[-50px] left-[-50px] w-96 h-96 bg-blue-500/5 rounded-full pointer-events-none z-20 blur-[80px] md:blur-[160px] hidden md:block"></div>
    </div>
  );
};

export default App;