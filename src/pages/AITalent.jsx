import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { usePolarity, useUI } from '../components/Layout'
import { AIChip, Arrow, CTABand, DemoButton, FAQ, PageHero, SectionHead } from '../components/Sections'
import { aiTalent } from '../data/site'

const { roles, stack, models, vetting, matching, faqs } = aiTalent

// Illustrative rows for the hero "sample shortlist" card: [role, stack, status, status style]
const sample = [
  ['Senior ML Engineer', 'PyTorch · AWS SageMaker', 'Interview-ready', ''],
  ['GenAI Engineer', 'LangChain · RAG · Azure OpenAI', 'Shortlisted', 'blue'],
  ['MLOps Engineer', 'Kubernetes · MLflow', 'Available', ''],
  ['Analytics Engineer', 'dbt · Snowflake · Power BI', 'Available', 'grey'],
]

function Shortlist() {
  return (
    <div className="media-panel purple ait-shortlist">
      <div className="mock">
        <span className="ait-shortlist-head"><AIChip>AI-ranked, consultant-reviewed</AIChip></span>
        {sample.map(([r, s, p, c], i) => (
          <div className="mock-row" key={r}>
            <span className={`avatar${i % 3 ? ` a${(i % 3) + 1}` : ''}`} />
            <span><strong>{r}</strong><span className="sub" style={{ display: 'block' }}>{s}</span></span>
            <span className={`pill ${c}`}>{p}</span>
          </div>
        ))}
        <span className="ait-shortlist-note">Illustrative profiles</span>
      </div>
    </div>
  )
}

export default function AITalent() {
  usePolarity('default')
  const { openDemo } = useUI()
  return (
    <>
      <PageHero eyebrow="AI & Analytics Talent" title="Hire the AI team your roadmap needs." copy="SKAPS keeps a ready, pre-vetted pool of ML, GenAI, MLOps, data and analytics professionals. Tell us the problem you are solving and meet interview-ready profiles in days, as permanent hires, contractors or a dedicated AI pod." aside={<Shortlist />}>
        <DemoButton>Hire AI talent</DemoButton>
        <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>See the roles</button>
      </PageHero>

      <section className="section" id="roles">
        <div className="container">
          <SectionHead center={false} eyebrow="Roles we place" title="Every role an AI team needs, from first model to production." cta={<p className="t-small t-muted ait-lead">Hiring a Head of AI or Data? <Link className="link" to="/services/executive-search">Executive search <Arrow style={{ width: 14, height: 14 }} /></Link></p>} />
          <div className="uc-grid">
            {roles.map(([t, d, icon], i) => (
              <button type="button" className={`uc-card ait-role reveal ${i % 2 ? 'is-green' : 'is-blue'}`} key={t} onClick={openDemo}>
                <span className="uc-ico"><Icon name={icon} /></span>
                <h3 className="uc-title">{t}</h3>
                <p className="uc-desc">{d}</p>
                <span className="uc-more" aria-hidden="true">Request profiles <Arrow style={{ width: 14, height: 14 }} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--grey-50)' }}>
        <div className="container">
          <SectionHead center={false} eyebrow="Skills & stack" title="Fluent in the tools your team already uses." copy="Candidates are assessed on the frameworks and platforms in your stack, not on keywords in a résumé." />
          <div className="grid grid-2">
            {stack.map(([g, skills]) => (
              <article className="card reveal" key={g}>
                <span className="eyebrow muted">{g}</span>
                <ul className="ait-chips">{skills.map(s => <li className="tag" key={s}>{s}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center={false} eyebrow="Engagement models" title="Choose how you engage AI talent." copy="Start with one engineer or a full team, and change the model as you grow." />
          <div className="grid grid-4">
            {models.map(([t, d, icon, to, label], i) => (
              <article className="card reveal ait-model" key={t}>
                <span className="eyebrow muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="ico-box"><Icon name={icon} /></span>
                <h3 className="t-h3">{t}</h3>
                <p className="t-small t-muted">{d}</p>
                <Link className="card-link" to={to}>{label} <Arrow style={{ width: 14, height: 14 }} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cyan-25)' }}>
        <div className="container">
          <SectionHead center={false} eyebrow="How vetting works" title="Assessed by practitioners, not just screened." copy="Every profile you see has passed a technical assessment and a review of real project work." />
          <div className="steps">
            {vetting.map(([n, t, d]) => (
              <article className="step-card reveal" key={n}>
                <b className="step-num">{n}</b>
                <h3 className="t-h3">{t}</h3>
                <p className="t-small t-muted">{d}</p>
              </article>
            ))}
          </div>
          <p className="t-small t-muted ait-lead" style={{ marginTop: 24 }}>Want to run the interviews with us? <Link className="link" to="/services/interview-support">Interview support <Arrow style={{ width: 14, height: 14 }} /></Link></p>
        </div>
      </section>

      <section className="section ai-block">
        <div className="container ai-grid">
          <div>
            <AIChip>SKAPS Intelligence</AIChip>
            <h2 className="t-h2" style={{ color: '#fff', marginTop: 16 }}>We use AI to find your AI team.</h2>
            <p className="t-body-lg" style={{ color: 'var(--on-dark-2)', marginTop: 16, maxWidth: 460 }}>Our AI layer does the first pass. People who know AI hiring make the call.</p>
            <div className="actions" style={{ marginTop: 28 }}><Link className="btn btn-inverse" to="/ai">See SKAPS Intelligence <Arrow /></Link></div>
          </div>
          <ul className="ai-pillars">
            {matching.map(([t, d, icon]) => <li className="ai-pillar reveal" key={t}><span className="ico-box"><Icon name={icon} /></span><div><strong>{t}</strong><p className="t-small">{d}</p></div></li>)}
          </ul>
        </div>
      </section>

      <FAQ items={faqs} title="AI hiring, answered." />
      <CTABand title={<>Ready to meet <b>your next AI hire?</b></>} primary="Hire AI talent" />
    </>
  )
}
