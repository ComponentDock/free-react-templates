/** Central content + image sources for the Gavel law-firm landing page.
 *  Placeholder photos are deterministic picsum seeds (no copied assets);
 *  copy is paraphrased from the original reference design. */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  eyebrow: 'Product Liability & Personal Injury',
  headline: 'The Greatest & Strongest Firm You Can Trust',
  description:
    'For over four decades our attorneys have stood beside families and businesses, protecting what matters most with steady, experienced counsel.',
  ctaPrimary: { label: 'Get Legal Advice', href: '#contact' },
  ctaSecondary: { label: 'Request A Quote', href: '#contact' },
  image: 'https://picsum.photos/seed/gavel-hero/1600/900',
} as const

export const services = [
  {
    number: '01',
    title: 'Get Your Legal Advice',
    description:
      'Clear, practical guidance for the questions that keep you up at night — from contracts to courtrooms.',
  },
  {
    number: '02',
    title: 'Work with Expert Lawyers',
    description:
      'Our attorneys bring decades of courtroom and boardroom experience to every case we take on.',
  },
  {
    number: '03',
    title: 'Have Great Discounted Rates',
    description:
      'Senior-level representation at rates that respect your budget, with transparent fee structures.',
  },
  {
    number: '04',
    title: 'Review Your Case Documents',
    description:
      'Every agreement, filing, and brief is reviewed line by line before it ever reaches the bench.',
  },
] as const

export const about = {
  eyebrow: 'Welcome to Gavel',
  headline: 'We Always Fight For Your Justice to Win',
  paragraphs: [
    'Gavel was founded on a simple belief: every client deserves a legal team that treats their case as if it were their own. That belief still guides the firm today.',
    'From family disputes to complex commercial litigation, we combine rigorous preparation with genuine personal attention — so you always know exactly where your case stands.',
    'Our attorneys are recognized across the region for their courtroom presence, their negotiation skills, and their unwavering commitment to the people they represent.',
  ],
  counterValue: 40,
  counterLabel: 'Years of Experienced',
  image: 'https://picsum.photos/seed/gavel-about/640/560',
  videoLabel: 'Watch our intro video',
} as const

export const practiceAreas = [
  {
    icon: 'Scale',
    title: 'Family Law',
    description:
      'Divorce, custody, and adoption — handled with discretion and care for every family involved.',
  },
  {
    icon: 'Briefcase',
    title: 'Business Law',
    description:
      'Formation, contracts, mergers, and disputes for companies of every size and stage.',
  },
  {
    icon: 'Shield',
    title: 'Insurance Law',
    description:
      'Claims, coverage disputes, and bad-faith actions — we fight for the policy you paid for.',
  },
  {
    icon: 'Gavel',
    title: 'Criminal Law',
    description: 'Aggressive, experienced defense at every stage, from arraignment to appeal.',
  },
  {
    icon: 'Home',
    title: 'Property Law',
    description:
      'Real-estate closings, landlord and tenant matters, and boundary disputes resolved cleanly.',
  },
  {
    icon: 'Users',
    title: 'Employment Law',
    description:
      'Wrongful termination, discrimination, and wage claims — protecting your rights at work.',
  },
  {
    icon: 'Flame',
    title: 'Fire Accident',
    description:
      'Claims for fire and accident victims, from investigation to full recovery of damages.',
  },
  {
    icon: 'Banknote',
    title: 'Financial Law',
    description: 'Debt, bankruptcy, and financial disputes navigated with strategy and discretion.',
  },
] as const

export const attorneys = [
  {
    name: 'Richard Anderson',
    role: 'Civil Lawyer',
    photo: 'https://picsum.photos/seed/gavel-lawyer-1/300/380',
    quote:
      'Every verdict starts with preparation. My team leaves nothing to chance in the courtroom.',
  },
  {
    name: 'Jefford Maxillin',
    role: 'Business Lawyer',
    photo: 'https://picsum.photos/seed/gavel-lawyer-2/300/380',
    quote: 'Great business law is about protecting relationships as much as enforcing contracts.',
  },
  {
    name: 'Carlos Obing',
    role: 'Criminal Defense',
    photo: 'https://picsum.photos/seed/gavel-lawyer-3/300/380',
    quote: 'When everything is on the line, experience matters — and my clients get all of mine.',
  },
  {
    name: 'Nathan Smith',
    role: 'Insurance Lawyer',
    photo: 'https://picsum.photos/seed/gavel-lawyer-4/300/380',
    quote: 'Insurance companies have armies of adjusters. My clients deserve a firm of their own.',
  },
] as const

