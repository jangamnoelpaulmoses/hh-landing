export interface HowItWorksItem {
    title: string;
    description: string;
    image: string;
}

export const HOW_IT_WORKS: HowItWorksItem[] = [
    {
        title: "Sign Up & Set Up",
        description: "Create your free HireHack account in minutes and set up your profile with resumes and preferences.",
        image: "/images/hiw-one.svg"
    },
    {
        title: "Install & Automate",
        description: "Add the HireHack browser extension and let it auto-apply to jobs on LinkedIn, Indeed, and other platforms.",
        image: "/images/hiw-two.svg"
    },
    {
        title: "Ace Your Interviews",
        description: "Get AI-powered coaching, smart answers, and real-time feedback to perform confidently in interviews.",
        image: "/images/hiw-three.svg"
    }
];
