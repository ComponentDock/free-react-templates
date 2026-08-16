export const brand = 'Wordwright'

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Blog Details', href: '#blog' },
      { label: 'Elements', href: '#blog' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  headline: 'Writing Texts That Inspire and Engage your Customers',
  kicker: "Hi, I'm Wordwright",
  intro: 'I Write Beautiful and Unmistakable Text.',
  ctaLabel: 'See My Offers',
  image: 'https://picsum.photos/seed/wordwright-hero/1600/900',
  portrait: 'https://picsum.photos/seed/wordwright-portrait/320/320',
  portraitAlt: 'Portrait of the copywriter',
}

export interface Service {
  title: string
  description: string
  icon: 'blogging' | 'seo' | 'email' | 'content'
}

export const servicesTitle = 'What I can write for you and your business'
export const servicesIntro =
  'Do you want to be seen on the internet? Clear, honest words are the fastest way there. Here is how I can help you sound like yourself — only sharper.'

export const services: Service[] = [
  {
    title: 'Blogging',
    description:
      'Consistent, engaging blog posts that keep your readers coming back and quietly build authority in your niche.',
    icon: 'blogging',
  },
  {
    title: 'SEO Articles',
    description:
      'Search-optimized articles researched and written to rank, attract, and convert the audience you actually want.',
    icon: 'seo',
  },
  {
    title: 'Email Marketing',
    description:
      'Persuasive campaigns and newsletters that nurture your leads and turn subscribers into loyal customers.',
    icon: 'email',
  },
  {
    title: 'Web Content Writing',
    description:
      'Clear, compelling website copy that communicates your value in seconds and drives visitors to act.',
    icon: 'content',
  },
]

export const quoteBand = {
  quote: '“Never underestimate the power of words to change the way people think and feel.”',
  paragraph:
    'Every project starts with listening. I dig into your business, your audience, and your goals — then I shape words that do more than fill a page: they move people to act.',
  signature: 'Wordwright',
  ctaLabel: 'Learn More',
  image: 'https://picsum.photos/seed/wordwright-visit/1200/850',
  imageAlt: 'Copywriter at work',
}

export interface Testimonial {
  quote: string
  name: string
  avatar: string
  avatarAlt: string
}

export const testimonialsTitle = 'What Our Client Says'
export const testimonials: Testimonial[] = [
  {
    quote:
      'Wordwright transformed our website copy — engagement is up and our customers finally understand what we do.',
    name: 'Amanda Foster',
    avatar: 'https://picsum.photos/id/64/160/160',
    avatarAlt: 'Amanda Foster',
  },
  {
    quote:
      'Every article arrived on time, perfectly researched, and ready to publish. Our blog has never performed better.',
    name: 'Daniel Reyes',
    avatar: 'https://picsum.photos/id/1027/160/160',
    avatarAlt: 'Daniel Reyes',
  },
  {
    quote:
      'The email sequences practically wrote themselves into results — a 40% open-rate lift in the very first month.',
    name: 'Priya Sharma',
    avatar: 'https://picsum.photos/id/823/160/160',
    avatarAlt: 'Priya Sharma',
  },
]

export const stories = {
  title: 'Read my exemplary stories',
  years: '25',
  yearsLabel: 'Years of Experience',
  image: 'https://picsum.photos/seed/wordwright-stories/1200/832',
  imageAlt: 'Hands writing in a notebook',
  items: [
    {
      title: 'Duis aute irure',
      description:
        'A short, personal story about the craft of writing — how a single sentence can reshape a brand voice.',
      meta: '2 min read',
      image: 'https://picsum.photos/seed/wordwright-story-1/600/400',
      imageAlt: 'Story one cover',
    },
    {
      title: 'Tempora incidunt ut',
      description:
        'Inside the writing process: research, drafting, and the edits that turn good copy into great copy.',
      meta: '3 min read',
      image: 'https://picsum.photos/seed/wordwright-story-2/600/400',
      imageAlt: 'Story two cover',
    },
  ],
}

export const footer = {
  headline: "Let's create the content that will engage, excite and inform.",
  ctaLabel: "Let's Start Discuss",
  socials: ['facebook', 'linkedin', 'instagram'] as const,
  links: ['Home', 'About', 'Services', 'Blog', 'Contact'],
  copyright: 'All rights reserved',
  madeWith: 'Made with ♥ by',
  componentDockLabel: 'Component Dock',
  componentDockHref: 'https://www.componentdock.com/',
}
