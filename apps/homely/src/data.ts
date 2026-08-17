/* Homely — single-page content model for the recreated online-loan
   landing design. Copy is paraphrased demo content (kept same kinds as the
   source: headline + subtext + CTA, calculator form, labeled service cards,
   icon rows, feature cards, testimonial carousel, blog grid, 4-widget
   footer). On-page anchors map the single-page recreation's navigation. */

export const BRAND = 'Homely'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  eyebrow: 'The simple online home loan.',
  title: 'The simple online home loan.',
  subtitle: 'Financial uncertainty is hard on employees, and causes even.',
  cta: { label: 'Our Services', href: '#services' },
  cardTitle: 'How much you want?',
  cardSubtitle: 'We provide online instant cash loans.',
  amountLabel: 'Amount you want',
  amountPlaceholder: 'Select Amount',
  amountOptions: ['$5,000', '$10,000', '$25,000', '$50,000', '$100,000'],
  monthLabel: 'Month',
  monthPlaceholder: 'Select Month',
  monthOptions: ['3 months', '6 months', '1 year', '2 years'],
  payLabel: 'You have to pay:',
  submitLabel: 'Apply Now',
  sliderMin: 0,
  sliderMax: 100000,
  sliderStep: 5000,
  sliderDefault: 20000,
  successTitle: 'Request received',
  successMessage:
    'Thanks — your loan request is in. A loan specialist will contact you within one business day.',
} as const

export const SERVICES_1 = {
  title: 'Solutions for every business need.',
  subtitle:
    'Whether you are buying a home, a car, or growing a business, the right loan makes all the difference. Compare options, understand costs, and apply with confidence.',
  items: [
    {
      label: 'Home Loan',
      title: 'What are my options and the cost to exercise?',
      body: 'Compare fixed and variable home-loan rates side by side, see the total cost over any term, and know exactly what you will pay every month.',
      learnMore: 'Learn More',
    },
    {
      label: 'Car Loan',
      title: 'Should I exercise now or later? How can I afford it?',
      body: 'Plan your car purchase around your budget with flexible terms, no early-repayment penalties, and a decision you can get in a day.',
      learnMore: 'Learn More',
    },
    {
      label: 'Business Loan',
      title: 'I own my shares — can I get liquidity now without selling?',
      body: 'Unlock working capital against your assets without giving up ownership, with repayment schedules shaped around your cash flow.',
      learnMore: 'Learn More',
    },
  ],
} as const

export const ABOUT_1 = {
  title: 'We guide projects and organizations in making the right decisions.',
  rows: [
    {
      title: 'What are my options and the cost to exercise?',
      body: 'Compare loan products side by side — rates, fees, and early-repayment terms in one clear place.',
    },
    {
      title: 'Should I exercise now or later? How can I afford it?',
      body: 'Plan repayments around your income with flexible schedules and no hidden charges.',
    },
    {
      title: 'I own my shares — can I get liquidity now without selling?',
      body: 'Unlock the equity you need without touching your long-term investments.',
    },
  ],
  badgeValue: '99%',
  badgeCaption: 'Customer Satisfaction',
} as const

export const WHY_CHOOSE_US = {
  title: 'Why choose us?',
  subtitle:
    'Borrowing should be simple, safe, and straightforward. Here is what makes the difference.',
  items: [
    {
      title: 'Quick apply',
      body: 'A soft-check application that takes minutes, not days — no paperwork mountain.',
    },
    {
      title: 'Online & Secure',
      body: 'Bank-level encryption keeps your details safe from the first click to final approval.',
    },
    {
      title: 'Just time',
      body: 'Decisions in as little as 24 hours, because waiting for money is the worst part.',
    },
    {
      title: 'Low interest',
      body: 'Rates from 3.9% APR with no hidden fees, early-repayment charges, or surprises.',
    },
  ],
} as const

export const STEPS = {
  title: 'Get loan in 3 easy steps',
  rows: [
    {
      title: 'Check your rate in minutes',
      body: 'A short online form gives you an instant indicative rate without affecting your credit score.',
    },
    {
      title: 'Apply online with confidence',
      body: 'Upload documents securely and track your application at every single stage.',
    },
    {
      title: 'Get funded fast',
      body: 'Approved loans land in your account, often within one business day.',
    },
  ],
} as const

export const TESTIMONIALS = [
  {
    quote:
      'From start to finish, the whole process took three days — we were funded before the week was out.',
    name: 'Daniel Okafor',
    role: 'Small business owner',
    avatar: 'https://picsum.photos/id/1027/120/120',
  },
  {
    quote:
      'They will connect you with the right loan for your situation — no pressure, just clear advice.',
    name: 'Priya Sharma',
    role: 'First-time buyer',
    avatar: 'https://picsum.photos/id/64/120/120',
  },
  {
    quote:
      'The rate was better than our bank offered, and the whole online application took minutes.',
    name: 'Tara Beckett',
    role: 'Car buyer',
    avatar: 'https://picsum.photos/id/996/120/120',
  },
] as const

export const BLOG_POSTS = [
  {
    date: '12 March 2026',
    title: '5 ways to improve your credit score before applying',
    excerpt:
      'A better score means a better rate. Start with these five practical wins you can make this month.',
    image: 'https://picsum.photos/id/918/800/500',
  },
  {
    date: '28 February 2026',
    title: 'Fixed vs variable: choosing the right home-loan term',
    excerpt:
      'Rate certainty or rate flexibility? We break down the trade-offs for your next home loan.',
    image: 'https://picsum.photos/id/106/800/500',
  },
  {
    date: '15 February 2026',
    title: 'What lenders look for in a self-employed application',
    excerpt:
      'Self-employed borrowers face extra scrutiny. Here is how to prepare the strongest application.',
    image: 'https://picsum.photos/seed/homely-blog-3/800/500',
  },
] as const

export const FOOTER_LINKS = {
  quick: ['Work', 'Services', 'Products', 'Tips & Tricks'],
  solution: ['Air freight', 'Ocean freight', 'Large projects'],
} as const

export const FOOTER_BLURB =
  'Homely makes borrowing simple: transparent online home loans, a calculator you can trust, and support from real people.'

export const NEWSLETTER = {
  label: 'Email address',
  placeholder: 'Enter your email',
  submit: 'Subscribe',
  success: 'Thanks for subscribing — loan tips land in your inbox monthly.',
  error: 'Please enter a valid email address.',
} as const

export const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com' },
  { name: 'Twitter', href: 'https://www.twitter.com' },
  { name: 'Pinterest', href: 'https://www.pinterest.com' },
  { name: 'Instagram', href: 'https://www.instagram.com' },
] as const

export const IMAGES = {
  hero: 'https://picsum.photos/id/164/1920/1080',
  about1: 'https://picsum.photos/id/64/800/600',
  about2: 'https://picsum.photos/id/980/800/600',
}
