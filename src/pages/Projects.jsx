import '../styles/pages/Projects.css'
import { portfolioData } from '../data/portfolio'
import { useState } from 'react'

function ProjectCard({ project }) {
  const [activeMedia, setActiveMedia] = useState(0)

  const showNextMedia = () => setActiveMedia(current => (current + 1) % 2)
  const showPreviousMedia = () => setActiveMedia(current => (current + 2 - 1) % 2)

  return (
    <article className="project-card-full">
      <h3>{project.title}</h3>
      <div className="project-media" aria-label={`${project.title} media`}>
        <button type="button" className="media-arrow media-arrow-left" onClick={showPreviousMedia} aria-label="Show previous media">←</button>
        <div className="project-media-viewport">
          <div className="project-media-track" style={{ transform: `translateX(-${activeMedia * 50}%)` }}>
            <div className="project-media-slide">
              {project.video ? (
                <video src={project.video} controls onEnded={showNextMedia} />
              ) : (
                <div className="project-media-slot">Video</div>
              )}
            </div>
            <div className="project-media-slide">
              {project.mediaImage ? (
                <img src={project.mediaImage} alt={`${project.title} screenshot`} />
              ) : (
                <div className="project-media-slot">Picture</div>
              )}
            </div>
          </div>
        </div>
        <button type="button" className="media-arrow media-arrow-right" onClick={showNextMedia} aria-label="Show next media">→</button>
        <div className="media-dots" aria-hidden="true">
          <span className={activeMedia === 0 ? 'active' : ''} />
          <span className={activeMedia === 1 ? 'active' : ''} />
        </div>
      </div>
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
  )
}

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid-full">
          {portfolioData.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
