export interface TechI {
  icon: string;
  name: string;
}
export type TechnologyT =
  | "Java"
  | "MySQL"
  | "NestJS"
  | "NodeJS"
  | "PostgreSQL"
  | "Python"
  | "Figma"
  | "Firebase"
  | "Git"
  | "JWT"
  | "Photoshop"
  | "JavaScript"
  | "NextJS"
  | "React"
  | "Tailwindcss"
  | "TypeScript"
  | "Html5"
  | "Css"
  | "OpenAi"
  | "Gemini"
  | "Cloudinary"
  | "Astro";

export type LinksT = {
  github: string;
  link_page?: string;
};
export interface ProjectsI {
  title: string;
  titleColor: string;
  dateTo: string;
  description: string;
  technology: TechnologyT[];
  imageUrl?: string;
  links: LinksT;
}
