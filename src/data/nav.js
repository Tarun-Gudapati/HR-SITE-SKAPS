import { services, serviceGroups, needs, useCases, industries, industryLink, REGIONS, testimonials } from './site'

// Mega-menu structure mirrors remote.com: Products / Solutions / Partners / Resources / Pricing
// mapped to SKAPS: Services / SOLUTIONS / Industries / Company / Contact
export const menus = [
  {
    label: 'Services',
    groups: serviceGroups.map(g => ({
      heading: g,
      items: services.filter(s => s.group === g).map(s => ({ title: s.title, desc: s.nav, to: `/services/${s.slug}`, iso: s.accent, badge: s.badge })),
    })).concat([{ heading: 'Platform', items: [{ title: 'Employee self-service', desc: 'Secure ERP access to payslips and leave', to: '/services/payroll-management-india', icon: 'lock' }, { title: 'All services', desc: 'Browse the full SKAPS catalogue', to: '/services', icon: 'arrow' }] }]),
    promo: { theme: 'purple', eyebrow: "What's new", title: 'SKAPS Intelligence', text: 'AI-assisted hiring, payroll anomaly detection and compliance monitoring — with people in the loop.', cta: 'Read more', to: '/ai', art: 'crystal', accent: 'purple' },
  },
  {
    label: 'Solutions',
    groups: [
      { heading: 'By engagement model', items: needs.map(([t, d, icon, slug]) => ({ title: t, desc: d, to: `/solutions#${slug}`, icon })) },
      { heading: 'By use case', items: useCases.map(([t, d, icon, to]) => ({ title: t, desc: d, to, icon })) },
      { heading: 'By region', items: REGIONS.map(r => ({ title: r, desc: r.includes('India') ? 'Hyderabad headquarters, pan-India delivery' : `Payroll, staffing and compliance support in ${r.startsWith('United') ? 'the ' : ''}${r}`, to: '/about#global', icon: r.includes('India') ? 'pin' : 'globe' })) },
    ],
    promo: { theme: 'blue', eyebrow: 'Why SKAPS', title: 'The Smart Way to Build a Flexible Workforce', text: 'Workforce flexibility, cost efficiency, specialized talent and reduced compliance risk.', cta: 'Explore solutions', to: '/solutions', art: 'crystal', accent: 'blue' },
  },
  {
    label: 'Industries',
    groups: [
      { heading: 'Industries we serve', items: industries.map(i => ({ title: i[0], desc: i[3], to: industryLink(i), icon: i[1] })) },
    ],
    promo: { theme: 'yellow', eyebrow: 'Industry focus', title: 'AI, Data & Analytics companies', text: 'ML engineers, data scientists and analysts — sourced with AI-assisted matching and paid on compliant payroll.', cta: 'Hire AI talent', to: '/services/ai-analytics-talent', art: 'crystal', accent: 'orange' },
  },
  {
    label: 'Company',
    groups: [
      { heading: 'About', items: [{ title: 'Our Story', to: '/about', icon: 'book' }, { title: 'How It Works', to: '/how-it-works', icon: 'layers' }, { title: 'Compliance', to: '/compliance', icon: 'shield' }, { title: 'FAQ', to: '/faq', icon: 'help' }] },
      { heading: 'Clients', items: [{ title: 'Client stories', to: '/clients', icon: 'star' }, { title: 'Organizations we support', to: '/clients#logos', icon: 'people' }] },
    ],
    promo: { theme: 'cyan', eyebrow: 'What clients say', list: testimonials.slice(0, 4).map(([, n, r]) => ({ title: `${n} — ${r.split(',')[0]}`, to: '/clients' })), cta: 'All client stories', to: '/clients' },
  },
]

export const topLinks = [{ label: 'AI Talent', to: '/services/ai-analytics-talent' }, { label: 'SKAPS AI', to: '/ai', badge: 'New' }, { label: 'Contact', to: '/contact' }]
