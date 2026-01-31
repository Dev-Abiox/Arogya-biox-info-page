import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Header/Nav placeholder or simple back button */}
            <nav className="border-b border-gray-100 py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-sm z-50">
                <a href="/" className="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
                    <img src="/logo.png" alt="Arogya BioX" className="h-8 w-auto invert" />
                    {/* Assuming logo is white, invert makes it black. If actual image is colored, remove invert. 
                       If logo.png is white-only transparency, we might need a dark version or filter. 
                       Let's check logo.png later, for now filter contrast. */}
                </a>
                <a href="/#contact" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                    Back to Contact
                </a>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-8 md:py-12 lg:py-16">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Privacy Policy</h1>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                        Effective Date: January 01, 2026 <span className="mx-2">•</span> Last Updated: January 01, 2026
                    </p>
                </header>

                <article className="prose prose-lg prose-gray mx-auto max-w-none space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <p>
                            Arogyabiox (“Arogyabiox”, “we”, “our”, or “us”) operates the website <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a> (the “Website”). This Privacy Policy describes how we collect, use, store, protect, disclose, and process personal information of users who visit or interact with our Website. We are committed to protecting your privacy and ensuring transparency in how your data is handled.
                        </p>
                        <p className="mt-4">
                            By accessing or using our Website, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with any part of this Policy, you should discontinue use of the Website.
                        </p>
                    </section>
                    {/* ... (rest of content) ... */}
                    {/* Note: I will only replace the container and header part, and the footer part, to minimize token usage if possible. But replace_file_content needs exact match. 
                        Actually, replace_file_content is best for small blocks. multi_replace might be better or just replace the specific lines.
                        I will replace the main container opening and header first. */}
                    {/* Wait, I can't put comments inside the replacement content if it's not valid TSX structure for that spot. */}


                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We may collect personal information that you voluntarily provide to us when you interact with the Website. This includes information such as your name, email address, phone number, organization name, job title, postal address, billing information, and any other information you choose to provide through contact forms, inquiry forms, subscription forms, account registration, or communication with our team.
                        </p>
                        <p className="mb-4">
                            In addition to information you actively provide, we automatically collect certain technical and usage data when you visit the Website. This may include your IP address, browser type, device type, operating system, referral URLs, pages viewed, time spent on pages, access dates and times, and other diagnostic data. This information does not directly identify you but helps us understand how users interact with the Website.
                        </p>
                        <p>
                            We may also receive information from third parties such as analytics providers, advertising partners, payment processors, or service providers, but only where permitted by law or with your consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>To operate, maintain, and improve our Website and services.</li>
                            <li>To respond to inquiries, provide customer support, process transactions, send service-related communications, and fulfill contractual obligations.</li>
                            <li>To personalize your experience, improve our offerings, analyze user behavior, enhance Website performance, and develop new products or services.</li>
                            <li>For internal administrative purposes, security monitoring, fraud prevention, and compliance with legal obligations.</li>
                        </ul>
                        <p>
                            If you have opted in, we may use your contact information to send marketing communications, newsletters, product updates, or promotional messages. You may opt out of such communications at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                        <p className="mb-4">
                            The Website uses cookies and similar tracking technologies to enhance functionality, analyze traffic, and improve user experience. Cookies are small data files stored on your device that help us remember preferences, recognize repeat visitors, and understand how the Website is used.
                        </p>
                        <p>
                            Some cookies are essential for the Website to function properly, while others are used for analytics or performance monitoring. You can control or disable cookies through your browser settings, but doing so may affect certain features or functionality of the Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing and Disclosure of Information</h2>
                        <p className="mb-4">
                            Arogyabiox does not sell, rent, or trade your personal information. We may share your data with trusted third-party service providers who assist us in operating the Website, processing payments, delivering emails, analyzing usage, or providing infrastructure and hosting services. These third parties are contractually obligated to protect your information and use it only for the purposes specified by us.
                        </p>
                        <p>
                            We may disclose your information if required to do so by law, regulation, legal process, or governmental request. Disclosure may also occur to protect our rights, property, safety, users, or the public, or in connection with a merger, acquisition, asset sale, or business restructuring.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate technical, administrative, and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include secure servers, encrypted communications, access controls, and regular security reviews.
                        </p>
                        <p>
                            Despite our efforts, no method of data transmission or storage over the internet can be guaranteed to be completely secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                        <p>
                            We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When personal data is no longer needed, it is securely deleted or anonymized.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                        <p className="mb-4">
                            Depending on your jurisdiction, you may have rights regarding your personal data, including the right to access, correct, update, or delete your information. You may also have the right to restrict or object to certain processing activities and to withdraw consent where consent was previously given.
                        </p>
                        <p>
                            To exercise any of these rights, you may contact us using the information provided at the end of this Policy. We will respond in accordance with applicable data protection laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Children’s Privacy</h2>
                        <p>
                            The Website is not intended for use by individuals under the age of 18. Arogyabiox does not knowingly collect personal information from children. If we become aware that personal data of a minor has been collected without parental consent, we will take steps to delete such information promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                        <p>
                            If you access the Website from outside India, your information may be transferred to and processed in countries where our servers or service providers are located. By using the Website, you consent to the transfer of your information to jurisdictions that may have different data protection laws than your own.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                        <p>
                            The Website may contain links to third-party websites or services. Arogyabiox is not responsible for the privacy practices, content, or policies of such third parties. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                        <p>
                            Arogyabiox reserves the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on the Website, and the “Last Updated” date will be revised accordingly. Continued use of the Website after changes constitutes acceptance of the updated Policy.
                        </p>
                    </section>

                    <div className="border-t border-gray-200 mt-16 pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or how your information is handled, you may contact us at:
                        </p>
                        <div className="space-y-1 text-gray-800 font-medium">
                            <p>Email: <a href="mailto:contact@arogyabiox.com" className="text-blue-600 hover:underline">contact@arogyabiox.com</a></p>
                            <p>Website: <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a></p>
                        </div>
                    </div>
                </article>

                <footer className="mt-12 pt-8 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400">
                        &copy; 2026 Arogya BioX. All rights reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
