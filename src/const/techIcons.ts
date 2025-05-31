import type { TechI, TechnologyT } from "@interfaces/TechInterface";

import Java from "@assets/icons/TechIcons/Backend/Java.svg?url";
import MySQL from "@assets/icons/TechIcons/Backend/MySQL.svg?url";
import NestJS from "@assets/icons/TechIcons/Backend/NestJs.svg?url";
import NodeJS from "@assets/icons/TechIcons/Backend/NodeJS.svg?url";
import PostgreSQL from "@assets/icons/TechIcons/Backend/PostgreSQL.svg?url";
import Python from "@assets/icons/TechIcons/Backend/Python.svg?url";

import Figma from "@assets/icons/TechIcons/Extras/Figma.svg?url";
import Firebase from "@assets/icons/TechIcons/Extras/Firebase.svg?url";
import Git from "@assets/icons/TechIcons/Extras/Git.svg?url";
import JWT from "@assets/icons/TechIcons/Extras/JWT.svg?url";
import Photoshop from "@assets/icons/TechIcons/Extras/Photoshop.svg?url";

import Javascript from "@assets/icons/TechIcons/Frontend/Javascript.svg?url";
import NextJS from "@assets/icons/TechIcons/Frontend/NextJS.svg?url";
import React from "@assets/icons/TechIcons/Frontend/React.svg?url";
import Tailwindcss from "@assets/icons/TechIcons/Frontend/Tailwindcss.svg?url";
import Typescript from "@assets/icons/TechIcons/Frontend/Typescript.svg?url";
import Html5 from "@assets/icons/TechIcons/Frontend/Html5.svg?url";
import Css from "@assets/icons/TechIcons/Frontend/Css.png?url";

import Gemini from "@assets/icons/SVG Logos/Gemini.svg?url";
import LogosCloudinaryIcon from "@assets/icons/SVG Logos/LogosCloudinaryIcon.svg?url";
import LogosOpenaiIcon from "@assets/icons/SVG Logos/LogosOpenaiIcon.svg?url";

import Word from "@assets/icons/TechIcons/Office/word.png?url";
import Ppt from "@assets/icons/TechIcons/Office/ppt.png?url";
import Excel from "@assets/icons/TechIcons/Office/excel.png?url";

export const techIcons: Record<TechnologyT, string> = {
  Java: Java,
  MySQL: MySQL,
  NestJS: NestJS,
  NodeJS: NodeJS,
  PostgreSQL: PostgreSQL,
  Python: Python,
  Figma: Figma,
  Firebase: Firebase,
  Git: Git,
  JWT: JWT,
  Photoshop: Photoshop,
  JavaScript: Javascript,
  NextJS: NextJS,
  React: React,
  Tailwindcss: Tailwindcss,
  TypeScript: Typescript,
  Html5: Html5,
  Css: Css,
  OpenAi: LogosOpenaiIcon,
  Gemini: Gemini,
  Cloudinary: LogosCloudinaryIcon,
  Astro: "/DeviconAstro.webp",
};

export const frontendTech: TechI[] = [
  {
    name: "HTML5",
    icon: Html5,
  },
  {
    name: "CSS",
    icon: Css,
  },
  {
    name: "Javascript",
    icon: Javascript,
  },
  {
    name: "NextJS",
    icon: NextJS,
  },
  {
    name: "React",
    icon: React,
  },
  {
    name: "Tailwind",
    icon: Tailwindcss,
  },
  {
    name: "Typescript",
    icon: Typescript,
  },
  {
    name: "Astro",
    icon: "/DeviconAstro.webp",
  },
];

export const backendTech: TechI[] = [
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "NestJS",
    icon: NestJS,
  },
  {
    name: "NodeJS",
    icon: NodeJS,
  },
  {
    name: "Postgre",
    icon: PostgreSQL,
  },
  {
    name: "Python",
    icon: Python,
  },
];

export const extrasTech: TechI[] = [
  {
    name: "Figma",
    icon: Figma,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "JWT",
    icon: JWT,
  },
  {
    name: "Photoshop",
    icon: Photoshop,
  },
];

export const officeTech: TechI[] = [
  {
    name: "Word",
    icon: Word,
  },
  {
    name: "PPT",
    icon: Ppt,
  },
  {
    name: "Excel",
    icon: Excel,
  },
];
