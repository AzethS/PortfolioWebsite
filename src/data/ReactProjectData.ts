// src/data/ReactProjectData.ts
export interface ReactProject {
    title: string;
    description: string;
    routeLink: string;
  }
  
  export const reactProjects: ReactProject[] = [
    {
      title: "Project 1: Tictactoe Game",
      description:
        "My first React practice project, a tictactoe game with some counts.",
      routeLink: "/projects/react-projects/board-game",
    },
    {
      title: "Project 2: Disk Visualisation",
      description: "My practice of using SVG for creating disk visualizations.",
      routeLink: "/projects/react-projects/disk",
    },
    {
      title: "Project 3: Udemy Cursus",
      description: "The page for all the projects of my Udemy cursus.",
      routeLink: "/projects/react-projects/udemy-cursus",
    },
    // Add more React practice projects as needed...
  ];
  