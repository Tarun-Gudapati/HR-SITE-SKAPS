import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { Crystal, Iso } from './Art'
import { menus, topLinks } from '../data/nav'
import { BRAND, NOTICE, PHONES } from '../data/site'
import { useUI } from './Layout'
import skapsMark from '../assets/skaps-mark.png'

export function Brand({ className = '' }) {
  return (
    <Link to="/" className={`brand ${className}`} aria-label="SKAPS HR SOLUTIONS home">
      <img src={skapsMark} alt="" />
      <span className="brand-text"><span>{BRAND}</span><small>HR SOLUTIONS</small></span>
    </Link>
  )
}

function MenuItem({ item, onNavigate }) {
  return (
    <Link className={`mega-item${item.desc ? '' : ' plain'}`} to={item.to} onClick={onNavigate}>
      {item.iso ? <Iso accent={item.iso} /> : item.icon ? <Icon name={item.icon} /> : null}
      <span>
        <strong>{item.title}{item.badge && <span className="badge-new">{item.badge}</span>}</strong>
        {item.desc && <span className="desc">{item.desc}</span>}
      </span>
    </Link>
  )
}

function Promo({ promo, onNavigate }) {
  return (
    <aside className={`mega-promo ${promo.theme}`}>
      <span className="eyebrow">{promo.eyebrow}</span>
      {promo.title && <h4>{promo.title}</h4>}
      {promo.text && <p>{promo.text}</p>}
      {promo.list && (
        <div className="promo-list">{promo.list.map(l => <Link key={l.title} to={l.to} onClick={onNavigate}>{l.title}<Icon name="arrow" /></Link>)}</div>
      )}
      <Link className="link" to={promo.to} onClick={onNavigate}>{promo.cta} <Icon name="arrow" className="arrow" style={{ width: 14, height: 14 }} /></Link>
      {promo.art === 'crystal' && <Crystal accent={promo.accent} />}
    </aside>
  )
}

// Shown once per full page load, at module scope so client-side route changes never bring it back.
let noticeDone = false
const NOTICE_MS = 12000, NOTICE_OUT_MS = 400

