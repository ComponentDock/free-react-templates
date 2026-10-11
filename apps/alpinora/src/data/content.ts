export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Faq', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const PAGES_DROPDOWN = [
  { label: 'Generic', href: '#' },
  { label: 'Elements', href: '#' },
] as const

export const HERO_SLIDES = [
  {
    image: 'https://picsum.photos/seed/alpinora-hero-1/1920/1080',
    eyebrow: 'Discover the Colorful World',
    title: 'New Adventure',
    text: 'From cliffside coastal trails to alpine meadows, we map out journeys that stay with you long after the trip ends.',
  },
  {
    image: 'https://picsum.photos/seed/alpinora-hero-2/1920/1080',
    eyebrow: 'Discover the Colorful World',
    title: 'New Trip',
    text: 'Small groups, local guides, and carefully paced itineraries — travel that feels effortless from the first step.',
  },
  {
    image: 'https://picsum.photos/seed/alpinora-hero-3/1920/1080',
    eyebrow: 'Discover the Colorful World',
    title: 'New Experience',
    text: 'Wake up somewhere new every morning and let the landscape set the schedule. Your next story starts here.',
  },
] as const

export const ABOUT = {
  title: 'Why Choose Us Your Fitness Builder',
  subtitle: 'Who are in extremely love with eco friendly system.',
  headingLines: ['We Realize that', 'there are reduced', 'Wastege Stand out'],
  paragraphs: [
    'Thoughtful planning is what turns a good trip into a great one. Our team scouts every route, season, and stay so you can focus on the view instead of the logistics.',
    'We keep groups small and itineraries flexible. That means fewer queues, more local flavor, and room to linger when a place deserves it.',
    'Sustainability is not a slogan for us — we partner with local operators, leave trails cleaner than we found them, and offset what we cannot avoid.',
  ],
  image: 'https://picsum.photos/seed/alpinora-about/900/700',
} as const

export const PROJECTS = {
  title: 'Latest Project on the go',
  subtitle:
    'Every journey we design becomes a project of its own — here are a few recent adventures, from coastal traverses to high-mountain escapes.',
  items: Array.from({ length: 5 }, (_, i) => ({
    image: `https://picsum.photos/seed/alpinora-project-${i + 1}/800/600`,
    title: 'Vector Illustration',
    text: 'LCD screens are uniquely modern in style, and the liquid crystals inside have let humanity build slimmer, more portable technology.',
  })),
} as const

export const FEATURES = {
  title: 'Some Features that Made us Unique',
  subtitle: 'Who are in extremely love with eco friendly system.',
  items: [
    {
      title: 'Expert Technicians',
      text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    },
    {
      title: 'Professional Service',
      text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    },
    {
      title: 'Great Support',
      text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    },
    {
      title: 'Technical Skills',
      text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    },
    {
      title: 'Highly Recomended',
      text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    },
    {
      title: 'Positive Reviews',
      text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    },
  ],
} as const

export const GALLERY_IMAGES = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/alpinora-gallery-${i + 1}/800/500`,
  alt: `Alpinora gallery photo ${i + 1}`,
}))

export const FAQ = {
  title: 'Frequently Asked Questions',
  subtitle: 'Who are in extremely love with eco friendly system.',
  facts: [
    { value: '5962', label: 'Projects Completed' },
    { value: '2394', label: 'New Projects' },
    { value: '1439', label: 'Tickets Submitted' },
    { value: '933', label: 'Cup of Coffee' },
  ],
  questions: [
    {
      question: 'Are your Templates responsive?',
      answer:
        'Every layout is built mobile-first and tested from 320px to 1920px, so sections stack, scale, and stay readable on any screen.',
    },
    {
      question: 'Does it have all the plugin as mentioned?',
      answer:
        'Sliders, accordions, and popovers ship as lightweight React components — no extra plugins to install or licenses to track.',
    },
    {
      question: 'Can i use the these theme for my client?',
      answer:
        'Yes. Every template is free for personal and commercial projects, including client work, with no attribution required.',
    },
  ],
} as const

export const VIDEO = {
  title: 'Being unique is the preference',
  subtitle: 'Youtube video will appear in popover',
} as const

export const FOOTER = {
  about:
    'Alpinora builds free, production-ready travel templates for the modern web — designed with care, released for everyone, and backed by a community of makers.',
  newsletterBlurb: 'Stay update with our latest',
  socialBlurb: 'Let us be social',
} as const
