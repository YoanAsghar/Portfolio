import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  restaurantcrm,
  foodmart,
  defaultCli,
  aspnet,
  csharp,
  lls,
  n8n,
  sql
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CLI Tools Developer",
    icon: creator,
  },
  {
    title: "Automation Developer",
    icon: mobile,
  }
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
    {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "sql",
    icon: sql
  }
];

const experiences = [
  {
    title: "Medical interpreter",
    company_name: "Language line solutions",
    icon: lls,
    iconBg: "#383E56",
    points: [
      "Facilitating clear communication between English and Spanish-speaking clients, ensuring accurate understanding of technical requirements and project specifications.",
      "Translating complex information in real-time while maintaining context and technical accuracy across languages.",
      "Building strong client relationships through active listening and cultural awareness, essential for remote collaboration.",
      "Managing high-pressure situations and adapting communication style to different audiences and technical levels.",
    ],
    date: "January 2020 - Current",
  },
];


const projects = [
  {
    name: "Restaurant CRM",
    description:
      "An integral solution to manage restaurants internal day to days process, includes tables control to create, delete and edit, tables, orders and products, developed with react and asp.net + entity framework using a rest controllers based api and real time updates in the frontend",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "asp.net",
        color: "pink-text-gradient",
      },
      {
        name: "postgreesql",
        color: "green-text-gradient",
      },
    ],
    image: restaurantcrm,
    source_code_link: "https://github.com/YoanAsghar/RestaurantCRM",
  },
  {
    name: "FoodMart",
    description:
      "FoodMart is a comprehensive web application for managing a restaurant or food mart, featuring a robust .NET-based backend and an interactive web-based frontend. includes implementations for authorization, authentication and different roles",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: foodmart,
    source_code_link: "https://github.com/YoanAsghar/FoodMart",
  },
  {
    name: "Default CLI",
    description:
      "Default is a versatile C# command-line interface (CLI) application designed to consolidate various utility tools for developers into a single, efficient package. Built with .NET 10 and System.CommandLine, it provides an extensible architecture for managing tasks, system information, and utility functions.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "CommandLine",
        color: "green-text-gradient",
      },
    ],
    image: defaultCli,
    source_code_link: "https://github.com/YoanAsghar/Default",
  },
];

export { services, technologies, experiences, projects };
