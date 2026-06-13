import React, { useState, useRef } from 'react';

const EMAILJS_SERVICE_ID  = 'service_gy9e6tq';
const EMAILJS_TEMPLATE_ID = 'template_l9g2v3l';
const EMAILJS_PUBLIC_KEY  = 'MCv-LMlzukwj61y_J';

const channels = [
  { label: 'Email',    value: 'kumarp8304@gmail.com',               href: 'mailto:kumarp8304@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pawankumar2611',      href: 'https://www.linkedin.com/in/pawankumar2611/' },
  { label: 'GitHub',   value: 'github.com/pawan2611',                href: 'https://github.com/pawan2611' },
  { label: 'Location', value: 'Delhi NCR, India · Open to Relocation', href: null },
];

function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', contact: '', message: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast]   = useState(null);
  const timerRef            = useRef(null);

  function showToast(msg, isError = false) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ msg, isError });
    timerRef.current = setTimeout(() => setToast(null), 4000);
  }

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit() {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('Please fill in Name, Email and Message.', true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      showToast('Please enter a valid email address.', true);
      return;
    }

    setSending(true);
    try {
      if (!window.emailjs) {
        await new Promise((res, rej) => {
          const existing = document.querySelector('script[data-emailjs]');
          if (existing) { existing.addEventListener('load', res); existing.addEventListener('error', rej); return; }
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          s.setAttribute('data-emailjs', 'true');
          s.onload = res; s.onerror = rej;
          document.head.appendChild(s);
        });
      }
      // EmailJS v4: publicKey in send() options, no separate init() needed
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name:    form.name.trim(),
        email:   form.email.trim(),
        contact: form.contact.trim() || 'Not provided',
        message: form.message.trim(),
        time:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }, { publicKey: EMAILJS_PUBLIC_KEY });
      showToast("Message sent! I'll get back to you soon.", false);
      setForm({ name: '', email: '', contact: '', message: '' });
    } catch (err) {
      showToast('Something went wrong. Please try again.', true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="page-shell">
      <p className="page-eyebrow">Say Hello</p>
      <h1 className="page-heading">Let's<br /><em>Connect.</em></h1>

      <div className="contact-layout">
        {/* Left — channels */}
        <div className="contact-left">
          <p className="contact-lede">
            I am actively looking for <strong>software engineering roles</strong> across India.
            Whether you have a position, a project idea, or just want to say hello — reach out
            through any of the channels below or fill the form.
          </p>

          <div className="contact-channels">
            {channels.map(({ label, value, href }) => (
              <div key={label} className="contact-channel">
                <span className="channel-label">{label}</span>
                {href
                  ? <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="channel-value">{value}</a>
                  : <span className="channel-value" style={{ cursor: 'default' }}>{value}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          <div className="contact-form">
            <div className="form-field">
              <label className="form-label" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" className="form-input" placeholder="Your name" value={form.name} onChange={onChange} />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={onChange} />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="contact">Phone (optional)</label>
              <input id="contact" name="contact" type="text" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.contact} onChange={onChange} />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-input form-textarea" placeholder="What's on your mind?" value={form.message} onChange={onChange} />
            </div>

            <button className="submit-btn" onClick={onSubmit} disabled={sending}>
              {sending ? 'Sending…' : 'Send Message →'}
            </button>

            {toast && (
              <div className={`toast${toast.isError ? ' error' : ''}`}>
                <span>{toast.msg}</span>
                <button className="toast-close" onClick={() => setToast(null)}>✕</button>
                <div className="toast-bar" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
