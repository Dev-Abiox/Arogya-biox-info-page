import React from 'react';

const CompanyBackground: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-20 py-8 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-blue-300 text-xs font-bold tracking-[0.4em] uppercase mb-6 block font-heading">ABOUT US</span>
            <img src="/arogya-logo-full.png" alt="Arogya BioX" className="h-[34px] md:h-[52px] lg:h-[64px] w-auto mb-10 object-contain" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight tracking-tight font-heading">
              Transforming <span className="text-white font-medium italic whitespace-nowrap">Routine Tests</span> into Screening Tools.
            </h2>
            <p className="text-white text-lg lg:text-xl font-light leading-relaxed mb-8 font-body">
              We specialize in converting widely performed laboratory investigations into scalable screening tools.
            </p>

            <div className="space-y-6 text-white text-base font-light leading-relaxed font-body">
              <p>Our platforms help laboratories, clinicians, and health systems identify risk earlier, at population scale, by working on top of existing lab workflows requiring no new equipment, no additional reagents, and no change in sample collection.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="glass-effect p-10 rounded-[40px] border border-white/10 hover:border-blue-400/30 hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-500 group">
              <h3 className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 group-hover:text-blue-400 transition-colors font-heading">Our Approach</h3>
              <ul className="space-y-5">
                {[
                  "Evidence-based clinical design",
                  "Transparent, interpretable outputs",
                  "Seamless LIS & analyzer integration",
                  "Built for high-volume, real-world deployment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)] shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-base text-white font-light group-hover/item:text-blue-50 transition-colors font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-left group hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between">
                <div className="text-3xl font-light text-white mb-2 font-heading">CDSS</div>
                <div className="text-xs text-white/80 uppercase tracking-widest font-bold group-hover:text-blue-300 transition-colors font-heading">Platform</div>
              </div>
              <div
                onClick={() => scrollTo('contact')}
                className="text-center cursor-pointer group hover:scale-105 transition-transform duration-300 h-full flex flex-col items-center justify-between"
              >
                <div className="text-3xl font-light text-blue-400 mb-2 group-hover:text-white transition-colors font-heading">B12</div>
                <div className="text-xs text-white/80 uppercase tracking-widest font-bold group-hover:text-blue-400 font-heading">Primary</div>
              </div>
              <div className="text-right group hover:scale-105 transition-transform duration-300 origin-right h-full flex flex-col items-end justify-between">
                <div className="text-xl font-bold text-white mb-2 leading-tight font-heading">
                  Preventive Health
                </div>
                <div className="text-xs text-white/80 uppercase tracking-widest font-bold group-hover:text-blue-400 transition-colors font-heading">
                  (Upcoming)
                </div>
              </div>
            </div>
            <p className="italic text-blue-300 text-xs font-medium text-center opacity-80 mt-[-10px] font-body">"We design every product as a clinical decision support system, not a diagnostic replacement."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBackground;