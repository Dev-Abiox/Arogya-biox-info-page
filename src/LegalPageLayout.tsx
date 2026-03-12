import React from 'react';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  effectiveDate = 'January 01, 2026',
  children,
}) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav className="border-b border-gray-100 py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <a href="/" className="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
          <img src="/logo.png" alt="Arogya BioX" className="h-8 w-auto invert" />
        </a>
        <a href="/#contact" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
          Back to Contact
        </a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 md:py-12 lg:py-16">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900 leading-tight">{title}</h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
            Effective Date: {effectiveDate} <span className="mx-2">&bull;</span> Last Updated: {effectiveDate}
          </p>
        </header>

        <article className="prose prose-lg prose-gray mx-auto max-w-none space-y-8 text-gray-700 leading-relaxed">
          {children}

          <div className="border-t border-gray-200 mt-16 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions regarding this document, you may contact us at:
            </p>
            <div className="space-y-1 text-gray-800 font-medium">
              <p>Email: <a href="mailto:contact@arogyabiox.com" className="text-blue-600 hover:underline">contact@arogyabiox.com</a></p>
              <p>Website: <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a></p>
            </div>
          </div>
        </article>

        <footer className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            Satani Research Centre @ {new Date().getFullYear()} Arogya BioX - All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
};

export default React.memo(LegalPageLayout);
