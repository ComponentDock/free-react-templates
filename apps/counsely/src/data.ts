/** Central content + image sources for the Counsely law-firm landing page.
 *  Placeholder photos are deterministic picsum seeds (no copied assets);
 *  copy is paraphrased from the original reference design. */

export const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about', active: false },
  { label: 'Attorneys', href: '#attorneys', active: false },
  { label: 'Practice Areas', href: '#practice', active: false },
  { label: 'Case Studies', href: '#cases', active: false },
  { label: 'Blog', href: '#blog', active: false },
  { label: 'Contact', href: '#contact', active: false },
] as const

export const brand = {
  name: 'COUNSELY',
  tagline: 'A Law Firm Agency',
} as const

export const hero = {
  eyebrow: 'Welcome To Counsely',
  headline: 'Attorneys Fighting For Your',
  rotatingWords: ['Freedom.', 'Rights.', 'Case.', 'Custody.'],
  description:
    'For over four decades our attorneys have stood beside families and businesses, protecting what matters most with steady, experienced counsel.',
  cta: { label: 'Get Legal Advice', href: '#contact' },
  image: 'https://picsum.photos/id/1027/1600/900',
} as const

export const services = {
  eyebrow: 'Services',
  headline: 'Why Select Us?',
  description:
    'We are a full-service firm built on preparation, integrity, and results. Every engagement gets senior attention from the first consultation to the final ruling.',
  cta: { label: 'Free Consultation', href: '#contact' },
  cards: [
    {
      icon: 'Scale',
      title: 'Fight for Justice',
      description:
        'Aggressive, principled advocacy when the stakes are highest — in the courtroom and at the negotiating table.',
    },
    {
      icon: 'Briefcase',
      title: 'Best Case Strategy',
      description:
        'Every matter is mapped end to end so you understand the options, the risks, and the path most likely to succeed.',
    },
    {
      icon: 'Gavel',
      title: 'Experienced Attorney',
      description:
        'Decades of trial and transaction experience stand behind every piece of advice we give you.',
    },
  ],
} as const

export const justice = {
  eyebrow: 'Welcome to Counsely',
  headline: 'We Always Fight For Your Justice to Win',
  description:
    'Our firm was founded on a simple belief: every client deserves a legal team that treats their case as if it were their own. That belief still guides the firm today.',
  image: 'https://picsum.photos/seed/counsely-about/720/640',
  videoLabel: 'Watch our firm video',
  tabs: [
    {
      label: 'Our Mission',
      content:
        'To deliver decisive, honest counsel to every client — pairing rigorous preparation with genuine personal attention from the first meeting to the final judgment.',
    },
    {
      label: 'Our Vision',
      content:
        'A firm where justice is accessible: clear fees, plain-language advice, and attorneys who measure success by the outcomes their clients actually receive.',
    },
    {
      label: 'Our Value',
      content:
        'Integrity before convenience. We tell you what the law says, not what you want to hear, and we fight just as hard once the advice is given.',
    },
  ],
  counterValue: 40,
  counterLabel: 'Years of Experienced',
} as const

export const cases = {
  eyebrow: 'Explore Case Studies',
  headline: '1000+ Completed Cases Successfully',
  cta: { label: 'See All Successful Cases', href: '#cases' },
  cards: [
    {
      title: 'Legal Separation',
      category: 'Family Law',
      image: 'https://picsum.photos/seed/counsely-case-1/640/480',
    },
    {
      title: 'Corporate Defense',
      category: 'Business Law',
      image: 'https://picsum.photos/seed/counsely-case-2/640/480',
    },
    {
      title: 'Insurance Recovery',
      category: 'Insurance Law',
      image: 'https://picsum.photos/seed/counsely-case-3/640/480',
    },
    {
      title: 'Criminal Acquittal',
      category: 'Criminal Law',
      image: 'https://picsum.photos/seed/counsely-case-4/640/480',
    },
  ],
} as const

