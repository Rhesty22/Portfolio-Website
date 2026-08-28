import '../styles/pages/Skills.css'
import { skillsData } from '../data/skills'

export default function Skills() {

  return (
    <section className="skills">
      <div className="skills-container">
        <h1>Skills</h1>
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

      </div>
    </section>
  )
}
