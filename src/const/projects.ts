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
    about:
      "This project was developed using modern best practices. It leverages Next.js, OpenAI, and cloud services to provide a fun, interactive Halloween experience where users can personalize images daily. The stack ensures scalability, security, and a smooth user experience.",
  },
  {
    title: "Mikhuy landing page",
    titleColor: "text-red-300",
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
    about:
      "A landing page for Mikhuy, a university cafeteria manager. Built with Astro and React, it features a modern UI, responsive design, and easy navigation. The project demonstrates teamwork and integration of multiple frontend technologies for a real-world solution.",
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
    about:
      "A savings plan calculator and landing page for a UNMSM group. Developed with Next.js and Gemini, it helps users make informed financial decisions. The project focuses on usability, accessibility, and clear data presentation.",
  },
  {
    title: "My Mochis Galley",
    titleColor: "text-pink-400",
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
    about:
      "A gallery app using Firebase and Cloudinary for image storage, plus Spotify integration. Built with Next.js and TypeScript, it offers a seamless experience for uploading and viewing images, highlighting cloud storage and third-party API integration.",
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
    about:
      "A React project using the GIPHY API to search and display GIFs. It demonstrates API consumption, responsive design, and interactive UI elements, making it a fun and educational frontend project.",
  },
  {
    title: "Flappy-bird clone",
    titleColor: "text-yellow-500",
    dateTo: "October 7, 2023",
    description:
      "Flappy bird clone project made with Canvas and javascript, adding sounds and local point counter.",
    technology: ["JavaScript", "Css", "Html5"],
    imageUrl: "/projects/flappy-bird-clone.webp",
    // "https://firebasestorage.googleapis.com/v0/b/portfolio-ariano.appspot.com/o/imagesProjects%2FFlapyVigo.webp?alt=media&token=e93425a4-f119-472a-912f-d53cc3e8dcff",
    links: {
      github: "https://github.com/Ariano2700/vigo-bird",
      link_page: "https://ariano2700.github.io/vigo-bird/",
    },
    about:
      "A Flappy Bird clone built with Canvas and JavaScript. Features sound effects and a local score counter. This project showcases game development basics, animation, and user interaction in the browser.",
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
    about:
      "A modern landing page for a photography service. Built with Astro and TypeScript, it features elegant design, a photo gallery, and a contact form. The project emphasizes visual appeal and user engagement.",
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

export const projectsEs: ProjectsI[] = [
  {
    title: "Bloody Room",
    titleColor: "text-red-500",
    dateTo: "9 de octubre de 2024",
    description:
      "Aplicación web temática de Halloween donde los usuarios pueden registrarse y reciben 4 tokens por día para subir 4 imágenes y cambiar sus fondos.",
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
    links: {
      github: "https://github.com/PurpleSavage/hackathon-midu-bloody-room",
      link_page: "https://hackathon-midu-bloody-room.vercel.app/",
    },
    about:
      "Este proyecto fue desarrollado utilizando las mejores prácticas de desarrollo moderno. Combina Next.js, OpenAI y servicios en la nube para ofrecer una experiencia divertida e interactiva de Halloween, permitiendo a los usuarios personalizar imágenes diariamente. La arquitectura garantiza escalabilidad, seguridad y una experiencia fluida.",
  },
  {
    title: "Mikhuy landing page",
    titleColor: "text-red-300",
    dateTo: "25 de mayo de 2025",
    description:
      "Página principal del proyecto Mikhuy, un gestor de cafetería universitaria, proyecto grupal que está por ser desplegado.",
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
    links: {
      link_page: "https://mikhuy-ld.netlify.app/",
    },
    about:
      "Landing page para Mikhuy, gestor de cafetería universitaria. Desarrollada con Astro y React, presenta una interfaz moderna, diseño responsivo y navegación sencilla. El proyecto destaca el trabajo en equipo y la integración de tecnologías frontend para una solución real.",
  },
  {
    title: "Savings plan UNMSM",
    titleColor: "text-green-500",
    dateTo: "3 de octubre de 2024",
    description:
      "Landing page y calculadora de plan de ahorro desarrollada para un grupo de la UNMSM usando Gemini para mejorar la toma de decisiones.",
    technology: ["NextJS", "Gemini", "TypeScript", "NodeJS", "Tailwindcss"],
    imageUrl: "/projects/savings-plan.webp",
    links: {
      github: "https://github.com/Ar2700/savings-plan-claudia",
      link_page: "https://tu-plan-de-ahorro.vercel.app/",
    },
    about:
      "Calculadora de ahorro y landing page para un grupo de la UNMSM. Desarrollada con Next.js y Gemini, ayuda a los usuarios a tomar decisiones financieras informadas. El proyecto se centra en la usabilidad, accesibilidad y presentación clara de datos.",
  },
  {
    title: "My Mochis Galley",
    titleColor: "text-pink-400",
    dateTo: "16 de octubre de 2023",
    description:
      "Galería de imágenes realizada con Firebase y Cloudinary para el almacenamiento de imágenes, además de integración con Spotify.",
    technology: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "Tailwindcss",
      "Cloudinary",
      "Firebase",
    ],
    imageUrl: "/projects/mochis-gallery.webp",
    links: {
      link_page: "https://image-gallery-three-murex.vercel.app/",
    },
    about:
      "Galería de imágenes usando Firebase y Cloudinary para almacenamiento, con integración de Spotify. Hecha con Next.js y TypeScript, permite subir y ver imágenes fácilmente, destacando el uso de almacenamiento en la nube e integración de APIs externas.",
  },
  {
    title: "GIF-Project",
    titleColor: "text-cyan-500",
    dateTo: "3 de diciembre de 2023",
    description: "Proyecto desarrollado con React usando la API de GIPHY.",
    technology: ["JavaScript", "React", "Tailwindcss"],
    imageUrl: "/projects/gif-project.webp",
    links: {
      link_page: "https://ariano2700.github.io/GIF-Project/",
    },
    about:
      "Proyecto en React que utiliza la API de GIPHY para buscar y mostrar GIFs. Demuestra consumo de APIs, diseño responsivo y elementos interactivos, siendo un proyecto frontend divertido y educativo.",
  },
  {
    title: "Flappy-bird clone",
    titleColor: "text-yellow-500",
    dateTo: "7 de octubre de 2023",
    description:
      "Clon de Flappy Bird realizado con Canvas y JavaScript, agregando sonidos y contador de puntos local.",
    technology: ["JavaScript", "Css", "Html5"],
    imageUrl: "/projects/flappy-bird-clone.webp",
    links: {
      github: "https://github.com/Ariano2700/vigo-bird",
      link_page: "https://ariano2700.github.io/vigo-bird/",
    },
    about:
      "Clon de Flappy Bird realizado con Canvas y JavaScript. Incluye efectos de sonido y contador de puntos local. Este proyecto muestra conceptos básicos de desarrollo de juegos, animación e interacción en el navegador.",
  },
  {
    title: "Capture The Moment",
    titleColor: "text-cyan-500",
    dateTo: "24 de junio de 2025",
    description:
      "Capture the Moment es una landing page diseñada para mostrar un servicio de fotografía. Presenta un diseño moderno y elegante, con secciones que destacan los servicios ofrecidos, una galería de fotos y un formulario de contacto para consultas.",
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
    about:
      "Landing page moderna para un servicio de fotografía. Desarrollada con Astro y TypeScript, presenta un diseño elegante, galería de fotos y formulario de contacto. El proyecto enfatiza el atractivo visual y la interacción con el usuario.",
  },
];
