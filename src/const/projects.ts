import type { ProjectsI } from "@interfaces/TechInterface";

export const projects: ProjectsI[] = [
  {
    title: "Bloody Room",
    titleColor: "text-red-500",
    dateTo: "October 9, 2024",
    description:
      "Halloween-themed web application where users can register and are given 4 tokens per day to upload 4 images and change their backgrounds.",
    technology: [
      "NextJS",
      "OpenAi",
      "TypeScript",
      "NodeJS",
      "Tailwindcss",
      "Cloudinary",
      "Firebase",
    ],
    imageUrl: "/projects/bloodyRoom.webp",
    // imageUrl:
    //   "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2FbloodyRoom.webp?alt=media&token=58bf7a78-3581-43bd-9c09-b6503a394ec4",
    links: {
      github: "https://github.com/PurpleSavage/hackathon-midu-bloody-room",
      link_page: "https://hackathon-midu-bloody-room.vercel.app/",
    },
  },
  {
    title: "Mikhuy landing page",
    titleColor: "text-amber-800",
    dateTo: "May 25, 2025",
    description:
      "Home page of Mikhuy's project, a university cafeteria manager, a group project that is about to be deployed.",
    technology: [
      "Astro",
      "React",
      "Tailwindcss",
      "Css",
      "Html5",
      "TypeScript",
      "Photoshop",
    ],
    imageUrl: "/projects/mikhuy-landing.webp",
    // "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2Fmikhuy%20landing.PNG?alt=media&token=643151eb-14db-4d31-9007-9193fbbd535b",
    links: {
      // github: "https://github.com/Ariano2700/mikhuy-landing-astro",
      link_page: "https://mikhuy-ld.netlify.app/",
    },
  },
  {
    title: "Savings plan UNMSM",
    titleColor: "text-green-500",
    dateTo: "October 3, 2024",
    description:
      "Landing page and savings plan calculator developed for a UNMSM group using Gemini to improve decision making.",
    technology: ["NextJS", "Gemini", "TypeScript", "NodeJS", "Tailwindcss"],
    imageUrl: "/projects/savings-plan.webp",
    // "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2Fsavingplans.webp?alt=media&token=d5c1b786-e767-4a5e-bd28-168f70392046",
    links: {
      github: "https://github.com/Ar2700/savings-plan-claudia",
      link_page: "https://tu-plan-de-ahorro.vercel.app/",
    },
  },
  {
    title: "My Mochis Galley",
    titleColor: "text-pink-500",
    dateTo: "October 16, 2023",
    description:
      "Image gallery that has been made with Firebase and cloudinary for image storage, integration with Spotify as well.",
    technology: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "Tailwindcss",
      "Cloudinary",
      "Firebase",
    ],
    imageUrl: "/projects/mochis-gallery.webp",
    // "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2FMochisGallery.webp?alt=media&token=ee370ce9-df08-4131-a432-d7fc14a12ac9",
    links: {
      // github: "https://github.com/Ariano2700/image-gallery",
      link_page: "https://image-gallery-three-murex.vercel.app/",
    },
  },
  {
    title: "GIF-Project",
    titleColor: "text-cyan-500",
    dateTo: "December 3, 2023",
    description: "Project developed with React using GIPHY API",
    technology: ["JavaScript", "React", "Tailwindcss"],
    imageUrl: "/projects/gif-project.webp",
    // "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2FGIF-project.webp?alt=media&token=d8cdd478-8965-48ea-b2a7-e29d117e32a6",
    links: {
      // github: "https://github.com/Ariano2700/GIF-Project",
      link_page: "https://ariano2700.github.io/GIF-Project/",
    },
  },
  {
    title: "Flappy-bird clone",
    titleColor: "text-yellow-500",
    dateTo: "October 7, 2023",
    description:
      "Flappy bird clone project made with Canvas and javascript, adding sounds and local point counter.",
    technology: ["JavaScript", "Css", "Html5"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2FFlapyVigo.webp?alt=media&token=e93425a4-f119-472a-912f-d53cc3e8dcff",
    links: {
      github: "https://github.com/Ariano2700/vigo-bird",
      link_page: "https://ariano2700.github.io/vigo-bird/",
    },
  },
  {
    title: "Capture The Moment",
    titleColor: "text-cyan-500",
    dateTo: "June 24, 2025",
    description:
      "Capture the Moment is a landing page designed to showcase a photography service. It features a modern and elegant design, with sections highlighting the services offered, a gallery of photos, and a contact form for inquiries.",
    technology: [
      "Astro",
      "TypeScript",
      "Tailwindcss",
      "Css",
      "Html5",
      "Photoshop",
    ],
    imageUrl: "/projects/capture-landing.webp",
    links: {
      link_page: "capture-landing.netlify.app",
    },
  },
  // {
  //   title: "My Portfolio",
  //   titleColor: "text-[#61DAFB]",
  //   dateTo: "October 28, 2024",
  //   description:
  //     "This page is made in Astro. Here is where I show a little about me and my work, my hobbies, etc.",
  //   technology: ["Astro", "TypeScript", "Tailwindcss", "Css3"],
  //   links: {
  //     github: "https://github.com/Ariano2700/ariano-portfolio",
  //   },
  //   imageUrl:
  //     "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2Fportfolio.PNG?alt=media&token=62cc0836-cf75-4e8e-8e7e-2977af4f916b",
  // },
];
