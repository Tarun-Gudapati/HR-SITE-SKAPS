// Original SVG artwork in the style of remote.com's 3D "glass cube / crystal" illustrations.
// All shapes are drawn here (no third-party assets), using the brand gradient palette.

import { paths as iconPaths } from './Icon'

let uid = 0
const id = (p) => `${p}-${++uid}`

const palettes = {
  // SKAPS brand: deep navy → logo blue → light tints
  purple: ['#071a28', '#0d2b3e', '#1f8fd0', '#7cc4ec', '#d6ecf8'],
  blue: ['#0d2b3e', '#176f9d', '#2090d0', '#7cc4ec', '#dcedf7'],
  // SKAPS green (logo)
  lime: ['#2a470d', '#558a1b', '#7fbf2a', '#b6dc82', '#e6f2d3'],
  cyan: ['#0d4461', '#1f8fd0', '#3aa6e2', '#c3e1f2', '#f5fafd'],
  // gold (logo arrow)
  orange: ['#7a4a05', '#c07d12', '#f0a92a', '#f7cf7a', '#fdf0d5'],
}

/** Cluster of translucent crystal shards (mega-menu promo, segment cards). */
export function Crystal({ accent = 'purple', className = '', style }) {
  const p = palettes[accent] || palettes.purple
  const a = id('cr'), b = id('cr2')
  return (
    <svg viewBox="0 0 300 300" className={`art ${className}`} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={a} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p[4]} stopOpacity=".95" /><stop offset="1" stopColor={p[2]} stopOpacity=".6" /></linearGradient>
        <linearGradient id={b} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor={p[1]} /><stop offset="1" stopColor={p[3]} /></linearGradient>
      </defs>
      <g opacity=".95">
        <path d="M150 20 230 120 150 170 70 120z" fill={`url(#${a})`} />
        <path d="M70 120l80 50v110L70 230z" fill={`url(#${b})`} opacity=".9" />
        <path d="M230 120l-80 50v110l80-50z" fill={p[2]} opacity=".55" />
        <path d="M30 200 90 160l40 80-60 40z" fill={p[3]} opacity=".7" />
        <path d="M200 230l70-30 20 60-60 30z" fill={p[4]} opacity=".75" />
        <g fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="1"><path d="M150 20 230 120 150 170 70 120zM150 170v110M70 120v110l80 50 80-50V120" /></g>
      </g>
    </svg>
  )
}

/** Small isometric 3D icon used for services in the mega menu & cards. */
export function Iso({ accent = 'blue', className = '' }) {
  const p = palettes[accent] || palettes.blue
  const a = id('iso')
  return (
    <svg viewBox="0 0 32 32" className={`ico-3d ${className}`} aria-hidden="true">
      <defs><linearGradient id={a} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p[4]} /><stop offset="1" stopColor={p[2]} /></linearGradient></defs>
      <path d="M6 12 16 6l10 6-10 6z" fill={`url(#${a})`} />
      <path d="M6 12v10l10 6V18z" fill={p[2]} />
      <path d="M26 12v10l-10 6V18z" fill={p[1]} />
      <path d="M11 20.5 16 23.5l5-3" fill="none" stroke="#b6dc82" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

const GREEN = '#7fbf2a'
const LINE = '#dce4e9'

function Person({ x, y, r = 24, grad }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={`url(#${grad})`} stroke="#fff" strokeWidth="3" />
      <circle cx={x} cy={y - r * .22} r={r * .3} fill="#fff" />
      <path d={`M${x - r * .55} ${y + r * .62}c${r * .08}-${r * .42} ${r * .3}-${r * .6} ${r * .55}-${r * .6}s${r * .47} ${r * .18} ${r * .55} ${r * .6}`} fill="#fff" />
    </g>
  )
}

export const needAccents = ['purple', 'blue', 'lime', 'cyan']

/**
 * Spot illustrations for the four engagement models (Home segments, Solutions cards).
 * kind: contract-staffing | temporary-staffing | dedicated-teams | payroll-outsourcing
 */
