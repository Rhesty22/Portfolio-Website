import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'
import '../styles/pages/Projects.css'
import { portfolioData } from '../data/portfolio'
import { ProjectCard } from './Projects'

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
            <Link to="/projects" className="btn btn-secondary">View projects</Link>
            <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
            <a href="/documents/Rhesty_Adormeo_Resume.pdf" download className="btn btn-secondary">Download resume</a>
          </div>
        </div>
      </div>

      <section className="featured-projects">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Projects with a practical edge</h2>
        </div>
        <div className="projects-grid-full">
          {portfolioData.projects.filter(project => ['DINOTEN', 'Fishing Minigame'].includes(project.title)).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <h2>About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm currently studying both web development and game development,
                building my skills through hands-on projects and creative problem-solving.
              </p>
              <p>
                I enjoy exploring new technologies, creating interactive experiences,
                and turning ideas into simple, beautiful, and intuitive designs.
              </p>
            </div>

            <div className="about-highlights">
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
            <div className="credential-shelf">
              <div className="shelf-header">
                <p className="section-kicker">Credentials</p>
                <h2>Resume</h2>
              </div>

              <article className="resume-slot">
                <div>
                  <span className="credential-label">Top shelf</span>
                  <h3>Resume</h3>
                  <p>My experience, qualifications, and the work behind this portfolio.</p>
                </div>
                <a href="/documents/Rhesty_Adormeo_Resume.pdf" download className="btn btn-secondary">Download resume</a>
              </article>

            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
