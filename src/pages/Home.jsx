import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mesh, SpotArt } from '../components/Art'
import Icon from '../components/Icon'
import { usePolarity } from '../components/Layout'
import { Arrow, DemoButton, LogoMarquee, StatsStair, FAQ, CTABand, SectionHead, TestimonialMarquee } from '../components/Sections'
import AIWorkflow from '../components/AIWorkflow'
import { testimonials, services, serviceGroups, homeServices, getService } from '../data/site'

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

const featured = homeServices.map(getService)
const moreGroups = serviceGroups.map(g => [g, services.filter(s => s.group === g && !homeServices.includes(s.slug))]).filter(([, list]) => list.length)

function Models() {
  return (
    <section className="section" id="models">
      <div className="container">
        <SectionHead center={false} eyebrow="What we do" title="Advice, talent and payroll, from one partner." copy={`${services.length} services across HR advisory, talent, payroll and compliance. Start with HR consulting or executive search, tap our ready pool of AI talent, or bring SKAPS in for the rest.`} />
        <div className="model-grid model-grid-3">
          {featured.map(s => (
            <article className="model reveal" key={s.slug}>
              <div className="model-art"><SpotArt icon={s.icon} accent={s.accent} /></div>
              <div className="model-body">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <Link className="card-link" to={`/services/${s.slug}`}>Learn more <Arrow style={{ width: 14, height: 14 }} /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="svc-groups">
          {moreGroups.map(([g, list]) => (
            <div className="svc-group reveal" key={g}>
              <span className="eyebrow muted">{g}</span>
              <ul>
                {list.map(s => (
                  <li key={s.slug}>
                    <Link className={`svc-row acc-${s.accent}`} to={`/services/${s.slug}`}>
                      <span className="svc-row-ico"><Icon name={s.icon} /></span>
                      <span className="svc-row-text"><strong>{s.title}</strong><small>{s.summary}</small></span>
                      <Arrow className="arrow svc-row-arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="svc-foot t-small t-muted">Need flexible capacity instead? Compare contract, temporary, dedicated-team and payroll-outsourcing models. <Link className="link" to="/solutions">Engagement models <Arrow style={{ width: 14, height: 14 }} /></Link></p>
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
      </div>
      <TestimonialMarquee items={testimonials} />
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
