import '../styles/pages/About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>
        
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
              <h3>Experience</h3>
              <p>X+ years building web applications</p>
            </div>
            <div className="highlight">
              <h3>Focus</h3>
              <p>Full-stack development & user experience</p>
            </div>
            <div className="highlight">
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Resume</h2>
          <p>Download my resume to learn more about my experience and qualifications.</p>
          <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
        </div>
      </div>
    </section>
  )
}
