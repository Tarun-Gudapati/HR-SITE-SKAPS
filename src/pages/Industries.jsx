import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { usePolarity } from '../components/Layout'
import { PageHero, CloseLine, SectionHead, Arrow } from '../components/Sections'
import { industries, industryDetails, clientLogos, getService } from '../data/site'

const themes = ['navy', 'blue', 'green', 'teal']
const theme = i => `is-${themes[i % themes.length]}`
const logoSrc = Object.fromEntries(clientLogos.map(([src, name]) => [name, src]))
const heroPoints = ['Industry-specific talent networks', 'Compliance tailored to each sector', 'AI-assisted matching for specialist roles']

function SectorBoard() {
  return (
    <div className="ind-board">
      <div className="ind-board-head"><b>{industries.length}</b><span>sectors,<br />one accountable partner</span></div>
      <ul className="ind-board-grid">
        {industries.map(([t, icon, slug], i) => <li key={slug}><Link className={`ind-board-tile ${theme(i)}`} to={`/industries#${slug}`} title={t}><Icon name={icon} /><span>{industryDetails[slug]?.[0] || t}</span></Link></li>)}
      </ul>
      <ul className="ind-board-points">{heroPoints.map(p => <li key={p}><Icon name="check" />{p}</li>)}</ul>
    </div>
  )
}

export default function Industries() {
  usePolarity('default')
  return (
    <>
      <PageHero eyebrow="Industries" title="Supporting Workforce Growth Across Multiple Industries." copy="Flexible expertise for organizations at different stages of growth — from AI-first startups to semiconductor leaders and financial institutions." aside={<SectorBoard />} />
      <section className="section ind-section">
        <div className="container">
          <SectionHead center={false} title="Find your industry." copy="Each card shows the roles we hire, the engagements clients use most and the service to start with." />
          <div className="ind-grid">
            {industries.map(([t, icon, slug, d], i) => {
              const [, roles = [], models = [], lead, clients = []] = industryDetails[slug] || []
              const s = getService(lead)
              return (
                <Link className={`ind-card reveal ${theme(i)}`} id={slug} key={slug} to={s ? `/services/${s.slug}` : '/contact'}>
                  <div className="ind-visual" aria-hidden="true">
                    <Icon name={icon} className="ind-motif" />
                    <span className="ind-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="ind-go"><Icon name="arrow" /></span>
                    <span className="ind-tile"><Icon name={icon} /></span>
                  </div>
                  <div className="ind-body">
                    <h3 className="ind-title">{t}</h3>
                    <p className="ind-desc">{d}</p>
                    {roles.length > 0 && <div className="ind-fact"><span className="ind-label">Roles we hire</span><ul className="ind-chips">{roles.map(r => <li key={r}>{r}</li>)}</ul></div>}
                    {models.length > 0 && <div className="ind-fact"><span className="ind-label">Typical engagements</span><ul className="ind-models">{models.map(m => <li key={m}><Icon name="check" />{m}</li>)}</ul></div>}
                    {clients.some(n => logoSrc[n]) && <div className="ind-fact"><span className="ind-label">Clients include</span><ul className="ind-logos">{clients.filter(n => logoSrc[n]).map(n => <li key={n}><img src={logoSrc[n]} alt={n} loading="lazy" /></li>)}</ul></div>}
                    <span className="ind-more">{s ? `Explore ${s.title}` : 'Talk to SKAPS'} <Arrow /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section-sm ind-clients">
        <div className="container">
          <div className="ind-clients-head">
            <span className="eyebrow muted">Trusted across sectors</span>
            <h2 className="t-h3">Organizations across technology, semiconductors, finance and services build their teams with SKAPS.</h2>
          </div>
          <ul className="ind-logo-grid">{clientLogos.map(([src, name]) => <li className="ind-logo reveal" key={name}><img src={src} alt={name} loading="lazy" /></li>)}</ul>
        </div>
      </section>
      <CloseLine>Work in an industry we should know about?</CloseLine>
    </>
  )
}
