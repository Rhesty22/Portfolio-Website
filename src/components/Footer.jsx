import { Link } from 'react-router-dom';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/square-linkedin-brands-solid-full.svg';
import emailIcon from '../assets/icons/envelope-regular-full.svg';
import { portfolioData } from '../data/portfolio';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                AR
              </div>
              <span className="text-lg font-bold text-white">Portfolio</span>
            </Link>
            <p className="text-gray-400 text-sm">Building modern web experiences with cutting-edge technologies.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
                <img src={githubIcon} alt="" className="footer-social-icon" />
                <span>GitHub</span>
              </a>
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                <img src={linkedinIcon} alt="" className="footer-social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} aria-label="Email" className="footer-social-link">
                <img src={emailIcon} alt="" className="footer-social-icon" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Adormeo Rhesty. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
