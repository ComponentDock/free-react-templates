export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  image: 'https://picsum.photos/id/1050/1600/1000',
  headline: 'We Are The Best Consulting Agency',
  subtext:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
  ctaLabel: 'Get Started',
  ctaHref: '#about',
}

export const ctaSlides = [
  { image: 'https://picsum.photos/id/1015/1400/700' },
  { image: 'https://picsum.photos/id/1036/1400/700' },
  { image: 'https://picsum.photos/id/1055/1400/700' },
] as const

export const ctaPanel = {
  eyebrow: 'Creative Skills',
  headline: 'Create Your Own Web Masterpiece',
  subtext:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo! Aperiam velit reiciendis, eius impedit ea necessitatibus facilis.',
  readMoreLabel: 'Read More',
  readMoreHref: '#services',
}

export const team = {
  title: 'Our Dedicated Professionals',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, blanditiis.',
  members: [
    {
      name: 'Kaiara Spencer',
      role: 'Product Manager',
      image: 'https://picsum.photos/id/1027/600/800',
    },
    { name: 'Dave Simpson', role: 'UX Designer', image: 'https://picsum.photos/id/64/600/800' },
    {
      name: 'Ben Thompson',
      role: 'Frontend Developer',
      image: 'https://picsum.photos/id/823/600/800',
    },
    { name: 'Kyla Stewart', role: 'Marketing Lead', image: 'https://picsum.photos/id/996/600/800' },
    { name: 'Chris Stewart', role: 'Data Analyst', image: 'https://picsum.photos/id/453/600/800' },
    {
      name: 'Marcus Reed',
      role: 'Content Strategist',
      image: 'https://picsum.photos/id/22/600/800',
    },
    { name: 'Lucas Gray', role: 'Brand Designer', image: 'https://picsum.photos/id/177/600/800' },
    { name: 'Ava Torres', role: 'Sales Manager', image: 'https://picsum.photos/id/338/600/800' },
  ] as const,
}

export const approach = {
  introTitle: 'We Are The Best Consulting Agency',
  introText:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
  learnMoreLabel: 'Learn More',
  learnMoreHref: '#services',
  title: 'Our Approach',
  steps: [
    {
      number: '01',
      title: 'Creative',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      number: '02',
      title: 'Strategy',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      number: '03',
      title: 'Production',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
  ] as const,
}

export const services = {
  title: 'Our Services',
  items: [
    {
      title: 'Great Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      title: 'Time Saving',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      title: 'Quick Response',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      title: 'Best Support',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      title: 'Finest Quality',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      title: 'Real Solutions',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
  ] as const,
  learnMoreLabel: 'Learn More',
  learnMoreHref: '#contact',
}

export const testimonials = {
  title: 'Testimonials',
  items: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
      author: 'John Smith',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
      author: 'Christine Aguilar',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
      author: 'Robert Spears',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
      author: 'Bruce Rogers',
    },
  ] as const,
}

export const features = {
  title: "Consulting Agency It's Best",
  blocks: [
    {
      title: 'Web & Mobile Specialties',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
    {
      title: 'Intuitive Thinkers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
    },
  ] as const,
  learnMoreLabel: 'Learn More',
  learnMoreHref: '#contact',
}

export const blog = {
  eyebrow: 'BLOG',
  title: 'Our Blog Posts',
  posts: [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      tag: 'News',
      image: 'https://picsum.photos/id/1044/800/500',
      readMore: 'Continue Reading...',
      href: '#blog',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      tag: 'News',
      image: 'https://picsum.photos/id/1043/800/500',
      readMore: 'Continue Reading...',
      href: '#blog',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      tag: 'News',
      image: 'https://picsum.photos/id/1039/800/500',
      readMore: 'Continue Reading...',
      href: '#blog',
    },
  ] as const,
}

export const contact = {
  eyebrow: 'Contact',
  heading: 'Get In Touch',
  formTitle: 'Contact Form',
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
  },
  info: [
    {
      label: 'Address',
      value: '203 Fake St. Mountain View, San Francisco, California, USA',
    },
    { label: 'Phone', value: '+1 232 3235 324' },
    { label: 'Email Address', value: 'youremail@domain.com' },
  ] as const,
  error: 'Please fill in all fields with a valid email address.',
  success: 'Thanks! Your message has been sent.',
}

export const footer = {
  aboutTitle: 'About Us',
  aboutText:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eveniet, voluptatem harum provident iusto modi explicabo!',
  quickLinksTitle: 'Quick Links',
  quickLinks: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ] as const,
  newsletterTitle: 'Subscribe Newsletter',
  newsletterPlaceholder: 'Enter Email',
  newsletterButton: 'Send',
  newsletterError: 'Please enter a valid email address.',
  newsletterSuccess: 'Thanks for subscribing!',
  followUsTitle: 'Follow Us',
  copyright: '© 2026 Compass. All rights reserved.',
  creditPrefix: 'Made with',
  creditLabel: 'Component Dock',
  creditHref: 'https://www.componentdock.com/',
}
