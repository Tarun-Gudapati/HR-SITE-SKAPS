// ---------------------------------------------------------------------------
// Single source of truth for all SKAPS website content.
// All copy from the previous site is preserved here; requested changes applied:
//  - stats updated (50+, 1K+, 1500+, ₹25 Cr+)
//  - EY removed from client logos
//  - more SKAPS advantages, more industries (incl. Financial / AI), AI in Our Story
// ---------------------------------------------------------------------------

import gyansys from '../assets/logos/gyansys.png'
import kanerika from '../assets/logos/kanerika.png'
import safe from '../assets/logos/safe.png'
import snowrelic from '../assets/logos/snowrelic.png'
import squizify from '../assets/logos/squizify.png'
import ivymobility from '../assets/logos/ivymobility.png'
import microchip from '../assets/logos/microchip.png'
import wizcom from '../assets/logos/wizcom.png'
import marvell from '../assets/logos/marvell.png'
import torq from '../assets/logos/torq.png'
import arunachala from '../assets/logos/arunachala.png'

export const BRAND = 'SKAPS'
export const BRAND_FULL = 'SKAPS HR SOLUTIONS'
export const LEGAL_NAME = 'SKAPS HR Solutions Private Limited'

// The first number is the primary one, used wherever only a single number is shown.
export const PHONES = [['+91 70327 04521', 'Primary'], ['+91 85000 04521', 'Alternate']].map(([display, label]) => ({ display, label, tel: display.replace(/\s+/g, '') }))
export const PHONE = PHONES[0].display
export const PHONE_TEL = PHONES[0].tel
export const EMAIL = 'info@skaps.co.in'
export const ADDRESS = 'First Floor, ARD Magnum, Door No: 12-7-134/MH/2 in Sy. No: 1011/10(P), Anjaneya Nagar, Green Hills Road, Phase 4, Near Moosa Peta, Hyderabad – 500018'
export const REGIONS = ['United States', 'India (Headquarters)', 'Australia']
export const YEARS = '10+'

// Announcement bar above the header on every page: [bold label, message]
export const NOTICE = ['Important Notice', 'SKAPS HR Solutions strictly adheres to ethical recruitment practices. We do NOT charge candidates for placements and do NOT engage any third-party agents to collect fees on our behalf.']

export const clientLogos = [
  [gyansys, 'GyanSys'], [kanerika, 'Kanerika'], [safe, 'Safe Financial'], [snowrelic, 'SnowRelic'],
  [squizify, 'Squizify'], [ivymobility, 'Ivy Mobility'], [microchip, 'Microchip'],
  [wizcom, 'Wizcom Corporation'], [marvell, 'Marvell'], [torq, 'TORQ'], [arunachala, 'Arunachala'],
]

export const stats = [
  ['50+', 'Clients Supported'],
  ['1K+', 'Workforce Managed'],
  ['1500+', 'Successful Placements'],
  ['₹25 Cr+', 'Payroll Processed'],
  ['99.9%', 'Compliance Accuracy'],
]

export const pains = ['Payroll Delays and Errors', 'Difficulty Scaling Teams', 'Complex Compliance Requirements', 'Manual, Spreadsheet-Driven HR Operations', 'Limited Visibility into Workforce Costs']

export const advantages = [
  ['Efficient Payroll Management', 'ISO-certified, automated payroll for India and the US — accurate and on time, every cycle.'],
  ['Access to Qualified Talent Networks', 'Extensive professional and industry networks with proactive, targeted candidate outreach.'],
  ['Reliable Compliance Solutions', 'A dedicated compliance team that stays current with labor laws and statutory requirements.'],
  ['AI-Powered Workforce Intelligence', 'AI-assisted candidate matching, payroll anomaly detection and compliance monitoring built into every engagement.'],
  ['Dedicated Personal Manager', 'One accountable point of contact for payroll, staffing and compliance questions.'],
  ['Transparent, Predictable Pricing', 'Clear engagement models with no hidden fees, so the number you are quoted is the number you pay.'],
  ['Secure Employee Self-Service', 'Secure ERP access to payslips, leave information and documents for every employee.'],
  ['One Partner Across Regions', 'Consistent payroll, compliance and operations across India, the United States and Australia.'],
]

