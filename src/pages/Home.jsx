import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mesh, NeedArt, SpotArt, needAccents } from '../components/Art'
import { usePolarity } from '../components/Layout'
import { Arrow, DemoButton, LogoMarquee, StatsStair, FAQ, CTABand, SectionHead } from '../components/Sections'
import AIWorkflow from '../components/AIWorkflow'
import { needs, testimonials, services, homeServices, getService } from '../data/site'

const heroRoles = ['Software Engineer', 'Data Scientist', 'Finance Controller', 'HR Business Partner', 'Sales Team', 'Support Team']

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI(n => (n + 1) % heroRoles.length), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="rotator">
      <span className="sr-only">next hire</span>
      <span className="rotator-words" aria-hidden="true">
        {heroRoles.map((r, n) => <span key={r} className={n === i ? 'on' : n === (i - 1 + heroRoles.length) % heroRoles.length ? 'out' : ''}>{r}</span>)}
      </span>
    </span>
  )
}

function Hero() {
  return (
    <section className="home-hero">
      <Mesh />
      <div className="container home-hero-copy">
        <h1 className="t-h1">Hire your <RoleRotator /><span className="hero-line2">We’ll handle the rest.</span></h1>
        <p className="t-body-lg">AI-assisted hiring, payroll and compliance, with one accountable partner from your first hire to your hundredth.</p>
        <div className="actions">
          <DemoButton>Schedule a consultation</DemoButton>
          <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>See what we do</button>
        </div>
      </div>
    </section>
  )
}

// Keep the card count a multiple of four so the 4- and 2-column grids stay even.
const modelCards = [
  ...homeServices.map(getService).map(s => ({ key: s.slug, title: s.title, text: s.summary, to: `/services/${s.slug}`, art: <SpotArt icon={s.icon} accent={s.accent} /> })),
  ...needs.map(([t, d, , slug], i) => ({ key: slug, title: t, text: d, to: `/solutions#${slug}`, art: <NeedArt kind={slug} accent={needAccents[i]} /> })),
  { key: 'all', title: `All ${services.length} services`, text: 'Payroll, compliance, training, HR technology, COE setup and more.', to: '/services', cta: 'Browse services', art: <SpotArt icon="layers" accent="cyan" ai={false} /> },
]

function Models() {
  return (
    <section className="section" id="models">
      <div className="container">
        <SectionHead center={false} eyebrow="What we do" title="Advice, talent and payroll, from one partner." copy="Start with HR consulting or executive search, tap our ready pool of AI talent, or pick the engagement that fits how you scale. SKAPS runs the hiring, the payroll and the compliance." />
        <div className="model-grid">
          {modelCards.map(c => (
            <article className="model reveal" key={c.key}>
              <div className="model-art">{c.art}</div>
              <div className="model-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <Link className="card-link" to={c.to}>{c.cta || 'Learn more'} <Arrow style={{ width: 14, height: 14 }} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AIBlock() {
  return (
    <section className="section ai-block">
      <div className="container"><AIWorkflow /></div>
    </section>
  )
}

function Proof() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead center={false} title="What clients say." cta={<Link className="card-link" to="/clients">All client stories <Arrow style={{ width: 14, height: 14 }} /></Link>} />
        <div className="proof-row">
          {testimonials.slice(0, 3).map(([q, n, r]) => {
            const [role, org] = r.split(', ')
            return (
              <figure className="proof reveal" key={n}>
                <blockquote>“{q}”</blockquote>
                <figcaption>{n}<small>{role}{org ? ` · ${org}` : ''}</small></figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePolarity('default')
  return (
    <>
      <Hero />
      <LogoMarquee intro="Trusted by teams in technology, semiconductors, finance and services" />
      <Models />
      <AIBlock />
      <StatsStair />
      <Proof />
      <FAQ limit={4} />
      <CTABand title={<>Your next hire, <b>handled end to end.</b></>} />
    </>
  )
}
