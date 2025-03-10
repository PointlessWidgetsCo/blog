import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Pointless Widgets Co.",
  EMAIL: "blog@pointlesswidgets.co",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Pointless Widgets Co. is an irreverent yet insightful blog exploring data analytics and economics with a fresh perspective.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/PointlessWidgetsCo"
  },
  { 
    NAME: "linkedin",
    HREF: "hhttps://www.linkedin.com/in/xiao-chun-xu-a2929997",
  }
];
