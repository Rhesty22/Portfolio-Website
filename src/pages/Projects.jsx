import '../styles/pages/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application using public APIs',
      tags: ['React', 'REST API', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Content management system with markdown support',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="section-subtitle">Here are some of my recent works</p>

        <div className="projects-grid-full">
          {projects.map(project => (
            <article key={project.id} className="project-card-full">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