export const services = [
  {
    slug: 'hr-consulting', group: 'Advisory & Growth', icon: 'briefcase', accent: 'cyan',
    title: 'HR Consulting', summary: 'Expert advisory and strategic solutions for complex human-resources challenges.',
    detail: 'SKAPS provides strategic guidance and practical solutions that help organizations strengthen HR operations, solve complex people challenges, and maintain regulatory compliance.',
    points: ['HR policies and procedures', 'Performance-management systems', 'Compensation and benefits planning', 'Organizational change and employee relations'],
    nav: 'Policies, performance and compensation',
    ai: ['HR policy copilot', 'Policy drafts and benchmarks are generated from your context, then refined by SKAPS consultants.'],
    uses: [
      ['Building HR from scratch', 'Set up the core HR function for a startup or a newly opened India entity.', 'rocket'],
      ['Mergers and integrations', 'Harmonize job grades, contracts and culture when two workforces become one.', 'layers'],
      ['Reducing attrition', 'Diagnose why people leave and fix the drivers behind high turnover.', 'chart'],
      ['Employee engagement surveys', 'Measure how your people feel and turn the results into a practical action plan.', 'eye'],
      ['HR health check', 'Get an outside review of how your HR function runs and where it falls short.', 'help'],
    ],
  },
  {
    slug: 'executive-search', group: 'Talent', icon: 'target', accent: 'blue',
    title: 'Executive Search', summary: 'Identifying and securing top-tier senior leaders who drive business outcomes and lasting transformation.',
    detail: 'SKAPS goes beyond advertised job postings to identify and engage senior-level leaders who can deliver meaningful business results and sustainable organizational change.',
    points: ['Extensive professional and industry networks', 'Proactive, targeted candidate outreach', 'Confidential and time-sensitive delivery', 'Rigorous pre-qualification and quality assurance'],
    nav: 'Senior leaders who drive outcomes',
    ai: ['AI talent mapping', 'SKAPS Intelligence maps leadership talent across companies and markets, so we approach the right executives first.'],
    uses: [
      ['First leadership hire in India', 'Appoint a country head or site leader who can build and run your India operation.', 'flag'],
      ['Succession planning', 'Line up ready-now successors for critical roles before a planned retirement or exit.', 'calendar'],
      ['Building a leadership bench', 'Add CXO and VP talent ahead of a funding round, expansion or restructuring.', 'rocket'],
      ['Niche technical leadership', 'Find engineering, data and AI heads where the qualified pool is small and rarely job-hunting.', 'chip'],
      ['Board and advisory roles', 'Identify independent directors and advisors with the sector experience your board lacks.', 'briefcase'],
    ],
  },
  // Has its own page (src/pages/AITalent.jsx, content in `aiTalent` below), so it skips the ServicePage template fields.
  {
    slug: 'ai-analytics-talent', group: 'Talent', icon: 'ai', accent: 'purple', badge: 'New',
    title: 'AI & Analytics Talent', summary: 'A ready, pre-vetted pool of ML, GenAI, MLOps, data and analytics professionals, interview-ready in days.',
    nav: 'ML, GenAI, data and analytics experts',
  },
  {
    slug: 'recruitment-process', group: 'Talent', icon: 'people', accent: 'lime',
    title: 'Recruitment Process', summary: 'A systematic approach to efficiently identify, evaluate, select, and onboard the right candidates.',
    detail: 'Our structured recruitment process helps identify, assess, and place the right candidates while creating a smooth experience for employers and prospective employees.',
    points: ['Requirement consultation and role definition', 'Job descriptions and interview planning', 'Candidate screening and shortlisting', 'Selection, induction, and onboarding support'],
    nav: 'Identify, evaluate, select and onboard',
    ai: ['AI screening & ranking', 'Every applicant is screened and ranked against the role scorecard, so consultants spend time only on the strongest fits.'],
    uses: [
      ['High-volume hiring drives', 'Fill dozens of similar roles at once for a new project, shift or location.', 'people'],
      ['Opening a new office', 'Staff a new branch or delivery center from the first hire to a full team.', 'building'],
      ['Campus and early-career hiring', 'Run graduate intake programs with structured assessments and joining plans.', 'book'],
      ['Hard-to-fill specialist roles', 'Reach passive candidates for skills that job boards rarely surface.', 'target'],
      ['Replacing a stretched in-house process', 'Hand off end-to-end hiring when your team cannot keep pace with open roles.', 'clock'],
    ],
  },
  {
    slug: 'staffing-solutions', group: 'Talent', icon: 'building', accent: 'purple',
    title: 'Staffing Solutions', summary: 'Adaptable staffing models that extend your HR department or provide dedicated on-site professionals.',
    detail: 'SKAPS delivers flexible staffing solutions that integrate with your existing HR function, either as a remote extension of your team or through dedicated professionals working on site.',
    points: ['Remote HR expertise that extends your team', 'A dedicated on-site HR partner', 'Customized strategies aligned with business goals'],
    nav: 'Contract, temporary and dedicated teams',
    ai: ['AI demand forecasting', 'Headcount forecasts flag when you will need to scale up or down, before projects slip.'],
    uses: [
      ['Project-based teams', 'Bring in contract professionals for a fixed-scope delivery and release them when it ends.', 'briefcase'],
      ['Seasonal demand peaks', 'Add temporary staff for festive, year-end or launch spikes without permanent headcount.', 'calendar'],
      ['Long-leave cover', 'Keep critical seats filled while employees are away on parental or extended leave.', 'clock'],
      ['Try before you hire', 'Start roles on contract and convert strong performers to permanent employees.', 'people'],
      ['Working through a hiring freeze', 'Keep work moving with contract staff while permanent hiring budgets are on hold.', 'chart'],
    ],
  },
  {
    slug: 'interview-support', group: 'Talent', icon: 'doc', accent: 'cyan',
    title: 'Interview Support', summary: 'Experienced HR professionals providing on-site assistance for candidate assessment and selection.',
    detail: 'Our experienced HR professionals work alongside your recruitment managers to improve candidate assessment and selection, particularly during peak workloads or specialized hiring drives.',
    points: ['Seasoned recruitment expertise', 'Support during peak recruitment periods', 'Help with targeted recruitment campaigns', 'Impartial and professional assessment'],
    nav: 'On-site assessment and selection help',
    ai: ['AI interview kits', 'Role-specific question banks and structured scorecards are generated for every interview loop.'],
    uses: [
      ['Walk-in and hiring-day events', 'Run large in-person interview days with trained panelists on the floor.', 'calendar'],
      ['Training first-time interviewers', 'Coach hiring managers to run consistent, legally sound interviews.', 'book'],
      ['Final-round culture-fit checks', 'Get an experienced HR view on values and team fit before an offer goes out.', 'heart'],
      ['Offer and joining follow-through', 'Close candidates with offer discussions and pre-joining check-ins after the last round.', 'mail'],
      ['Remote and video interviews', 'Run consistent virtual interview loops for candidates in other cities or countries.', 'globe'],
    ],
  },
  {
    slug: 'payroll-management-india', group: 'Payroll & Compliance', icon: 'doc', accent: 'blue',
    title: 'Payroll Management (India)', summary: 'Precise and efficient payroll services for seamless salary administration in India.',
    detail: 'Our automated and ISO-certified solution manages Indian payroll with confidentiality, efficiency, and strict compliance so your team can stay focused on core business activities.',
    points: ['Proactive support and legislative updates', 'A dedicated personal manager', 'Strict employee-data confidentiality', 'Secure ERP access to payslips and leave information'],
    nav: 'ISO-certified Indian payroll, on one platform',
    ai: ['Payroll anomaly detection', 'Every pay run is scanned for salary, deduction and attendance outliers before it is finalized.'],
    uses: [
      ['Moving off spreadsheets', 'Replace manual salary sheets with a controlled, repeatable monthly pay run.', 'doc'],
      ['Switching payroll providers', 'Migrate employee and year-to-date data mid-year without a missed or wrong payment.', 'layers'],
      ['Teams across Indian states', 'Apply the right professional tax and labour welfare rules wherever your employees work.', 'map'],
      ['Full and final settlements', 'Settle exits accurately, including leave encashment, gratuity and recoveries.', 'briefcase'],
      ['Year-end tax season', 'Handle investment declarations, proofs and Form 16 without the annual scramble.', 'calendar'],
    ],
  },
  {
    slug: 'us-payroll-services', group: 'Payroll & Compliance', icon: 'chart', accent: 'lime',
    title: 'US Payroll Services', summary: 'Expert payroll processing and compliance for businesses operating in the United States.',
    detail: 'SKAPS handles complex federal, state, and local payroll requirements for US workforces, delivering accurate and timely processing while your team concentrates on business operations.',
    points: ['Wages, deductions, and withholdings', 'Federal, state, and local tax filings', 'Direct deposits and paystubs', 'Year-end forms and new-hire reporting'],
    nav: 'Federal, state and local payroll compliance',
    ai: ['Multi-state tax watch', 'Tax rate changes are tracked automatically for every state and city you pay in, with deadlines flagged in advance.'],
    uses: [
      ['Your first US employee', 'Get payroll running correctly from the first paycheck for a new US team.', 'flag'],
      ['India-based companies with US staff', 'Pay US employees compliantly while your finance team stays in India.', 'globe'],
      ['Bonus and off-cycle runs', 'Process bonuses, commissions and corrections outside the regular pay schedule.', 'clock'],
      ['Fixing past payroll errors', 'Correct misclassified wages and amend prior returns before they turn into penalties.', 'alert'],
      ['Contractors and employees together', 'Pay 1099 contractors and W-2 employees side by side, each the right way.', 'people'],
    ],
  },
  {
    slug: 'training-development', group: 'Advisory & Growth', icon: 'spark', accent: 'purple',
    title: 'Training & Development', summary: 'Tailored learning programs that strengthen skills and improve organizational productivity.',
    detail: 'We identify skill gaps and build engaging workshops, seminars, and e-learning programs tailored to your industry and business requirements.',
    points: ['Leadership-development programs', 'Skill-enhancement workshops', 'Communication and teamwork training', 'Performance coaching and mentoring'],
    nav: 'Workshops, e-learning and coaching',
    ai: ['AI skill-gap analysis', 'Skill gaps are mapped across teams and turned into personalised learning paths.'],
    uses: [
      ['Faster ramp-up for new joiners', 'Shorten time-to-productivity with a structured induction curriculum.', 'rocket'],
      ['POSH and workplace-conduct training', 'Run mandatory awareness sessions with attendance records you can show an auditor.', 'shield'],
      ['Upskilling for new technology', 'Retrain teams when you adopt new tools, platforms or AI workflows.', 'chip'],
      ['Client-facing teams', 'Build service and sales skills for front-line and customer-facing staff.', 'heart'],
      ['Measuring training impact', 'Track completion, assessment scores and on-the-job results after each program.', 'chart'],
    ],
  },
  {
    slug: 'compliance-legal', group: 'Payroll & Compliance', icon: 'shield', accent: 'purple',
    title: 'Compliance & Legal', summary: 'Support for complex labor laws and regulations that minimizes risk and protects legal standing.',
    detail: 'SKAPS helps organizations navigate changing labor laws and statutory requirements, reducing occupational risk and preventing penalties or legal complications.',
    points: ['Comprehensive compliance audit', 'Detailed strengths-and-gaps report', 'Clear and actionable improvement plan', 'Ongoing monthly compliance management'],
    nav: 'Labor law adherence, audits and monitoring',
    ai: ['Compliance watchtower', 'Statutory and labor-law updates are tracked and translated into a clear action list for your team.'],
    uses: [
      ['Preparing for a labour inspection', 'Get registers, returns and records in order before an inspector visits.', 'eye'],
      ['Due diligence before a deal', 'Surface HR and statutory liabilities before an acquisition or investment closes.', 'briefcase'],
      ['Contract labour oversight', 'Confirm vendors meet PF, ESI and wage obligations for workers on your site.', 'people'],
      ['Responding to a notice', 'Get clear guidance and a documented reply when an authority raises a query or penalty.', 'mail'],
      ['Expanding into a new state', 'Complete registrations such as shops and establishments before you hire there.', 'map'],
    ],
  },
  {
    slug: 'hr-technology', group: 'Advisory & Growth', icon: 'chart', accent: 'blue',
    title: 'HR Technology Solutions', summary: 'Innovative tools and platforms that optimize HR operations and improve efficiency.',
    detail: 'SKAPS helps select, implement, and optimize HR technology that streamlines processes and creates a stronger employee experience.',
    points: ['HRIS implementation and optimization', 'Applicant Tracking System setup', 'Performance-management software integration', 'Payroll, analytics, and reporting tools'],
    nav: 'HRIS, ATS, analytics and AI tooling',
    ai: ['AI-ready HR stack', 'HRIS, ATS and analytics set up with AI assistants and automations built in from day one.'],
    uses: [
      ['Replacing spreadsheets and email', 'Move leave, attendance and employee records into one system of record.', 'doc'],
      ['Switching HR platforms', 'Migrate data and workflows from a legacy HRMS without losing history.', 'layers'],
      ['Connecting disconnected tools', 'Link HR, payroll, finance and identity systems so data is entered once.', 'cloud'],
      ['Driving adoption after go-live', 'Train admins and employees so the new system actually gets used.', 'people'],
      ['Choosing the right vendor', 'Compare HR platforms against your requirements and budget before you sign.', 'target'],
    ],
  },
  {
    slug: 'global-workforce', group: 'Advisory & Growth', icon: 'globe', accent: 'cyan',
    title: 'Global Workforce Solutions', summary: 'Establishing and managing compliant remote and hybrid workforces in India.',
    detail: 'We support global companies entering India by simplifying hiring, onboarding, payroll, policies, and ongoing workforce management while accounting for local regulations and culture.',
    points: ['Legal-entity and compliance setup', 'Talent acquisition and onboarding', 'Localized HR-policy development', 'Remote and hybrid model consulting'],
    nav: 'Enter India with a compliant team',
    ai: ['India market intelligence', 'Salary benchmarks, talent density and hiring timelines for Indian cities, before you commit.'],
    uses: [
      ['Hiring before your entity is ready', 'Employ your first people in India while your legal entity is still being set up.', 'flag'],
      ['Building a dedicated India team', 'Stand up a captive engineering, product or GCC team that works only for you.', 'chip'],
      ['Converting contractors to employees', 'Move long-term India contractors onto compliant payroll before misclassification becomes a risk.', 'people'],
      ['Growing beyond one city', 'Add teams in Hyderabad, Bengaluru, Pune or Chennai with the same HR standards everywhere.', 'map'],
      ['India payroll for a global HQ', 'Pay your India team locally while reporting costs in the format your headquarters uses.', 'globe'],
    ],
  },
  {
    slug: 'coe-coworking', group: 'Advisory & Growth', icon: 'building', accent: 'lime',
    title: 'COE & Co-working Setup', summary: 'End-to-end support for Centers of Excellence and flexible co-working spaces in India.',
    detail: 'SKAPS helps global companies establish a physical presence in India through site selection, infrastructure setup, registrations, workspace sourcing, and ongoing operations.',
    points: ['Strategic location and site selection', 'Office infrastructure and IT support', 'Legal and regulatory compliance', 'Co-working and COE operational support'],
    nav: 'Centers of Excellence and workspaces',
    ai: ['Location intelligence', 'Data-led site selection compares talent pools, costs and infrastructure across cities.'],
    uses: [
      ['Landing a pilot team', 'Start a small team in flexible shared seats before committing to a long-term lease.', 'rocket'],
      ['Graduating to your own office', 'Move a growing team from shared seats into a dedicated, branded workspace.', 'flag'],
      ['Consolidating scattered teams', 'Bring employees spread across cities or vendor sites under one roof.', 'layers'],
      ['Backup and continuity sites', 'Set up a second India location so delivery continues if one site goes down.', 'shield'],
      ['Hybrid-ready workspaces', 'Size seats, meeting rooms and desk booking for teams in the office part of the week.', 'calendar'],
    ],
  },
]

