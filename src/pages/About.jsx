import React from 'react';
import { Link } from 'react-router-dom';

const achievements = [
  {
    icon: '⚡',
    title: 'TCS CodeVita Season 12',
    sub: 'Global Rank #3536',
    desc: "Ranked 3536 globally out of hundreds of thousands of participants in one of the world's largest coding competitions. Demonstrates elite-level problem solving under pressure.",
  },
  {
    icon: '📐',
    title: 'GATE 2025',
    sub: 'CSE · AIR 14088',
    desc: "Qualified India's most prestigious postgraduate engineering entrance exam in Computer Science, validating strong fundamentals across all core CS domains.",
  },
  {
    icon: '🎯',
    title: 'TCS NQT Shortlisted For Prime',
    sub: 'Offer Received',
    desc: 'Qualified the TCS National Qualifier Test and received a TCS Ninja offer after successfully clearing the interview process.',
  },
];

const skills = [
  { icon: '🐍', name: 'Python', desc: 'Backend development, SQLite, OOP, SHA256 hashing, CSV processing, email automation via smtplib, PyInstaller packaging.' },
  { icon: '🌐', name: 'MERN Stack', desc: 'MongoDB, Express.js, React.js, Node.js. Built and deployed multiple full-stack applications.' },
  { icon: '🗄️', name: 'Databases', desc: 'SQLite with Python (complex joins, foreign keys, ACID transactions), MySQL schema design, normalization.' },
  { icon: '💻', name: 'Languages', desc: 'Python (primary), JavaScript (ES6+), C, C++. OOP, data structures, algorithm design.' },
  { icon: '🎨', name: 'Web Technologies', desc: 'HTML5, CSS3, Bootstrap 5, responsive design. Deployed on Netlify, Render and GitHub Pages.' },
  { icon: '📊', name: 'DSA', desc: 'Arrays, linked lists, stacks, queues, trees, sorting and searching algorithms. Active competitive programming practice.' },
  { icon: '🔧', name: 'Tools', desc: 'Git, GitHub, VS Code, PyInstaller. Deployment on Netlify, Render, Heroku, GitHub Pages.' },
];

const education = [
  {
    year: '2021 — 2025',
    institution: 'Akido College of Engineering · Maharshi Dayanand University',
    degree: 'B.Tech — Computer Science Engineering · 66.31%',
  },
  {
    year: '2021',
    institution: 'Kendriya Vidyalaya',
    degree: '12th · Science Stream (PCM + CS) · 76.2%',
  },
  {
    year: '2019',
    institution: 'Kendriya Vidyalaya',
    degree: '10th · 74.4%',
  },
];

function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}

function About() {
  return (
    <div className="page-shell">
      <p className="page-eyebrow">About Me</p>
      <h1 className="page-heading">I build things<br /><em>that work.</em></h1>

      <p className="about-tagline">
        Computer Science Engineer · Python Developer · Competitive Programmer
      </p>

      <p className="about-bio">
        A fresh B.Tech graduate from Maharshi Dayanand University with hands-on experience in
        <strong> Python backend systems</strong> and <strong>MERN stack web applications.</strong> I
        believe great software is built through deep understanding — I learn the concept, plan the
        algorithm, then write the code. My competitive programming background ({' '}
        <strong>CodeVita Global Rank #3536</strong>) has sharpened my ability to solve hard problems
        efficiently and systematically.
      </p>

      <div className="about-btn-row">
        <a href="https://drive.google.com/file/d/1bVGKcvAIxoZyGFVTtUpVO8SujAlK9ply/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary">
          Download CV
        </a>
        <Link to="/contact" className="btn-ghost">
          Get In Touch
        </Link>
      </div>

      {/* Achievements */}
      <SectionHeader label="Recognition" title="Achievements" />
      <div className="achievement-grid">
        {achievements.map((a) => (
          <div key={a.title} className="achievement-card">
            <span className="achievement-icon">{a.icon}</span>
            <div className="achievement-title">{a.title}</div>
            <span className="achievement-sub">{a.sub}</span>
            <p className="achievement-desc">{a.desc}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <SectionHeader label="Technical" title="Skills" />
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </div>
            <p className="skill-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <SectionHeader label="Background" title="Education" />
      <div className="edu-list">
        {education.map((e) => (
          <div key={e.institution} className="edu-item">
            <span className="edu-year">{e.year}</span>
            <div className="edu-institution">{e.institution}</div>
            <div className="edu-degree">{e.degree}</div>
          </div>
        ))}
      </div>

      {/* Training */}
      <SectionHeader label="Learning" title="Training" />
      <div className="edu-list">
        <div className="edu-item">
          <span className="edu-year">2023 — 2024</span>
          <div className="edu-institution">Full Stack Web Development</div>
          <div className="edu-degree">HTML · CSS · JavaScript · Node.js · Express.js · React.js · MongoDB · Deployment</div>
        </div>
      </div>
    </div>
  );
}

export default About;
