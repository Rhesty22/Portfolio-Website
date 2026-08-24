import { Link } from 'react-router-dom';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/square-linkedin-brands-solid-full.svg';
import emailIcon from '../assets/icons/envelope-regular-full.svg';
import { portfolioData } from '../data/portfolio';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="footer-brand">
              <div className="footer-monogram">
                AR
              </div>
              <span>Portfolio</span>
            </Link>
            <p className="footer-description">Building modern web experiences with thoughtful design and reliable code.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3>Connect</h3>
            <div className="footer-social-list">
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
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Adormeo Rhesty. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
