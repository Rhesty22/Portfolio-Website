import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'
import { portfolioData } from '../data/portfolio'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm a Developer</h1>
          <p>Creating beautiful and functional web experiences</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </div>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.slice(0, 3).map(project => (
            <article key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
