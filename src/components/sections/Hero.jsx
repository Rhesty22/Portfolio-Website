import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import OrbAnimation from './OrbAnimation';

const Hero = () => {
  const projects = [
    {
      title: 'Shipped Shooting Game Docker',
      description: 'Built a full-stack pixel shooting game with enemy AI, player upgrades, ricochet mechanics, and auto-shoot systems.',
      link: 'Open Project Page',
    },
    {
      title: 'Containerized Full Stack Workflow',
      description: 'Configured Docker and Docker Compose for consistent local development and deployment across environments.',
      link: 'View Skills',
    },
    {
      title: 'Designed Responsive React UI',
      description: 'Created modern, mobile-friendly pages with reusable components, visual hierarchy, and smooth interactions.',
      link: 'Work With Me',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-20 pb-20">
      <OrbAnimation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="text-cyan-400 uppercase text-sm font-semibold tracking-widest">Home</div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm</span>{' '}
                <span className="gradient-text">Adormeo Rhesty</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I build fast, scalable web applications from polished frontends to robust backend services and deployment workflows.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Role</p>
                <p className="text-white font-semibold">Full Stack Developer</p>
              </div>
              <div className="glass rounded-lg p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-semibold">Philippines</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Projects Cards */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">What I've Done</h2>
            <div className="space-y-4 max-h-96 md:max-h-full overflow-y-auto pr-4">
              {projects.map((project, idx) => (
                <div key={idx} className="card p-6 group">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Link to="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 transition-colors">
                    {project.link} <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