// Advisory & Growth leads so HR Consulting is the first service in the menu and on /services; Talent (Executive Search first) follows.
export const serviceGroups = ['Advisory & Growth', 'Talent', 'Payroll & Compliance']
// Services shown ahead of the four engagement models in the home page "What we do" grid, in this order.
export const homeServices = ['hr-consulting', 'executive-search', 'ai-analytics-talent']
export const getService = slug => services.find(s => s.slug === slug)
export const industryLink = ([, , slug, , to]) => to || `/industries#${slug}`

// [title, icon, slug, description, menu/footer link (optional; defaults to the card on /industries)]
export const industries = [
  ['Technology and IT Services', 'monitorCode', 'technology-it-services', 'Scale engineering and delivery teams with contract, dedicated and executive hiring.'],
  ['Financial Services', 'rupee', 'financial-services', 'Compliant payroll, statutory reporting and specialist finance talent for NBFCs and financial institutions.'],
  ['AI, Data & Analytics', 'nodes', 'ai-data-analytics', 'Data scientists, ML engineers and analysts sourced with AI-assisted matching for AI-first companies.', '/services/ai-analytics-talent'],
  ['Semiconductors & Hardware', 'chip', 'semiconductors-hardware', 'Specialist engineering talent and payroll for chip design and hardware organizations.'],
  ['Healthcare', 'pulse', 'healthcare', 'Credentialed clinical and administrative staffing with strict confidentiality and compliance.'],
  ['Manufacturing', 'factory', 'manufacturing', 'Shop-floor to leadership hiring, contract labor compliance and multi-location payroll.'],
  ['Retail and E-Commerce', 'cart', 'retail-ecommerce', 'Seasonal and temporary staffing that scales with demand peaks and distribution networks.'],
  ['SaaS & Software Products', 'cloud', 'saas-software', 'Product, sales and customer-success teams for fast-growing software companies.'],
  ['Banking & Fintech', 'bank', 'banking-fintech', 'Risk, compliance and technology talent with audit-ready payroll and documentation.'],
  ['Professional Services & Consulting', 'briefcase', 'professional-services', 'Bench management, bill-rate aligned payroll and rapid project staffing.'],
  ['Startups and Growing Businesses', 'rocket', 'startups', 'Make your first hires and run payroll from day one, no in-house HR team required.'],
  ['Global Capability Centers (GCC)', 'globe', 'global-capability-centers', 'Set up and run Centers of Excellence in India with end-to-end workforce support.'],
]

