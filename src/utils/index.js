import a3 from "../assets/images/1.jpeg";
import pen from "../assets/images/16688235_5776825.jpg";
import a1 from "../assets/images/2.jpg";
import ora from "../assets/images/2687677.jpg";
import chat from "../assets/images/368960-PB8Z2Y-988.jpg";
import cast from "../assets/images/5780082.jpg";
import tracer from "../assets/images/9707240_4218748.jpg";
import a4 from "../assets/images/a4.webp";
import insta from "../assets/images/techn.jpg";
export const headlines = [
    "Hi, I'm Bhanu Teja.",
    "I'm a Web Developer.",
    "Over the past few years, I've immersed myself in building and scaling Frontend software while actively tackling backend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Featured" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'Fastcart',
        image: cast,
        linkGithub: 'https://app.flutterflow.io/project/fastcart-rga41n?tab=pageSelector&page=home',
        linkOnline: 'https://app.flutterflow.io/project/fastcart-rga41n?tab=uiBuilder&page=page2',
        description: 'Fastcart is a android app that provides Smart Billing Interface to enhance your shopping experience for selected products.',
        techStack: ['Flutterflow', 'Barcode Integration', 'Firebase']
    },
    {
        title: 'Talented.ai',
        image: tracer,
        linkGithub: 'https://github.com/Bhanuteja005/Talented.ai',
        linkOnline: 'https://talented-aii.vercel.app/',
        description: 'Developed Talented.ai, an AI-driven platform that automates candidate screening and ranking, optimizing the recruitment process.',
        techStack: ['MERN Stack', 'AI']
    },
    {
        title: 'Zomato-Clone',
        image: pen,
        linkGithub: 'https://github.com/Bhanuteja005/zomato-master',
        linkOnline: 'https://nutritrack-ai.vercel.app/',
        description: 'Developed a full-fledged Zomato clone website, replicating the core functionalities of the popular food delivery platform to enhance user engagement and usability.',
        techStack: ['MERN Stack', 'Tailwind CSS']
    },
    {
        title: 'NutriTrack',
        image: ora,
        linkGithub: 'https://github.com/Bhanuteja005/NutriTrack',
        description: 'Created NutriTrack, an AI-powered nutrition companion that offers personalized recipe suggestions, goal tracking, and smart shopping lists to support healthier lifestyle choices.',
        techStack: ['JavaScript', 'AI', 'Python']
    },
    {
        title: 'MazeGenius',
        image: chat,
        linkGithub: 'https://github.com/Bhanuteja005/maze-play',
        linkOnline: 'https://bhanuteja005.github.io/maze-play/',
        description: 'Crafted an isometric maze game in JavaScript using Prims algorithm for generation, featuring wall display, character movement, and Python script for maze generation.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    
    {
        title: 'Ehub',
        image: insta,
        linkGithub: 'https://github.com/Bhanuteja005/E-HUB  ',
        linkOnline: null,
        description: 'Developed Student Events Hub, a user-friendly web platform centralizing college events information for students, fostering easy access and engagement without technical complexity.',
        techStack: ['Html', 'Django', 'Javascript','CSS']
    },
    
];

export const skillsWork = [
    'Java',
    'C',
    'Python',
    'SQL',
    'Html & CSS',
    'Javascript',
    'React',
    'Tailwind CSS',
];

export const skillsFun = [
    'Flutter flow',
    'Firebase',
    'Github',
    'Figma',
    'WordPress',
];


export const articles = [
    {
        title: "Resume",
        resume: "Crafted a compelling resume that succinctly showcases my key qualifications and achievements, leaving a lasting impression on potential opportunities.",
        url:
            "https://heyzine.com/flip-book/cb1566d64e.html",
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