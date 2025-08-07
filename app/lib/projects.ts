const baseGithubUrl = "https://github.com/hbabb/frontend-mentor/tree/main/app/pages/";

// eslint-disable-next-line ts/consistent-type-definitions
export interface Project {
  title: string;
  challengeNumber: string;
  description: string;
  previewImage: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Testimonials Grid",
    challengeNumber: "07",
    description: "A responsive testimonials grid layout using CSS Grid and Flexbox",
    previewImage: "/challenge-07/preview.jpg",
    liveUrl: "/testimonials-grid",
    githubUrl: `${baseGithubUrl}(challenge-07)`,
  },
  {
    title: "Meet Landing Page",
    challengeNumber: "08",
    description: "A modern product landing page with responsive design and hero section",
    previewImage: "/challenge-08/preview.jpg",
    liveUrl: "/meet-landing",
    githubUrl: `${baseGithubUrl}(challenge-08)`,
  },
];
