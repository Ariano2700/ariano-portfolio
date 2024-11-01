export interface TechI {
  icon: string;
  name: string;
}
export type Technology =
  | "Html5"
  | "Css3"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "NodeJS"
  | "Express"
  | "Firebase"
  | "Tailwindcss"
  | "Astro"
  | "Java"
  | "MySQL"
  | "NestJS"
  | "PostgreSQL"
  | "Python"
  | "OpenAi"
  | "Gemini"
  | "Cloudinary"
  | "NextJS";

export type LinksT = {
  github: string;
  link_page: string;
};
export interface ProjectsI {
  title: string;
  titleColor: string;
  dateTo: string;
  description: string;
  technology: Technology[];
  imageUrl: string;
  links: LinksT;
}
