import React from 'react';

const DpdpAct: React.FC = () => {
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
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900 leading-tight">
                        Health Data and Patient Data Processing Notice
                    </h1>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                        Effective Date: January 01, 2026 <span className="mx-2">•</span> Last Updated: January 01, 2026
                    </p>
                </header>

                <article className="prose prose-lg prose-gray mx-auto max-w-none space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <p>
                            This Health Data and Patient Data Processing Notice explains how Arogyabiox processes personal data and sensitive health data in connection with the use of Clinomic Lab Software and related services made available through <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a> or associated deployments. This Notice forms an integral part of our Privacy Policy and applies specifically to clinical, diagnostic, laboratory, and healthcare-related data.
                        </p>
                        <p>
                            By accessing or using Clinomic Lab Software, you acknowledge that you have read, understood, and agreed to the practices described in this Notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nature of Health and Patient Data</h2>
                        <p className="mb-4">
                            Clinomic Lab Software may process personal data and sensitive personal data, including health-related information, as part of its functionality. This may include patient identifiers, laboratory test details, sample information, diagnostic results, clinical metadata, reports, timestamps, and system logs associated with laboratory workflows.
                        </p>
                        <p>
                            Such data is processed solely to enable laboratories, hospitals, diagnostic centers, and healthcare institutions to perform their operational and clinical activities. Arogyabiox does not determine the purpose or means of clinical data usage and does not use patient data for independent medical decision-making.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Role of Arogyabiox as Data Processor</h2>
                        <p className="mb-4">
                            For health and patient data processed through Clinomic Lab Software, Arogyabiox acts strictly as a data processor or service provider on behalf of the laboratory, hospital, or healthcare institution that controls the data. The healthcare institution remains the data controller and retains full ownership, authority, and responsibility over patient data.
                        </p>
                        <p>
                            Arogyabiox processes health data only in accordance with documented instructions provided by the data controller and does not access, analyze, disclose, or use patient data for any purpose beyond providing and maintaining the software services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
                        <p className="mb-4">
                            Health and patient data is processed based on the lawful authority and consent obtained by the healthcare institution from the patient or as required for medical, diagnostic, or legal obligations. Arogyabiox relies on the data controller to ensure that all necessary patient consents, notices, and authorizations have been obtained in accordance with applicable laws.
                        </p>
                        <p>
                            Processing is carried out in compliance with the Digital Personal Data Protection Act, 2023 of India, and other applicable data protection regulations, as relevant to the jurisdiction of use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Purpose Limitation</h2>
                        <p className="mb-4">
                            Patient and health data processed through Clinomic Lab Software is used strictly for operational, diagnostic, reporting, record-keeping, compliance, and workflow management purposes as defined by the healthcare institution. Arogyabiox does not use such data for marketing, profiling, advertising, or unrelated analytics.
                        </p>
                        <p>
                            No patient data is used to train artificial intelligence or machine learning models unless explicitly agreed in writing with the data controller and permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security Measures</h2>
                        <p className="mb-4">
                            Arogyabiox implements reasonable and appropriate technical and organizational measures to protect health and patient data from unauthorized access, loss, misuse, alteration, or disclosure. These measures may include data encryption, secure authentication mechanisms, role-based access controls, audit logs, infrastructure security practices, and controlled access to production systems.
                        </p>
                        <p>
                            Access to patient data within Arogyabiox is restricted to authorized personnel strictly on a need-to-know basis and subject to confidentiality obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Retention</h2>
                        <p className="mb-4">
                            Health and patient data is stored only for the duration required to provide services to the data controller or as specified under contractual agreements. Data retention periods are determined by the healthcare institution in accordance with applicable medical, legal, and regulatory requirements.
                        </p>
                        <p>
                            Upon termination of services or upon documented request from the data controller, patient data will be returned, deleted, or anonymized in accordance with contractual terms and applicable law, subject to lawful retention obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Transfers</h2>
                        <p className="mb-4">
                            Arogyabiox does not sell or disclose patient data to third parties. Data may be processed by authorized sub-processors solely for infrastructure, hosting, backup, or technical support purposes, and only under strict contractual safeguards ensuring confidentiality, security, and compliance.
                        </p>
                        <p>
                            Where data is transferred across geographic boundaries, appropriate safeguards are implemented to ensure compliance with applicable data protection laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Breach Management</h2>
                        <p>
                            In the event of a personal data breach affecting health or patient data, Arogyabiox will notify the relevant healthcare institution without undue delay and provide reasonable assistance to enable compliance with legal notification and remediation obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rights of Data Principals</h2>
                        <p className="mb-4">
                            Patients retain their rights under applicable data protection laws, including the right to access, correction, deletion, and grievance redressal. Requests related to patient rights must be directed to the healthcare institution acting as the data controller.
                        </p>
                        <p>
                            Arogyabiox will provide reasonable assistance to the data controller in responding to such requests, where technically and legally feasible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibility of Healthcare Institutions</h2>
                        <p className="mb-4">
                            Healthcare institutions using Clinomic Lab Software are solely responsible for ensuring lawful data collection, patient consent, compliance with medical confidentiality obligations, and adherence to regulatory requirements.
                        </p>
                        <p>
                            Arogyabiox does not assume responsibility for misuse of patient data, unauthorized access resulting from weak credentials, improper role assignment, or failure by the data controller to comply with legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Notice</h2>
                        <p>
                            This Health Data and Patient Data Processing Notice may be updated from time to time to reflect changes in legal requirements, operational practices, or service offerings. Updates will be effective upon publication, and continued use of the software constitutes acceptance of the revised Notice.
                        </p>
                    </section>

                    <div className="border-t border-gray-200 mt-16 pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <p className="text-gray-700 mb-4">
                            For questions regarding this Notice or data protection practices, you may contact:
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

export default DpdpAct;
