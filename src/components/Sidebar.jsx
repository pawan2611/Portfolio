import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Work' },
  { path: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/pawankumar2611/', icon: '/linkedin.svg', label: 'LinkedIn' },
  { href: 'https://github.com/pawan2611', icon: '/github.svg', label: 'GitHub' },
  { href: '/Pawan-Kumar-CV.pdf', icon: '/cv.svg', label: 'CV' },
  { href: 'mailto:kumarp8304@gmail.com', icon: '/gmail.svg', label: 'Email' },
];

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-name">
        <div className="sidebar-logo">PK</div>
      </Link>
      <nav style={{ width: '100%', flex: 1 }}>
        <ul className="sidebar-nav">
          {navItems.map(({ path, label }) => (
            <li key={path} style={{ width: '100%' }}>
              <Link
                to={path}
                className={`sidebar-link${pathname === path ? ' active' : ''}`}
                title={label}
              >
                <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-socials">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="sidebar-social-link"
            title={label}
          >
            <img src={icon} alt={label} />
          </a>
        ))}
      </div>

      <span className="sidebar-year">© {new Date().getFullYear()}</span>
    </aside>
  );
}

export default Sidebar;
