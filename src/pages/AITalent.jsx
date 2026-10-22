import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { usePolarity, useUI } from '../components/Layout'
import { AIChip, Arrow, CTABand, DemoButton, FAQ, PageHero, SectionHead } from '../components/Sections'
import { aiTalent } from '../data/site'

const { roles, stack, models, vetting, matching, faqs } = aiTalent
const roleAccents = ['is-blue', 'is-green', 'is-cyan']
const modelAccents = ['is-navy', 'is-blue', 'is-green', 'is-teal']

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

      <section className="section ait-roles" id="roles">
        <div className="container">
          <SectionHead center={false} eyebrow="Roles we place" title="Every role an AI team needs, from first model to production." cta={<p className="t-small t-muted ait-lead">Hiring a Head of AI or Data? <Link className="link" to="/services/executive-search">Executive search <Arrow style={{ width: 14, height: 14 }} /></Link></p>} />
          <div className="ait-role-grid">
            {roles.map(([t, d, icon, tags], i) => (
              <button type="button" className={`ait-role reveal ${roleAccents[(i + Math.floor(i / 3)) % 3]}`} key={t} onClick={openDemo}>
                <span className="ait-role-top"><span className="ait-role-ico"><Icon name={icon} /></span><span className="ait-role-num">{String(i + 1).padStart(2, '0')}</span></span>
                <h3 className="ait-role-title">{t}</h3>
                <p className="ait-role-desc">{d}</p>
                <span className="ait-role-tags">{tags.map(s => <span key={s}>{s}</span>)}</span>
                <span className="ait-role-more" aria-hidden="true">Request profiles <Arrow style={{ width: 16, height: 16 }} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--grey-50)' }}>
        <div className="container">
          <SectionHead center={false} eyebrow="Skills & stack" title="Fluent in the tools your team already uses." copy="Candidates are assessed on the frameworks and platforms in your stack, not on keywords in a résumé." />
          <div className="ait-stack">
            {stack.map(([g, skills, icon], i) => (
              <article className={`ait-stack-card reveal ${(i + Math.floor(i / 2)) % 2 ? 'is-green' : ''}`} key={g}>
                <div className="ait-stack-head"><span className="ait-stack-ico"><Icon name={icon} /></span><h3>{g}</h3><span className="ait-stack-count">{skills.length} skills</span></div>
                <ul className="ait-chips">{skills.map(s => <li key={s}>{s}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center={false} eyebrow="Engagement models" title="Choose how you engage AI talent." copy="Start with one engineer or a full team, and change the model as you grow." />
          <div className="ait-models">
            {models.map(([t, d, icon, to, label], i) => (
              <article className={`ait-model reveal ${modelAccents[i % modelAccents.length]}`} key={t}>
                <div className="ait-model-band"><span className="ait-model-ico"><Icon name={icon} /></span><b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b></div>
                <div className="ait-model-body">
                  <h3 className="t-h3">{t}</h3>
                  <p className="t-small t-muted">{d}</p>
                  <Link className="card-link" to={to}>{label} <Arrow style={{ width: 14, height: 14 }} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cyan-25)' }}>
        <div className="container">
          <SectionHead center={false} eyebrow="How vetting works" title="Assessed by practitioners, not just screened." copy="Every profile you see has passed a technical assessment and a review of real project work." />
          <ol className="ait-steps">
            {vetting.map(([n, t, d]) => (
              <li className="ait-step reveal" key={n}>
                <span className="ait-step-dot">{n}</span>
                <div className="ait-step-card">
                  <h3>{t}</h3>
                  <p className="t-small t-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
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
