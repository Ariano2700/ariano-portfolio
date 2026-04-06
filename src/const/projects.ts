import type { ProjectsI } from "@interfaces/TechInterface";

export const projects: ProjectsI[] = [
  {
    title: "La Fortaleza Ferretería",
    titleColor: "text-amber-600",
    dateTo: "April 2026",
    description:
      "Online hardware store focused on construction, featuring clear categories, fast WhatsApp inquiries, and specialized support for wholesale clients and contractors.",
    technology: ["Astro", "Sanity", "TypeScript", "Tailwindcss", "React"],
    imageUrl: "/projects/la-fortaleza-hero.PNG",
    links: {
      link_page: "https://lafortalezaferreteria.netlify.app/",
    },
    about:
      "A specialized hardware platform for builders and wholesalers in Tumbes, Peru. It offers a catalog of over 100 products, immediate quote requests through WhatsApp, and streamlined logistics for large-scale projects.",
  },
  {
    title: "Poisson Studio Website",
    titleColor: "text-purple-300",
    dateTo: "Septembers 2025",
    description:
      "Website for Poisson Studio, a digital marketing agency that offers growth strategies, professional web development, and branding plans for businesses of all sizes.",
    technology: ["Astro", "TypeScript", "Tailwindcss", "Css", "Html5", "React"],
    imageUrl: "/projects/poisson.webp",
    links: {
      link_page: "https://poissonstudio.netlify.app/",
    },
    about:
      "A corporate website for Poisson Studio, a digital marketing and technology agency. Built with Astro and Tailwind CSS, it showcases service plans, portfolio, team, and a contact form. Focused on visual impact, performance, and conversion.",
  },
  {
    title: "Kesasoft",
    titleColor: "text-blue-400",
    dateTo: "February 2026",
    description:
      "Management software for poultry businesses. Allows companies to manage orders, payments, clients, reports, and collaborators from a single robust platform.",
    technology: ["Astro", "TypeScript", "Tailwindcss", "Css", "Html5"],
    imageUrl: "/projects/kesa.webp",
    links: {
      link_page: "https://www.kesasoft.com/",
    },
    about:
      "A landing page and product showcase for Kesasoft, a SaaS platform designed for poultry businesses. The site highlights the platform's modules (clients, orders, payments, documents, collaborators) and subscription plans, with a focus on clarity and conversion.",
  },
  {
    title: "Kesasoft App",
    titleColor: "text-blue-400",
    dateTo: "January 2026",
    description:
      "Management software for poultry businesses. Allows companies to manage orders, payments, clients, reports, and collaborators from a single robust platform.",
    technology: ["Tauri", "Rust", "TypeScript", "Tailwindcss", "Css", "Html5"],
    imageUrl: "/projects/kesa-app.webp",
    links: {
      link_page: "https://www.kesasoft.com/auth/",
    },
    about:
      "A desktop application for Kesasoft, a SaaS platform designed for poultry businesses. The site highlights the platform's modules (clients, orders, payments, documents, collaborators, cash register, cash report, inventory) and subscription plans, with a focus on clarity and conversion.",
  },
  {
    title: "TVSol",
    titleColor: "text-yellow-400",
    dateTo: "March 2026",
    description:
      "News portal delivering reliable local journalism, independent reporting, and community-focused updates 24/7.",
    technology: ["Astro", "TypeScript", "Tailwindcss"],
    imageUrl: "/projects/tvsol_hero.PNG",
    links: {
      link_page: "https://tvsol.netlify.app/",
    },
    about:
      "TVSol news portal providing trusted local news with independent journalism for the community. Features a modern landing page optimized for fast loading, clean design, and local content focus. Built to foster trust and real-time community engagement.",
  },
  {
    title: "100% Panas Fast Food",
    titleColor: "text-orange-400",
    dateTo: "January 2026",
    description:
      "Website for 100% Panas, a fast food restaurant in Piura. Features a full digital menu with burgers, combos, and sides, along with location info and customer reviews.",
    technology: ["Astro", "TypeScript", "Tailwindcss", "Css", "Html5", "React"],
    imageUrl: "/projects/100_panas.webp",
    links: {
      link_page: "https://100panasfastfood.com/",
    },
    about:
      "A restaurant website for 100% Panas Fast Food in Piura, Peru. Presents the full menu, emphasizes fresh ingredients and fast service, and includes a map, contact details, and social links. Built to be visually appetizing and easy to navigate.",
  },
  {
    title: "Dengue Cero Tumbes",
    titleColor: "text-green-400",
    dateTo: "December 2025",
    description:
      "Web system for the prevention, symptom self-assessment, and monitoring of dengue cases in the Tumbes region, Peru. Connected to MINSA for health follow-up.",
    technology: [
      "NextJS",
      "TypeScript",
      "Tailwindcss",
      "Css",
      "Html5",
      "NodeJS",
      "Firebase",
    ],
    imageUrl: "/projects/dengue_cero_tumbes.webp",
    links: {
      link_page: "https://dengue-cero-tumbes.vercel.app/",
    },
    about:
      "An official web system for dengue prevention in Tumbes, Peru. Users can register, complete a symptom self-assessment form, and access a real-time risk map. Reports are sent to MINSA for medical monitoring. Presented at the IESP CAP. FAP. José Abelardo Quiñones applied research innovation expo.",
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
      link_page: "https://mikhuy.shop",
    },
    about:
      "A landing page for Mikhuy, a university cafeteria manager. Built with Astro and React, it features a modern UI, responsive design, and easy navigation. The project demonstrates teamwork and integration of multiple frontend technologies for a real-world solution.",
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
      link_page: "https://capture-landing.netlify.app",
    },
    about:
      "A modern landing page for a photography service. Built with Astro and TypeScript, it features elegant design, a photo gallery, and a contact form. The project emphasizes visual appeal and user engagement.",
  },
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
];

