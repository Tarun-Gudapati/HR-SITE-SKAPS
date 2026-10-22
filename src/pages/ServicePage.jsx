import { Link, useParams, Navigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { Mesh, SpotArt } from '../components/Art'
import { usePolarity } from '../components/Layout'
import { Arrow, DemoButton, CloseLine, SectionHead, MoreServices } from '../components/Sections'
import { getService, stats, complianceBadges } from '../data/site'

const featureAccents = ['blue', 'lime', 'cyan', 'purple']
const featureIcons = ['target', 'people', 'shield', 'chart']

// [label, pattern] — the label is hidden when a service point already says the same thing.
const engagement = [
  ['Dedicated personal manager', /personal manager/i],
  ['Onboarding with a SKAPS specialist'],
  ['Compliance protections built in'],
  ['Month-to-month flexibility'],
  ['Secure employee self-service included', /self-service|payslip/i],
]

function partnerTitle(s) {
  const name = s.title.replace(' (India)', '').split(' ').map(w => /^[A-Z]{2,}$/.test(w) ? w : w.toLowerCase()).join(' ')
  return s.group === 'Payroll & Compliance'
    ? `${name[0].toUpperCase()}${name.slice(1)}, backed by one accountable team.`
    : `One partner for ${name}, compliance and payroll.`
}
const statementFor = {
  'executive-search': ['Leaders who deliver, not just résumés.', 'deliver'],
  'recruitment-process': ['Hire in days, not months.', 'in days'],
  'staffing-solutions': ['Scale your team, your way.', 'your way'],
  'interview-support': ['Better interviews, better hires.', 'better hires'],
  'hr-consulting': ['HR strategy that moves the business.', 'moves'],
  'payroll-management-india': ['Payroll, one partner.', 'one partner'],
  'us-payroll-services': ['US payroll, handled end to end.', 'end to end'],
  'training-development': ['Skills that stay with your team.', 'stay'],
  'compliance-legal': ['Compliance by design, not by chance.', 'by design'],
  'hr-technology': ['Built in-house, not stitched together.', 'in-house'],
  'global-workforce': ['Enter India in days, not months.', 'in days'],
  'coe-coworking': ['Your Center of Excellence, ready to run.', 'ready'],
}

function Highlight({ text, word }) {
  const i = text.indexOf(word)
  if (i < 0) return text
  return <>{text.slice(0, i)}<span className="hl">{word}</span>{text.slice(i + word.length)}</>
}

export default function ServicePage() {
  const { slug } = useParams()
  const s = getService(slug)
  usePolarity('default')
  if (!s) return <Navigate to="/services" replace />
  const [statement, word] = statementFor[s.slug] || ['Built for growing businesses.', 'growing']
  const includes = engagement.filter(([, overlap]) => !overlap || !s.points.some(p => overlap.test(p))).map(([label]) => label)
  const badges = complianceBadges.filter(b => !s.points.some(p => p.toLowerCase().includes(b.toLowerCase().split(' ').slice(-2).join(' '))))

  return (
    <>
      <section className="page-hero">
        <Mesh />
        <div className="container page-hero-grid">
          <div className="page-hero-copy">
            <span className="eyebrow muted">{s.group}</span>
            <h1 className="t-h1">{s.title}.</h1>
            <p className="t-body-lg">{s.summary}</p>
            <div className="actions"><DemoButton /><Link className="btn btn-secondary" to="/contact">Contact our team</Link></div>
          </div>
          <div className="page-hero-aside reveal">
            <div className="glance-card">
              <span className="eyebrow muted">Every engagement includes</span>
              <ul className="checklist">{includes.map(p => <li key={p}><Icon name="check" />{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead title={<Highlight text={statement} word={word} />} copy={s.detail} />
          <div className="feature-grid">
            {s.points.map((p, i) => (
              <article className="feature-card reveal" key={p}>
                <div className={`media-panel ${featureAccents[i % 4]}`}><SpotArt icon={featureIcons[i % 4]} accent={featureAccents[i % 4]} style={{ maxWidth: 180 }} /></div>
                <span className="eyebrow muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="t-h3">{p}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--grey-50)' }}>
        <div className="container">
          <SectionHead title={partnerTitle(s)} copy="SKAPS combines deep local expertise with a structured, confidential process so your team can move quickly and confidently." />
          <ul className="checklist inline reveal" style={{ marginBottom: 48 }}>{badges.map(b => <li key={b}><Icon name="check" />{b}</li>)}</ul>
          <div className="stat-row reveal">{stats.slice(0, 4).map(([n, l]) => <div key={l}><strong className="t-stat">{n}</strong><p>{l}</p></div>)}</div>
          <div className="t-center" style={{ marginTop: 40 }}><DemoButton className="btn btn-secondary" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center={false} title={`What companies use ${s.title.replace(' (India)', '')} for`} copy="The situations where teams most often bring SKAPS in." />
          <div className="usecase-grid">
            {s.uses.map(([t, d, icon]) => <div className="usecase reveal" key={t}><span className="ico-box"><Icon name={icon} /></span><p><b>{t}:</b> {d}</p></div>)}
            <div className="usecase reveal"><span className="ico-box"><Icon name="ai" /></span><p><b>{s.ai[0]}:</b> {s.ai[1]}</p></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cyan-25)' }}>
        <div className="container pricing-teaser">
          <div>
            <h2 className="t-h2 reveal">Transparent engagement, no hidden fees.</h2>
            <p className="t-muted reveal" style={{ marginTop: 16, maxWidth: 440 }}>SKAPS scopes everything upfront, so the engagement you are quoted is the engagement you get. Choose the model that fits how your organization scales.</p>
          </div>
          <div className={`price-card ${s.accent === 'blue' || s.accent === 'cyan' ? 'blue' : 'lime'} reveal`}>
            <h3 className="t-h3">{s.title}</h3>
            <div className="inner"><span className="t-small t-muted">Engagement</span><strong>Custom</strong><span className="t-small t-muted">scoped to your headcount and regions</span></div>
            <DemoButton className={s.accent === 'blue' || s.accent === 'cyan' ? 'btn btn-inverse' : 'btn'}>Get a quote</DemoButton>
          </div>
        </div>
      </section>

      <MoreServices exclude={s.slug} />
      <CloseLine>Ready to talk about {s.title.replace(/\.$/, '')}?</CloseLine>
    </>
  )
}
