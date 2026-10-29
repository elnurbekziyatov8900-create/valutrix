import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Menu,
  Network,
  Search,
  X,
} from 'lucide-react';
import { profile, projects, skills, timeline } from './content';

const categories = ['All', ...Array.from(new Set(skills.map((skill) => skill.category)))];
const anchors = [['Overview','overview'],['About','about'],['Engineering','engineering'],['Projects','projects'],['Experience','experience'],['Contact','contact']];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="wordmark" href="#overview" aria-label="Elnurbek Ziyotov, home"><span className="mark">EZ<span>.</span></span><span className="wordmark-name">ELNURBEK ZIYOTOV<small>SOFTWARE DEVELOPER</small></span></a>
    <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{anchors.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setOpen(false)}>Get in touch <ArrowUpRight size={14}/></a></nav>
  </header>;
}

function ArchitectureArt() {
 return <div className="system-art" aria-label="Conceptual map of backend engineering components" role="img"><div className="art-topline"><span>FIG. 01 / SYSTEM MAP</span><span>CONCEPTUAL · NOT A DEPLOYMENT DIAGRAM</span></div><div className="art-grid"><div className="art-node node-client"><span className="node-icon"><Code2 size={16}/></span><div><small>ENTRY POINT</small><b>Client / Bot</b></div><span className="node-number">01</span></div><div className="connector vertical c1"><i/></div><div className="art-node node-api"><span className="node-icon"><Braces size={16}/></span><div><small>APPLICATION LAYER</small><b>FastAPI · Python</b></div><span className="node-number">02</span></div><div className="connector vertical c2"><i/></div><div className="branch-line"><span/><span/><span/></div><div className="art-lower"><div className="art-node mini-node"><Database size={16}/><div><small>RELATIONAL</small><b>PostgreSQL</b></div></div><div className="art-node mini-node"><Layers3 size={16}/><div><small>FAST ACCESS</small><b>Redis</b></div></div><div className="art-node mini-node"><Network size={16}/><div><small>INTEGRATION</small><b>AI / Events</b></div></div></div></div><div className="art-footer"><span><i className="legend-dot"/> API & DATA BOUNDARIES</span><span>BACKEND ENGINEERING / 001</span></div></div>;
}

function SectionHeading({index,eyebrow,title,description}:{index:string;eyebrow:string;title:string;description?:string}) { return <div className="section-heading"><div className="section-index">{index}<span> / </span>{eyebrow}</div><div className="heading-content"><h2>{title}</h2>{description && <p>{description}</p>}</div></div>; }

