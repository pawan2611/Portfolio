import React, { useState } from 'react';

const aiProjects = [
  {
    title: 'Saathi — AI Senior Life OS',
    techs: ['Gemini AI', 'Web Speech API', 'Firebase', 'Median'],
    category: 'ai',
    desc: 'A voice-first AI companion built for India\'s 140M+ senior citizens living alone or far from family. Combines a Hinglish voice companion, medicine reminders, one-tap SOS, and a family dashboard — no typing or English required. Built for the Redrob × Hack2Skill "India.Runs" hackathon (Track 3 — Everyday AI Innovation Challenge). Gemini AI powers the conversational intent and SOS logic, Web Speech API handles voice in/out, and Firebase stores vitals and medicine logs. Packaged into an Android app with Median, backed by a separate Node/Express proxy so the Gemini API key stays server-side.',
    github: 'https://github.com/pawan2611/SAATHI',
    proxy: 'https://github.com/pawan2611/Saathi-Proxy',
    live: 'https://pawan2611.github.io/SAATHI/',
    demo: 'https://drive.google.com/file/d/1Trmq_x7TeeTYOPm-FXU7IULvjmEBsL0p/view',
    note: 'APK available in the main repo',
  },
];

const pythonProjects = [
  {
    title: 'Railway Reservation System',
    techs: ['Python', 'SQLite', 'CSV'],
    category: 'python',
    desc: 'IRCTC-inspired CLI reservation system. Multi-passenger booking, Tatkal quota (25% + surcharge), global waitlist with auto-promotion on cancellation, PNR tracking, admin revenue reports, and 10,000 trains generated programmatically.',
    github: 'https://github.com/pawan2611/railway-reservation-system',
  },
  {
    title: 'Bank Management System',
    techs: ['Python', 'SQLite', 'SHA256', 'smtplib'],
    category: 'python',
    desc: 'Full banking application with savings/current accounts, deposits, withdrawals, fund transfers, EMI loan calculator (Personal, Home, Education, Vehicle), OTP-based PIN recovery via email, admin controls and CSV report export.',
    github: 'https://github.com/pawan2611/bank-management-system',
  },
  {
    title: 'Student Result Management',
    techs: ['Python', 'SQLite', 'CSV'],
    category: 'python',
    desc: 'Complete student result system with CRUD operations, subject-wise analysis (avg/highest/lowest), automatic grade and percentage calculation, multi-admin support with SHA256 hashing, CSV export. Packaged as Windows EXE.',
    github: 'https://github.com/pawan2611/student-result-management',
  },
];

const webProjects = [
  {
    title: 'CodeMate',
    techs: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    desc: 'Live in-browser code editor that compiles and renders HTML, CSS and JavaScript in real time. Built for fast prototyping without any setup.',
    live: 'https://codemate-web.netlify.app/',
  },
  {
    title: 'Dyrii — Blog App',
    techs: ['Node.js', 'Express.js', 'EJS'],
    category: 'web',
    desc: 'Blog web application on Express.js with create, read and manage posts, dynamic routing, and server-side rendering via EJS. Deployed on Render.',
    live: 'https://dyrii.onrender.com/',
  },
  {
    title: 'DefineDeck',
    techs: ['Node.js', 'Express.js', 'REST API'],
    category: 'web',
    desc: 'Dictionary app pulling definitions, pronunciations, synonyms and antonyms from a public REST API. Express.js backend. Deployed on Render.',
    live: 'https://definedeck.onrender.com/',
  },
  {
    title: 'GlobeClock',
    techs: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    desc: 'World Clock + Alarm system covering every time zone simultaneously. Fully responsive across all screen sizes.',
    live: 'https://pawan2611.github.io/GlobeClock/',
  },
  {
    title: 'ToDo List',
    techs: ['Node.js', 'Express.js', 'EJS'],
    category: 'web',
    desc: 'Dynamic todo application with Express.js and EJS. Add and delete tasks with a clean, minimal interface.',
    live: 'https://todolist-pawan2611.onrender.com/',
  },
  {
    title: 'The Simon Game',
    techs: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    category: 'web',
    desc: 'Classic Simon pattern-memory game with 6 colours and sound effects. Increasing difficulty per level.',
    live: 'https://pawan2611.github.io/The-Simon-Game/',
  },
  {
    title: 'TheJokeLabs',
    techs: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    category: 'web',
    desc: 'Joke generator fetching from a public REST API. Demonstrates API integration and dynamic DOM manipulation.',
    live: 'https://pawan2611.github.io/TheJokeLabs/',
  },
  {
    title: 'The Dice Game',
    techs: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    desc: 'Two-player dice game determining winner by highest roll. Clean DOM manipulation and event handling.',
    live: 'https://pawan2611.github.io/The-Dice-Game/',
  },
];

const all = [...pythonProjects, ...webProjects];
const FILTERS = ['All', 'Python', 'Web'];

function ProjectCard({ project }) {
  const isPython = project.category === 'python';
  const linkUrl = project.github || project.live;
  const linkLabel = project.github ? 'GitHub ↗' : 'Live ↗';

  

  const links = [
  project.github && { href: project.github, label: 'GitHub ↗' },
  project.proxy && { href: project.proxy, label: 'Proxy API ↗' },
  project.live && { href: project.live, label: 'Live ↗' },
  project.demo && { href: project.demo, label: 'Demo (6 min) ↗' },
].filter(Boolean);

  return (
    <div className="project-card">
      <div className="project-card-top">
        <span className={`project-category-dot ${isPython ? 'dot-python' : 'dot-web'}`} />
        <span className="project-title">{project.title}</span>
        <a href={linkUrl} target="_blank" rel="noreferrer" className="project-link-icon" title={linkLabel}>
          <img src="/box-arrow-up-right.svg" alt="Open" />
        </a>
      </div>

      <p className="project-desc">{project.desc}</p>

      <div className="project-techs">
        {project.techs.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All'
    ? all
    : filter === 'Python'
      ? pythonProjects
      : webProjects;

  return (
    <div className="page-shell">
      <p className="page-eyebrow">My Work</p>
      <h1 className="page-heading">Projects &<br /><em>Builds.</em></h1>

      <p className="projects-intro">
        A mix of backend systems, full-stack web apps, and small tools — each one built to solve a real problem or learn something new.
      </p>

      {/* Filter + count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0 2.5rem', flexWrap: 'wrap' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.45rem 1rem',
              borderRadius: '4px',
              border: '1px solid',
              cursor: 'pointer',
              transition: 'all 0.2s',
              borderColor: filter === f ? 'var(--gold)' : 'var(--border)',
              background: filter === f ? 'var(--gold-dim)' : 'transparent',
              color: filter === f ? 'var(--gold)' : 'var(--text-muted)',
            }}
          >
            {f}
          </button>
        ))}
        {/*
        <span className="project-count-badge">
          {visible.length} project{visible.length !== 1 ? 's' : ''}
        </span>
        */}
      </div>

      <div className="project-grid">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