export const cases = [
  {
    title: 'Legal Separation',
    category: 'Corporate',
    image: 'https://picsum.photos/seed/gavel-case-1/600/400',
  },
  {
    title: 'Business Acquisition',
    category: 'Business',
    image: 'https://picsum.photos/seed/gavel-case-2/600/400',
  },
  {
    title: 'Insurance Claim',
    category: 'Insurance',
    image: 'https://picsum.photos/seed/gavel-case-3/600/400',
  },
  {
    title: 'Criminal Defense',
    category: 'Criminal',
    image: 'https://picsum.photos/seed/gavel-case-4/600/400',
  },
  {
    title: 'Property Dispute',
    category: 'Property',
    image: 'https://picsum.photos/seed/gavel-case-5/600/400',
  },
  {
    title: 'Employment Rights',
    category: 'Employment',
    image: 'https://picsum.photos/seed/gavel-case-6/600/400',
  },
] as const

export const testimonials = [
  {
    quote:
      'The team at Gavel handled my case with total professionalism. They explained every step and delivered a result beyond what I expected.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    photo: 'https://picsum.photos/seed/gavel-client-1/160/160',
  },
  {
    quote:
      'After years with other firms, Gavel was the first that felt like it was truly on my side. Their attention to detail is remarkable.',
    name: 'Amanda Reyes',
    role: 'Business Owner',
    photo: 'https://picsum.photos/seed/gavel-client-2/160/160',
  },
  {
    quote:
      'They turned a stressful dispute into a straightforward process. I always knew exactly what was happening with my case.',
    name: 'Daniel Brooks',
    role: 'Entrepreneur',
    photo: 'https://picsum.photos/seed/gavel-client-3/160/160',
  },
  {
    quote:
      'Professional, responsive, and relentless. The attorneys prepared as if their own future depended on the outcome.',
    name: 'Maria Gomez',
    role: 'HR Director',
    photo: 'https://picsum.photos/seed/gavel-client-4/160/160',
  },
  {
    quote:
      'I recommend Gavel to anyone who needs serious legal representation without the runaround. Truly exceptional service.',
    name: 'James Whitfield',
    role: 'Architect',
    photo: 'https://picsum.photos/seed/gavel-client-5/160/160',
  },
] as const

export const blogPosts = [
  {
    title: 'All you want to know about industrial laws',
    description:
      'A practical guide to the regulations that govern factories, warehouses, and the people who keep them running.',
    day: '15',
    month: '2019 August',
    image: 'https://picsum.photos/seed/gavel-blog-1/600/400',
  },
  {
    title: 'What is a legal case and how it works',
    description:
      'From filing to verdict — a step-by-step walk through the life of a civil case in plain language.',
    day: '22',
    month: '2019 July',
    image: 'https://picsum.photos/seed/gavel-blog-2/600/400',
  },
  {
    title: 'Top 10 law firm tips for new clients',
    description:
      'What to bring to the first meeting, what to ask, and how to get the most out of your attorney.',
    day: '08',
    month: '2019 June',
    image: 'https://picsum.photos/seed/gavel-blog-3/600/400',
  },
] as const

export const galleryImages = [
  'https://picsum.photos/seed/gavel-gallery-1/400/400',
  'https://picsum.photos/seed/gavel-gallery-2/400/400',
  'https://picsum.photos/seed/gavel-gallery-3/400/400',
  'https://picsum.photos/seed/gavel-gallery-4/400/400',
  'https://picsum.photos/seed/gavel-gallery-5/400/400',
  'https://picsum.photos/seed/gavel-gallery-6/400/400',
] as const

export const consultation = {
  eyebrow: 'Booking an Appointment',
  headline: 'Free Consultation',
  description:
    'Tell us a little about your situation and one of our attorneys will get back to you within one business day.',
  fields: {
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Message',
  },
  submitLabel: 'Send message',
  image: 'https://picsum.photos/seed/gavel-consult/1600/900',
} as const

export const newsletter = {
  headline: 'Subscribe to our Newsletter',
  placeholder: 'Enter your email address',
  submitLabel: 'Subscribe',
} as const

export const footer = {
  about:
    'Gavel is a full-service law firm committed to clear communication, honest advice, and relentless advocacy for every client we serve.',
  practiceLinks: [
    'Family Law',
    'Business Law',
    'Insurance Law',
    'Criminal Law',
    'Property Law',
    'Financial Law',
  ],
  hours: [
    { label: 'Monday – Friday', value: '9am to 20pm' },
    { label: 'Saturday', value: '9am to 17pm' },
    { label: 'Vacations', value: 'All Sunday Days, All Official Holidays' },
  ],
  contact: {
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+2 392 3929 210',
    email: 'info@gavel.example',
  },
} as const
