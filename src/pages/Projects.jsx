import '../styles/pages/Projects.css'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useProjects } from '../hooks/useProjects'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'

export function ProjectCard({ project }) {
  const [activeMedia, setActiveMedia] = useState(0)
  const [expandedImage, setExpandedImage] = useState(null)
  const videoRef = useRef(null)
  const mediaImages = project.mediaImages ?? (project.mediaImage ? [project.mediaImage] : [])
  const mediaCount = 1 + mediaImages.length
  const mediaSlideStyle = { flex: `0 0 ${100 / mediaCount}%` }

  useEffect(() => {
    if (activeMedia !== 0) {
      videoRef.current?.pause()
    }
  }, [activeMedia])

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveMedia(current => (current + 1) % mediaCount)
    }, 3000)

    return () => window.clearInterval(carouselTimer)
  }, [mediaCount])

  useEffect(() => {
    if (!expandedImage) return undefined

    const closeOnEscape = event => {
      if (event.key === 'Escape') setExpandedImage(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [expandedImage])

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
                <button
                  type="button"
                  className="project-image-button"
                  onClick={() => setExpandedImage(image)}
                  aria-label={`View ${project.title} screenshot ${index + 1} fullscreen`}
                >
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                  <span className="project-image-overlay" aria-hidden="true">View full image</span>
                </button>
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
      {expandedImage && createPortal(
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} fullscreen image`}
          onClick={() => setExpandedImage(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setExpandedImage(null)}
            aria-label="Close fullscreen image"
          >
            Close
          </button>
          <img
            src={expandedImage}
            alt={`${project.title} fullscreen screenshot`}
            onClick={event => event.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </article>
  )
}

export default function Projects() {
  const { projects, isLoading, isRefreshing } = useProjects()

  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid-full" aria-busy={isLoading} aria-live="polite">
          {isLoading ? Array.from({ length: 2 }, (_, index) => (
            <ProjectCardSkeleton key={index} />
          )) : projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {isRefreshing && !isLoading && <p className="projects-refresh-status">Refreshing projects…</p>}
      </div>
    </section>
  )
}
