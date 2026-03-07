import React from 'react';
import LegalPageLayout from './LegalPageLayout';

const PrivacyPolicy: React.FC = () => {
    return (
        <LegalPageLayout title="Privacy Policy">
            <section>
                <p>
                    Arogyabiox ("Arogyabiox", "we", "our", or "us") operates the website <a href="https://www.arogyabiox.com/" className="text-blue-600 hover:underline">https://www.arogyabiox.com/</a> (the "Website"). This Privacy Policy describes how we collect, use, store, protect, disclose, and process personal information of users who visit or interact with our Website. We are committed to protecting your privacy and ensuring transparency in how your data is handled.
                </p>
                <p className="mt-4">
                    By accessing or using our Website, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with any part of this Policy, you should discontinue use of the Website.
                </p>
            </section>

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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
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
                    Arogyabiox reserves the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on the Website, and the "Last Updated" date will be revised accordingly. Continued use of the Website after changes constitutes acceptance of the updated Policy.
                </p>
            </section>
        </LegalPageLayout>
    );
};

export default PrivacyPolicy;
