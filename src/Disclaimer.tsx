import React from 'react';

const Disclaimer: React.FC = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Clinical and Medical Disclaimer</h1>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                        Effective Date: January 01, 2026 <span className="mx-2">•</span> Last Updated: January 01, 2026
                    </p>
                </header>

                <article className="prose prose-lg prose-gray mx-auto max-w-none space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <p>
                            This Clinical and Medical Disclaimer applies to the Clinomic Lab Software and all related platforms, modules, dashboards, analytics tools, reports, and services provided by Arogyabiox through the website <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a> or any associated deployment, whether cloud-based or on-premise.
                        </p>
                        <p>
                            By accessing, installing, using, or relying on Clinomic Lab Software, you acknowledge that you have read, understood, and agreed to this Disclaimer in full. If you do not agree with any part of this Disclaimer, you must not use the software or associated services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nature of the Software</h2>
                        <p className="mb-4">
                            Clinomic Lab Software is a laboratory information and workflow management platform designed to assist laboratories, diagnostic centers, hospitals, and healthcare institutions in managing operational, administrative, analytical, and reporting processes. The software is intended to support data handling, sample tracking, report generation, system integration, and operational efficiency.
                        </p>
                        <p>
                            Clinomic Lab Software is not a medical device, diagnostic instrument, or clinical decision-making system unless explicitly stated and certified under applicable regulatory frameworks. The software does not independently perform medical diagnoses, clinical interpretations, or treatment recommendations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Medical Advice</h2>
                        <p className="mb-4">
                            All information, outputs, analytics, reports, visualizations, or data representations generated or displayed by Clinomic Lab Software are provided strictly for informational and operational support purposes. Nothing within the software constitutes medical advice, clinical judgment, diagnosis, prognosis, or treatment recommendations.
                        </p>
                        <p>
                            Users must not rely on the software as a substitute for professional medical judgment. All medical decisions, diagnostic interpretations, and treatment actions must be made solely by qualified and licensed healthcare professionals in accordance with applicable laws, clinical standards, and professional guidelines.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibility of Healthcare Professionals</h2>
                        <p className="mb-4">
                            The responsibility for verifying, reviewing, validating, and approving laboratory data, test results, interpretations, and reports rests entirely with the licensed laboratory professionals, pathologists, clinicians, or healthcare providers using the software.
                        </p>
                        <p>
                            Arogyabiox does not assume responsibility for the accuracy, completeness, or clinical validity of any data entered into the system, whether manually or through integrations with third-party devices, instruments, or systems. Any errors arising from incorrect data entry, sample handling, calibration issues, device malfunction, or human oversight remain the responsibility of the laboratory or healthcare institution.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Replacement for Professional Judgment</h2>
                        <p className="mb-4">
                            Clinomic Lab Software is designed to assist workflows and data management but does not replace human expertise. The software does not verify the medical correctness of laboratory results, does not detect clinical anomalies, and does not guarantee compliance with laboratory accreditation standards unless explicitly stated in a contractual agreement.
                        </p>
                        <p>
                            Final interpretation, validation, and release of reports must always be performed by authorized professionals in accordance with regulatory, ethical, and professional obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Clinical Liability</h2>
                        <p className="mb-4">
                            To the fullest extent permitted by law, Arogyabiox shall not be liable for any medical outcomes, diagnostic errors, treatment decisions, patient harm, delays in care, or adverse events arising from the use or misuse of Clinomic Lab Software.
                        </p>
                        <p className="mb-4">
                            Arogyabiox is not responsible for losses or damages resulting from reliance on software-generated outputs, system downtime, integration failures, data synchronization delays, or incorrect configuration by users or third parties.
                        </p>
                        <p>
                            The software is provided as a technological tool, and its use does not establish a doctor-patient relationship, healthcare provider-patient relationship, or fiduciary duty between Arogyabiox and any patient or end user.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance Responsibility</h2>
                        <p className="mb-4">
                            Compliance with local, national, and international healthcare regulations, laboratory accreditation standards, and clinical governance requirements remains the sole responsibility of the laboratory, hospital, or healthcare institution using the software.
                        </p>
                        <p>
                            Arogyabiox does not guarantee that the software meets specific regulatory requirements unless explicitly agreed upon in writing. Users are responsible for ensuring that their use of the software aligns with applicable laws, including but not limited to healthcare regulations, data protection laws, and professional standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Use Disclaimer</h2>
                        <p>
                            Clinomic Lab Software is not intended for emergency medical decision-making or real-time life-critical interventions. The software must not be relied upon in situations where delays, inaccuracies, or system unavailability could result in serious harm or death.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Integrity and External Dependencies</h2>
                        <p>
                            The accuracy and reliability of software outputs depend on the quality and integrity of data provided by users or third-party systems. Arogyabiox is not responsible for errors caused by incorrect inputs, corrupted data, unauthorized access, or failures of external systems, devices, networks, or integrations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Warranty</h2>
                        <p>
                            Clinomic Lab Software is provided on an “as is” and “as available” basis. Arogyabiox makes no warranties, express or implied, regarding the clinical suitability, accuracy, reliability, or fitness of the software for any particular medical or diagnostic purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Disclaimer</h2>
                        <p>
                            By using Clinomic Lab Software, you expressly acknowledge and agree that you assume full responsibility for all clinical, diagnostic, and medical decisions made using or influenced by the software.
                        </p>
                    </section>

                    <div className="border-t border-gray-200 mt-16 pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <p className="text-gray-700 mb-4">
                            For questions regarding this Clinical and Medical Disclaimer, you may contact:
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

export default Disclaimer;
