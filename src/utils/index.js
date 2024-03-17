import a3 from "../assets/images/1.jpeg";
import pen from "../assets/images/16688235_5776825.jpg";
import a1 from "../assets/images/2.jpg";
import ora from "../assets/images/2687677.jpg";
import chat from "../assets/images/368960-PB8Z2Y-988.jpg";
import cast from "../assets/images/5780082.jpg";
import tracer from "../assets/images/9707240_4218748.jpg";
import a4 from "../assets/images/a4.webp";
import a5 from "../assets/images/a5.jpg";
import insta from "../assets/images/techn.jpg";
export const headlines = [
    "Hi, I'm Bhanu Teja.",
    "I'm a Engineering Student.",
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
        title: 'SLIMQ',
        image: ora,
        linkGithub: 'https://github.com/Bhanuteja005/chatbot-bha',
        description: 'Engineered a chatbot using LSTM-based neural network for intent classification and randomized response generation from a curated dataset.',
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
        title: 'Placement-Portal',
        image: tracer,
        linkGithub: 'https://github.com/Bhanuteja005/Placement',
        linkOnline: null,
        description: 'Created a dynamic placement portal for streamlined recruitment processes, offering a user-friendly interface, resume uploads, and automated job matching.',
        techStack: ['Bootstrap', 'Javascript']
    },
    {
        title: 'Ehub',
        image: insta,
        linkGithub: 'https://github.com/Bhanuteja005/E-HUB  ',
        linkOnline: null,
        description: 'Developed Student Events Hub, a user-friendly web platform centralizing college events information for students, fostering easy access and engagement without technical complexity.',
        techStack: ['Html', 'Django', 'Javascript','CSS']
    },
    {
        title: 'Zomato-Clone',
        image: pen,
        linkGithub: 'https://github.com/Bhanuteja005/zomproject',
        description: 'Debuted with my inaugural project: a sample Zomato-inspired web page, showcasing an early exploration into web development.',
        techStack: ['MERN Stack', 'Tailwind CSS']
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
        title: "Innovation Challenge'23 winner",
        resume: "Clinched victory in a college MicroProject competition, surpassing 200+ teams, with a standout project that exemplified innovation and technical excellence.",
        url: "https://heyzine.com/flip-book/2a5bf15b05.html",
        image: a3
    },
    {
        title: "Wordpress",
        resume: "Secured first place in a competitive WordPress contest, demonstrating exceptional skill and creativity in website design and development.",
        url:
            "https://heyzine.com/flip-book/5aa7f9f283.html",
        image: a5    },
];