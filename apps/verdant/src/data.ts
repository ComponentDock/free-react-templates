/** Verdant — single-page template-showcase landing.
 *  Section copy mirrors the reference design's content kinds; the brand
 *  line is "Verdant" (never the source name) and the footer links
 *  Component Dock. Images are deterministic picsum.photos placeholders. */

export const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const aboutDropdown = [
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Why Choose Us', href: '#why-us' },
  {
    label: 'Sub Menus',
    href: '#sub-menus',
    children: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Why Choose Us', href: '#why-us' },
    ],
  },
] as const

export const heroSlides = [
  {
    image: 'https://picsum.photos/id/28/1600/900',
    headline: 'Welcome to Verdant',
  },
  {
    image: 'https://picsum.photos/id/1039/1600/900',
    headline: 'Free Website Templates',
  },
] as const

export const features = [
  {
    icon: 'coins',
    title: 'Increase Revenue',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'chart',
    title: 'Analytics',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove.',
  },
  {
    icon: 'award',
    title: '3 Years Experience',
    blurb:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
  },
  {
    icon: 'package',
    title: 'Free Package',
    blurb:
      'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc.',
  },
] as const

export const siteHalves = [
  {
    image: 'https://picsum.photos/seed/verdant-half-1/900/700',
    eyebrow: 'Outstanding Services',
    heading: 'Clean Design',
    paragraphs: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    ],
  },
  {
    image: 'https://picsum.photos/seed/verdant-half-2/900/700',
    eyebrow: 'Easy To Use Templates',
    heading: 'Free Website Templates',
    paragraphs: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    ],
  },
] as const

export const products = [
  { image: 'https://picsum.photos/seed/verdant-prod-1/600/450', title: 'Pixel Perfect' },
  {
    image: 'https://picsum.photos/seed/verdant-prod-2/600/450',
    title: 'Template Under CCA 3.0 Unported',
  },
  { image: 'https://picsum.photos/seed/verdant-prod-3/600/450', title: 'Useful Web Templates' },
  { image: 'https://picsum.photos/seed/verdant-prod-4/600/450', title: 'HTML5 / CSS3' },
  { image: 'https://picsum.photos/seed/verdant-prod-5/600/450', title: 'Bootstrap 4' },
  { image: 'https://picsum.photos/seed/verdant-prod-6/600/450', title: 'SCSS' },
] as const

export const counters = [
  { value: 4500, caption: 'Current Downloads' },
  { value: 120, caption: 'Number of Templates' },
] as const

export const testimonials = [
  {
    image: 'https://picsum.photos/seed/verdant-person-1/200/200',
    name: 'Katie Johnson',
    quote:
      '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”',
  },
  {
    image: 'https://picsum.photos/seed/verdant-person-2/200/200',
    name: 'Jun Mars',
    quote:
      '“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.”',
  },
  {
    image: 'https://picsum.photos/seed/verdant-person-3/200/200',
    name: 'Shane Holmes',
    quote:
      '“One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.”',
  },
  {
    image: 'https://picsum.photos/seed/verdant-person-4/200/200',
    name: 'Mark Johnson',
    quote:
      '“The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc.”',
  },
] as const

export const blogPosts = [
  {
    image: 'https://picsum.photos/seed/verdant-blog-1/600/450',
    title: 'Where Do You Learn HTML & CSS in 2019?',
    meta: 'By James — Jan. 20, 2019',
  },
  {
    image: 'https://picsum.photos/seed/verdant-blog-2/600/450',
    title: 'Where Do You Learn HTML & CSS in 2019?',
    meta: 'By James — Jan. 20, 2019',
  },
  {
    image: 'https://picsum.photos/seed/verdant-blog-3/600/450',
    title: 'Where Do You Learn HTML & CSS in 2019?',
    meta: 'By James — Jan. 20, 2019',
  },
] as const

export const footerAbout =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const quickMenu = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacts', href: '#contact' },
  { label: 'Privacy', href: '#privacy' },
] as const

export const freeTemplates = [
  { label: 'HTML5 / CSS3', href: '#html5-css3' },
  { label: 'Clean Design', href: '#clean-design' },
  { label: 'Responsive', href: '#responsive' },
  { label: 'Multi Purpose Template', href: '#multi-purpose' },
] as const

export const socialLinks = [
  { name: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
  { name: 'twitter', href: 'https://twitter.com', label: 'Twitter' },
  { name: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
  { name: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
] as const
