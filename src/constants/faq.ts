export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "How does HireHack work?",
        answer: "HireHack is a Chrome extension that automates your job hunt by applying to jobs on platforms like LinkedIn and Indeed with a single click. After installing the extension, set up your profile, upload resumes, and let the system handle repetitive applications while you focus on preparing for interviews."
    },
    {
        question: "Which platforms does HireHack support?",
        answer: "Currently, HireHack works with major job boards including LinkedIn, Indeed, and Glassdoor. We're continuously expanding support for more platforms to maximize your reach."
    },
    {
        question: "Is my data safe on HireHack?",
        answer: "Yes. We use enterprise-grade encryption and secure authentication to protect your personal information, resumes, and application history. Your data is private and never shared with third parties without your consent."
    },
    {
        question: "Can I track my job applications?",
        answer: "Absolutely! HireHack gives you a personalized dashboard to track applications, view statuses, and monitor interview progress — all in one place."
    },
    {
        question: "Does HireHack help with interviews?",
        answer: "Yes! HireHack includes an AI-powered interview assistant that provides tailored practice questions, real-time coaching, and feedback to help you ace your interviews with confidence."
    },
    {
        question: "How do I get started?",
        answer: "Simply download the HireHack Chrome extension from the Chrome Web Store, sign up for free, and start automating applications instantly."
    }
];