// Industries page detail, keyed by industry slug: [short label, roles we hire, typical engagements, lead service slug, client logo names]
// TODO(Skaps): confirm the role lists and add client names per industry (names must match clientLogos).
export const industryDetails = {
  'technology-it-services': ['Tech & IT', ['Software engineers', 'DevOps & cloud', 'Delivery managers'], ['Contract staffing', 'Dedicated teams'], 'staffing-solutions'],
  'financial-services': ['Finance', ['Finance & accounts', 'Risk analysts', 'Operations'], ['Payroll outsourcing', 'Statutory compliance'], 'payroll-management-india'],
  'ai-data-analytics': ['AI & Data', ['Data scientists', 'ML engineers', 'Data analysts'], ['Contract staffing', 'Dedicated teams'], 'ai-analytics-talent'],
  'semiconductors-hardware': ['Semiconductors', ['Chip design', 'Verification', 'Embedded systems'], ['Specialist hiring', 'Payroll outsourcing'], 'executive-search', ['Microchip', 'Marvell']],
  'healthcare': ['Healthcare', ['Clinical staff', 'Medical admin', 'Healthcare IT'], ['Contract staffing', 'Temporary staffing'], 'staffing-solutions'],
  'manufacturing': ['Manufacturing', ['Shop-floor teams', 'Plant engineers', 'Plant leadership'], ['Contract labor compliance', 'Multi-location payroll'], 'compliance-legal'],
  'retail-ecommerce': ['Retail', ['Store & warehouse', 'Fulfilment', 'Customer support'], ['Temporary staffing', 'Payroll outsourcing'], 'staffing-solutions'],
  'saas-software': ['SaaS', ['Product & engineering', 'Sales', 'Customer success'], ['Dedicated teams', 'Contract staffing'], 'recruitment-process'],
  'banking-fintech': ['Banking', ['Risk & compliance', 'Fintech engineers', 'Audit'], ['Contract staffing', 'Audit-ready payroll'], 'compliance-legal'],
  'professional-services': ['Consulting', ['Consultants', 'Project staff', 'Bench resources'], ['Bench management', 'Payroll outsourcing'], 'payroll-management-india'],
  'startups': ['Startups', ['First engineers', 'Founding hires', 'Ops & admin'], ['Payroll from day one', 'HR setup'], 'hr-consulting'],
  'global-capability-centers': ['GCC', ['Site leadership', 'Engineering pods', 'Shared services'], ['COE setup', 'Dedicated teams'], 'coe-coworking'],
}

