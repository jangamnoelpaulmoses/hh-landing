export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Free",
        description: "Perfect for job seekers starting out",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Auto apply to jobs (limited per day)", included: true },
            { text: "Save multiple resumes", included: true },
            { text: "Basic job alerts", included: true },
            { text: "Track application status", included: true },
            { text: "AI resume feedback", included: false },
            { text: "Interview prep assistant", included: false },
        ],
    },
    {
        name: "Pro",
        description: "For students and professionals who want an edge",
        price: {
            monthly: 19,
            yearly: 190,
        },
        popular: true,
        features: [
            { text: "Unlimited auto applications", included: true },
            { text: "Advanced job alerts", included: true },
            { text: "Resume analytics & AI feedback", included: true },
            { text: "Application tracking dashboard", included: true },
            { text: "Interview prep assistant (AI-powered)", included: true },
            { text: "Priority support", included: true },
        ],
    },
    {
        name: "Business",
        description: "For recruiters and staffing agencies",
        price: {
            monthly: 99,
            yearly: 990,
        },
        features: [
            { text: "Post unlimited job listings", included: true },
            { text: "Unlimited resume searches", included: true },
            { text: "Branded job postings", included: true },
            { text: "Candidate tracking dashboard", included: true },
            { text: "Export candidate data", included: true },
            { text: "Dedicated recruiter manager", included: true },
        ],
    },
];
