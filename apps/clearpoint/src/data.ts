/** Clearpoint portfolio template content. */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Works', href: '#works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroSlides = [
  {
    image: 'https://picsum.photos/seed/clearpoint-hero1/1920/1080',
    highlight: 'Creative',
    subtext:
      'We craft digital experiences that push boundaries and deliver measurable business impact.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-hero2/1920/1080',
    highlight: 'Strategic',
    subtext: 'Data-driven design thinking meets elegant execution for modern brands.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-hero3/1920/1080',
    highlight: 'Innovative',
    subtext: 'From concept to launch, we build products people love to use.',
  },
] as const

export const skillsData = [
  { name: 'UI/UX Design', percentage: 95 },
  { name: 'Web Development', percentage: 90 },
  { name: 'Branding & Identity', percentage: 85 },
  { name: 'Mobile Apps', percentage: 88 },
] as const

export const services = [
  {
    number: '01',
    title: 'Brand Strategy',
    blurb:
      'We define your brand position, voice, and visual identity to resonate with the right audience and stand out in crowded markets.',
  },
  {
    number: '02',
    title: 'Digital Design',
    blurb:
      'Pixel-perfect interfaces built for conversion. We design web and mobile products that look stunning and work flawlessly.',
  },
  {
    number: '03',
    title: 'Web Development',
    blurb:
      'Modern, performant web applications using React, TypeScript, and cutting-edge frameworks. Built to scale from day one.',
  },
] as const

export const stats = [
  { value: '2500', suffix: '+', label: 'Projects Completed' },
  { value: '350', suffix: '+', label: 'Happy Clients' },
  { value: '20', suffix: '+', label: 'Awards Won' },
] as const

export const cases = [
  {
    image: 'https://picsum.photos/seed/clearpoint-case1/800/600',
    title: 'E-Commerce Platform Redesign',
    blurb:
      'A complete overhaul of a retail platform, boosting conversion rates by 40% through improved UX and performance.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-case2/800/600',
    title: 'SaaS Dashboard Design',
    blurb:
      'An intuitive analytics dashboard for a B2B SaaS company, reducing user onboarding time by 60%.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-case3/800/600',
    title: 'Mobile Banking App',
    blurb:
      'A secure, elegant mobile banking experience that earned a 4.8-star rating across app stores.',
  },
] as const

export const solutions = [
  {
    image: 'https://picsum.photos/seed/clearpoint-sol1/600/400',
    title: 'Streamlined Operations',
    blurb: 'Optimize workflows with smart automation and data-driven process improvements.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-sol2/600/400',
    title: 'Growth Marketing',
    blurb: 'Performance-focused campaigns that drive qualified leads and measurable ROI.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-sol3/600/400',
    title: 'Product Development',
    blurb: 'From MVP to scale — we build products that users love and businesses can sustain.',
  },
  {
    image: 'https://picsum.photos/seed/clearpoint-sol4/600/400',
    title: 'Consulting & Advisory',
    blurb: 'Strategic guidance for digital transformation, technology selection, and team scaling.',
  },
] as const

export const footerNav = ['Home', 'About', 'Services', 'Works', 'Contact'] as const

export const footerServices = [
  'UI/UX Design',
  'Web Development',
  'Brand Strategy',
  'Mobile Solutions',
] as const