export const benefits = [
  ['Workforce Flexibility', 'people', 'Add or release people as demand changes, without permanent headcount.'],
  ['Cost Efficiency', 'chart', 'Reduce hiring, payroll and compliance costs with one accountable partner.'],
  ['Access to Specialized Talent', 'target', 'Reach role-ready professionals through established talent networks.'],
  ['Reduced Compliance Risk', 'shield', 'Fewer penalties and legal complications, in every region you operate in.'],
]

export const needs = [
  ['Contract Staffing', 'Bring in qualified professionals for defined project timelines and workloads.', 'people', 'contract-staffing'],
  ['Temporary Staffing', 'Cover seasonal peaks and short-term demand without long-term overhead.', 'clock', 'temporary-staffing'],
  ['Dedicated Teams', 'Build reliable, long-term teams aligned to your operational goals.', 'target', 'dedicated-teams'],
  ['Payroll Outsourcing', 'Hand off payroll processing and compliance to a dependable partner.', 'doc', 'payroll-outsourcing'],
]

export const useCases = [
  ['Hire in India', 'Build teams in India without an in-house HR function', 'globe', '/services/global-workforce'],
  ['Run payroll (India & US)', 'Accurate, compliant payroll across both regions', 'doc', '/services/payroll-management-india'],
  ['Stay compliant', 'Statutory compliance, labor law and documentation', 'shield', '/compliance'],
  ['Set up a COE', 'Centers of Excellence and co-working spaces', 'building', '/services/coe-coworking'],
  ['Train your teams', 'Leadership and skill-development programs', 'spark', '/services/training-development'],
  ['Scale with AI', 'AI-assisted hiring, payroll and compliance intelligence', 'ai', '/ai'],
]