export const attorneys = {
  eyebrow: 'Our Attorney',
  headline: 'Our Legal Attorneys',
  members: [
    {
      name: 'Ryan Anderson',
      role: 'Civil Lawyer',
      photo: 'https://picsum.photos/id/1027/480/640',
      quote:
        'Preparation is the quiet half of every victory — I never step into a room without knowing the file backwards.',
    },
    {
      name: 'Greg Washer',
      role: 'Criminal Lawyer',
      photo: 'https://picsum.photos/id/64/480/640',
      quote:
        'A fair trial is the foundation of a free society. My job is to make sure the process works for my client.',
    },
    {
      name: 'Tony Henderson',
      role: 'Family Lawyer',
      photo: 'https://picsum.photos/id/823/480/640',
      quote:
        'Families come to us at their hardest moments. We answer with discretion, speed, and a steady hand.',
    },
    {
      name: 'Jack Smith',
      role: 'Business Lawyer',
      photo: 'https://picsum.photos/id/996/480/640',
      quote:
        'The best contracts are the ones that never see a courtroom. We draft with the fight already in mind.',
    },
  ],
} as const

export const consultation = {
  eyebrow: 'Booking an Appointment',
  headline: 'Free Consultation',
  description:
    'Tell us about your situation and a senior attorney will call you back — no obligation, no pressure, no fee for the first conversation.',
  image: 'https://picsum.photos/seed/counsely-consult/1600/900',
  fields: {
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Message',
  },
  submitLabel: 'Send message',
  successMessage: 'Thank you — we will get back to you shortly.',
} as const

export const testimonials = {
  eyebrow: 'Testimonial',
  headline: 'Happy Clients',
  slides: [
    {
      quote:
        'They took a case two other firms had turned down and won it cleanly. The communication through every step was remarkable.',
      name: 'Roger Scott',
      position: 'Business Owner',
      photo: 'https://picsum.photos/seed/counsely-avatar-1/96/96',
    },
    {
      quote:
        'Clear advice, honest fees, and a result we could finally move on from. I would not hesitate to recommend them.',
      name: 'Amanda Reyes',
      position: 'Marketing Manager',
      photo: 'https://picsum.photos/seed/counsely-avatar-2/96/96',
    },
    {
      quote:
        'From the first call I felt like their only client. They explained everything and never once talked down to us.',
      name: 'David Okafor',
      position: 'Entrepreneur',
      photo: 'https://picsum.photos/seed/counsely-avatar-3/96/96',
    },
  ],
} as const

export const blogPosts = {
  eyebrow: 'Blog',
  headline: 'Recent Blog',
  posts: [
    {
      title: 'All you want to know about industrial laws',
      excerpt:
        'A practical tour of the statutes that govern factories, supply chains, and workplace liability — and what they mean for your business.',
      day: '18',
      month: 'October',
      year: '2024',
      image: 'https://picsum.photos/seed/counsely-blog-1/640/420',
    },
    {
      title: 'Five questions to ask before signing a lease',
      excerpt:
        'Commercial leases hide their costs in the fine print. Ask these five questions before you put pen to paper.',
      day: '07',
      month: 'August',
      year: '2024',
      image: 'https://picsum.photos/seed/counsely-blog-2/640/420',
    },
    {
      title: 'What to do immediately after an accident',
      excerpt:
        'The first hours after an accident shape your whole claim. Here is the checklist our attorneys hand every new client.',
      day: '22',
      month: 'June',
      year: '2024',
      image: 'https://picsum.photos/seed/counsely-blog-3/640/420',
    },
  ],
} as const

export const newsletter = {
  headline: 'Subscribe to our Newsletter',
  placeholder: 'Enter email address',
  submitLabel: 'Subscribe',
  successMessage: 'Thank you for subscribing — watch your inbox.',
} as const

export const practiceAreasLinks = [
  'Family Law',
  'Business Law',
  'Insurance Law',
  'Criminal Law',
  'Drug Offenses',
  'Fire Accident',
  'Employment Law',
  'Property Law',
] as const

export const contact = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
  openingDays: ['Monday – Friday : 9am to 20 pm', 'Saturday : 9am to 17 pm'],
  vacations: ['All Sunday Days', 'All Official Holidays'],
} as const
