import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.mp4";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";
import work9 from "@/assets/work-9.jpg";
import work10 from "@/assets/work-10.jpg";
import work11 from "@/assets/work-11.mp4";
import work12 from "@/assets/work-12.mp4";
import work13 from "@/assets/work-13.jpg";
import work14 from "@/assets/work-14.jpg";
import work15 from "@/assets/work-15.mp4";
import work16 from "@/assets/work-16.mp4";
import work17 from "@/assets/work-17.mp4";
import work18 from "@/assets/work-18.mp4";
import work19 from "@/assets/work-19.jpg";
import work20 from "@/assets/work-20.jpg";
import work21 from "@/assets/work-21.jpg";
import work22 from "@/assets/work-22.pdf";
export type Project = {
  slug: string;
  title: string;
  tag: string;
  cover: string;
  span?: string;
  client: string;
  year: string;
  role: string;
  summary: string;
  gallery: string[];
  videos: { mp4: string; thumb?: string; title: string; duration: string; url?: string }[];
};

const isVideo = (src: string) =>
  src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
const isPdf = (src: string) => src.endsWith(".pdf");

export { isVideo, isPdf };

export const projects: Project[] = [
  {
    slug: "identite-de-marque",
    title: "Identité de marque",
    tag: "Branding",
    cover: work1,
    span: "md:col-span-2 md:row-span-2",
    client: "Projet institutionnel",
    year: "2025",
    role: "Direction artistique & stratégie",
    summary:
      "Refonte complète d'une identité visuelle : logo, charte graphique, déclinaisons print et digital.",
    gallery: [ work2, work22],
    videos: [{ mp4: work3, title: "Présentation de marque", duration: "01:42" }],
  },
  {
    slug: "couverture-evenementielle",
    title: "Couverture événementielle",
    tag: "Événementiel",
    cover: work4,
    client: "TEDx & partenaires",
    year: "2024",
    role: "Production & captation",
    summary:
      "Captation photo et vidéo d'événements culturels et institutionnels, du teaser à l'aftermovie.",
    gallery: [ work5, work6],
    videos: [],
  },
  {
    slug: "campagne-reseaux-sociaux",
    title: "Campagne réseaux sociaux",
    tag: "Digital",
    cover: work7,
    client: "CAP Emergency",
    year: "2024 — 2025",
    role: "Community Manager",
    summary:
      "Stratégie éditoriale, création de visuels, vidéos courtes et animation des communautés.",
    gallery: [ work8, work9, work10],
    videos: [
      { mp4: work11, title: "Reels campagne", duration: "00:30" },
      { mp4: work12, title: "Reels campagne", duration: "00:45" },
    ],
  },
  {
    slug: "article-interview",
    title: "Article & interview",
    tag: "Journalisme",
    cover: work10,
    client: "Journal El Watan",
    year: "2023",
    role: "Stagiaire journaliste",
    summary:
      "Rédaction d'articles, conduite d'interviews et publications sur des sujets de société.",
    gallery: [work19],
    videos: [     
       { mp4: work16, title: "Pitch stratégique", duration: "02:00" },
],
  },
  {
    slug: "tedx-algerie",
    title: "TEDx Algérie",
    tag: "Production",
    cover: work13,
    span: "md:col-span-2",
    client: "TEDx Algérie",
    year: "2024",
    role: "Production & communication",
    summary:
      "Accompagnement d'une édition TEDx : communication digitale, captation et diffusion.",
    gallery: [ work14],
    videos: [
      { mp4: work15, title: "Backstage", duration: "01:20" },
    ],
  },
  {
    slug: "strategie-de-marque",
    title: "Stratégie de marque",
    tag: "Conseil",
    cover: work20,
    client: "Entreprise publique",
    year: "2025",
    role: "Consultant communication",
    summary:
      "Audit, positionnement et plan de communication 360° pour une marque institutionnelle.",
    gallery: [work19,work20, work21],
    videos: [
      { mp4: work17, title: "Présentation", duration: "02:00" },
      { mp4: work18, title: "Résultats", duration: "02:00" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);