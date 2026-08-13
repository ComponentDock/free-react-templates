export interface NavItem {
  label: string
  href: string
}

export type ServiceIcon = 'pen' | 'briefcase' | 'monitor' | 'layers'

export const brand = {
  name: 'Vitae',
  tagline: 'Personal CV Template',
}

export const navLeft: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'About', href: '#about-section' },
]

export const navRight: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio-section' },
  { label: 'Client', href: '#clients-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const hero = {
  heading: "I'm Ben Carson",
  lead: "I'm Web Developer Based on NY City",
  cta: 'Portfolio',
  href: '#portfolio-section',
  image: 'https://picsum.photos/seed/vitae-face/950/1100',
  alt: 'Portrait of Ben Carson',
}

export const services = {
  heading: 'My Services',
  items: [
    {
      title: 'UI/UX Designer',
      icon: 'pen' as const,
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'Web Development',
      icon: 'briefcase' as const,
      text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      title: 'Brand & Logo Design',
      icon: 'monitor' as const,
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      title: 'Web Design',
      icon: 'layers' as const,
      text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
  ],
}

export const about = {
  heading: 'About Me',
  image: 'https://picsum.photos/seed/vitae-about/600/750',
  alt: 'Portrait of Ben Carson in a light box',
  cta: 'Contact Me',
  href: '#contact-section',
  paragraphsLeft: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  paragraphsRight: [
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
  ],
}

export const portfolio = {
  heading: 'My Portfolio',
  items: [
    {
      title: 'Web — Concept',
      category: 'web' as const,
      image: 'https://picsum.photos/seed/vitae-p1/600/450',
    },
    {
      title: 'Brand — Identity',
      category: 'brand' as const,
      image: 'https://picsum.photos/seed/vitae-p2/600/450',
    },
    {
      title: 'Design — Poster',
      category: 'design' as const,
      image: 'https://picsum.photos/seed/vitae-p3/600/450',
    },
    {
      title: 'Web — Dashboard',
      category: 'web' as const,
      image: 'https://picsum.photos/seed/vitae-p4/600/450',
    },
    {
      title: 'Web — Storefront',
      category: 'web' as const,
      image: 'https://picsum.photos/seed/vitae-p5/600/450',
    },
    {
      title: 'Brand — Packaging',
      category: 'brand' as const,
      image: 'https://picsum.photos/seed/vitae-p6/600/450',
    },
    {
      title: 'Design — Editorial',
      category: 'design' as const,
      image: 'https://picsum.photos/seed/vitae-p7/600/450',
    },
    {
      title: 'Web — Landing',
      category: 'web' as const,
      image: 'https://picsum.photos/seed/vitae-p8/600/450',
    },
    {
      title: 'Web — Mobile App',
      category: 'web' as const,
      image: 'https://picsum.photos/seed/vitae-p9/600/450',
    },
  ],
}

export const testimonials = {
  heading: 'testimonials',
  items: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      name: 'Jean Smith',
    },
    {
      quote:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      name: 'Carl Spencer',
    },
    {
      quote:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text decided to leave for the far World of Grammar.',
      name: 'Ryan Peters',
    },
  ],
}

export const clients = {
  heading: 'Clients',
  logos: [
    { name: 'Advenza', image: 'https://picsum.photos/seed/vitae-c1/300/120' },
    { name: 'Brightside', image: 'https://picsum.photos/seed/vitae-c2/300/120' },
    { name: 'Corelia', image: 'https://picsum.photos/seed/vitae-c3/300/120' },
    { name: 'Datapulse', image: 'https://picsum.photos/seed/vitae-c4/300/120' },
    { name: 'Everline', image: 'https://picsum.photos/seed/vitae-c5/300/120' },
    { name: 'Frameworx', image: 'https://picsum.photos/seed/vitae-c6/300/120' },
  ],
}

export const contact = {
  heading: 'Contact Form',
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email address',
  subject: 'Subject of the message',
  message: 'Type your message here..',
  submit: 'Send Message',
}

export const footer = {
  addressTitle: 'Vitae Address',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Web App', href: '#services-section' },
        { label: 'Graphic', href: '#services-section' },
        { label: 'Branding', href: '#services-section' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Web App', href: '#services-section' },
        { label: 'Graphic', href: '#services-section' },
        { label: 'Branding', href: '#services-section' },
      ],
    },
    {
      heading: 'Links',
      links: [
        { label: 'Web App', href: '#services-section' },
        { label: 'Graphic', href: '#services-section' },
        { label: 'Branding', href: '#services-section' },
      ],
    },
  ],
  follow: 'Follow Me',
}
