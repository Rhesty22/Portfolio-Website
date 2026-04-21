import '../styles/pages/Skills.css'
import { skillsData } from '../data/skills'

export default function Skills() {

  return (
    <section className="skills">
      <div className="skills-container">
        <h1>Skills & Services</h1>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <ul className="skill-list">
                {category.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="services">
          <h2>What I Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Custom web applications tailored to your needs</p>
            </div>
            <div className="service-card">
              <h3>Full-Stack Development</h3>
              <p>End-to-end development from frontend to backend</p>
            </div>
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>Beautiful and user-friendly interfaces</p>
            </div>
            <div className="service-card">
              <h3>Consultation</h3>
              <p>Technical advice and mentoring</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
