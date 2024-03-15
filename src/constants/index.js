import {
  react,
  htmlcss,
  node,
  js,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bootstrap,
  scss,
  express,
  nextjs,
  sg,
  veda,
  abb,
  carrent,
  blogmern,
  jobit,
  tripguide,
  shopyshop,
  chatbook,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: react,
  },
  {
    title: "HTML & CSS Developer",
    icon: htmlcss,
  },
  {
    title: "Backend Developer",
    icon: node,
  },
  {
    title: "JavaScript Developer",
    icon: js,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Healthcare Business and Ayurvedic Health Consultant",
    company_name: "Veda Ayurveda",
    icon: veda,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - may 2023",
    points: [
      "Established and managed a healthcare business specializing in Ayurvedic health consultancy, offering holistic wellness solutions aligned with Ayurvedic principles.",
      "Expanded operations by establishing multiple healthcare store stockpoints, ensuring wider accessibility to natural remedies and wellness products aligned with Ayurveda.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "SpriteGenix",
    icon: sg,
    iconBg: "#383E56",
    date: "Nov 2020 - Present",
    points: [
      "Collaborated with the development team to design and implement responsive websites, including the company's main website, using HTML, CSS, JavaScript, and front-end frameworks like React and Next.js. Successfully deployed websites on cPanel for seamless access and user experience.",
      "Assisted in front-end development tasks, conducted website testing, and troubleshooting, ensuring the punctual delivery of high-quality websites.",
      "Gained practical experience with modern development tools, and actively participated in the deployment process on cPanel.",
    ],
  },
  {
    title: "Motor Tester Engineer (Internship)",
    company_name: "ABB India Ltd",
    icon: abb,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Dec 2017",
    points: [
      "Developed an AC induction motor testing program complying with I.E.C. 60034 standards, collaborating with the production manager and team.",
      "Demonstrated strong teamwork, communication, problem-solving skills, and rapid adaptability in a dynamic engineering environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SpriteGenix",
    description:
      "I upgraded company's official website to the latest version of Next.js(version 14th), ensuring all components are up-to-date. I debugged the code, significantly enhancing the reloading speed for a smoother user experience.  I can't show you the code due to company policy. However, If you visit the Expert Team section on the website, you'll find my photo proudly displayed as a testament to my contributions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap&css",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
    live_link: "https://spritegenix.com/",
  },
  {
    name: "Blog MERN",
    description:
      "Blogging application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application features a comprehensive set of functionalities for creating, managing, and interacting with blog posts, including user authentication, admin dashboard, and social login options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: blogmern,
    source_code_link: "https://github.com/erpankajk4/Blog-MERN-FireBase.git",
    live_link: "https://blog-mern-firebase.onrender.com",
  },
  {
    name: "MovieHub",
    description:
      "MovieHub is a feature-rich web application that allows you to explore a vast collection of movies and TV shows. It is built using React and leverages the power of the TMDB (The Movie Database) API to provide an extensive database of entertainment content. Whether you're a cinephile looking for your next favorite film or just browsing for an enjoyable evening of TV, MovieHub has you covered.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/erpankajk4/MovieHub---React-Redux-SCSS.git",
    live_link: "https://moviehub-redux.netlify.app/",
  },
  {
    name: "Todo App",
    description:
      "A simple Offline Todo application built using React and Redux for managing tasks. Todos are saved to local storage for persistent data. Each todo represented as a list and card also with motion animation, allowing deletion and completion toggling. Active todos appear on top, sorted by creation time; completed todos appear below, sorted by completion time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/erpankajk4/React_Todo_App-Redux-custumHook--offline.git",
    live_link: "https://react-offine-todo-app.netlify.app/",
  },
  {
    name: "ShopyShop",
    description:
      "ShopyShop is a web application for the customers of an e-commerce business. It allows users to register, login, browse products, add them to a cart, make orders, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: shopyshop,
    source_code_link:
      "https://github.com/erpankajk4/ShopyShop-Redux-Version-.git",
    live_link: "https://shopyshop-redux.netlify.app/",
  },
  {
    name: "ChatBook",
    description:
      "The project is a user authentication and profile management web application. It allows users to sign up, sign in, update their profile information, and view their profile. The application uses sessions and cookies for user authentication and stores user data in a MongoDB database. It has sign in / sign up by Google Feature too.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "passport",
        color: "green-text-gradient",
      },
    ],
    image: chatbook,
    source_code_link:
      "https://github.com/erpankajk4/ShopyShop-Redux-Version-.git",
    live_link: "",
  },
];

const education = [
  {
    collage: "YMCA University of Science & Technology, Faridabad",
    course: "B.tech",
    passout: "2018",
    marks: "7.34 CGPA",
  },
  {
    collage: "C.D.L. Govt. Polytechnic Institute, Nathusari Chopta",
    course: "Diploma",
    passout: "2015",
    marks: "77.74%",
  },
  {
    collage: "M.V.M. sr. sec. School, Faridabad",
    course: "Matriculation",
    passout: "2012",
    marks: "78.9%",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
};
