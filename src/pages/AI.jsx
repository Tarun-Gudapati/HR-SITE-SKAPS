import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { HubDiagram } from '../components/Art'
import { usePolarity, useUI } from '../components/Layout'
import { Arrow } from '../components/Sections'
import { aiPillars, aiStats } from '../data/site'

// Dark "developer" theme page — mirrors remote.com/remote-mcp ("Build on Remote").
const surfaces = [
  ['01', 'Talent', 'for hiring faster', 'Connect AI to your hiring pipeline', 'Your open roles are matched against SKAPS talent networks, and a consultant pre-qualifies every profile on the shortlist.', ['Rank candidates against role requirements', 'Surface passive talent from our networks', 'Draft job descriptions and interview plans']],
  ['02', 'Payroll', 'for accurate pay runs', 'Catch anomalies before a cycle closes', 'Exceptions are routed to your dedicated payroll manager with a recommended fix, so they are resolved before anyone is paid.', ['Detect outliers in gross-to-net calculations', 'Flag duplicate or missing attendance records', 'Reconcile reimbursements and advances']],
  ['03', 'Compliance', 'for peace of mind', 'Monitor statutory change, everywhere you operate', 'New notifications become clear actions for your team, each with an owner and a deadline.', ['Track filing deadlines and legislative updates', 'Answer compliance questions in minutes', 'Generate audit-ready documentation']],
]

export default function AI() {
  usePolarity('inverse')
  const { openDemo } = useUI()
  return (
    <div className="dev">
      <section className="dev-hero">
        <div className="container">
          <span className="eyebrow" style={{ fontFamily: 'var(--mono)', color: 'var(--dev-cyan)' }}>~/skaps/intelligence</span>
          <h1 style={{ marginTop: 16 }}>Workforce intelligence.<br /><em>Powered by AI.</em><span className="cursor" /></h1>
          <div className="terminal reveal">
            <div className="terminal-bar"><span><span className="dot" />[ LIVE ] [ SKAPS INTELLIGENCE ]</span><span>○ ○ ○</span></div>
            <div className="terminal-body">
              <div style={{ display: 'grid', gap: 20 }}>
                <p>Whether you are hiring your first team in India, running payroll across three countries or keeping up with changing labor law, SKAPS gives you the right intelligence for the job. Use <b>Talent</b> for faster shortlists, <b>Payroll</b> for anomaly-free pay runs, and <b>Compliance</b> to stay ahead of statutory change.</p>
                <div className="actions"><button type="button" className="btn btn-dev" onClick={openDemo}>▣ get started</button><Link className="btn btn-dev-ghost" to="/about#ai">read our story ↗</Link></div>
              </div>
              <HubDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dev-two" style={{ alignItems: 'end', marginBottom: 40 }}>
            <h2 className="t-h2" style={{ fontWeight: 400, letterSpacing: '-.03em' }}>Choose the surface that fits <span style={{ color: 'var(--dev-cyan)', fontStyle: 'italic' }}>your work</span></h2>
            <p className="t-muted">Everything SKAPS does is available through the intelligence layer that works best for how your team operates.</p>
          </div>
          <div className="surfaces">
            {surfaces.map(([n, name, tag, title, body, cases]) => (
              <article className="surface reveal" key={n}>
                <span className="num">{n}</span>
                <div><h3>{name}<span style={{ color: 'var(--on-dark-3)', fontWeight: 400 }}> | {tag}</span></h3><p style={{ marginTop: 10, color: '#fff', fontSize: 18 }}>{title}</p></div>
                <div><p className="t-muted">{body}</p><span className="label" style={{ marginTop: 16 }}>COMMON USE CASES</span><ul>{cases.map(c => <li key={c}>{c}</li>)}</ul></div>
              </article>
            ))}
          </div>
          <h2 className="t-display t-center" style={{ fontWeight: 400, marginTop: 96 }}>Better <span style={{ color: 'var(--dev-cyan)', fontStyle: 'italic' }}>together</span></h2>
          <p className="t-center t-muted measure" style={{ margin: '20px auto 0' }}>Talent, Payroll and Compliance intelligence are designed to work together. Most SKAPS clients use all three.</p>
        </div>
      </section>

      <section className="section dev-blue-block">
        <div className="container">
          <span className="eyebrow" style={{ fontFamily: 'var(--mono)', color: 'rgba(255,255,255,.7)' }}>HOW IT HELPS</span>
          <h2 className="t-h2" style={{ marginTop: 12, marginBottom: 40 }}>Six ways SKAPS Intelligence works for you</h2>
          <div className="dev-three">
            {aiPillars.map(([t, d, icon], i) => <div className="dev-feat" key={t}><div className="dev-feat-head"><span className="dev-feat-ico"><Icon name={icon} /></span><span className="num">0{i + 1}</span></div><h3 className="t-h3">{t}</h3><p>{d}</p></div>)}
          </div>
          <div className="stat-row" style={{ marginTop: 64 }}>{aiStats.map(([n, l]) => <div key={l}><strong className="t-stat">{n}</strong><p style={{ color: 'rgba(255,255,255,.75)' }}>{l}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container dev-two wide" style={{ gap: 48 }}>
          <h2 className="t-h2" style={{ fontWeight: 400, letterSpacing: '-.03em' }}>Using AI at SKAPS is as <span style={{ color: 'var(--dev-cyan)', fontStyle: 'italic' }}>secure</span> as working with us has always been.</h2>
          <div className="secure-grid">
            {[['confidentiality', 'Strict employee-data confidentiality', 'Your employee and payroll data is used only to deliver your engagement — never to train third-party AI models.'], ['governed access', 'Governed, role-based access', 'Employees see their own records; your admins see your organization. Nothing more.'], ['audit-ready', 'Audit-ready by design', 'Every automated action is logged with clear documentation, so audits and reviews are straightforward.']].map(([l, t, d]) => <div className="secure-card reveal" key={t}><span className="label">{l}</span><strong>{t}</strong><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
        <div className="container t-center" style={{ display: 'grid', gap: 20, justifyItems: 'center' }}>
          <h2 className="t-h2" style={{ fontWeight: 400 }}>Ready to connect? It takes one conversation.</h2>
          <p className="t-muted">Schedule a consultation and see how SKAPS Intelligence fits your hiring, payroll and compliance.</p>
          <div className="actions"><button type="button" className="btn btn-dev" onClick={openDemo}>▣ get started</button><Link className="btn btn-dev-ghost" to="/services/ai-analytics-talent">hire ai talent ↗</Link><Link className="btn btn-dev-ghost" to="/services">see all services ↗</Link></div>
        </div>
      </section>
    </div>
  )
}