// [number, title, description]
export const steps = [
  ['01', 'Consultation and Workforce Planning', 'We map goals, gaps and priorities with your leadership and HR teams, and agree on an engagement model.'],
  ['02', 'Talent Sourcing and Selection', 'Our networks and SKAPS Intelligence shortlist role-ready candidates; our consultants pre-qualify every profile.'],
  ['03', 'Onboarding and Documentation', 'Offer letters, statutory forms and policy acknowledgements are generated, routed and tracked for you.'],
  ['04', 'Payroll and Compliance Management', 'ISO-certified payroll runs with anomaly checks, filings and audit-ready documentation in each region.'],
  ['05', 'Ongoing Workforce Support', 'A dedicated personal manager reviews metrics with you and keeps improving the engagement.'],
]

export const complianceItems = ['Statutory Compliance Management', 'Labor Law Adherence', 'Employee Benefits Administration', 'Risk Reduction and Documentation']
export const complianceBadges = ['ISO-certified payroll', 'Statutory compliance', 'Labor law adherence', 'Audit-ready documentation', 'Strict data confidentiality']

export const testimonials = [
  ['SKAPS helped us scale our team quickly through their contract staffing services. The hiring process was efficient, the candidates were highly qualified, and their HR management ensured everything remained compliant and well organized.', 'Anita Mehta', 'Head of Human Resources, Manufacturing Organization', '3x', 'faster team scale-up with contract staffing'],
  ['Outsourcing our payroll management to SKAPS was one of the best decisions for our organization. Their accuracy, professionalism, and understanding of compliance requirements have given us complete confidence in our workforce operations.', 'Michael Fernandes', 'Chief Financial Officer, Retail and Distribution Company', '100%', 'on-time, accurate payroll cycles'],
  ['Working with SKAPS has significantly improved the way we manage our workforce. Their team handled our payroll, operations, and compliance requirements seamlessly, allowing us to focus on expanding our business without worrying about administrative complexities.', 'Rohit Sharma', 'Director of Operations, Technology Services Company', '1', 'partner for payroll, operations and compliance'],
]

export const faqs = [
  ['What services does SKAPS HR Solutions provide?', 'SKAPS provides end-to-end workforce solutions including payroll outsourcing, contract and temporary staffing, HR compliance, employee administration and dedicated managed teams.'],
  ['How does contract staffing work?', 'We source, screen and onboard qualified professionals for defined timelines, handling payroll, documentation and compliance so you can scale teams up or down as your needs change.'],
  ['How can payroll outsourcing benefit my organization?', 'Outsourcing payroll ensures accurate, timely and fully compliant processing, reducing administrative overhead and the risk of errors or statutory penalties.'],
  ['How quickly can SKAPS provide staffing support?', 'Timelines depend on the role and volume, but our established talent networks let us respond quickly and shortlist role-ready candidates within days for most requirements.'],
  ['How does SKAPS ensure compliance with labor regulations?', 'Our dedicated compliance team stays current with labor laws and statutory requirements, maintaining accurate documentation and standardized processes across every engagement.'],
  ['Can SKAPS support businesses operating in multiple locations?', 'Yes. We support distributed and multi-location workforces, coordinating payroll, compliance and operations consistently across regions.'],
  ['How does SKAPS use AI in its services?', 'SKAPS Intelligence, our AI layer, assists our consultants with candidate matching and ranking, checks each pay run for anomalies before salaries are released, monitors statutory and labor-law updates, and powers workforce analytics. A SKAPS consultant reviews every AI recommendation before it reaches you.'],
  ['Is my employee data safe with SKAPS AI?', 'Yes. Employee and payroll data is used only to deliver your engagement, access is role-based, every automated action is logged, and your data is never used to train third-party AI models.'],
]

