import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { NeedArt, needAccents } from '../components/Art'
import { usePolarity } from '../components/Layout'
import { Arrow, PageHero, CloseLine, SectionHead, DemoButton } from '../components/Sections'
import { needs, benefits, useCases, advantages, pains } from '../data/site'

const needDetail = {
  'contract-staffing': ['Sourced, screened and onboarded by SKAPS', 'Payroll, documentation and compliance handled for you', 'Scale up or down as your needs change'],
  'temporary-staffing': ['Role-ready professionals within days', 'Festive, year-end and launch spikes covered', 'Released when the peak is over'],
  'dedicated-teams': ['A dedicated on-site or remote HR partner', 'Engineering, product or GCC teams that work only for you', 'Payroll and compliance run by SKAPS'],
  'payroll-outsourcing': ['Accurate, timely and fully compliant processing', 'Reduced administrative overhead and statutory risk', 'Full and final settlements and year-end tax handled'],
}

export default function Solutions() {
  usePolarity('default')
  return (
    <>
      <PageHero eyebrow="Tailored solutions" title="Workforce Solutions Designed Around Your Business Needs." copy="Choose the engagement model that fits how your organization scales, from a single contractor to fully outsourced payroll." points={['Contract, temporary and dedicated teams', 'Payroll outsourcing with compliance built in', 'AI checks built into every model']} />

      <section className="section">
        <div className="container">
          <SectionHead center={false} eyebrow="By engagement model" title="Four ways to build and pay your workforce." />
          <div className="grid grid-2">
            {needs.map(([t, d, icon, slug], i) => (
              <article className="card reveal need-card" id={slug} key={slug}>
                <div className="need-card-body">
                  <span className="ico-box"><Icon name={icon} /></span>
                  <h3 className="t-h3" style={{ fontSize: 24 }}>{t}</h3>
                  <p className="t-muted">{d}</p>
                  <ul className="checklist">{needDetail[slug].map(p => <li key={p}><Icon name="check" />{p}</li>)}</ul>
                  <DemoButton className="btn btn-secondary btn-sm">Discuss {t.toLowerCase()}</DemoButton>
                </div>
                <div className={`media-panel need-card-art ${needAccents[i]}`}><NeedArt kind={slug} accent={needAccents[i]} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section uc-section">
        <div className="container">
          <SectionHead
            center={false}
            className="uc-head"
            eyebrow="By use case"
            title="Whatever you are trying to do, there is a SKAPS solution for it."
            cta={<div className="uc-aside reveal"><p>Not sure where to start? Tell us the outcome and we will map the right mix.</p><DemoButton className="btn btn-secondary btn-sm">Get a recommendation</DemoButton></div>}
          />
          <div className="uc-grid">
            {useCases.map(([t, d, icon, to], i) => (
              <Link to={to} className={`uc-card reveal ${i % 2 ? 'is-green' : 'is-blue'}`} key={t}>
                <span className="uc-ico"><Icon name={icon} /></span>
                <h3 className="uc-title">{t}</h3>
                <p className="uc-desc">{d}</p>
                <span className="uc-more" aria-hidden="true">Explore <Arrow style={{ width: 14, height: 14 }} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why SKAPS" title="The Smart Way to Build a Flexible Workforce." copy="A practical model that keeps your teams agile, cost-efficient and compliant." />
          <div className="grid grid-4">
            {benefits.map(([t, icon, d]) => <div className="card reveal" key={t} style={{ display: 'grid', gap: 12 }}><span className="ico-box"><Icon name={icon} /></span><h3 className="t-h3">{t}</h3><p className="t-small t-muted">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section pain-section" style={{ background: 'var(--cyan-50)' }}>
        <div className="container pa-grid">
          <article className="card reveal pa-pains"><h3 className="t-h3">Common HR Pain Points</h3><ul className="pa-list">{pains.map(p => <li key={p}><span className="ico-box pain"><Icon name="alert" /></span>{p}</li>)}</ul></article>
          <article className="card card-dark reveal pa-adv"><h3 className="t-h3">The SKAPS Advantage</h3><ul className="adv-grid">{advantages.map(([t, d]) => <li key={t}><span className="ico-box"><Icon name="check" /></span><div><strong>{t}</strong><p className="t-small">{d}</p></div></li>)}</ul></article>
        </div>
      </section>

      <CloseLine>Know which model you need?</CloseLine>
    </>
  )
}
