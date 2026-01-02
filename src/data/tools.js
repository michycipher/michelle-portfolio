import ConvexIcon from "../assets/icons/convex.svg?react";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiSass,
  SiVuetify,
  SiExpress,
  SiExpo,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,

  SiClickup,
  // SiConvex,
  SiSupabase,

} from "react-icons/si";
export const tools = [
  // FRONTEND
  { id: "react", name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
  { id: "next", name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
  { id: "typescript", name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "frontend" },
  { id: "javascript", name: "JavaScript", icon: SiJavascript, color: "#d9c426", category: "frontend" },
  { id: "vue", name: "Vue.js", icon: SiVuetify, color: "#42B883", category: "frontend" },
  { id: "scss", name: "SCSS", icon: SiSass, color: "#CC6699", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", category: "frontend" },
  { id: "framer", name: "Framer Motion", icon: SiFramer, color: "#E91E63", category: "frontend" },
  // BACKEND
  { id: "node", name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "backend" },
  { id: "express", name: "Express", icon: SiExpress, color: "#000000", category: "backend" },
  { id: "mongo", name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "backend" },
  { id: "rest", name: "REST APIs", icon: "🔗", category: "backend" },
  { id: "supabase", name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "backend" },
  { id: "convex", name: "Convex", icon: ConvexIcon, color: "#2563EB", category: "backend" },

  // MOBILE
  { id: "react-native", name: "React Native", icon: SiReact, color: "#58c4dc", category: "mobile" },
  { id: "expo", name: "Expo", icon: SiExpo, color: "#000000", category: "mobile" },

  // MANAGEMENT / TOOLS
  { id: "git", name: "Git", icon: SiGit, color: "#F05033", category: "tools" },
  { id: "github", name: "GitHub", icon: SiGithub, color: "#000000", category: "tools" },
  { id: "vercel", name: "Vercel", icon: SiVercel, color: "#000000", category: "tools" },
  { id: "figma", name: "Figma", icon: SiFigma, color: "#000000", category: "tools" },
  { id: "clickup", name: "ClickUp", icon: SiClickup, color: "#000000", category: "tools" },
];
