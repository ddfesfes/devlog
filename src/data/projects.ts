export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  slug: string;
  content: {
    heading: string;
    body: string;
  }[];
  image: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Project One",
    category: "Web Development",
    description: "프로젝트의 목적과 주요 기능을 설명하세요.",
    tech: ["TypeScript", "Astro"],
    link: "#",
    slug: "project-one",
    content: [
      {
        heading: "프로젝트 개요",
        body: "프로젝트를 시작한 이유와 목적을 설명합니다.",
      },
      {
        heading: "주요 기능",
        body: "구현한 주요 기능과 기술적 특징을 설명합니다.",
      },
      {
        heading: "개발 과정",
        body: "개발 과정에서 해결한 문제와 배운 점을 설명합니다.",
      },
    ],
    image: "/images/project-one.png",
  },
  {
    number: "02",
    name: "Project Two",
    category: "Personal Project",
    description: "직접 제작한 프로그램이나 서비스를 소개하세요.",
    tech: ["Python", "JavaScript"],
    link: "#",
    slug: "project-two",
    content: [
      {
        heading: "프로젝트 개요",
        body: "프로젝트를 시작한 이유와 목적을 설명합니다.",
      },
      {
        heading: "주요 기능",
        body: "구현한 주요 기능과 기술적 특징을 설명합니다.",
      },
      {
        heading: "개발 과정",
        body: "개발 과정에서 해결한 문제와 배운 점을 설명합니다.",
      },
    ],
    image: "/images/project-two.png",
  },
];