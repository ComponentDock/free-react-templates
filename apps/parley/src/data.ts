/** Parley — one-page consulting-agency landing copy and imagery.
 *  Section copy keeps the same content kinds as the reference design;
 *  images are seeded placeholders (picsum) chosen for subject fit. */

export const brand = {
  name: 'Parley',
  tagline: 'Consulting Agency',
} as const

export const topBar = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
} as const

/** tel: href is computed at runtime from the spaced display string. */
export const phoneHref = `tel:${topBar.phone.replace(/\D/g, '')}`

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroSlides = [
  {
    subheading: 'Parley Consulting',
    heading: 'We Are The Best Consulting Agency',
    image: 'https://picsum.photos/seed/parley-hero-1/1920/1080',
  },
  {
    subheading: 'Parley Consulting',
    heading: 'We Help to Grow Your Business',
    image: 'https://picsum.photos/seed/parley-hero-2/1920/1080',
  },
] as const

export const heroCta = 'Our Services'

export const guidanceOptions = [
  'Select Guidance',
  'Finance',
  'Business',
  'Auto Loan',
  'Real Estate',
  'Other Services',
] as const

export const consultServices = [
  {
    title: 'Business Solution',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: 'briefcase',
  },
  {
    title: 'Financial Analysis',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: 'chart',
  },
  {
    title: 'Marketing Strategy',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: 'pie',
  },
  {
    title: 'Investment Planning',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: 'trending',
  },
] as const

export type ServiceIcon = (typeof consultServices)[number]['icon']

export const introBand = {
  heading: 'You Always Get the Best Guidance',
  quoteLink: 'Request A Quote',
  servicesCta: 'Our Services',
  background: 'https://picsum.photos/seed/parley-intro/1920/800',
} as const

export const about = {
  subheading: 'Welcome to Parley',
  heading: 'The Smartest Thing To Do With Your Consulting Business',
  lead: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  image: 'https://picsum.photos/seed/parley-about/700/800',
  tabs: [
    {
      label: 'Our Mission',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    },
    {
      label: 'Our Vision',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
    {
      label: 'Our Value',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum.',
    },
  ],
  counters: [
    { value: 1387, label: 'Happy Clients', icon: 'smile' },
    { value: 310, label: 'Success Reports', icon: 'report' },
    { value: 35, label: 'Experienced', icon: 'award' },
  ],
} as const

export const caseStudies = {
  subheading: 'Projects Done',
  heading: 'Case Studies',
  intro:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  items: [
    {
      category: 'Consulting',
      title: 'Consultacy Solutions',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      image: 'https://picsum.photos/seed/parley-project-1/800/600',
    },
    {
      category: 'Marketing',
      title: 'Consultacy Solutions',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      image: 'https://picsum.photos/seed/parley-project-2/800/600',
    },
    {
      category: 'Financing',
      title: 'Consultacy Solutions',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      image: 'https://picsum.photos/seed/parley-project-3/800/600',
    },
    {
      category: 'Audit & Taxes',
      title: 'Consultacy Solutions',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      image: 'https://picsum.photos/seed/parley-project-4/800/600',
    },
    {
      category: 'Financing',
      title: 'Consultacy Solutions',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      image: 'https://picsum.photos/seed/parley-project-5/800/600',
    },
    {
      category: 'Real Estate',
      title: 'Consultacy Solutions',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      image: 'https://picsum.photos/seed/parley-project-6/800/600',
    },
  ],
  cta: 'Request Quote',
} as const

export const whyChooseUs = {
  subheading: 'Services',
  heading: 'Why Choose Us?',
  intro:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  items: [
    {
      title: 'Business Analysis',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: 'search',
    },
    {
      title: 'Business Consulting',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: 'briefcase',
    },
    {
      title: 'Business Insurance',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: 'shield',
    },
    {
      title: 'Global Investigation',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: 'globe',
    },
    {
      title: 'Audit & Evaluation',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: 'clipboard',
    },
    {
      title: 'Marketing Strategy',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: 'trending',
    },
  ],
} as const

export type WhyIcon = (typeof whyChooseUs.items)[number]['icon']

export const testimonials = {
  subheading: 'Testimonies',
  heading: 'Our Clients Says',
  intro:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  items: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Racky Henderson',
      position: 'Father',
      image: 'https://picsum.photos/seed/parley-client-1/120/120',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Henry Dee',
      position: 'Businesswoman',
      image: 'https://picsum.photos/seed/parley-client-2/120/120',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Mark Huff',
      position: 'Businesswoman',
      image: 'https://picsum.photos/seed/parley-client-3/120/120',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Rodel Golez',
      position: 'Businesswoman',
      image: 'https://picsum.photos/seed/parley-client-4/120/120',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Ken Bosh',
      position: 'Businesswoman',
      image: 'https://picsum.photos/seed/parley-client-5/120/120',
    },
  ],
} as const

export const blog = {
  subheading: 'Blog Posts',
  heading: 'Recent Blog',
  intro:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  posts: [
    {
      day: '15',
      month: 'Oct.',
      year: '2019',
      title: 'Finance And Legal Working Streams Occur Throughout',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      meta: 'Admin · 3',
      image: 'https://picsum.photos/seed/parley-blog-1/800/500',
    },
    {
      day: '15',
      month: 'Oct.',
      year: '2019',
      title: 'Finance And Legal Working Streams Occur Throughout',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      meta: 'Admin · 3',
      image: 'https://picsum.photos/seed/parley-blog-2/800/500',
    },
    {
      day: '15',
      month: 'Oct.',
      year: '2019',
      title: 'Finance And Legal Working Streams Occur Throughout',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
      meta: 'Admin · 3',
      image: 'https://picsum.photos/seed/parley-blog-3/800/500',
    },
  ],
  readMore: 'Read More',
} as const

export const footer = {
  questionsHeading: 'Have a Questions?',
  linksHeading: 'Links',
  links: ['Home', 'About', 'Services', 'Projects', 'Contact'],
  recentBlogHeading: 'Recent Blog',
  recentBlog: [
    {
      title: 'Even the all-powerful Pointing has no control about',
      meta: 'Oct. 16, 2019 · Admin · 19',
    },
    {
      title: 'Even the all-powerful Pointing has no control about',
      meta: 'Oct. 16, 2019 · Admin · 19',
    },
  ],
  newsletterHeading: 'Subscribe Us!',
  newsletterPlaceholder: 'Enter email address',
  newsletterButton: 'Subscribe',
  newsletterSuccess: 'Thank you for subscribing!',
} as const

export const socials = ['Facebook', 'Twitter', 'Googleplus'] as const

export type SocialName = (typeof socials)[number]