function Hero() { return <section className="hero section-wrap" id="overview"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> SOFTWARE DEVELOPMENT / BACKEND ENGINEERING</div><h1>Building backend systems with <em>clarity</em> and purpose.</h1><p className="hero-description">I'm <strong>Elnurbek Ziyotov</strong>, a Software Developer focused on Python, API engineering, database systems, distributed applications, and AI-powered software.</p><div className="hero-actions"><a className="button button-dark" href="#engineering">Explore engineering <ArrowDownRight size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={15}/></a></div><div className="hero-meta"><div><span>01 / PRIMARY LANGUAGE</span><b>Python</b></div><div><span>02 / BACKEND</span><b>FastAPI</b></div><div><span>03 / DATA</span><b>PostgreSQL · Redis</b></div></div></div><ArchitectureArt/></section>; }

function IdentityStrip(){return <div className="identity-strip"><div className="strip-label">ENGINEERING<br/>DOMAINS <ArrowDownRight size={15}/></div>{[['01','Backend engineering'],['02','Data systems'],['03','Distributed architecture'],['04','AI integration'],['05','Deployment & infrastructure']].map(([n,t])=><div className="strip-item" key={n}><span>{n}</span><b>{t}</b></div>)}</div>}

function About(){return <section className="section-wrap about-section" id="about"><SectionHeading index="01" eyebrow="ABOUT" title="A systems mindset, built one layer at a time." description="My focus is the full path from a clear requirement to a maintainable backend application."/><div className="about-grid"><div className="about-lead"><span className="mono-label">HOW I APPROACH SOFTWARE</span><p>Writing an endpoint is only one part of building software. I’m interested in how requests are validated, data stays consistent, modules communicate, failures are handled, and an application can be run again in a predictable environment.</p><p>Through project work, I’m developing practical experience across Python backend development, relational databases, service integration, containerized environments, and AI capabilities.</p><a className="text-link" href="#projects">Explore selected work <ArrowRight size={15}/></a></div><div className="about-facts"><div className="fact-row"><span>EDUCATION</span><div><b>{profile.education}</b><p>{profile.program}</p></div></div><div className="fact-row"><span>STATUS</span><div><b>{profile.status}</b><p>Learning through implementation and project work</p></div></div><div className="fact-row"><span>FOCUS</span><div><b>Backend-first development</b><p>APIs · Data systems · Integration · AI</p></div></div><div className="fact-row"><span>WORKING STYLE</span><div><b>Understand the boundaries</b><p>Readable modules, explicit contracts, practical trade-offs</p></div></div></div></div></section>}

function Engineering(){const [query,setQuery]=useState('');const [category,setCategory]=useState('All');const [selected,setSelected]=useState<string|null>(null);const filtered=useMemo(()=>skills.filter(s=>(category==='All'||s.category===category)&&`${s.name} ${s.category} ${s.description} ${s.related.join(' ')}`.toLowerCase().includes(query.toLowerCase())),[category,query]);const current=skills.find(s=>s.name===selected);return <section className="engineering-section" id="engineering"><div className="section-wrap"><SectionHeading index="02" eyebrow="ENGINEERING CAPABILITIES" title="A map of the tools and concepts behind the work." description="Browse by engineering layer. The labels distinguish hands-on project use from familiarity and active exploration."/><div className="skill-intro"><div className="skill-count"><strong>{String(skills.length).padStart(2,'0')}</strong><span>TECHNOLOGIES & CONCEPTS<br/>IN THIS MAP</span></div><div className="skill-legend"><span><i className="legend-solid"/> Hands-on</span><span><i className="legend-outline"/> Familiar</span><span><i className="legend-dash"/> Exploring</span></div></div><div className="skill-controls"><label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search technologies or concepts…" aria-label="Search skills"/>{query&&<button onClick={()=>setQuery('')} aria-label="Clear search"><X size={15}/></button>}</label><div className="category-filters" aria-label="Filter skill categories">{categories.map(c=><button key={c} className={category===c?'filter-active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div></div><div className="skill-layout"><div className="skill-results" aria-live="polite"><div className="results-caption"><span>CAPABILITY INDEX</span><span>{filtered.length} RESULTS</span></div>{filtered.map((s,i)=><button className={`skill-row ${selected===s.name?'skill-selected':''}`} key={s.name} onClick={()=>setSelected(s.name)}><span className="skill-ordinal">{String(i+1).padStart(2,'0')}</span><span className="skill-name">{s.name}<small>{s.category}</small></span><span className={`level level-${s.level.toLowerCase().replace(' ','-')}`}>{s.level}</span><ArrowUpRight size={15} className="skill-arrow"/></button>)}{filtered.length===0&&<div className="empty-state"><Search size={21}/><b>No matching skills</b><span>Try another term or clear the category filter.</span><button onClick={()=>{setQuery('');setCategory('All')}}>Clear filters</button></div>}</div><aside className="skill-detail"><div className="detail-top"><span>TECHNICAL NOTE</span><span>{current?'SELECTED':'SELECT A SKILL'}</span></div>{current?<><div className="detail-symbol"><Braces size={24}/></div><h3>{current.name}</h3><div className="detail-category">{current.category} <span>·</span> {current.level}</div><p>{current.description}</p><div className="detail-divider"/><span className="mono-label">RELATED CONCEPTS</span><div className="related-list">{current.related.map(r=><span key={r}>{r}</span>)}</div>{current.project&&<><div className="detail-divider"/><span className="mono-label">RELATED PROJECT WORK</span><p className="project-related">{current.project}</p></>}</>:<div className="detail-placeholder"><Database size={24}/><p>Select a technology to inspect its role, related concepts, and relevant project context.</p><span>TIP / Search or filter the index</span></div>}<div className="detail-bottom"><span>ENGINEERING INDEX</span><span>02 / 07</span></div></aside></div><div className="relationship-note"><div className="relationship-label"><GitBranch size={17}/> EXAMPLE DEPENDENCY PATH</div><div className="relationship-flow"><span>FastAPI</span><ArrowRight/><span>Pydantic</span><ArrowRight/><span>SQLAlchemy</span><ArrowRight/><span>Alembic</span><ArrowRight/><span>PostgreSQL</span></div><p>A conceptual relationship, not a claim that every component appears in every project.</p></div></div></section>}

function Projects(){const [filter,setFilter]=useState('All');const shown=projects.filter(p=>filter==='All'||p.kind===filter);const projectFilters=['All',...projects.map(p=>p.kind)];return <section className="section-wrap projects-section" id="projects"><SectionHeading index="03" eyebrow="SELECTED PROJECTS" title="Engineering is best explained in context." description="A selection of application work and system explorations. Implementation status is stated plainly; architecture notes should be checked against each repository before publication."/><div className="project-toolbar"><span className="mono-label">CASE STUDIES / {String(shown.length).padStart(2,'0')}</span><label>FILTER PROJECTS <ChevronDown size={14}/><select value={filter} onChange={e=>setFilter(e.target.value)} aria-label="Filter projects">{projectFilters.map(f=><option key={f}>{f}</option>)}</select></label></div><div className="project-list">{shown.map(p=><article className="project-item" key={p.number}><div className="project-number">{p.number}<span> / 04</span></div><div className="project-main"><div className="project-titleline"><div><span className="project-kind">{p.kind}</span><h3>{p.name}</h3></div><span className="project-status"><i/> {p.status}</span></div><p className="project-summary">{p.summary}</p><div className="project-body"><div><span className="mono-label">PURPOSE</span><p>{p.problem}</p><span className="mono-label">ENGINEERING NOTES</span><ul>{p.details.map(d=><li key={d}>{d}</li>)}</ul></div><div className="project-architecture"><span className="mono-label">SYSTEM FLOW / OVERVIEW</span><div className="flow-stack">{p.architecture.map((a,i)=><div key={a} className="flow-step"><span>{String(i+1).padStart(2,'0')}</span><b>{a}</b>{i<p.architecture.length-1&&<i className="flow-connector"/>}</div>)}</div></div></div><div className="project-bottom"><div className="stack-list">{p.stack.map(s=><span key={s}>{s}</span>)}</div><p className="project-note">NOTE / {p.note}</p></div></div></article>)}</div><div className="project-disclaimer"><span>CONTENT INTEGRITY</span><p>Repository URLs, live demos, usage metrics, and unverified implementation claims are intentionally omitted until confirmed.</p></div></section>}

function Principles(){return <section className="principles-section"><div className="section-wrap"><SectionHeading index="04" eyebrow="ENGINEERING PRINCIPLES" title="Prefer explicit decisions over unnecessary complexity." description="Principles that guide how I approach a problem while continuing to develop my engineering practice."/><div className="principle-grid">{[{n:'01',t:'Clear responsibilities',d:'Give modules understandable boundaries and keep unrelated concerns apart.'},{n:'02',t:'Data integrity',d:'Treat validation, database constraints, and consistent data handling as first-class concerns.'},{n:'03',t:'Explicit interfaces',d:'Design APIs around predictable contracts and meaningful error responses.'},{n:'04',t:'Maintainable architecture',d:'Prefer code that can be understood and tested over abstraction without a clear purpose.'},{n:'05',t:'Appropriate infrastructure',d:'Use caches, queues, containers, and service separation when they solve a real problem.'},{n:'06',t:'Practical AI integration',d:'Consider retrieval quality, validation, external-service failure, and useful application workflows.'}].map(p=><article className="principle" key={p.n}><span>{p.n} / PRINCIPLE</span><h3>{p.t}</h3><p>{p.d}</p><ArrowUpRight size={16}/></article>)}</div></div></section>}

function Experience(){return <section className="section-wrap timeline-section" id="experience"><SectionHeading index="05" eyebrow="LEARNING & EXPERIENCE" title="Growing from application code toward systems thinking." description="A progression of technical focus, not a dated employment history. Each layer builds on practical implementation and continued learning."/><div className="timeline-list">{timeline.map((t,i)=><div className="timeline-row" key={t.step}><div className="timeline-step">{t.step}<span>{i===timeline.length-1?'NOW':'FOCUS'}</span></div><div className="timeline-content"><h3>{t.title}</h3><p>{t.text}</p></div><div className="timeline-mark"><span/></div></div>)}</div></section>}

function Contact() {
  const email = 'elnurbekziyatov8900@gmail.com';
  const github = 'https://github.com/elnurbekziyatov8900-create';
  const linkedin = 'https://www.linkedin.com/in/elnur-ziyatov-394b95419';
  const telegram = 'https://t.me/Valutrix';
  const phone = '+998773743212';

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-wrap">
        <div className="section-index">06 <span>/</span> CONTACT</div>
        <div className="contact-content">
          <div>
            <h2>Have a thoughtful<br/><em>technical problem?</em></h2>
            <p>I'm interested in useful software, strong engineering fundamentals, and opportunities to learn through real problems.</p>
          </div>
          <div className="contact-panel">
            <span className="mono-label">OPEN TO A CONVERSATION</span>
            <a className="contact-link" href={`mailto:${email}`}>
              {email}<ArrowUpRight size={17}/>
            </a>
            <a className="contact-link" href={telegram} target="_blank" rel="noreferrer">
              Telegram <ArrowUpRight size={17}/>
            </a>
            <a className="contact-link" href={github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={17}/>
            </a>
            <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={17}/>
            </a>
            <a className="contact-link" href={`tel:${phone}`}>
              {phone}<ArrowUpRight size={17}/>
            </a>
            <div className="contact-foot">
              <span><i/> DIRECT CONTACT</span>
              <span>EMAIL · TELEGRAM · PHONE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){return <footer className="site-footer"><a className="footer-brand" href="#overview">EZ<span>.</span></a><span>© {new Date().getFullYear()} Elnurbek Ziyotov</span><span>BUILT WITH INTENTION <span className="footer-dot">●</span></span><a href="#overview">Back to top ↑</a></footer>}

export default function App(){return <><Header/><main><Hero/><IdentityStrip/><About/><Engineering/><Projects/><Principles/><Experience/><Contact/></main><Footer/></>}