export const projectsEs: ProjectsI[] = [
  {
    title: "La Fortaleza Ferretería",
    titleColor: "text-amber-600",
    dateTo: "Abril 2026",
    description:
      "Ferretería online con foco en obra, categorías claras, consulta rápida por WhatsApp y atención técnica especializada para clientes mayoristas y contratistas.",
    technology: ["Astro", "Sanity", "TypeScript", "Tailwindcss", "React"],
    imageUrl: "/projects/la-fortaleza-hero.PNG",
    links: {
      link_page: "https://lafortalezaferreteria.netlify.app/",
    },
    about:
      "Plataforma de ferretería especializada para constructores y mayoristas en Tumbes, Perú. Ofrece un catálogo de más de 100 productos, solicitud inmediata de cotizaciones por WhatsApp y logística ágil para proyectos de gran escala.",
  },
  {
    title: "Poisson Studio Website",
    titleColor: "text-purple-300",
    dateTo: "Septiembre 2025",
    description:
      "Sitio web de Poisson Studio, agencia de marketing digital que ofrece estrategias de crecimiento, desarrollo web profesional y planes de branding para negocios de todos los tamaños.",
    technology: ["Astro", "TypeScript", "Tailwindcss", "Css", "Html5", "React"],
    imageUrl: "/projects/poisson.webp",
    links: {
      link_page: "https://poissonstudio.netlify.app/",
    },
    about:
      "Sitio corporativo para Poisson Studio, agencia de marketing digital y tecnología. Desarrollado con Astro y Tailwind CSS, presenta planes de servicio, portafolio, equipo y formulario de contacto. Enfocado en impacto visual, rendimiento y conversión.",
  },
  {
    title: "Kesasoft",
    titleColor: "text-blue-400",
    dateTo: "Febrero 2026",
    description:
      "Software de gestión para empresas avícolas. Permite administrar pedidos, pagos, clientes, reportes y colaboradores desde una sola plataforma robusta.",
    technology: ["Astro", "TypeScript", "Tailwindcss", "Css", "Html5"],
    imageUrl: "/projects/kesa.webp",
    links: {
      link_page: "https://www.kesasoft.com/",
    },
    about:
      "Landing page y vitrina de producto para Kesasoft, una plataforma SaaS diseñada para empresas avícolas. El sitio muestra los módulos de la plataforma (clientes, pedidos, pagos, documentos, colaboradores) y planes de suscripción, con enfoque en claridad y conversión.",
  },
  {
    title: "Kesasoft App",
    titleColor: "text-blue-400",
    dateTo: "Enero 2026",
    description:
      "Aplicación de escritorio para empresas avícolas. Permite gestionar pedidos, pagos, clientes, reportes, caja, inventario y colaboradores desde una plataforma de escritorio robusta.",
    technology: ["Tauri", "Rust", "TypeScript", "Tailwindcss", "Css", "Html5"],
    imageUrl: "/projects/kesa-app.webp",
    links: {
      link_page: "https://www.kesasoft.com/auth/",
    },
    about:
      "Aplicación de escritorio para Kesasoft, plataforma SaaS diseñada para empresas avícolas. Incluye módulos de clientes, pedidos, pagos, documentos, colaboradores, caja, reportes de caja e inventario. Desarrollada con Tauri y Rust para máximo rendimiento nativo.",
  },
  {
    title: "TVSol",
    titleColor: "text-yellow-400",
    dateTo: "Marzo 2026",
    description:
      "Portal de noticias que entrega periodismo local confiable, reportajes independientes y actualizaciones enfocadas en la comunidad las 24/7.",
    technology: ["Astro", "TypeScript", "Tailwindcss"],
    imageUrl: "/projects/tvsol_hero.PNG",
    links: {
      link_page: "https://tvsol.netlify.app/",
    },
    about:
      "Portal de noticias TVSol, fuente confiable de noticias locales con periodismo veraz e independiente para la comunidad. Cuenta con una landing moderna optimizada para carga rápida, diseño limpio y enfoque en contenido local relevante. Desarrollado para fomentar confianza y compromiso comunitario en tiempo real.",
  },
  {
    title: "100% Panas Fast Food",
    titleColor: "text-orange-400",
    dateTo: "Enero 2026",
    description:
      "Sitio web para 100% Panas, restaurante de comida rápida en Piura. Incluye menú digital completo con hamburguesas, combos y acompañamientos, ubicación y reseñas de clientes.",
    technology: ["Astro", "TypeScript", "Tailwindcss", "Css", "Html5", "React"],
    imageUrl: "/projects/100_panas.webp",
    links: {
      link_page: "https://100panasfastfood.com/",
    },
    about:
      "Sitio web para 100% Panas Fast Food en Piura, Perú. Presenta el menú completo, destaca ingredientes frescos y servicio rápido, e incluye mapa, datos de contacto y redes sociales. Desarrollado para ser visualmente atractivo y fácil de navegar.",
  },
  {
    title: "Dengue Cero Tumbes",
    titleColor: "text-green-400",
    dateTo: "Diciembre 2025",
    description:
      "Sistema web para la prevención, autoevaluación de síntomas y monitoreo de casos de dengue en la región Tumbes, Perú. Conectado al MINSA para seguimiento médico.",
    technology: [
      "NextJS",
      "TypeScript",
      "Tailwindcss",
      "Css",
      "Html5",
      "NodeJS",
      "Firebase",
    ],
    imageUrl: "/projects/dengue_cero_tumbes.webp",
    links: {
      link_page: "https://dengue-cero-tumbes.vercel.app/",
    },
    about:
      "Sistema web oficial para la prevención del dengue en Tumbes, Perú. Los usuarios pueden registrarse, completar un formulario de autoevaluación de síntomas y acceder a un mapa de zonas de riesgo en tiempo real. Los reportes se envían al MINSA para monitoreo médico. Presentado en la expo de innovación tecnológica del IESP CAP. FAP. José Abelardo Quiñones.",
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
      link_page: "https://mikhuy.shop/",
    },
    about:
      "Landing page para Mikhuy, gestor de cafetería universitaria. Desarrollada con Astro y React, presenta una interfaz moderna, diseño responsivo y navegación sencilla. El proyecto destaca el trabajo en equipo y la integración de tecnologías frontend para una solución real.",
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
      link_page: "https://capture-landing.netlify.app",
    },
    about:
      "Landing page moderna para un servicio de fotografía. Desarrollada con Astro y TypeScript, presenta un diseño elegante, galería de fotos y formulario de contacto. El proyecto enfatiza el atractivo visual y la interacción con el usuario.",
  },
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
];
