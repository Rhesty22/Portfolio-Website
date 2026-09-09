import '../styles/pages/Projects.css'
import { portfolioData } from '../data/portfolio'
import { useEffect, useRef, useState } from 'react'

export function ProjectCard({ project }) {
  const [activeMedia, setActiveMedia] = useState(0)
  const videoRef = useRef(null)
  const mediaImages = project.mediaImages ?? (project.mediaImage ? [project.mediaImage] : [])
  const mediaCount = 1 + mediaImages.length
  const mediaSlideStyle = { flex: `0 0 ${100 / mediaCount}%` }

  useEffect(() => {
    if (activeMedia !== 0) {
      videoRef.current?.pause()
    }
  }, [activeMedia])

  const showNextMedia = () => setActiveMedia(current => (current + 1) % mediaCount)
  const showPreviousMedia = () => setActiveMedia(current => (current + mediaCount - 1) % mediaCount)
  const playVideoOnHover = () => {
    videoRef.current?.play().catch(() => {})
  }

  return (
    <article className="project-card-full">
      <h3>{project.title}</h3>
      <div className="project-media" aria-label={`${project.title} media`}>
        <button type="button" className="media-arrow media-arrow-left" onClick={showPreviousMedia} aria-label="Show previous media"><span aria-hidden="true">←</span></button>
        <div className="project-media-viewport">
          <div
            className="project-media-track"
            style={{
              transform: `translateX(-${activeMedia * (100 / mediaCount)}%)`,
              width: `${mediaCount * 100}%`,
            }}
          >
            <div className="project-media-slide" style={mediaSlideStyle}>
              {project.video ? (
                <video
                  ref={videoRef}
                  src={project.video}
                  controls
                  muted
                  playsInline
                  onMouseEnter={playVideoOnHover}
                  onEnded={showNextMedia}
                />
              ) : (
                <div className="project-media-slot">Video</div>
              )}
            </div>
            {mediaImages.length > 0 ? mediaImages.map((image, index) => (
              <div className="project-media-slide" style={mediaSlideStyle} key={image}>
                <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
              </div>
            )) : (
              <div className="project-media-slide" style={mediaSlideStyle}>
                <div className="project-media-slot">Picture</div>
              </div>
            )}
          </div>
        </div>
        <button type="button" className="media-arrow media-arrow-right" onClick={showNextMedia} aria-label="Show next media"><span aria-hidden="true">→</span></button>
        <div className="media-dots" aria-hidden="true">
          {Array.from({ length: mediaCount }, (_, index) => (
            <span key={index} className={activeMedia === index ? 'active' : ''} />
          ))}
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
