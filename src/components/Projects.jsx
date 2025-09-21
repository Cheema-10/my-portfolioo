import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Spam Email Detector",
      image: `${process.env.PUBLIC_URL}/Spam email detector image.png`,
      description: "Detects spam emails using ML and NLP techniques.",
      link: "#", // Add project link if any
    },
    {
      title: "To-Do List App",
      image: `${process.env.PUBLIC_URL}/to-do-list-image.jpg`,
      description: "A simple to-do list app to manage daily tasks.",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      image: `${process.env.PUBLIC_URL}/weather-dashboard.jpeg`,
      description: "Displays weather information for multiple cities.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      image: `${process.env.PUBLIC_URL}/portfolio website image.png`,
      description: "My personal portfolio website showcasing projects.",
      link: "#",
    },
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h2>My Resume</h2>
        <a
          href={`${process.env.PUBLIC_URL}/Jas Karan Singh_resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Projects;


