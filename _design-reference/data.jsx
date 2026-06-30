// Shared content + critique data for the Hatch redesign exploration
const HATCH = {
  name: 'Hatch Insurance Agency',
  short: 'Hatch',
  phone: '602-995-5692',
  toll: '1-877-995-5692',
  email: 'info@hatchinsurance.com',
  address: ['2222 W Parkside Lane, Ste 117', 'Phoenix, AZ 85027'],
  hours: 'Mon–Fri · 7:30a–4:30p MST',
  founded: 1973,
  states: 44,
};

const SPECIALTIES = [
  {
    n: '01',
    slug: 'towing',
    title: 'Towing & Recovery',
    short: 'Towing, Auto Transport, Repossession',
    audience: 'Wrecker fleets, recovery firms, transporters',
    body: 'Operators whose risk moves every hour of the day. Built around equipment exposure, driver risk, and time-sensitive claims response.',
    img: 'assets/verticals/towing.jpg',
    tags: ['Equipment & cargo', 'Multi-state fleets', 'Wrongful repo defense'],
    cta: 'Talk to a towing specialist',
    accent: '#e76b2a',
  },
  {
    n: '02',
    slug: 'hospitality',
    title: 'Bars, Taverns & Restaurants',
    short: 'Hospitality',
    audience: 'Independent restaurants, bars, hospitality groups',
    body: 'Where service floors, liquor, and payroll exposure stack on top of each other. Coverage that understands a Saturday night.',
    img: 'assets/verticals/bars.jpg',
    tags: ['Liquor liability', 'Business income', 'Workers comp'],
    cta: 'Protect my venue',
    accent: '#c1672b',
  },
  {
    n: '03',
    slug: 'affluent',
    title: 'Affluent Personal Lines',
    short: 'Personal',
    audience: 'High-net-worth households, executives, owners',
    body: 'Personal insurance presented like private advisory work — homes, autos, umbrellas, boats, and collector vehicles in one portfolio view.',
    img: 'assets/verticals/affluent.png',
    tags: ['Multi-property', 'Umbrella & excess', 'Collector vehicles'],
    cta: 'Review my portfolio',
    accent: '#5b6a82',
  },
  {
    n: '04',
    slug: 'commercial',
    title: 'Commercial P&C',
    short: 'Commercial',
    audience: 'Small to middle-market business owners',
    body: 'A sharper commercial story for owners who have outgrown basic quoting. Packaging strategy, coverage design, multi-line stewardship.',
    img: 'assets/verticals/commercial.jpg',
    tags: ['Property & GL', 'Workers comp', 'Continuity planning'],
    cta: 'Get a commercial review',
    accent: '#2a3a55',
  },
  {
    n: '05',
    slug: 'contractors',
    title: 'Artisan Contractors',
    short: 'Contractors',
    audience: 'Trades, subcontractors, remodelers, field crews',
    body: 'Built for crews, job sites, tools, vehicles, and real construction risk — not generic small-business policies.',
    img: 'assets/verticals/contractor2.png',
    tags: ['Tools & equipment', 'Auto & GL', 'Certificates of insurance'],
    cta: 'Talk to a contractor specialist',
    accent: '#7b5a3a',
  },
  {
    n: '06',
    slug: 'life',
    title: 'Life & Family',
    short: 'Life',
    audience: 'Households, business-owner families',
    body: 'Life coverage rooted in real obligations — debt, mortgage, income replacement, education — not a generic calculator.',
    img: 'assets/verticals/life.png',
    tags: ['Term & whole', 'Key-person', 'Education planning'],
    cta: 'Plan with a life advisor',
    accent: '#4a5a4a',
  },
  {
    n: '07',
    slug: 'pest',
    title: 'Pest Control',
    short: 'Pest Control',
    audience: 'Pest control operators, exterminators, lawn & turf companies',
    body: 'Coverage built around chemical exposure, applicator licensing, vehicle fleets, and the liability tail unique to the pest control trade.',
    img: 'assets/verticals/contractor2.png',
    tags: ['Pollution liability', 'Auto & equipment', 'Applicator E&O'],
    cta: 'Talk to a pest control specialist',
    accent: '#4a6a3a',
  },
  {
    n: '08',
    slug: 'garage',
    title: 'Garage & Dealers',
    short: 'Garage / Dealers',
    audience: 'Auto service & repair, body shops, classic car remodelers, non-franchise dealers',
    body: 'Garage liability, dealers open lot, and service operations coverage for shops and dealers that need more than a standard commercial auto policy.',
    img: 'assets/verticals/commercial.jpg',
    tags: ['Garage liability', 'Dealers open lot', 'Workers comp'],
    cta: 'Talk to a garage specialist',
    accent: '#5a4a6a',
  },
];

