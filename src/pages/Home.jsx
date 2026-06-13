import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';

const phrases = [
  'Python Backend Engineer',
  'MERN Stack Developer',
  'Competitive Programmer',
  'Open to Opportunities',
];

const stats = [
  { number: '#3536', label: 'Global · CodeVita S12' },
  { number: 'GATE 25', label: 'CSE · AIR 14088' },
  { number: 'TCS Ninja', label: 'Offer Received' },
  // { number: '11+',      label: 'Projects Built'         },
];

const navItems = [
  { to: '/about', num: '01', label: 'About' },
  { to: '/projects', num: '02', label: 'Projects' },
  { to: '/contact', num: '03', label: 'Contact' },
];

function Home() {
  const typed = useTypewriter(phrases, 55, 2000);

  return (
    <div className="home-page">
      {/* Left column */}
      <div style={{ maxWidth: '620px' }}>
        <p className="home-eyebrow fade-up">Software Engineer · Delhi NCR, India · Open to Relocation & Remote</p>

        <h1 className="home-headline fade-up delay-1">
          Pawan<br />
          <em className="home-headline-italic">Kumar.</em>
        </h1>

        <p className="home-subtitle fade-up delay-2">{typed}<span className="terminal-cursor" /></p>

        {/* Stats row */}
        <div className="home-stats fade-up delay-3">
          {stats.map((s) => (
            <div key={s.label} className="stat-block">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="home-desc fade-up delay-4">
          I build <strong>backend systems</strong> in Python with SQLite and
          <strong> full-stack web applications</strong> using the MERN stack.
          Competitive programmer with a global ranking. Open to relocation
          and remote work across India.
        </p>

        <div className="home-cta-row fade-up delay-5">
          <a href="/Pawan-Kumar-CV.pdf" target="_blank" rel="noreferrer" className="btn-primary">
            View Resume
          </a>
          <Link to="/projects" className="btn-ghost">
            See My Work
          </Link>
        </div>

        {/* Terminal badge */}
        <div className="terminal-badge fade-up delay-5">
          <span className="terminal-dot" />
          <span>
            <span style={{ color: 'var(--gold)' }}>$ </span>
            <span className="terminal-text">status</span>
            <span style={{ color: 'var(--text-muted)', marginLeft: '0.75rem' }}>
              actively_seeking_opportunities
            </span>
          </span>
        </div>
      </div>

      {/* Right nav menu */}
      <nav className="home-nav-menu">
        {navItems.map(({ to, num, label }) => (
          <Link to={to} key={to} className="home-nav-item">
            <span className="nav-number">{num}</span>
            {label}
            <span className="nav-arrow">→</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Home;
