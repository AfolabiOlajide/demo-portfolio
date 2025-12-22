import { v4 as uuidv4 } from "uuid";
import img1 from "./assets/projects-img/weatherinfo-shot.png";
import img2 from "./assets/projects-img/dashboard-demo-shot.png";
import img3 from "./assets/projects-img/sunny-cosmetics-shot.png";
import img4 from "./assets/projects-img/color-library-shot.png";
import img5 from "./assets/projects-img/redux-fakestore-snapshot.png";
import Darate from "./assets/projects-img/darate_home.png";
import Youdentify from "./assets/projects-img/youdentify_home.png";
import SofGo from "./assets/projects-img/sofgo_home.png";
import Decoder from "./assets/projects-img/decoder_home.png";
import Pyrgis from "./assets/projects-img/pyrgis.png";

export const PROJECTS = [
    {
        id: uuidv4(),
        imgSrc: SofGo,
        title: "SofGo",
        description:
            "Web Application built for a software development company.",
        githubLink: "",
        demoLink: "https://sofgo.io/",
    },
    {
        id: uuidv4(),
        imgSrc: Pyrgis,
        title: "Pyrgis",
        description:
            "A web3 AI powered application to forge and mint characters as ownable IP assets on the story blockchain.",
        githubLink: "https://github.com/AfolabiOlajide/pyrgis",
        demoLink: "https://pyrgis.vercel.app/",
    },
    {
        id: uuidv4(),
        imgSrc: Darate,
        title: "Darate",
        description:
            "A Web3 crowdfunding application, built with Next.js, Typescript, Solidity and Tailwind css.",
        githubLink: "https://github.com/AfolabiOlajide/darate",
        demoLink: "https://darate.vercel.app/",
    },
    {
        id: uuidv4(),
        imgSrc: Youdentify,
        title: "YoudentiFi",
        description:
            "A Web3 Digital Identity Platform, built with Next.js, Typescript, Tailwind css, Solidity and thirdweb.",
        githubLink: "https://github.com/AfolabiOlajide/youdentify",
        demoLink: "https://youdentify.vercel.app/",
    },
    {
        id: uuidv4(),
        imgSrc: img1,
        title: "Weather Info",
        description:
            "A Weather application where you can get real-time information on the current weather in any given area.",
        githubLink: "https://github.com/AfolabiOlajide/weatherInfo-v2",
        demoLink: "https://weatherinfo-v2.netlify.app/",
    },
    {
        id: uuidv4(),
        imgSrc: img5,
        title: "Fake Store",
        description:
            "This is an E-commerce application built with React, Redux and Tailwind CSS. It projects major functionalities of E-commerce applications.",
        githubLink:
            "https://github.com/AfolabiOlajide/Redux-Ecommerce-application",
        demoLink: "https://redux-fakestore.netlify.app/",
    },
    {
        id: uuidv4(),
        imgSrc: Decoder,
        title: "Multi-Decoder",
        description:
            "An application that allows you to encode and decode text using different encryption algorithms (open source).",
        githubLink: "https://github.com/AfolabiOlajide/multi-decoder",
        demoLink: "https://multi-decoder.vercel.app/",
    },
    {
        id: uuidv4(),
        imgSrc: img2,
        title: "Admin Dashboard Design",
        description:
            "A Fictional admin dashboard design built for a fictional E-commerce application.",
        githubLink: "https://github.com/AfolabiOlajide/dashboard-design",
        demoLink: "https://cipherr-dashboard-demo.netlify.app/",
    },
    {
        id: uuidv4(),
        imgSrc: img3,
        title: "Sunny Cosmetics",
        description:
            "A landing page created for a fictional cosmetics E-commerce website.",
        githubLink: "https://github.com/AfolabiOlajide/sunny-cosmetics",
        demoLink: "https://cipherr-sunny-cosmetics.netlify.app/",
    },
    {
        id: uuidv4(),
        imgSrc: img4,
        title: "Color Library",
        description:
            "A color palette project where you can choose, create and get any color of your choice.",
        githubLink: "https://github.com/AfolabiOlajide/Color-Library",
        demoLink: "https://color-library.netlify.app/",
    },
];