// "AI at work" panel on the home page: one illustrative run per workflow.
// stages: [label, count, 'ai' | 'human']; log lines appear one by one.
export const aiWorkflows = [
  {
    key: 'hiring', tab: 'Hiring', blurb: 'Sourcing, screening and ranking in hours, not weeks.',
    run: 'Hiring run · Senior Data Engineer, Hyderabad',
    stages: [['Profiles sourced', 1240, 'ai'], ['Skills matched', 312, 'ai'], ['AI-ranked shortlist', 18, 'ai'], ['Specialist reviewed', 6, 'human'], ['Offers made', 2, 'human']],
    log: ['Parsed 1,240 profiles from 6 talent sources', 'Matched Spark, AWS, Airflow — 312 strong fits', 'Removed 9 duplicate profiles', 'Ranked top 18 by role fit — best match 94%', 'Shortlist sent to your SKAPS consultant', 'Consultant approved 6 candidates for interviews'],
    kpi: ['Time to shortlist', '48 hrs'],
  },
  {
    key: 'payroll', tab: 'Payroll', blurb: 'Every payslip checked before anyone gets paid.',
    run: 'October payroll · 128 employees',
    stages: [['Payslips generated', 128, 'ai'], ['Automated checks run', 3840, 'ai'], ['Anomalies flagged', 2, 'ai'], ['Resolved by specialist', 2, 'human'], ['Paid on time', 128, 'human']],
    log: ['Pulled attendance, leave and reimbursements', 'Ran 30 checks per payslip — 3,840 in total', 'Flagged duplicate reimbursement — ₹12,400', 'Flagged missing attendance — 3 days', 'Payroll manager resolved both exceptions', '128 salaries released on schedule'],
    kpi: ['Errors reaching employees', '0'],
  },
  {
    key: 'compliance', tab: 'Compliance', blurb: 'Law changes tracked and turned into actions.',
    run: 'Compliance watch · India entity',
    stages: [['Sources monitored', 640, 'ai'], ['Changes detected', 12, 'ai'], ['Relevant to you', 3, 'ai'], ['Actions assigned', 3, 'human'], ['Filed on time', 3, 'human']],
    log: ['Scanned 640 central and state notifications', 'Detected 12 changes this month', '3 apply to your Telangana entity', 'PF & ESI return due in 6 days — owner assigned', 'Professional tax due in 12 days — owner assigned', 'All filings on track'],
    kpi: ['Missed deadlines', '0'],
  },
]

// Year-on-year series behind the "by the numbers" charts. Final values match the headline stats;
// earlier years are indicative trend lines. TODO(Skaps): replace with actual yearly figures.
export const statYears = ['2020', '2021', '2022', '2023', '2024', '2025', '2026']
export const statSeries = {
  clients: [9, 14, 20, 27, 35, 43, 50],
  workforce: [110, 210, 330, 470, 640, 830, 1000],
  placements: [120, 290, 480, 720, 980, 1250, 1500],
  payrollCr: [2, 4, 7, 11, 15, 20, 25],
}

// Our Story (About) — original copy preserved, AI narrative added.
export const story = [
  'SKAPS HR Solutions Private Limited emerged from the foundation of KAPS Consultancy Services, established in July 2015. Our journey is built on a commitment to excellence in HR and financial consulting, driven by collaboration, deep expertise, and a dedication to client success.',
  'Embracing the philosophy that great achievements in business are the result of teamwork, not individual effort, SKAPS unites experienced professionals from various sectors. Our team brings extensive industry knowledge and local insights, ensuring every client engagement is marked by precision, integrity, and strategic value.',
  'We specialize in comprehensive HR and statutory compliance services, upholding the highest ethical standards. Our focus on confidentiality, accuracy, and operational efficiency helps organizations mitigate risk and concentrate on their core growth objectives.',
  'SKAPS takes a forward-thinking approach to building workforce strategies that align with business goals. We aim to create enduring partnerships and deliver a measurable positive impact through every project we undertake.',
]

export const storyAI = [
  'Today, that forward-thinking approach is powered by AI. SKAPS Intelligence — our in-house AI layer — works alongside our consultants to match and rank candidates against role requirements, surface payroll anomalies before a cycle closes, and monitor statutory and labor-law changes across every region we operate in.',
  'We are building SKAPS as an AI-native HR partner: automated onboarding and document workflows, predictive workforce analytics, and an assistant that answers compliance questions in minutes instead of days. Every recommendation our AI makes is reviewed by an experienced SKAPS professional, so clients get the speed of automation with the judgement of people who know the law and the market.',
]

export const aiPillars = [
  ['AI Talent Matching', 'Candidates are matched and ranked against role requirements, skills and culture signals.', 'target'],
  ['Payroll Anomaly Detection', 'Every payroll run is scanned for outliers in salaries, deductions and attendance before it is finalized.', 'doc'],
  ['Compliance Watchtower', 'Statutory, tax and labor-law updates across India, the US and Australia are tracked and translated into actions.', 'shield'],
  ['Workforce Analytics', 'Headcount, cost, attrition and hiring-funnel insights delivered as clear, decision-ready reports.', 'chart'],
  ['Automated Onboarding & Documents', 'Offer letters, statutory forms and policy acknowledgements generated, routed and tracked automatically.', 'spark'],
  ['Human-in-the-Loop Review', 'Every AI recommendation is validated by a SKAPS specialist before it reaches your team.', 'people'],
]

export const aiStats = [['<30 mins', 'for clear compliance guidance, down from several hours'], ['99.9%', 'compliance accuracy across every engagement'], ['Days', 'to a reviewed shortlist, not weeks'], ['1', 'partner for people, payroll and intelligence']]

export const values = [
  ['Precision', 'Accuracy in every payroll cycle, placement and compliance filing.'],
  ['Integrity', 'The highest ethical standards and strict confidentiality.'],
  ['Collaboration', 'One team across payroll, staffing and compliance, working alongside yours.'],
  ['Innovation', 'AI and automation applied thoughtfully, with people in the loop.'],
  ['Partnership', 'Enduring relationships and measurable positive impact.'],
]

// TODO(Skaps): add real profile URLs — entries left as '#' are hidden in the footer.
export const socials = [['LinkedIn', 'linkedin', '#'], ['Facebook', 'facebook', '#'], ['Instagram', 'instagram', '#'], ['Twitter', 'twitter', '#']]

