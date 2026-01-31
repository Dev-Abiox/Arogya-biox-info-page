import React from 'react';

interface HeroProps {
  onToggleMode: () => void;
}

const Hero: React.FC<HeroProps> = ({ onToggleMode }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-20 min-h-screen flex flex-col md:items-end lg:flex-row lg:items-center px-6 md:px-12 lg:px-24 pt-32 pb-20 lg:py-24">
      <div className="w-full max-w-3xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-left md:text-right lg:text-left flex flex-col md:items-end lg:items-start h-full">
        <div className="flex flex-col md:items-end lg:items-start group/hero-text">
          <h1
            className="text-[30px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] md:leading-[1] lg:leading-[0.95] mb-8 md:mb-10 tracking-tight text-white cursor-default"
          >
            <span className="inline-block transition-[color,filter] duration-700 group-hover/hero-text:text-blue-400 group-hover/hero-text:drop-shadow-[0_0_25px_rgba(96,165,250,0.4)] will-change-[filter] transform-gpu">
              Clinical Intelligence
            </span> <br />
            <span className="font-medium inline-block transition-[color,transform] duration-700 group-hover/hero-text:text-blue-200 group-hover/hero-text:translate-x-1 will-change-transform transform-gpu">
              at Population Scale
            </span>
          </h1>

          <p className="text-white text-[16px] md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl font-light mx-auto md:mr-0 md:ml-auto lg:mx-0 opacity-80 transition-opacity duration-700 group-hover/hero-text:opacity-100">
            Arogya BioX builds software-driven screening and clinical intelligence platforms that extract actionable insights from routine diagnostic data—enabling earlier risk identification without adding operational complexity.
          </p>
        </div>

        <div className="h-[50vh] md:h-[75vh] lg:hidden pointer-events-none" aria-hidden="true"></div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-stretch sm:items-center md:justify-end lg:justify-start gap-4 md:gap-6 w-full md:w-auto md:ml-auto md:mr-0 lg:ml-0 lg:mr-0">
          <button
            onClick={() => window.location.href = '/demo.html'}
            className="px-8 py-5 md:px-10 md:py-5 bg-blue-400 hover:bg-blue-500 text-white rounded-full text-xs md:text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-[0_10px_30px_rgba(96,165,250,0.2)] hover:scale-105 active:scale-95 text-center min-w-[200px]"
          >
            Request a Demo
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-5 md:px-10 md:py-5 border border-white/20 hover:bg-white/5 text-white/90 hover:text-white rounded-full text-xs md:text-xs font-bold tracking-[0.2em] uppercase transition-all text-center min-w-[200px]"
          >
            Contact Sales
          </button>
        </div>

        <p className="mt-12 text-[10px] text-white/80 uppercase tracking-[0.3em] font-medium hidden md:block">
          Built for laboratories. Designed for clinicians.
        </p>
      </div>
    </div>
  );
};

export default Hero;