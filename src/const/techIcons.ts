import type { TechI, TechnologyT } from "@interfaces/TechInterface";

import Java from "@assets/icons/TechIcons/Backend/Java.svg";
import MySQL from "@assets/icons/TechIcons/Backend/MySQL.svg";
import NestJS from "@assets/icons/TechIcons/Backend/NestJs.svg";
import NodeJS from "@assets/icons/TechIcons/Backend/NodeJS.svg";
import PostgreSQL from "@assets/icons/TechIcons/Backend/PostgreSQL.svg";
import Python from "@assets/icons/TechIcons/Backend/Python.svg";

import Figma from "@assets/icons/TechIcons/Extras/Figma.svg";
import Firebase from "@assets/icons/TechIcons/Extras/Firebase.svg";
import Git from "@assets/icons/TechIcons/Extras/Git.svg";
import JWT from "@assets/icons/TechIcons/Extras/JWT.svg";
import Photoshop from "@assets/icons/TechIcons/Extras/Photoshop.svg";

import Javascript from "@assets/icons/TechIcons/Frontend/Javascript.svg";
import NextJS from "@assets/icons/TechIcons/Frontend/NextJS.svg";
import React from "@assets/icons/TechIcons/Frontend/React.svg";
import Tailwindcss from "@assets/icons/TechIcons/Frontend/Tailwindcss.svg";
import Typescript from "@assets/icons/TechIcons/Frontend/Typescript.svg";
import Html5 from "@assets/icons/TechIcons/Frontend/Html5.svg";
import Css from "@assets/icons/TechIcons/Frontend/Css.png";

import Gemini from "@assets/icons/SVG Logos/Gemini.svg";
import LogosCloudinaryIcon from "@assets/icons/SVG Logos/LogosCloudinaryIcon.svg";
import LogosOpenaiIcon from "@assets/icons/SVG Logos/LogosOpenaiIcon.svg";

import Word from "@assets/icons/TechIcons/Office/word.png";
import Ppt from "@assets/icons/TechIcons/Office/ppt.png";
import Excel from "@assets/icons/TechIcons/Office/excel.png";

export const techIcons: Record<TechnologyT, ImageMetadata | string> = {
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
