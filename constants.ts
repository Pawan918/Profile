import { Experience, Project, Skill } from "./types";

export const DEV_NAME = "Pawan Kumar";
export const DEV_ROLE = "Front-End Developer";
export const DEV_PROFILE_IMAGE = "/images/profile.jpg";

export const ABOUT_TEXT = `Front-End Developer with proven experience in building scalable web applications. 
Passionate about creating and maintaining reusability in code bases and maximizing user efficiency. 
I specialize in the Vue/Nuxt and React ecosystems, with a strong focus on third-party integrations, 
performance optimization, and workflow automation using N8N.`;

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Excellence Technologies",
    role: "Front-End Developer",
    period: "Sep 2023 - Present",
    description: [
      "Facilitated integration of third-party services and APIs to add new functionalities and increase user interaction.",
      "Created and maintained front-end code for multiple websites, handling redesigns, seasonal updates, and production work.",
      "Identified and implemented web solutions according to company standards and best practices."
    ]
  },
  {
    id: 2,
    company: "Molitics Pvt. Ltd.",
    role: "Front-End Developer",
    period: "June 2022 - Sep 2022",
    description: [
      "Assisted in the development and maintenance of front-end web applications.",
      "Contributed to code optimization resulting in a positive impact on the company's overall performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Gotobeat",
    description: "Developed reusable UI components for an events platform using React and Remix. Fixed critical UI & functional issues to ensure a smoother user experience.",
    techStack: ["React", "Remix", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/gotobeat/600/400",
    liveUrl: "https://gotobeat.com/"
  },
  {
    id: 2,
    title: "Realiseme",
    description: "Led the migration of a large-scale application from Vue 2 to Vue 3. Developed a modular dashboard and reusable components with Pinia state management.",
    techStack: ["Vue 3", "GraphQL", "Pinia"],
    imageUrl: "https://picsum.photos/seed/realiseme/600/400",
    liveUrl: "https://www.realiseme.com/"
  },
  {
    id: 3,
    title: "Hungry Democracy",
    description: "Built a recipe-sharing application using Nuxt.js. Implemented Firebase Authentication and Firestore queries for dynamic content.",
    techStack: ["Nuxt.js", "Vuetify", "Firebase"],
    imageUrl: "https://picsum.photos/seed/hungry/600/400",
    liveUrl: "https://hungrydemocracy.com/"
  },
  {
  id: 4,
  title: "Casamia",
  description: "Worked on improving SEO and optimizing Lighthouse performance for faster load times and better search visibility.",
  techStack: ["Nuxt 3", "Bootstrap", "Firebase"],
  imageUrl: "https://picsum.photos/seed/casamia/600/400",
  liveUrl: "https://www.casamia.co/"
}
];

export const SKILLS: Skill[] = [
  { name: "Vue.js / Nuxt", category: "Frontend", level: 90 },
  { name: "React.js", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "HTML / CSS", category: "Frontend", level: 95 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Quasar", category: "Frontend", level: 80 },
  { name: "C++", category: "Backend", level: 75 },
  { name: "N8N Automation", category: "Tools", level: 85 },
];