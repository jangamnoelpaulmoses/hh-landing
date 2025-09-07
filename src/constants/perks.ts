export interface PerkItem {
    title: string;
    description: string;
    icon: string;
}

export const PERKS: PerkItem[] = [
    {
        title: "One-Click Apply",
        description: "Submit applications to hundreds of jobs on LinkedIn, Indeed, and more — in a single click.",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "Smart Tracking",
        description: "Track all your applications and statuses from one central dashboard.",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "AI Resume Feedback",
        description: "Get instant AI suggestions to optimize your resume for every role.",
        icon: "/icons/perk-three.svg"
    },
    {
        title: "Interview Assistant",
        description: "Prepare and practice with real-time AI coaching to ace interviews confidently.",
        icon: "/icons/perk-four.svg"
    }
];
