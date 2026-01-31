import React from 'react';

const TermsConditions: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Header/Nav placeholder or simple back button */}
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Terms and Conditions</h1>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                        Effective Date: January 01, 2026 <span className="mx-2">•</span> Last Updated: January 01, 2026
                    </p>
                </header>

                <article className="prose prose-lg prose-gray mx-auto max-w-none space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <p>
                            These Terms and Conditions govern your access to and use of the website <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a> operated by Arogyabiox (“Arogyabiox”, “we”, “our”, or “us”). By accessing, browsing, or using this Website, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions. If you do not agree with any part of these Terms, you must discontinue use of the Website immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Website</h2>
                        <p className="mb-4">
                            The Website is provided for informational, commercial, and service-related purposes only. You agree to use the Website only for lawful purposes and in a manner that does not violate applicable laws, regulations, or the rights of others. You must not use the Website in any way that may cause damage, disruption, or impairment to the Website, its infrastructure, or its availability to other users.
                        </p>
                        <p>
                            You agree not to attempt unauthorized access to any part of the Website, servers, databases, or systems connected to the Website. Any misuse, hacking attempts, data scraping, or reverse engineering of the Website is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and User Responsibility</h2>
                        <p className="mb-4">
                            By using this Website, you represent that you are at least 18 years of age and have the legal capacity to enter into binding agreements. If you are accessing the Website on behalf of an organization, institution, or entity, you represent that you have the authority to bind that organization to these Terms.
                        </p>
                        <p>
                            You are solely responsible for maintaining the confidentiality of any information you submit and for all activities conducted through your use of the Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Services and Information Disclaimer</h2>
                        <p className="mb-4">
                            All information provided on the Website is for general informational purposes only. While Arogyabiox strives to ensure accuracy, completeness, and reliability, we make no guarantees or warranties regarding the correctness, suitability, or availability of the content.
                        </p>
                        <p className="mb-4">
                            Any healthcare, diagnostic, biotechnology, laboratory, or analytical information provided on the Website does not constitute medical advice, diagnosis, or treatment. Users should always consult qualified professionals before making decisions based on information obtained from the Website.
                        </p>
                        <p>
                            Arogyabiox reserves the right to modify, suspend, or discontinue any part of the Website or services at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                        <p className="mb-4">
                            All content available on the Website, including but not limited to text, graphics, logos, designs, images, software, code, layout, and trademarks, is the exclusive property of Arogyabiox or its licensors and is protected under applicable intellectual property laws.
                        </p>
                        <p className="mb-4">
                            You may not copy, reproduce, distribute, publish, modify, transmit, or exploit any content from the Website without prior written permission from Arogyabiox, except for personal and non-commercial use as permitted by law.
                        </p>
                        <p>
                            Unauthorized use of our intellectual property may result in legal action.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">User Submissions and Communications</h2>
                        <p className="mb-4">
                            Any information, inquiries, feedback, or materials submitted to Arogyabiox through the Website shall be considered non-confidential unless expressly stated otherwise. By submitting such content, you grant Arogyabiox the right to use, reproduce, modify, and process the content for business, operational, or service-related purposes.
                        </p>
                        <p>
                            You agree not to submit any content that is unlawful, defamatory, abusive, misleading, obscene, infringing, or harmful in nature.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Services</h2>
                        <p className="mb-4">
                            The Website may contain links to third-party websites, tools, or services for convenience or reference. Arogyabiox does not control, endorse, or assume responsibility for the content, policies, practices, or availability of third-party platforms.
                        </p>
                        <p>
                            Your interactions with third-party services are governed by their respective terms and conditions and privacy policies. Arogyabiox shall not be liable for any loss or damage arising from your use of third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                        <p className="mb-4">
                            To the fullest extent permitted by law, Arogyabiox shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to your access to or use of the Website.
                        </p>
                        <p>
                            This includes, but is not limited to, loss of data, loss of profits, service interruptions, system failures, or reliance on information provided on the Website, even if Arogyabiox has been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless Arogyabiox, its directors, employees, partners, affiliates, and service providers from any claims, liabilities, damages, losses, or expenses arising out of your use of the Website, violation of these Terms, or infringement of any rights of a third party.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
                        <p>
                            Your use of the Website is also governed by our Privacy Policy. By using the Website, you consent to the collection, processing, and use of your information as described in the Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination of Access</h2>
                        <p className="mb-4">
                            Arogyabiox reserves the right, at its sole discretion, to suspend or terminate your access to the Website at any time, without notice, for conduct that violates these Terms or is otherwise harmful to Arogyabiox or other users.
                        </p>
                        <p>
                            Termination does not limit any rights or remedies available to Arogyabiox under law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
                        <p>
                            These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
                        <p>
                            Arogyabiox reserves the right to revise or update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the Website. Continued use of the Website after changes constitutes your acceptance of the revised Terms.
                        </p>
                    </section>

                    <div className="border-t border-gray-200 mt-16 pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions, concerns, or legal inquiries regarding these Terms and Conditions, you may contact us at:
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

export default TermsConditions;
