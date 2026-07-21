import raw from "../cv-skilldex.json";

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  durationLabel: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  technicalLeadership: string[];
  technologies: string[];
};

export type FeaturedProject = {
  name: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: string;
};

export type SkillGroup = {
  id: string;
  label: string;
  skills: string[];
};

const GITHUB_URL = "https://github.com/andresbonett";
const TELEGRAM_URL = "https://t.me/andresbonett";

const skillGroupLabels: Record<string, string> = {
  frontend: "Frontend",
  stateManagement: "Estado",
  mobile: "Mobile",
  cms: "CMS",
  testing: "Testing",
  tools: "Herramientas",
  languages: "Lenguajes",
  devopsAndInfrastructure: "DevOps",
  cloud: "Cloud",
  aiAndDeveloperProductivity: "IA & productividad",
};

const skillGroupOrder = [
  "frontend",
  "stateManagement",
  "mobile",
  "cms",
  "testing",
  "tools",
  "languages",
  "devopsAndInfrastructure",
  "cloud",
  "aiAndDeveloperProductivity",
] as const;

export const cv = raw;

export const displayName = "Andrés Bonett";

export const githubUrl = cv.basics.links.github || GITHUB_URL;

export const linkedinUrl = cv.basics.links.linkedin.startsWith("http")
  ? cv.basics.links.linkedin
  : `https://${cv.basics.links.linkedin}`;

export const telegramUrl = TELEGRAM_URL;

export const email = cv.basics.email;

/** Short hero blurb from the full CV summary (first two sentences). */
export const heroSummary = cv.summary.split(/(?<=\.)\s+/).slice(0, 2).join(" ");

export const skillGroups: SkillGroup[] = skillGroupOrder
  .filter((key) => key in cv.technicalSkills)
  .map((key) => ({
    id: key,
    label: skillGroupLabels[key] ?? key,
    skills: cv.technicalSkills[key as keyof typeof cv.technicalSkills],
  }))
  .filter((group) => group.skills.length > 0);

export const experience = cv.experience as ExperienceItem[];

export const featuredProjects = cv.featuredProjects as FeaturedProject[];

export const leadership = cv.leadershipAndCollaboration;

export const demoProjects = [
  {
    url: "https://weather-app-andresbonett.vercel.app/",
    image: "https://i.ibb.co/6RWzqqx/weather-app-andresbonett.png",
    title: "Weather App",
    description: "App del clima con geolocalización",
  },
  {
    url: "https://andresbonett.github.io/huddle-landing-page/",
    image: "https://i.ibb.co/whNTMwT/huddle-landing-page.webp",
    title: "Huddle Landing",
    description: "Landing page responsive",
  },
  {
    url: "https://andresbonett.github.io/fylo-data-storage-component/",
    image: "https://i.ibb.co/xFdN1Dn/Fylo-data-storage.png",
    title: "Fylo Storage",
    description: "Componente de almacenamiento",
  },
] as const;
