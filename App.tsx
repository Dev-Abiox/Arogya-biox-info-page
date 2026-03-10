import React, { useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleRenderer from './components/ParticleRenderer';
import { AppMode } from './types';
const CompanyBackground = lazy(() => import('./components/CompanyBackground'));
const ProductSection = lazy(() => import('./components/ProductSection'));
const ValuePropSection = lazy(() => import('./components/ValuePropSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

const CARBON_FIBRE_URI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAV0lEQVR4AWPg5uaexcDI8B9Ec3JyFhDCpKpnACmGYWI0kKqe9j4AAi0gBtPEaCBZPYggF1NsAYXBR9gCShPAwPuAkgRA30imJR4tKkaLitGiYrSoIAIDAKy7LKCTTHSAAAAAAElFTkSuQmCC';

const MODE = AppMode.NORMAL;

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

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
      const revealElements = container.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)');
      revealElements.forEach(el => observer.observe(el));
    };

    // Observe initially and re-observe after lazy components load
    observeElements();
    let debounceTimer: ReturnType<typeof setTimeout>;
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(observeElements, 100);
    });
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      clearTimeout(debounceTimer);
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
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: `url("${CARBON_FIBRE_URI}")` }}></div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-blue-900/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[220px]"></div>
      </div>

      <Navbar />

      <main ref={mainRef} className="relative pb-0 md:pb-0">
        <section id="hero" className="relative min-h-dvh overflow-hidden flex items-center scroll-mt-20 md:scroll-mt-24">
          <ParticleRenderer mode={MODE} />
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