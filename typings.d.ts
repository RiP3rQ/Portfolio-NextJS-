interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInfo: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
}

export interface Socials extends SanityBody {
  _type: "socials";
  title: string;
  url: string;
}

export interface Skills extends SanityBody {
  _type: "skills";
  title: string;
  progress: string;
  image: Image;
}

export interface Technologies extends SanityBody {
  _type: "skills";
  title: string;
  progress: string;
  image: Image;
}

export interface MainProjects extends SanityBody {
  _type: "mainProjects";
  title: string;
  image: Image;
  linkToBuild: string;
  linkToGithub: string;
  summary: string;
  technologies: Technologies[];
}

export interface Projects extends SanityBody {
  _type: "projects";
  title: string;
  image: Image;
  linkToBuild: string;
  linkToGithub: string;
  summary: string;
  technologies: Technologies[];
}

export interface Paths extends SanityBody {
  _type: "path";
  name: string;
  image: Image;
  description: string;
  technologies: Technologies[];
  startingDate: date;
  endingDate: date;
}
