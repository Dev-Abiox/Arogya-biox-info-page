import React from 'react';
import LegalPageLayout from './LegalPageLayout';

const DpdpAct: React.FC = () => {
    return (
        <LegalPageLayout title="Health Data and Patient Data Processing Notice">
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
        </LegalPageLayout>
    );
};

export default DpdpAct;
