import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { Crystal } from '../components/Art'
import LeadForm from '../components/LeadForm'
import { usePolarity } from '../components/Layout'
import { Arrow, PageHero, CloseLine, FAQ, SectionHead, DemoButton, QuoteCard } from '../components/Sections'
import { complianceItems, complianceBadges, testimonials, clientLogos, faqs, stats, PHONES, EMAIL, ADDRESS, MAP_URL, steps } from '../data/site'

export function HowItWorks() {
  usePolarity('default')
  return (
    <>
      <PageHero center eyebrow="How it works" title="A Structured Approach to Workforce Management." copy="A focused process keeps every engagement transparent, efficient and aligned." />
      <section className="section" style={{ background: 'var(--grey-50)' }}>
        <div className="container">
          <SectionHead title="Five steps from first conversation to ongoing support." />
          <div className="grid grid-2">
            {steps.map(([n, t, d]) => (
              <article className="card reveal" key={n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20, alignItems: 'start' }}>
                <b className="step-num" style={{ fontSize: 44, color: 'var(--purple-600)', letterSpacing: '-.03em', lineHeight: 1 }}>{n}</b>
                <div style={{ display: 'grid', gap: 8 }}><h3 className="t-h3">{t}</h3><p className="t-small t-muted">{d}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CloseLine>Want to start with a conversation?</CloseLine>
    </>
  )
}

export function Compliance() {
  usePolarity('default')
  return (
    <>
      <PageHero eyebrow="Built on confidence" title="Reliable Compliance for a Secure Workforce." copy="Managing workforce compliance is essential for protecting both organizations and employees. SKAPS HR Solutions ensures that all workforce operations follow the latest labor regulations and statutory requirements. Our dedicated compliance expertise helps businesses operate confidently while reducing legal risks and administrative complexity." points={complianceItems}>
        <DemoButton>Talk to a specialist</DemoButton>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead center={false} title="Everything compliance covers at SKAPS." cta={<Link className="card-link" to="/services/compliance-legal">Compliance & Legal service <Arrow style={{ width: 14, height: 14 }} /></Link>} />
          <div className="usecase-grid">
            {['Comprehensive compliance audit', 'Detailed strengths-and-gaps report', 'Clear and actionable improvement plan', 'Ongoing monthly compliance management', 'Proactive support and legislative updates', 'Compliance watchtower powered by SKAPS Intelligence'].map((p, i) => <div className="usecase reveal" key={p}><span className="ico-box"><Icon name={['shield', 'doc', 'chart', 'clock', 'alert', 'ai'][i]} /></span><p>{p}</p></div>)}
          </div>
        </div>
      </section>
      <CloseLine>Need a compliance review?</CloseLine>
    </>
  )
}

export function Clients() {
  usePolarity('default')
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What Our Clients Say." copy="Trusted By Organizations Managing Modern And Distributed Workforces Across Multiple Industries." points={stats.slice(0, 3).map(([n, l]) => `${n} ${l.toLowerCase()}`)} />
      <section className="section" id="logos">
        <div className="container">
          <SectionHead center={false} title="Organizations we support." />
          <div className="grid grid-4">{clientLogos.map(([src, name]) => <div className="card reveal" key={name} style={{ display: 'grid', placeItems: 'center', minHeight: 110 }}><img src={src} alt={name} style={{ maxHeight: 44, maxWidth: 150, objectFit: 'contain' }} loading="lazy" /></div>)}</div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--cyan-50)' }}>
        <div className="container">
          <SectionHead center={false} title="Client stories." />
          <div className="grid grid-3">
            {testimonials.map(t => <QuoteCard t={t} key={t[1]} showMetric className="reveal" />)}
          </div>
        </div>
      </section>
      <CloseLine>Want a reference from a team like yours?</CloseLine>
    </>
  )
}

export function FAQPage() {
  usePolarity('default')
  return (
    <>
      <PageHero center eyebrow="FAQ" title="Common Questions About Our HR Services." copy="Everything you need to know about SKAPS services, engagement models and compliance." />
      <FAQ items={faqs} title="Questions we actually get asked." />
    </>
  )
}

export function Contact() {
  usePolarity('default')
  return (
    <>
      <section className="section-sm" style={{ paddingTop: 10 }}>
        <div className="container-wide">
          <div className="contact-card reveal">
            <h1 className="t-h1-center">Let’s Start the Conversation.</h1>
            <p className="t-body-lg measure-sm">Whether you are looking to streamline payroll management, expand your workforce, or strengthen compliance operations, our team is ready to support your business with reliable workforce solutions.</p>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container contact-tiles">
          <div className="contact-tile reveal">
            <span className="ico-box"><Icon name="phone" /></span>
            <h2 className="t-h3" style={{ fontSize: 22 }}>Talk to Sales</h2>
            <strong>Book your tailored consultation</strong>
            <ol><li>Step 1: Fill in your details and we will call you back.</li><li>Step 2: Join a personalized 30-minute consultation with a SKAPS expert.</li><li>Step 3: Get answers. Understand engagement models and pricing. No obligation.</li></ol>
            <button type="button" className="link" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Let’s talk <Arrow style={{ width: 14, height: 14 }} /></button>
          </div>
          <div className="contact-tile reveal">
            <span className="ico-box"><Icon name="mail" /></span>
            <h2 className="t-h3" style={{ fontSize: 22 }}>Reach us directly</h2>
            <strong>We’ve got you covered. Anytime, anywhere.</strong>
            <div className="details" style={{ textAlign: 'left', marginTop: 8 }}>
              {PHONES.map(p => <a key={p.tel} href={`tel:${p.tel}`}><Icon name="phone" /><span><small>{p.label} phone</small>{p.display}</span></a>)}
              <a href={`mailto:${EMAIL}`}><Icon name="mail" /><span><small>Email</small>{EMAIL}</span></a>
              <div><Icon name="pin" /><span><small>Office location</small>{ADDRESS}<a className="map-link" href={MAP_URL} target="_blank" rel="noopener noreferrer"><Icon name="map" />View on Google Maps<Arrow style={{ width: 14, height: 14 }} /></a></span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="form" style={{ background: 'var(--grey-50)' }}>
        <div className="container contact-grid">
          <div>
            <span className="eyebrow muted">Let’s work together</span>
            <h2 className="t-h2 reveal" style={{ marginTop: 12 }}>Tell us about your requirements.</h2>
            <p className="t-muted reveal" style={{ marginTop: 16, maxWidth: 440 }}>Share a few details and a SKAPS specialist will get back to you within one business day.</p>
            <ul className="checklist reveal" style={{ marginTop: 24 }}>{complianceBadges.map(b => <li key={b}><Icon name="check" />{b}</li>)}</ul>
          </div>
          <div className="reveal"><LeadForm /></div>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  usePolarity('default')
  return (
    <section className="section"><div className="container t-center" style={{ display: 'grid', gap: 20, justifyItems: 'center' }}><Crystal accent="purple" style={{ width: 160, height: 160 }} /><h1 className="t-h1-center">Page not found.</h1><p className="t-muted">The page you are looking for does not exist or has moved.</p><Link className="btn" to="/">Back to home <Arrow /></Link></div></section>
  )
}
