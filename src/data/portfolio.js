import { Github, Linkedin, Mail, FileText, Code, Globe, Twitter, Youtube, MessageSquare } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Manokamna",
        role: "Indira Gandhi Delhi Technical University for Women (IGDTUW) | CGPA: 8.88",
        tagline: "Software Engineer | Full Stack Developer",
        email: "aroramoney473@gmail.com",
        phone: "+91-9057279434",
        location: "Delhi, India",
        socials: [
            { name: "GitHub", url: "https://github.com/student-manokamna?tab=repositories", icon: Github },
            { name: "LeetCode", url: "https://leetcode.com/u/codersstyle/", icon: Code },
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/manokamna_8", icon: Globe },
            // Placeholder for LinkedIn if not provided
            { name: "LinkedIn", url: "#", icon: Linkedin },
        ]
    },
    education: [
        {
            institution: "Indira Gandhi Delhi Technical University for Women",
            short: "IGDTUW",
            degree: "B.Tech - Electronics and Communication Engineering",
            year: "2023 - 2027",
            score: "CGPA: 8.88"
        }
    ],
    skills: {
        "Languages": ["C", "C++", "JavaScript", "TypeScript", "Python"],
        "Frontend": ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "Socket.io", "REST APIs"],
        "Database": ["PostgreSQL", "MongoDB", "Pinecone", "Prisma"],
        "AI/ML": ["Gemini AI", "LangChain", "RAG", "Scikit-learn"],
        "Tools": ["Git", "GitHub", "Vercel", "Render", "Docker"]
    },
    projects: [
        {
            title: "CodeConnect",
            subtitle: "Tinder for Developers",
            tech: ["MERN Stack", "Socket.io", "Redux", "OAuth 2.0"],
            description: "A developer networking platform with swipe-based matching, real-time chat, and video calling.",
            links: { demo: "#", github: "#" }
        },
        {
            title: "CodeReview SaaS",
            subtitle: "AI-Powered Code Review",
            tech: ["Next.js 16", "Gemini AI", "Pinecone", "Prisma"],
            description: "Automated code review platform using RAG and Gemini AI for intelligent feedback.",
            links: { demo: "#", github: "#" }
        },
        {
            title: "QuickPlates",
            subtitle: "Food Delivery Platform",
            tech: ["React.js", "Redux", "Tailwind CSS"],
            description: "Responsive food delivery app using live API for real-time restaurant data.",
            links: { demo: "#", github: "#" }
        },
        {
            title: "YouTube Clone",
            subtitle: "Video Streaming App",
            tech: ["React", "RapidAPI", "MUI"],
            description: "Functional YouTube clone with video playback, search, and channel details.",
            links: { demo: "#", github: "#" }
        },
        {
            title: "AI Chatbot",
            subtitle: "Interactive Assistant",
            tech: ["Python", "Gemini API", "Streamlit"],
            description: "Smart chatbot capable of answering queries and generating code snippets.",
            links: { demo: "#", github: "#" }
        }
    ]
};
