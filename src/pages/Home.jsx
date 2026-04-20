import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'

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
          <article className="project-card">
            <h3>Project One</h3>
            <p>A brief description of your first project goes here.</p>
            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
            </div>
          </article>
          <article className="project-card">
            <h3>Project Two</h3>
            <p>A brief description of your second project goes here.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
            </div>
          </article>
          <article className="project-card">
            <h3>Project Three</h3>
            <p>A brief description of your third project goes here.</p>
            <div className="project-tags">
              <span>Vue</span>
              <span>API</span>
            </div>
          </article>
        </div>
      </section>
    </section>
  )
}
