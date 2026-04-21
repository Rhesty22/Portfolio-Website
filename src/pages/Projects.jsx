import '../styles/pages/Projects.css'
import { portfolioData } from '../data/portfolio'

export default function Projects() {

  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="section-subtitle">Here are some of my recent works</p>

        <div className="projects-grid-full">
          {portfolioData.projects.map(project => (
            <article key={project.id} className="project-card-full">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