const TESTIMONIALS = [
  { author: 'Patti Z.', role: 'Personal lines client',
    quote: 'You always go that extra step and I really appreciate everything you do for us.' },
  { author: 'Joe & Kylee F.', role: 'Restaurant owners',
    quote: 'HIA has proven that they have the best rates and best coverage and amazing customer service year after year.' },
  { author: 'Allison S.', role: 'Towing operator',
    quote: 'You go above and beyond for us. Awesome, super quick customer service.' },
  { author: 'Amber G.', role: 'Contractor',
    quote: 'I just love you guys so much. You are on your A game all the time.' },
];

const TEAM = [
  { name: 'Garet Hatch', role: 'President / Producer', initials: 'GH' },
  { name: 'Janette Reneau', role: 'Producer', initials: 'JR' },
  { name: 'Jessica Lerner', role: 'Commercial Account Manager', initials: 'JL' },
  { name: 'Taylre Chowning', role: 'Personal Lines Account Manager', initials: 'TC' },
  { name: 'Emilie Hatch', role: 'Accounting', initials: 'EH' },
  { name: 'Laura Babcock', role: 'Bookkeeper / Controller', initials: 'LB' },
];

const CARRIERS = [
  'Travelers', 'The Hartford', 'Nationwide', 'Liberty Mutual', 'Progressive Commercial',
  'Chubb', 'CNA', 'Markel', 'Zurich', 'Great American', 'Berkshire Hathaway', 'Westfield',
];

// Critique of the current site (drafted as a senior designer's notes)
const CRITIQUE = [
  {
    h: 'Specialty depth is buried',
    body: 'The single most valuable thing about Hatch — fifty years of operator-side expertise in towing, recovery, hospitality, and high-net-worth lines — sits below the fold and reads like a generic service list. A visitor with a tow fleet should see something built for them in the first three seconds.',
  },
  {
    h: 'No visual hierarchy',
    body: 'Every section uses the same weight: small headline, paragraph, link. There is no rhythm, no full-bleed imagery, no contrast between sections. The eye has nowhere to land, so nothing feels important.',
  },
  {
    h: 'Trust signals are quiet',
    body: '50+ years, 44 states licensed, A-rated carriers, a real local team — the proof points exist but read like fine print. They should be load-bearing typography, not body copy.',
  },
  {
    h: 'Conversion is generic',
    body: 'The CTAs are "Contact Us" and a phone number. There is no way to start a specialty conversation — no "talk to a towing specialist," no "review my restaurant package." Specialist routing is the whole proposition.',
  },
  {
    h: 'Photography is stocky',
    body: 'The current imagery feels like clip art for an insurance template. Editorial, on-location photography of operators, venues, homes, and crews would do more for credibility than ten paragraphs of copy.',
  },
  {
    h: 'No identity system',
    body: 'There is a logo and a color, but no consistent typographic voice, layout grid, or motif. Modern firms use a tight system: a serif/sans pair, a single accent, deliberate whitespace, and one or two recurring graphic elements.',
  },
];

const PRINCIPLES = [
  { k: 'Specialty first', v: 'Lead with the lane the visitor came for.' },
  { k: 'Boutique tone', v: 'Sound like an advisor, not a quote engine.' },
  { k: 'Independent stance', v: 'Show the carrier panel. Show the choice.' },
  { k: 'Operator credibility', v: 'Photography, language, and detail that prove field experience.' },
  { k: 'Specialist routing', v: 'Every CTA goes somewhere specific.' },
];

window.HATCH = HATCH;
window.SPECIALTIES = SPECIALTIES;
window.TESTIMONIALS = TESTIMONIALS;
window.TEAM = TEAM;
window.CARRIERS = CARRIERS;
window.CRITIQUE = CRITIQUE;
window.PRINCIPLES = PRINCIPLES;
