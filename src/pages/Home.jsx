import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'
import { portfolioData } from '../data/portfolio'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Portfolio</p>
          <h1>{portfolioData.personal.name}</h1>
          <p>{portfolioData.personal.description}</p>
          <div className="hero-meta">
            <span>Based in {portfolioData.personal.location}</span>
            <span>Available for selected work</span>
          </div>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View projects</Link>
            <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
            <a href="/documents/Rhesty_Adormeo_Resume.pdf" download className="text-link">Download resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>

      <section className="featured-projects">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Projects with a practical edge</h2>
        </div>
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

      <section className="about">
        <div className="about-container">
          <h2>About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with expertise in building web applications.
                I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source,
                or sharing my knowledge through writing and mentoring.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <h3>Years of Experience</h3>
                <p>{portfolioData.experience.length} projects completed</p>
              </div>
              <div className="highlight">
                <h3>Focus</h3>
                <p>{portfolioData.personal.title}</p>
              </div>
              <div className="highlight">
                <h3>Location</h3>
                <p>{portfolioData.personal.location}</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Resume</h2>
            <p>Download my resume to learn more about my experience and qualifications.</p>
            <a href="/documents/Rhesty_Adormeo_Resume.pdf" download className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </section>
    </section>
  )
}