export const footerIntro = 'SKAPS HR Solutions is an AI-powered workforce management and recruitment partner helping organizations streamline hiring, payroll, compliance, and employee management across multiple industries.'

// AI & Analytics Talent page (/services/ai-analytics-talent).
// TODO(Skaps): wording is qualitative on purpose; add talent-pool size or placement figures only once confirmed.
export const aiTalent = {
  // [role, what they do, icon]
  roles: [
    ['AI / ML Engineers', 'Build, train and ship machine-learning models into production products.', 'ai'],
    ['GenAI & LLM Engineers', 'RAG pipelines, agents, fine-tuning and evaluation on modern large language models.', 'spark'],
    ['MLOps Engineers', 'Model deployment, monitoring and CI/CD for ML on Kubernetes and cloud ML platforms.', 'cloud'],
    ['Data Scientists', 'Experimentation, forecasting and statistical modelling that answers real business questions.', 'chart'],
    ['Data Engineers', 'Pipelines, lakehouses and streaming that keep data reliable and ready for AI.', 'layers'],
    ['Computer Vision & NLP Specialists', 'Image, video, speech and language models for domain-specific problems.', 'eye'],
    ['Analytics & BI Engineers', 'Semantic layers, dashboards and self-serve reporting that leaders actually use.', 'target'],
    ['AI Product Managers', 'Product leaders who scope AI features, define evaluation and ship them to users.', 'briefcase'],
    ['AI Research Scientists', 'Applied researchers for novel models, benchmarking and proof-of-concept work.', 'book'],
  ],
  // [group, skills]
  stack: [
    ['Languages & ML frameworks', ['Python', 'SQL', 'R', 'Scala', 'PyTorch', 'TensorFlow', 'JAX', 'scikit-learn', 'XGBoost', 'Hugging Face', 'OpenCV', 'spaCy']],
    ['GenAI & LLMs', ['LangChain', 'LlamaIndex', 'OpenAI & Anthropic APIs', 'Azure OpenAI', 'RAG', 'Vector databases', 'Fine-tuning (LoRA)', 'LLM evaluation', 'Prompt engineering']],
    ['MLOps & cloud', ['Kubernetes', 'Docker', 'MLflow', 'Kubeflow', 'Airflow', 'AWS SageMaker', 'Google Vertex AI', 'Azure ML', 'Terraform']],
    ['Data & analytics', ['Databricks', 'Apache Spark', 'Snowflake', 'BigQuery', 'dbt', 'Kafka', 'Power BI', 'Tableau', 'Looker']],
  ],
  // [model, description, icon, link, link label]
  models: [
    ['Permanent hire', 'Full-time AI and data hires on your payroll, sourced, assessed and closed by SKAPS.', 'people', '/services/recruitment-process', 'Recruitment process'],
    ['Contract & staff augmentation', 'Add vetted engineers to your team for a project or a sprint, on SKAPS’s compliant payroll.', 'clock', '/services/staffing-solutions', 'Staffing solutions'],
    ['Dedicated AI pod', 'A ready-made squad, such as ML engineers, a data engineer and an MLOps lead, that works only for you.', 'target', '/solutions#dedicated-teams', 'Dedicated teams'],
    ['Build-operate-transfer', 'We build and run your India AI team or COE, then transfer the people and operations to you.', 'building', '/services/coe-coworking', 'COE setup'],
  ],
  // [number, step, description]
  vetting: [
    ['01', 'Role scorecard', 'We agree the problem, stack, seniority and must-have skills with your hiring manager.'],
    ['02', 'AI-assisted matching', 'SKAPS Intelligence ranks our ready pool and wider networks against the scorecard.'],
    ['03', 'Technical assessment', 'Hands-on coding, ML system-design and take-home tasks, reviewed by practitioners.'],
    ['04', 'Project & portfolio review', 'We dig into shipped models, repositories, papers and production impact, not just keywords.'],
    ['05', 'Interview support', 'Structured panels, scorecards and offer support until your hire joins.'],
  ],
  // [point, description, icon]
  matching: [
    ['Skills-graph matching', 'Profiles are matched on frameworks, problem domains and production experience, not job titles.', 'target'],
    ['Ranked shortlists', 'You see the strongest fits first, each with a short note on why they match.', 'chart'],
    ['Consultant review', 'A SKAPS recruiter who knows AI hiring checks every profile before you do.', 'people'],
    ['Compliant from day one', 'Contracts, payroll and statutory filings are handled for every placement.', 'shield'],
  ],
  faqs: [
    ['Do you already have AI candidates available?', 'Yes. SKAPS maintains a ready pool of pre-screened AI, ML, data and analytics professionals, so most searches start with people we already know instead of a cold job post.'],
    ['How quickly can we see profiles?', 'For most roles we share a reviewed shortlist within days of agreeing the role scorecard. Niche research and leadership roles can take longer, and we tell you that upfront.'],
    ['Can AI engineers work with our team outside India?', 'Yes. Engineers can work remotely with teams in the US, Australia and elsewhere, employed on SKAPS’s compliant India payroll or hired directly by your entity.'],
    ['How is this different from SKAPS Intelligence?', 'SKAPS Intelligence is the AI we use inside our own hiring, payroll and compliance work. AI & Analytics Talent is the people: the engineers, scientists and analysts we place in your team.'],
  ],
}
