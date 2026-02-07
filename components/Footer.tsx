import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-4 px-6 md:px-12 lg:px-24 pb-8 md:pb-6">
            {/* Text and Links (Center) */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="text-[10px] md:text-xs font-medium text-white/60 uppercase tracking-widest font-heading text-center">
                    &copy; 2026 Arogya BioX. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 gap-y-2 text-[10px] md:text-xs font-medium text-white/60 uppercase tracking-widest font-heading">
                    {[
                        { name: 'Privacy Policy', href: '/privacy-policy' },
                        { name: 'Terms & Conditions', href: '/terms-conditions' },
                        { name: 'Medical Disclaimer', href: '/disclaimer' },
                        { name: 'DPDP Act', href: '/dpdp-act' }
                    ].map((link, index) => (
                        <React.Fragment key={link.name}>
                            {index > 0 && <span className="text-white/20">|</span>}
                            <a href={link.href} className="hover:text-blue-300 transition-colors">
                                {link.name}
                            </a>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