// Static and centred when the message fits on one line; otherwise a slow ticker (two copies, shifted by half to loop).
// Collapses after NOTICE_MS; the countdown is held while hovered, keyboard-focused or in a background tab.
function NoticeBar() {
  const bar = useRef(), view = useRef(), copy = useRef()
  const clock = useRef({ left: NOTICE_MS, holds: new Set() })
  const [ticker, setTicker] = useState(false)
  const [dur, setDur] = useState(40)
  const [phase, setPhase] = useState(() => (noticeDone ? 'gone' : 'shown'))
  const gone = phase === 'gone'
  useLayoutEffect(() => {
    const root = document.documentElement.style
    if (gone) { root.setProperty('--notice-h', '0px'); return }
    const fit = () => {
      const w = copy.current.offsetWidth
      setTicker(w > view.current.clientWidth)
      setDur(Math.max(20, Math.round(w / 45)))
      root.setProperty('--notice-h', `${bar.current.offsetHeight}px`)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(view.current); ro.observe(copy.current)
    return () => ro.disconnect()
  }, [gone])

  const run = () => {
    const c = clock.current
    c.at = Date.now()
    c.timer = setTimeout(() => { noticeDone = true; setPhase(matchMedia('(prefers-reduced-motion: reduce)').matches ? 'gone' : 'hiding') }, c.left)
  }
  const hold = (reason, on) => {
    const c = clock.current, was = c.holds.size > 0
    on ? c.holds.add(reason) : c.holds.delete(reason)
    if (noticeDone || was === c.holds.size > 0) return
    if (was) run()
    else { clearTimeout(c.timer); c.left -= Date.now() - c.at }
  }
  useEffect(() => {
    if (noticeDone) return
    const c = clock.current, onVis = () => hold('tab', document.hidden)
    if (document.hidden) c.holds.add('tab'); else if (!c.holds.size) run()
    document.addEventListener('visibilitychange', onVis)
    return () => { clearTimeout(c.timer); document.removeEventListener('visibilitychange', onVis) }
  }, [])
  useEffect(() => {
    if (phase !== 'hiding') return
    const t = setTimeout(() => setPhase('gone'), NOTICE_OUT_MS)
    return () => clearTimeout(t)
  }, [phase])

  if (gone) return null
  const text = <><strong>{NOTICE[0]}:</strong> {NOTICE[1]}</>
  return (
    <div ref={bar} className={`notice${ticker ? ' is-ticker' : ''}${phase === 'hiding' ? ' is-hiding' : ''}`} role="note" aria-label={NOTICE[0]} tabIndex={0}
      onMouseEnter={() => hold('hover', true)} onMouseLeave={() => hold('hover', false)}
      onFocus={e => hold('focus', e.target.matches(':focus-visible'))} onBlur={() => hold('focus', false)}>
      <div ref={view} className="notice-view">
        <div className="notice-track" style={{ '--notice-dur': `${dur}s` }}>
          <p ref={copy} className="notice-copy">{text}</p>
          {ticker && <p className="notice-copy" aria-hidden="true">{text}</p>}
        </div>
      </div>
    </div>
  )
}

// Same two modes as the mega menu: hover previews the list, click pins it. Closes on outside click, Escape,
// focus leaving, route change, or when a mega menu opens.
function CallMenu({ menuOpen, onOpen }) {
  const [open, setOpen] = useState(null)
  const root = useRef(), timer = useRef()
  const { pathname } = useLocation()
  const shut = () => { clearTimeout(timer.current); setOpen(null) }
  const show = mode => { clearTimeout(timer.current); onOpen(); setOpen(mode) }

  useEffect(() => { shut() }, [pathname])
  useEffect(() => { if (menuOpen) shut() }, [menuOpen])
  useEffect(() => {
    if (!open) return
    const onDown = e => { if (!root.current.contains(e.target)) shut() }
    const onKey = e => {
      if (e.key !== 'Escape') return
      if (root.current.contains(document.activeElement)) root.current.querySelector('button').focus()
      shut()
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  const onKeyDown = e => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    if (!open) show('pinned')
    const step = e.key === 'ArrowDown' ? 1 : -1
    requestAnimationFrame(() => {
      const items = [...root.current.querySelectorAll('.call-pop a')]
      const i = items.indexOf(document.activeElement)
      items[i < 0 ? (step > 0 ? 0 : items.length - 1) : (i + step + items.length) % items.length]?.focus()
    })
  }

  return (
    <div className="call-menu" ref={root} onKeyDown={onKeyDown}
      onMouseEnter={() => (open ? clearTimeout(timer.current) : show('hover'))}
      onMouseLeave={() => { if (open === 'hover') timer.current = setTimeout(shut, 250) }}
      onBlur={e => { if (open && !root.current.contains(e.relatedTarget)) shut() }}>
      <button type="button" className={`nav-call${open === 'pinned' ? ' is-pinned' : ''}`} aria-label="Call us" aria-expanded={!!open} aria-haspopup="true" aria-controls="call-menu" onClick={() => (open === 'pinned' ? shut() : show('pinned'))}>
        <Icon name="phone" /><span>Call us</span><Icon name="chevron" className="chev" />
      </button>
      {open && (
        <div className="call-pop" id="call-menu">
          <span className="eyebrow muted">Call SKAPS</span>
          <ul>
            {PHONES.map((p, i) => (
              <li key={p.tel}><a href={`tel:${p.tel}`} onClick={shut}><Icon name="phone" /><span><strong>{p.display}</strong><small className={i ? undefined : 'is-primary'}>{p.label}</small></span></a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Header({ polarity }) {
  // Desktop mega menu has two modes:
  //  - hover  : a preview that shows only while the pointer is over the nav button itself
  //  - pinned : opened by clicking the button; stays open until dismissed (click again, x, Esc, backdrop, scroll)
  const [hover, setHover] = useState(null)
  const [pinned, setPinned] = useState(null)
  const open = hover || pinned
  const [drawer, setDrawer] = useState(false)     // mobile drawer
  const [sub, setSub] = useState(null)            // mobile sub-panel label
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { openDemo } = useUI()
  const closeTimer = useRef()

  const close = () => { clearTimeout(closeTimer.current); setHover(null); setPinned(null) }

  useEffect(() => { close(); setDrawer(false); setSub(null) }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('no-scroll', drawer)
    const onKey = e => { if (e.key === 'Escape') { close(); setDrawer(false) } }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.classList.remove('no-scroll') }
  }, [drawer])

  // Any page scroll while a mega menu is open dismisses it, so users never feel "stuck" inside the panel.
  useEffect(() => {
    if (!open) return
    // wheel/touch inside the panel itself is allowed (it may need to scroll on short screens)
    const dismiss = e => { if (e.type !== 'scroll' && e.target.closest && e.target.closest('.mega')) return; close() }
    window.addEventListener('scroll', dismiss, { passive: true })
    window.addEventListener('wheel', dismiss, { passive: true })
    window.addEventListener('touchmove', dismiss, { passive: true })
    return () => { window.removeEventListener('scroll', dismiss); window.removeEventListener('wheel', dismiss); window.removeEventListener('touchmove', dismiss) }
  }, [open])

  // Hover preview: open while over the button or the panel; close after a short grace period so the
  // pointer can travel from the button down into the panel without it disappearing.
  const enter = label => { clearTimeout(closeTimer.current); setHover(label) }
  const keep = () => clearTimeout(closeTimer.current)
  const leave = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setHover(null), 300) }
  // Click: pin this menu open (click again to close). Pinning one menu replaces any other pinned menu.
  const toggle = label => { clearTimeout(closeTimer.current); setHover(null); setPinned(p => (p === label ? null : label)) }
  const barClass = `nav-bar${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`
  const active = menus.find(m => m.label === open)
  const isPinned = !!active && pinned === active.label

  return (
    <>
    <NoticeBar />
    <header className="site-header">
      <div className={barClass} data-polarity={polarity}>
        <Brand />
        <ul className="nav-list">
          {menus.map(m => (
            <li className="nav-item" key={m.label} onMouseEnter={() => enter(m.label)} onMouseLeave={leave}>
              <button type="button" className={pinned === m.label ? 'is-pinned' : undefined} aria-expanded={open === m.label} aria-haspopup="true" onClick={() => toggle(m.label)}>
                {m.label}<Icon name="chevron" className="chev" />
              </button>
            </li>
          ))}
          {topLinks.map(l => <li className="nav-item" key={l.to}><Link to={l.to}>{l.label}{l.badge && <span className="nav-badge">{l.badge}</span>}</Link></li>)}
        </ul>
        <div className="nav-right" onMouseEnter={() => enter(null)}>
          <CallMenu menuOpen={open} onOpen={close} />
          <button type="button" className="btn btn-primary-nav" aria-label="Schedule a consultation" onClick={openDemo}><span>Schedule<span className="nav-cta-more"> a consultation</span></span> <Icon name="arrow" className="arrow" style={{ width: 16, height: 16 }} /></button>
        </div>
        <button type="button" className="burger" aria-label="Open menu" aria-expanded={drawer} onClick={() => setDrawer(true)}><Icon name="menu" /></button>
      </div>

      {isPinned && <div className="mega-backdrop" onClick={close} aria-hidden="true" />}
      {active && (
        <div className={`mega${isPinned ? ' is-pinned' : ' is-preview'}`} role="region" aria-label={`${active.label} menu`} onMouseEnter={isPinned ? undefined : keep} onMouseLeave={isPinned ? undefined : leave}>
          {isPinned && <button type="button" className="mega-close" aria-label="Close menu" onClick={close}><Icon name="close" /></button>}
          <div className="mega-groups">
            {active.groups.map(g => (
              <div className="mega-group" key={g.heading}>
                <span className="eyebrow">{g.heading}</span>
                <div className="mega-items">{g.items.map(it => <MenuItem key={it.title} item={it} onNavigate={close} />)}</div>
              </div>
            ))}
          </div>
          <Promo promo={active.promo} onNavigate={close} />
        </div>
      )}

      {drawer && <div className="drawer-backdrop" onClick={() => setDrawer(false)} aria-hidden="true" />}
      {drawer && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Site menu" onClick={e => { if (e.target.closest('a')) setDrawer(false) }}>
          <div className="drawer-top">
            <Brand />
            <button type="button" className="drawer-close" aria-label="Close menu" onClick={() => setDrawer(false)}><Icon name="close" /></button>
          </div>
          <div className="drawer-body">
            {!sub ? (
              <ul className="drawer-root">
                {menus.map(m => <li key={m.label}><button type="button" onClick={() => setSub(m.label)}>{m.label}<Icon name="chevronRight" /></button></li>)}
                {topLinks.map(l => <li key={l.to}><Link to={l.to}>{l.label}{l.badge && <span className="nav-badge">{l.badge}</span>}</Link></li>)}
              </ul>
            ) : (
              <div className="drawer-sub">
                <button type="button" className="drawer-sub-head" onClick={() => setSub(null)}><Icon name="arrowLeft" />{sub}</button>
                {menus.find(m => m.label === sub).groups.map(g => (
                  <div key={g.heading}>
                    <span className="eyebrow">{g.heading}</span>
                    {g.items.map(it => <MenuItem key={it.title} item={it} onNavigate={() => setDrawer(false)} />)}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="drawer-foot">
            <span className="eyebrow muted">Call us</span>
            <div className="drawer-calls">
              {PHONES.map((p, i) => <a className="tag" key={p.tel} href={`tel:${p.tel}`}><Icon name="phone" /><span><small className={i ? undefined : 'is-primary'}>{p.label}</small>{p.display}</span></a>)}
            </div>
            <button type="button" className="btn btn-block" onClick={() => { setDrawer(false); openDemo() }}>Schedule a consultation <Icon name="arrow" className="arrow" style={{ width: 16, height: 16 }} /></button>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
