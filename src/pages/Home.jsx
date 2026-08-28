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
            <div className="credential-shelf">
              <div className="shelf-header">
                <p className="section-kicker">Credentials</p>
                <h2>Resume & certificates</h2>
              </div>

              <article className="resume-slot">
                <div>
                  <span className="credential-label">Top shelf</span>
                  <h3>Resume</h3>
                  <p>My experience, qualifications, and the work behind this portfolio.</p>
                </div>
                <a href="/documents/Rhesty_Adormeo_Resume.pdf" download className="btn btn-primary">Download resume</a>
              </article>

              <div className="certificate-shelf">
                <span className="credential-label">Certificates</span>
                <div className="certificate-grid">
                  <article className="certificate-slot">
                    <span className="certificate-number">01</span>
                    <h3>Frontend development</h3>
                    <a href="/documents/frontend-development-certificate.pdf" download>Download certificate <span aria-hidden="true">↗</span></a>
                  </article>
                  <article className="certificate-slot">
                    <span className="certificate-number">02</span>
                    <h3>Responsive web design</h3>
                    <a href="/documents/responsive-web-design-certificate.pdf" download>Download certificate <span aria-hidden="true">↗</span></a>
                  </article>
                  <article className="certificate-slot">
                    <span className="certificate-number">03</span>
                    <h3>Full-stack foundations</h3>
                    <a href="/documents/full-stack-foundations-certificate.pdf" download>Download certificate <span aria-hidden="true">↗</span></a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
