// src/data/ProjectsData.ts
export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  githubLink: string;
  languages: string[];
  completionDate: string;
}

export const projects: Project[] = [
  {
    title: "AvansDevOps",
    description: "A project for SOA3 made with Java.",
    detailedDescription:
      "This project involves building a DevOps pipeline for continuous integration and deployment using Jenkins and Docker. The project automates testing, deployment, and monitoring of services, allowing for fast feedback and consistent code quality.",
    imageUrl:
      "https://www.delta-n.nl/wp-content/uploads/2019/07/DevOps-Pipeline-800.png",
    githubLink: "https://github.com/AzethS/AvansDevOps",
    languages: ["Java", "Docker", "Jenkins"],
    completionDate: "May 2021",
  },
  {
    title: "ClientSide",
    description:
      "A project focused on the clientside, using TypeScript and MongoDb.",
    detailedDescription:
      "A project built to enhance client-side performance using TypeScript and MongoDB, integrating a scalable API structure with React for dynamic user interaction and real-time data processing.",
    imageUrl: "https://i.ytimg.com/vi/ve82kSSj_Hs/maxresdefault.jpg",
    githubLink: "https://github.com/yourusername/weather-app",
    languages: ["TypeScript", "MongoDB", "React"],
    completionDate: "August 2021",
  },
  {
    title: "SeriousGame",
    description: "A project about Serious Game using C# in Unity.",
    detailedDescription:
      "Developed a Serious Game using Unity, focusing on educational gameplay with challenges and puzzles. The game promotes critical thinking and problem-solving skills, with C# handling the game logic and interactions.",
    imageUrl:
      "https://edutechwiki.unige.ch/mediawiki/images/thumb/0/02/Martens-2088-serious-gaming.svg/600px-Martens-2088-serious-gaming.svg.png",
    githubLink: "https://github.com/yourusername/portfolio-website",
    languages: ["C#", "Unity"],
    completionDate: "December 2020",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Project about AI using Python, including Sudoku Solver and Sentiment Analysis.",
    detailedDescription:
      "This project applies AI techniques in Python to solve complex problems. It includes a Sudoku Solver using constraint satisfaction and a Sentiment Analysis tool for evaluating text data and predicting sentiment polarity.",
    imageUrl:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Artificial-Intelligence-Projects-1-800x450.png",
    githubLink: "https://github.com/AzethS/Artificial-Intelligence",
    languages: ["Python", "Machine Learning", "AI"],
    completionDate: "March 2022",
  },
  {
    title: "Kramse",
    description:
      "Business Intelligence project focused on building a data warehouse.",
    detailedDescription:
      "Built a full ETL (Extract, Transform, Load) pipeline to process raw business data and deliver insights through an interactive dashboard in PowerBI. This project provides high-level reports and metrics for decision-making.",
    imageUrl:
      "https://s7280.pcdn.co/wp-content/uploads/2018/10/Extract-Transform-Load.png",
    githubLink: "https://github.com/AzethS/Kramse",
    languages: ["SQL", "ETL", "PowerBI"],
    completionDate: "July 2021",
  },
  {
    title: "Breaking Bad",
    description:
      "An Android app about the Breaking Bad series, developed using Java.",
    detailedDescription:
      "Developed an Android app dedicated to Breaking Bad fans. The app features character profiles, episode guides, and trivia games. It’s built with Java and utilizes RESTful APIs to fetch data about the show.",
    imageUrl: "https://i.ytimg.com/vi/qhL9txndhsw/maxresdefault.jpg",
    githubLink: "https://github.com/AzethS/BreakingBad",
    languages: ["Java", "Android", "RESTful APIs"],
    completionDate: "November 2020",
  },
  {
    title: "Skool Workshop",
    description: "An Android app for Skool Workshops designed using Java.",
    detailedDescription:
      "Developed an Android app for Skool Workshops. The app includes interactive features like booking workshops, providing feedback, and scheduling. Built with Java and integrated with Firebase for real-time data.",
    imageUrl:
      "https://skoolworkshop.nl/wp-content/uploads/2020/06/Skool-Workshop_Logo.png",
    githubLink: "https://github.com/AzethS/Skool-Workshop-Android",
    languages: ["Java", "Firebase", "Android"],
    completionDate: "September 2021",
  },
  {
    title: "Share a Meal",
    description: "A website project allowing users to share meals with others.",
    detailedDescription:
      "Developed a web application where users can share meals with others in their community. It includes features such as meal posting, ratings, and search filters, built using JavaScript and Node.js.",
    imageUrl: "https://sharemeals.org/static/favicon.4a3ecc54.png",
    githubLink: "https://github.com/AzethS/Shareameal",
    languages: ["JavaScript", "Node.js", "Express"],
    completionDate: "February 2021",
  },
  {
    title: "Avans The Circle",
    description:
      "A real-time chat and streaming website with security features.",
    detailedDescription:
      "A real-time communication platform built with WebRTC for streaming and secure messaging. This project implements security measures like hashing and digital signatures to ensure communication integrity.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDY2NGIzMjYtMDU2ZS00M2NhLWIxMWUtZTQ1Yjk4MDE2OGQ1XkEyXkFqcGdeQXVyMTMwMjk2MTU4._V1_.jpg",
    githubLink: "https://github.com/Avans-The-Circle",
    languages: ["JavaScript", "WebRTC", "Security Protocols"],
    completionDate: "April 2022",
  },
];
