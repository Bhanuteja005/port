import a3 from "../assets/images/1.jpeg";
import a1 from "../assets/images/2.jpg";
import tracer from "../assets/images/9707240_4218748.jpg";
import a4 from "../assets/images/a4.webp";
import leadgen from "../assets/images/leadgencopilot.jpg";
import instantscale from "../assets/images/instantscale.jpg";
import perceptyne from "../assets/images/perceptyne.jpg";
import aether from "../assets/images/aether-og.png";
import amd from "../assets/images/amd-og.png";
import subgen from "../assets/images/subgen-og.png";
import dodgeai from "../assets/images/dodgeai-og.png";
import tradingSystem from "../assets/images/trading-system-og.png";
export const headlines = [
    "Hi, I'm Bhanu Teja.",
    "I'm an AI Enthusiast.",
"In recent years, I've focused on building scalable frontend software, tackling backend challenges, and incorporating AI to enhance functionality."];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Featured" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'LeadGen',
        image: leadgen,
        linkGithub: null,
        linkOnline: 'https://leadgencopilot.ai',
        description: 'AI-driven B2B lead generation platform that searches any company, discovers decision-maker contacts, and automatically verifies work emails at scale, complete with a prospecting analytics dashboard.',
        techStack: ['Next.js', 'TypeScript', 'AI', 'Email Verification']
    },
    {
        title: 'InstantScale',
        image: instantscale,
        linkGithub: 'https://github.com/Bhanuteja005/social-scale',
        linkOnline: 'https://instantscale.social',
        description: 'Multi-tenant social media growth platform pairing a customer-facing storefront with a full admin backend for managing Instagram/LinkedIn growth orders, analytics, and client billing.',
        techStack: ['React', 'Node.js', 'MongoDB', 'JWT']
    },
    {
        title: 'Perceptyne',
        image: perceptyne,
        linkGithub: 'https://github.com/Bhanuteja005/perceptyne',
        linkOnline: 'https://perceptyne-clone-ui.vercel.app',
        description: 'High-fidelity, multi-page clone of a futuristic robotics/AI brand site rebuilt from scratch with cinematic scroll reveals, hover glows, and a custom dark violet design system.',
        techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'Aether',
        image: aether,
        linkGithub: 'https://github.com/Bhanuteja005/aether',
        linkOnline: null,
        description: 'Multi-provider AI chatbot platform unifying Gemini, Claude, and GPT behind one interface, with inference logging, PII redaction, voice input, and an analytics dashboard.',
        techStack: ['Next.js', 'React 19', 'Supabase', 'Docker']
    },
    {
        title: 'Voicemail Detection AI',
        image: amd,
        linkGithub: 'https://github.com/Bhanuteja005/Advanced-Answering-Machine-Detection-AMD',
        linkOnline: null,
        description: 'Full-stack outbound calling system that detects human vs. voicemail pickup using four interchangeable strategies — Twilio AMD, HuggingFace wav2vec, Gemini multimodal, and Jambonz SIP.',
        techStack: ['Next.js', 'TypeScript', 'Prisma', 'Twilio', 'Gemini']
    },
    {
        title: 'SubGen',
        image: subgen,
        linkGithub: 'https://github.com/Bhanuteja005/subgen',
        linkOnline: null,
        description: 'Speech-to-subtitle generator for Telugu and English video, producing romanized live subtitle overlays with drag-and-drop upload and SRT export.',
        techStack: ['Next.js 15', 'TypeScript', 'Gemini API']
    },
    {
        title: 'O2C Graph Assistant',
        image: dodgeai,
        linkGithub: 'https://github.com/Bhanuteja005/dodgeai',
        linkOnline: null,
        description: 'Ingests Order-to-Cash data into a relationship graph and answers natural-language questions about it, translating queries to SQL with Gemini and grounding every answer in the live graph.',
        techStack: ['FastAPI', 'PostgreSQL', 'Next.js', 'Gemini']
    },
    {
        title: 'AI Trading Assistant',
        image: tradingSystem,
        linkGithub: 'https://github.com/Bhanuteja005/trading-system',
        linkOnline: null,
        description: 'Agentic trading assistant that reads live TradingView charts, runs institutional-style technical and macro analysis, and executes NIFTY/SENSEX/Gold orders through OpenAlgo under strict risk rules.',
        techStack: ['Python', 'MCP', 'OpenAlgo', 'Algo Trading']
    },
    {
        title: 'Talented.ai',
        image: tracer,
        linkGithub: 'https://github.com/Bhanuteja005/Talented.ai',
        linkOnline: 'https://talented-aii.vercel.app/',
        description: 'AI-driven recruitment platform that automates candidate screening and ranking, optimizing the hiring process end to end.',
        techStack: ['MERN Stack', 'AI']
    },
];

export const skillsWork = [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
];

export const skillsFun = [
    'AI & LLMs',
    'Docker',
    'Firebase',
    'GCP',
    'Figma',
];


export const articles = [
    {
        title: "Resume",
        resume: "Crafted a compelling resume that succinctly showcases my key qualifications and achievements, leaving a lasting impression on potential opportunities.",
        url:
            "https://drive.google.com/file/d/1ANJgrPVgQCSx2TAkSVCizoUnI6lfBCrk/view?usp=sharing",
        image: a1
    },
    {
        title: "Google Qwiklabs",
        resume: "Achieved proficiency in Cloud Computing through completion of Google QuickLab courses,and gained AI foundational knowledge for problem solving....",
        url: "https://googlecloud.qwiklabs.com/public_profiles/bde49d9a-fb46-4253-bbda-87d7951cfa6d",
        image: a4
    },
    {
        title: "Innovation Challenge'23",
        resume: "Clinched victory in a college MicroProject competition, surpassing 200+ teams, with a standout project that exemplified innovation and technical excellence.",
        url: "https://heyzine.com/flip-book/2a5bf15b05.html",
        image: a3
    },
    {
        title: "Workshop Carnival-Wordpress",
        resume: "Secured first place in a competitive WordPress contest, demonstrating exceptional skill and creativity in website design and development.",
        url:
            "https://heyzine.com/flip-book/5aa7f9f283.html",
        image: "https://i.ibb.co/1fd1MBw/wordpress.jpg"
    },
];