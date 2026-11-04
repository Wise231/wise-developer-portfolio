import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, ExternalLink, Github, Linkedin, Mail, Menu, Moon, Sun, X, Terminal, Sparkles } from 'lucide-react'
import { projects, skillGroups, certifications } from './data'

const EMAIL = 'wisetshikovhela@gmail.com'
const GITHUB = 'https://github.com/Wise231'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('wise-theme') || 'dark')
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('wise-theme', theme)
  }, [theme])

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') { setSelected(null); setMenuOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const categories = ['All', 'Website', 'Application', 'Interface']
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.type === filter), [filter])

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${EMAIL}` }
  }

  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Wise Tshikovhela home"><span className="brand-mark">W<span>.</span></span><span className="brand-name">WISE TSHIKOVHELA</span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work <span>01</span></a><a href="#about" onClick={closeMenu}>About <span>02</span></a><a href="#skills" onClick={closeMenu}>Skills <span>03</span></a><a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
      </nav>
      <div className="top-actions"><button className="icon-button theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button><a className="availability" href={`mailto:${EMAIL}`}><span className="status-dot"/> Available for opportunities</a><button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> SOFTWARE DEVELOPER / IT GRADUATE <span className="eyebrow-index">[ 2026 ]</span></div>
          <h1>Building useful<br/><span className="outline-text">things</span> with <span className="accent-text">technology.</span></h1>
          <p className="hero-intro">I’m Wise Tshikovhela — an IT graduate interested in software development, thoughtful interfaces and solving practical problems through technology.</p>
          <div className="hero-buttons"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#contact">Get in touch <ArrowRight size={16}/></a></div>
          <div className="hero-meta"><span><span className="meta-label">BASED IN</span> South Africa</span><span><span className="meta-label">FOCUS</span> Software & web development</span></div>
        </div>
        <div className="hero-visual" aria-label="Decorative code-inspired graphic">
          <div className="visual-top"><span>FIG. 001 — PERSONAL SYSTEM</span><span>WT / 26</span></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="visual-core"><span className="core-bracket">{`{ }`}</span><span className="core-name">WT</span><span className="core-caption">IDEAS → INTERFACES</span></div>
          <div className="float-tag tag-top"><Code2 size={14}/> Clean code, clear intent</div><div className="float-tag tag-bottom"><span className="status-dot"/> Always learning</div>
          <div className="visual-coordinate">25°44' S<br/>28°11' E</div><div className="visual-bottom"><span>DESIGN / DEVELOP / ITERATE</span><span>SCROLL TO EXPLORE <ArrowDown size={12}/></span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{['SOFTWARE DEVELOPMENT','FRONTEND ENGINEERING','PROBLEM SOLVING','CONTINUOUS LEARNING','SOFTWARE DEVELOPMENT','FRONTEND ENGINEERING','PROBLEM SOLVING','CONTINUOUS LEARNING'].map((item, i) => <span key={i}>{item}<i>✳</i></span>)}</div></section>

      <section className="section-wrap work-section" id="work">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK / 01</div><h2>Projects<span className="accent-text">.</span></h2></div><p>A selection of academic and personal work. Each project reflects a different part of my development journey.</p></div>
        <div className="filter-row"><div className="filter-tabs" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} className={filter === c ? 'filter active' : 'filter'} onClick={() => setFilter(c)}>{c}</button>)}</div><span className="result-count">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span></div>
        <div className="project-grid">{visibleProjects.map((project, i) => <article className={`project-card project-${project.id}`} key={project.id}>
          <button className="project-open" onClick={() => setSelected(project)} aria-label={`View ${project.name} project details`}>
            <div className="project-art"><div className="art-grid"/><div className="art-top"><span>CASE STUDY / {project.number}</span><span>{project.year}</span></div>
              {project.id === 'tutorfind' && <div className="tutor-ui"><div className="mock-sidebar"><b>t.</b><i/><i/><i/><i/></div><div className="mock-content"><small>DISCOVER YOUR NEXT TUTOR</small><strong>Learn from<br/>the right people.</strong><div className="mock-search">⌕ &nbsp; Search subjects</div><div className="mock-profiles"><span/><span/><span/></div></div></div>}
              {project.id === 'vhutali' && <div className="book-ui"><div className="book-kicker">A HOME FOR<br/>STORIES</div><div className="book-title">VHUTALI<br/><i>publishing</i></div><div className="book-shape"/><div className="book-foot">WORDS THAT STAY WITH YOU.</div></div>}
              {project.id === 'taskflow' && <div className="dash-ui"><div className="dash-head"><b>Overview</b><span>⌁ &nbsp;•••</span></div><div className="dash-stats"><i/><i/><i/></div><div className="dash-chart"><div/><div/><div/><div/><div/><div/><div/><div/></div><div className="dash-list"><i/><i/><i/></div></div>}
              {project.id === 'medicare' && <div className="medical-ui"><div className="medical-nav">M<span>+</span> &nbsp; MediCare</div><div className="medical-heading">Care that<br/><i>connects.</i></div><div className="medical-card"><span>UPCOMING APPOINTMENT</span><b>Dr. Sarah M.</b><small>General consultation · 10:30</small><div className="medical-line"/></div><div className="medical-orb"/></div>}
              {project.id === 'web-foundations' && <div className="browser-ui"><div className="browser-bar"><i/><i/><i/><span>my-first-responsive-site.dev</span></div><div className="browser-content"><small>WELCOME / EXPLORE</small><b>Design for<br/><em>every screen.</em></b><div className="browser-blocks"><i/><i/><i/></div></div></div>}
              <div className="art-overlay"><span>VIEW PROJECT <ArrowUpRight size={18}/></span></div>
            </div>
            <div className="project-info"><div><div className="project-type">{project.type} <span>·</span> {project.status}</div><h3>{project.name}</h3></div><span className="round-arrow"><ArrowUpRight size={18}/></span></div>
            <p className="project-summary">{project.summary}</p><div className="project-tags">{project.stack.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div>
          </button>
        </article>)}</div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap about-grid"><div className="about-left"><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT ME / 02</div><h2>Curious by nature.<br/><span className="accent-text">Practical</span> by design.</h2><div className="about-stamp"><span>WT</span><small>EST. IN<br/>PROGRESS</small></div></div><div className="about-right"><p className="about-lead">I’m a Bachelor of Information Technology graduate from Nelson Mandela University, with a foundation in software development and an interest in building digital experiences that are useful, understandable and reliable.</p><p>My experience spans academic application development, responsive websites and interface prototypes. I enjoy learning how systems fit together — from the user interface through to application logic and data.</p><p>I’m at the beginning of my professional development journey, looking for opportunities to contribute, learn from experienced teams and keep improving the way I build.</p><div className="education-card"><div className="education-icon"><Terminal size={18}/></div><div><span>EDUCATION / 2021 — 2025</span><b>Bachelor of Information Technology</b><small>Nelson Mandela University</small></div><span className="education-mark">NMU</span></div><div className="languages"><span className="meta-label">LANGUAGES</span><div>Tshivenda <i/> Xhosa <i/> English <i/> Tsonga</div></div></div></div></section>

      <section className="section-wrap skills-section" id="skills"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> THE TOOLKIT / 03</div><h2>Skills & tools<span className="accent-text">.</span></h2></div><p>Technologies I’ve studied or used across academic work and personal projects. I’m continuing to deepen these skills through practice.</p></div><div className="skills-layout"><div className="skills-note"><Sparkles size={19}/><h3>Built through<br/>practice.</h3><p>I value strong fundamentals, readable code and the discipline to keep learning beyond the classroom.</p><span>LEARNING NEVER SHIPS A FINAL VERSION.</span></div><div className="skill-groups">{skillGroups.map((group, i) => <div className="skill-group" key={group.title}><div className="skill-number">0{i + 1}</div><div className="skill-content"><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></div><ChevronDown size={16}/></div>)}</div></div></section>

      <section className="credentials-section"><div className="section-wrap credentials-grid"><div><div className="eyebrow"><span className="eyebrow-line"/> CONTINUOUS DEVELOPMENT / 04</div><h2>Learning is<br/>part of the <span className="accent-text">work.</span></h2><p className="credentials-intro">Selected certifications and learning programmes shared for this portfolio draft. Verification links can be added alongside the official certificates.</p></div><div className="credential-list">{certifications.map((item, i) => <div className="credential" key={item.name}><span className="credential-no">{String(i + 1).padStart(2, '0')}</span><div><b>{item.name}</b><small>{item.issuer}</small></div><span className="credential-arrow" title={item.note}>↗</span></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="eyebrow"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND? / 05</div><h2>Let’s make<br/><span className="outline-text">something</span><br/><span className="accent-text">meaningful.</span></h2><div className="contact-bottom"><div><p>I’m open to junior developer opportunities, internships, collaborations and conversations about technology.</p><a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight size={18}/></a></div><button className="button button-primary copy-button" onClick={copyEmail}>{copied ? <><Check size={17}/> Copied</> : <><Mail size={17}/> Copy email</>}</button></div></div></section>
    </main>

    <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">W<span>.</span></span><span className="brand-name">WISE TSHIKOVHELA</span></a><span className="footer-copy">© {new Date().getFullYear()} WISE TSHIKOVHELA. BUILT WITH INTENTION.</span><div className="social-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17}/></a></div><a className="back-top" href="#home">BACK TO TOP ↑</a></div></footer>

    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null) }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-top"><span>PROJECT FILE / {selected.number}</span><button className="icon-button" onClick={() => setSelected(null)} aria-label="Close project details"><X/></button></div><div className="modal-content"><div className="eyebrow">{selected.type} <span>·</span> {selected.status} <span>·</span> {selected.year}</div><h2 id="modal-title">{selected.name}<span className="accent-text">.</span></h2><p className="modal-summary">{selected.summary}</p><div className="modal-columns"><div><h3>Overview</h3><p>{selected.description}</p><h3>Challenge & approach</h3><p>{selected.challenge}</p><h3>What I learned</h3><p>{selected.learning}</p></div><aside><h3>Core features</h3><ul>{selected.features.map(f => <li key={f}>{f}</li>)}</ul><h3>Technology</h3><div className="project-tags modal-tags">{selected.stack.map(t => <span key={t}>{t}</span>)}</div><div className="modal-note">Repository and live-demo links will be added once the project repositories and deployments are confirmed.</div></aside></div><div className="modal-footer"><a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">Visit GitHub profile <ExternalLink size={15}/></a><button className="text-link" onClick={() => setSelected(null)}>Close project <ArrowLeft size={15}/></button></div></div></section></div>}
  </div>
}

export default App