export function NeedArt({ kind, accent = 'blue', className = '', style }) {
  const p = palettes[accent] || palettes.blue
  const g = id('na')
  const defs = <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p[3]} /><stop offset="1" stopColor={p[1]} /></linearGradient></defs>
  const svg = children => <svg viewBox="0 0 240 180" className={`art need-art ${className}`} style={style} aria-hidden="true">{defs}{children}</svg>

  if (kind === 'contract-staffing') return svg(
    <>
      {/* calendar with a booked project window */}
      <rect x="24" y="30" width="156" height="124" rx="14" fill="#fff" />
      <path d="M24 44a14 14 0 0 1 14-14h128a14 14 0 0 1 14 14v14H24z" fill={p[2]} />
      <rect x="56" y="22" width="7" height="18" rx="3.5" fill={p[0]} /><rect x="141" y="22" width="7" height="18" rx="3.5" fill={p[0]} />
      {[0, 1, 2].map(r => [0, 1, 2, 3, 4, 5].map(c => <circle key={`${r}${c}`} cx={44 + c * 23} cy={80 + r * 24} r="3.5" fill={LINE} />))}
      <rect x="60" y="97" width="94" height="14" rx="7" fill={GREEN} />
      <circle cx="67" cy="104" r="5" fill="#fff" /><circle cx="147" cy="104" r="5" fill="#fff" />
      <Person x={186} y={130} r={30} grad={g} />
    </>
  )

  if (kind === 'temporary-staffing') return svg(
    <>
      {/* demand chart with a seasonal spike, plus a clock for "short-term" */}
      <rect x="66" y="34" width="156" height="122" rx="14" fill="#fff" />
      {[22, 28, 40, 76, 62, 30, 24].map((h, i) => <rect key={i} x={84 + i * 19} y={140 - h} width="11" height={h} rx="3" fill={i === 3 || i === 4 ? GREEN : p[3]} />)}
      <line x1="80" x2="208" y1="140" y2="140" stroke={LINE} strokeWidth="2" />
      <path d="M131 56l9-9 9 9" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="62" cy="62" r="40" fill={`url(#${g})`} stroke="#fff" strokeWidth="4" />
      <circle cx="62" cy="62" r="29" fill="#fff" />
      {[0, 90, 180, 270].map(a => <line key={a} x1="62" y1="37" x2="62" y2="42" stroke={p[1]} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${a} 62 62)`} />)}
      <path d="M62 62V46M62 62l11 7" stroke={p[0]} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="62" cy="62" r="3.5" fill={GREEN} />
    </>
  )

  if (kind === 'dedicated-teams') return svg(
    <>
      {/* one long-term team connected to a shared goal */}
      <circle cx="120" cy="92" r="66" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2" strokeDasharray="5 7" />
      {[[58, 54], [182, 54], [120, 156]].map(([x, y]) => <line key={x + y} x1="120" y1="92" x2={x} y2={y} stroke="#fff" strokeWidth="3" strokeLinecap="round" />)}
      <circle cx="120" cy="92" r="27" fill="#fff" />
      <circle cx="120" cy="92" r="18" fill="none" stroke={p[1]} strokeWidth="3" />
      <circle cx="120" cy="92" r="9" fill="none" stroke={p[1]} strokeWidth="3" />
      <circle cx="120" cy="92" r="3.5" fill={p[0]} />
      <Person x={58} y={54} grad={g} />
      <Person x={182} y={54} grad={g} />
      <Person x={120} y={150} grad={g} />
      <Person x={40} y={136} r={15} grad={g} />
      <Person x={200} y={136} r={15} grad={g} />
    </>
  )

  return svg(
    <>
      {/* payslip handed off and approved */}
      <ellipse cx="46" cy="152" rx="24" ry="8" fill="#c07d12" />
      <rect x="22" y="138" width="48" height="14" fill="#f0a92a" /><ellipse cx="46" cy="138" rx="24" ry="8" fill="#f7cf7a" />
      <rect x="22" y="124" width="48" height="14" fill="#f0a92a" /><ellipse cx="46" cy="124" rx="24" ry="8" fill="#f7cf7a" />
      <g transform="rotate(-5 120 92)">
        <rect x="64" y="20" width="118" height="146" rx="12" fill="#fff" />
        <rect x="80" y="36" width="54" height="9" rx="4.5" fill={p[2]} />
        <rect x="80" y="54" width="86" height="6" rx="3" fill={LINE} />
        <rect x="80" y="66" width="64" height="6" rx="3" fill={LINE} />
        <line x1="80" x2="166" y1="84" y2="84" stroke={LINE} strokeWidth="2" strokeDasharray="4 4" />
        <text x="80" y="112" fontFamily="var(--font)" fontWeight="800" fontSize="16" fill={p[0]}>₹1,80,000</text>
        <rect x="80" y="124" width="48" height="6" rx="3" fill={LINE} />
      </g>
      <circle cx="184" cy="134" r="27" fill={GREEN} stroke="#fff" strokeWidth="4" />
      <path d="M172 134l8 8 16-17" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

/** Content-card illustration built around a topic icon, with an AI badge (industries, services). */
export function SpotArt({ icon = 'spark', accent = 'blue', ai = true, className = '', style }) {
  const p = palettes[accent] || palettes.blue
  const g = id('sp')
  return (
    <svg viewBox="0 0 240 180" className={`art need-art ${className}`} style={style} aria-hidden="true">
      <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p[3]} /><stop offset="1" stopColor={p[1]} /></linearGradient></defs>
      <rect x="64" y="22" width="148" height="112" rx="14" fill="#fff" opacity=".5" transform="rotate(6 138 78)" />
      <rect x="40" y="40" width="152" height="112" rx="14" fill="#fff" />
      <circle cx="80" cy="80" r="24" fill={`url(#${g})`} />
      <path d={iconPaths[icon] || iconPaths.spark} transform="translate(66 66) scale(1.17)" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="116" y="68" width="58" height="9" rx="4.5" fill={p[2]} />
      <rect x="116" y="84" width="42" height="6" rx="3" fill={LINE} />
      <rect x="58" y="120" width="116" height="8" rx="4" fill={LINE} />
      <rect x="58" y="120" width="80" height="8" rx="4" fill={GREEN} />
      {ai && (
        <g>
          <circle cx="192" cy="44" r="19" fill={p[0]} stroke="#fff" strokeWidth="3" />
          <path d={iconPaths.ai} transform="translate(183 35) scale(.75)" fill="none" stroke="#b6f06a" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}

// ---------- ServiceArt: one small scene per service (home "What we do" cards) ----------
const INK = '#122331'
const DOLLAR = 'M12 3v18M16.5 7.5c-.8-1.4-2.4-2-4.5-2-2.6 0-4.5 1.3-4.5 3.3 0 4.4 9 2.5 9 6.9 0 2-1.9 3.3-4.5 3.3-2.3 0-4-.8-4.8-2.4'
const glyph = (d, cx, cy, size, c = '#fff', w = 2) => { const s = size / 24; return <path d={d} transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${s})`} fill="none" stroke={c} strokeWidth={w / s} strokeLinecap="round" strokeLinejoin="round" /> }
const tick = (x, y, s = 1, c = '#fff', w = 3) => <path d={`M${x - 6 * s} ${y}l${4 * s} ${4 * s} ${8 * s} ${-8 * s}`} fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
const person = (cx, cy, s = 1, c = '#fff') => <g fill={c}><circle cx={cx} cy={cy - 3 * s} r={3.6 * s} /><path d={`M${cx - 7 * s} ${cy + 8 * s}a${7 * s} ${6.5 * s} 0 0 1 ${14 * s} 0z`} /></g>
const bar = (x, y, w, h, fill) => <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />

const payslip = (c, d) => (
  <>
    <rect x="52" y="28" width="104" height="128" rx="12" fill="#fff" filter={c.f} />
    {bar(68, 46, 44, 8, c.p[2])}{bar(68, 60, 28, 5, LINE)}
    {[80, 94, 108].map(y => <g key={y}>{bar(68, y, 48, 5, LINE)}{bar(124, y, 16, 5, LINE)}</g>)}
    {bar(66, 124, 76, 16, c.p[4])}{bar(70, 128, 40, 8, c.hi)}
    <circle cx="178" cy="124" r="26" fill={c.p[1]} />
    <circle cx="170" cy="112" r="26" fill={c.g} stroke="#fff" strokeWidth="4" filter={c.f} />
    {glyph(d, 170, 112, 28, '#fff', 2.6)}
  </>
)

const scenes = {
  'hr-consulting': c => (
    <>
      <rect x="44" y="34" width="148" height="116" rx="16" fill="#fff" filter={c.f} />
      <path d="M120 76v12M78 88h84M78 88v10M120 88v10M162 88v10" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx="120" cy="62" r="16" fill={c.g} />{person(120, 62, 1.05)}
      {[[78, c.p[3]], [120, c.hi], [162, c.p[3]]].map(([x, f]) => <g key={x}><circle cx={x} cy="112" r="12" fill={f} />{person(x, 112, .8)}{bar(x - 12, 132, 24, 5, LINE)}</g>)}
      <rect x="166" y="20" width="48" height="30" rx="10" fill={c.p[0]} filter={c.f} />
      <path d="M175 41l9-8 8 4 13-10" fill="none" stroke={c.hi} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'executive-search': c => (
    <>
      <rect x="38" y="34" width="138" height="112" rx="16" fill="#fff" filter={c.f} />
      <circle cx="80" cy="76" r="20" fill={c.g} />{person(80, 76, 1.25)}
      <circle cx="97" cy="59" r="10" fill={c.hi} stroke="#fff" strokeWidth="2.5" />{glyph(iconPaths.star, 97, 59, 11, '#fff', 1.8)}
      {bar(110, 66, 50, 8, c.p[2])}{bar(110, 80, 34, 6, LINE)}
      {bar(58, 112, 100, 7, LINE)}{bar(58, 126, 64, 7, LINE)}
      <g filter={c.f}><circle cx="174" cy="112" r="25" fill={c.p[4]} stroke={INK} strokeWidth="7" /><path d="M192 130l16 16" stroke={INK} strokeWidth="10" strokeLinecap="round" /></g>
      <path d="M162 106a14 14 0 0 1 11-9" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  'ai-analytics-talent': c => (
    <>
      <rect x="38" y="34" width="152" height="116" rx="16" fill="#fff" filter={c.f} />
      {[[60, c.g, c.p[2], c.hi, 56, '#fff'], [92, c.p[3], LINE, c.p[3], 44, '#fff'], [124, c.p[4], LINE, LINE, 36, c.p[2]]].map(([y, av, b, pill, w, pc]) => (
        <g key={y}><circle cx="64" cy={y} r="11" fill={av} />{person(64, y, .75, pc)}{bar(84, y - 7, w, 7, b)}{bar(84, y + 3, w - 18, 5, LINE)}{bar(150, y - 7, 26, 14, pill)}</g>
      ))}
      <circle cx="190" cy="40" r="20" fill={c.p[0]} stroke="#fff" strokeWidth="3" filter={c.f} />{glyph(iconPaths.ai, 190, 40, 22, '#b6f06a', 2.2)}
    </>
  ),
  'training-development': c => (
    <>
      <rect x="38" y="40" width="130" height="108" rx="16" fill="#fff" filter={c.f} />
      <rect x="60" y="112" width="18" height="20" rx="4" fill={c.p[4]} />
      <rect x="86" y="96" width="18" height="36" rx="4" fill={c.p[3]} />
      <rect x="112" y="76" width="18" height="56" rx="4" fill={c.g} />
      {bar(56, 136, 96, 4, LINE)}
      <path d="M58 100l26-14 18 8 36-34M127 60h11v11" fill="none" stroke={c.hi} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 94l-9 32 10-5 6 9 7-30zM188 94l9 32-10-5-6 9-7-30z" fill={c.p[1]} />
      <circle cx="179" cy="78" r="24" fill={c.hi} stroke="#fff" strokeWidth="4" filter={c.f} />{glyph(iconPaths.star, 179, 78, 22, '#fff', 2.2)}
    </>
  ),
  'hr-technology': c => (
    <>
      <rect x="34" y="30" width="172" height="120" rx="16" fill="#fff" filter={c.f} />
      <path d="M34 46a16 16 0 0 1 16-16h140a16 16 0 0 1 16 16v4H34z" fill={c.p[4]} />
      {[[50, c.p[2]], [61, c.p[3]], [72, LINE]].map(([x, f]) => <circle key={x} cx={x} cy="40" r="3.5" fill={f} />)}
      <circle cx="84" cy="100" r="26" fill="none" stroke={LINE} strokeWidth="11" />
      <circle cx="84" cy="100" r="26" fill="none" stroke={c.g} strokeWidth="11" strokeDasharray="104 164" strokeLinecap="round" transform="rotate(-90 84 100)" />
      <circle cx="84" cy="100" r="26" fill="none" stroke={c.hi} strokeWidth="11" strokeDasharray="26 164" strokeDashoffset="-116" strokeLinecap="round" transform="rotate(-90 84 100)" />
      {[[76, true], [100, false], [124, true]].map(([y, on]) => <g key={y}>{bar(126, y - 7, 30, 14, on ? c.hi : LINE)}<circle cx={on ? 149 : 133} cy={y} r="5" fill="#fff" />{bar(164, y - 3, 28, 6, LINE)}</g>)}
    </>
  ),
  'global-workforce': c => (
    <>
      <circle cx="114" cy="94" r="54" fill={c.g} filter={c.f} />
      <g fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="2"><ellipse cx="114" cy="94" rx="22" ry="54" /><path d="M60 94h108M68 66h92M68 122h92" /></g>
      <path d="M74 76C94 28 156 32 170 68M90 122c20 12 46 8 58-18" fill="none" stroke={c.hi} strokeWidth="3.5" strokeDasharray="2 7" strokeLinecap="round" />
      {[[74, 76], [170, 68], [90, 122], [148, 104]].map(([x, y], i) => <g key={x}><circle cx={x} cy={y} r="8" fill="#fff" /><circle cx={x} cy={y} r="4" fill={i % 2 ? c.hi : c.p[0]} /></g>)}
      <rect x="150" y="118" width="64" height="34" rx="10" fill="#fff" filter={c.f} />
      <circle cx="166" cy="135" r="8" fill={c.hi} />{tick(166, 135, .6, '#fff', 2.2)}
      {bar(180, 129, 26, 5, c.p[2])}{bar(180, 138, 16, 4, LINE)}
    </>
  ),
  'coe-coworking': c => (
    <>
      {bar(36, 140, 168, 8, LINE)}
      <rect x="64" y="38" width="68" height="104" rx="10" fill={c.g} filter={c.f} />
      {[54, 70, 86, 102].flatMap(y => [76, 93, 110].map(x => <rect key={`${x}-${y}`} x={x} y={y} width="11" height="10" rx="2" fill="#fff" opacity=".6" />))}
      <rect x="89" y="118" width="18" height="24" rx="3" fill="#fff" opacity=".9" />
      <rect x="132" y="78" width="48" height="64" rx="10" fill={c.p[3]} filter={c.f} />
      {[90, 105, 120].flatMap(y => [142, 160].map(x => <rect key={`${x}-${y}`} x={x} y={y} width="10" height="9" rx="2" fill="#fff" opacity=".75" />))}
      <circle cx="196" cy="116" r="14" fill={c.hi} /><rect x="194" y="124" width="4" height="18" rx="2" fill={c.p[1]} />
      <circle cx="132" cy="40" r="13" fill="#fff" filter={c.f} />{tick(132, 40, .7, c.hi, 3)}
    </>
  ),
  'recruitment-process': c => (
    <>
      {[[84, c.p[3]], [120, c.hi], [156, c.p[3]]].map(([x, f]) => <g key={x}><circle cx={x} cy="34" r="12" fill={f} />{person(x, 34, .8)}</g>)}
      <g filter={c.f}>
        <path d="M52 56h136l-14 22H66z" fill={c.p[3]} />
        <path d="M68 82h104l-14 22H82z" fill={c.p[2]} />
        <path d="M84 108h72l-14 22H98z" fill={c.p[1]} />
        <path d="M100 134h40l-8 14h-24z" fill={c.p[0]} />
      </g>
      <circle cx="176" cy="138" r="16" fill={c.hi} stroke="#fff" strokeWidth="3" filter={c.f} />{tick(176, 138, .9, '#fff', 3)}
    </>
  ),
  'staffing-solutions': c => (
    <>
      <rect x="50" y="46" width="112" height="84" rx="14" fill={c.p[3]} opacity=".55" transform="rotate(-9 106 88)" />
      <rect x="60" y="40" width="112" height="84" rx="14" fill={c.p[4]} transform="rotate(5 116 82)" />
      <rect x="62" y="56" width="122" height="88" rx="14" fill="#fff" filter={c.f} />
      <circle cx="96" cy="92" r="18" fill={c.g} />{person(96, 92, 1.1)}
      {bar(124, 82, 46, 8, c.p[2])}{bar(124, 96, 30, 6, LINE)}
      {bar(80, 122, 88, 10, LINE)}{bar(80, 122, 56, 10, c.hi)}
      <circle cx="186" cy="54" r="16" fill={c.p[0]} stroke="#fff" strokeWidth="3" filter={c.f} />
      <path d="M186 47v14M179 54h14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  'interview-support': c => (
    <>
      <rect x="40" y="44" width="116" height="104" rx="14" fill="#fff" filter={c.f} />
      <path d="M40 58a14 14 0 0 1 14-14h88a14 14 0 0 1 14 14v10H40z" fill={c.g} />
      <rect x="64" y="36" width="6" height="16" rx="3" fill={c.p[0]} /><rect x="126" y="36" width="6" height="16" rx="3" fill={c.p[0]} />
      {[88, 108, 128].flatMap(y => [62, 84, 106, 128].map(x => (x === 106 && y === 108) ? null : <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={LINE} />))}
      <circle cx="106" cy="108" r="11" fill={c.hi} />{tick(106, 108, .7, '#fff', 2.6)}
      <path d="M140 28h56a12 12 0 0 1 12 12v22a12 12 0 0 1-12 12h-36l-12 10v-10h-8a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12z" fill={c.p[1]} filter={c.f} />
      {[162, 174, 186].map(x => <circle key={x} cx={x} cy="51" r="3.5" fill="#fff" />)}
    </>
  ),
  'payroll-management-india': c => payslip(c, iconPaths.rupee),
  'us-payroll-services': c => payslip(c, DOLLAR),
  'compliance-legal': c => (
    <>
      <rect x="42" y="36" width="106" height="116" rx="12" fill="#fff" filter={c.f} />
      {[62, 90, 118].map((y, i) => <g key={y}><circle cx="64" cy={y} r="9" fill={c.hi} />{tick(64, y, .55, '#fff', 2.4)}{bar(82, y - 7, 50, 6, i ? LINE : c.p[2])}{bar(82, y + 3, 34, 5, LINE)}</g>)}
      <path d="M170 50l34 12v26c0 24-16 40-34 48-18-8-34-24-34-48V62z" fill={c.g} stroke="#fff" strokeWidth="4" filter={c.f} />
      {tick(170, 92, 1.4, '#fff', 5)}
    </>
  ),
  models: c => (
    <>
      {[[54, 32, c.g, 'people'], [124, 32, c.hi, 'clock'], [54, 98, c.p[3], 'layers'], [124, 98, c.p[0], 'doc']].map(([x, y, f, ic]) => (
        <g key={ic}><rect x={x} y={y} width="62" height="56" rx="14" fill={f} filter={c.f} />{glyph(iconPaths[ic], x + 31, y + 28, 24, '#fff', 2.2)}</g>
      ))}
    </>
  ),
  start: c => (
    <>
      <path d="M66 32h92a20 20 0 0 1 20 20v40a20 20 0 0 1-20 20h-54l-20 18v-18h-18a20 20 0 0 1-20-20V52a20 20 0 0 1 20-20z" fill={c.g} filter={c.f} />
      <path d="M100 62a12 12 0 1 1 18 10.4c-4 2.3-6 4.6-6 9.6" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="112" cy="96" r="4.5" fill="#fff" />
      <rect x="146" y="106" width="64" height="38" rx="14" fill="#fff" filter={c.f} />
      {[164, 178, 192].map((x, i) => <circle key={x} cx={x} cy="125" r="4" fill={i === 1 ? c.hi : c.p[2]} />)}
    </>
  ),
}

/** Service-specific spot illustration; falls back to SpotArt for unknown scenes. */
export function ServiceArt({ scene, accent = 'blue', className = '' }) {
  const draw = scenes[scene]
  if (!draw) return <SpotArt accent={accent} className={className} />
  const p = palettes[accent] || palettes.blue
  const g = id('sa'), f = id('saf'), r = id('sar')
  const c = { p, g: `url(#${g})`, f: `url(#${f})`, hi: accent === 'lime' ? '#1f8fd0' : GREEN }
  return (
    <svg viewBox="0 0 240 180" className={`art need-art service-art ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p[3]} /><stop offset="1" stopColor={p[1]} /></linearGradient>
        <radialGradient id={r}><stop offset="0" stopColor={p[3]} stopOpacity=".5" /><stop offset="1" stopColor={p[3]} stopOpacity="0" /></radialGradient>
        <filter id={f} x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0a2540" floodOpacity=".16" /></filter>
      </defs>
      <ellipse cx="120" cy="96" rx="112" ry="82" fill={`url(#${r})`} />
      {draw(c)}
    </svg>
  )
}

/** Slowly drifting brand-colour gradient (Stripe-style) used behind heroes and the CTA band. */
export function Mesh({ className = '' }) {
  return <div className={`mesh ${className}`} aria-hidden="true"><i className="m1" /><i className="m2" /><i className="m3" /><i className="m4" /><i className="m5" /></div>
}

/** Hub diagram: AI tools connected to the SKAPS core (for the AI page). */
export function HubDiagram({ className = '' }) {
  const nodes = [
    ['Candidate matching', 70, 60], ['Payroll checks', 330, 50], ['Compliance alerts', 370, 200], ['Analytics', 320, 330], ['Onboarding', 80, 330], ['Chat assistant', 40, 200],
  ]
  return (
    <svg viewBox="0 0 420 380" className={`art ${className}`} aria-hidden="true">
      <defs><linearGradient id="hubg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2090d0" /><stop offset="1" stopColor="#0d2b3e" /></linearGradient></defs>
      {nodes.map(([n, x, y], i) => (
        <g key={n}>
          <line x1="210" y1="190" x2={x} y2={y} stroke="#9ad64f" strokeOpacity=".55" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx={(210 + x) / 2} cy={(190 + y) / 2} r="2.5" fill="#9ad64f" />
          <rect x={x - 14} y={y - 14} width="28" height="28" rx="6" fill="#10283a" stroke="#9ad64f" strokeOpacity=".7" />
          <circle cx={x} cy={y} r="3" fill="#9ad64f" />
          <text x={x} y={y + 30} fill="#b9c7d1" fontSize="9" textAnchor="middle" fontFamily="var(--mono)">{n}</text>
        </g>
      ))}
      <path d="M210 150l36 20v40l-36 20-36-20v-40z" fill="url(#hubg)" stroke="#7cc4ec" strokeWidth="1.5" />
      <text x="210" y="196" fill="#fff" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="var(--font)">S</text>
    </svg>
  )
}
