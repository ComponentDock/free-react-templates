/* Veinly — mining company landing page data.
   Copy kinds mirror the reference preview (corporate mining landing):
   nav labels, hero slides, investors copy, stats counters, team members,
   press items, testimonials, blog posts, contact info, footer widgets. */

export const brand = {
  name: 'Veinly',
  tagline: 'Mining Company',
}

export interface NavItem {
  label: string
  href: string
}

export const navLinks: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Investors', href: '#investors-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'Press', href: '#press-section' },
  { label: 'Testimonials', href: '#testimonials-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export interface HeroSlide {
  image: string
  headline: string
  paragraph: string
}

export const heroSlides: HeroSlide[] = [
  {
    image: 'https://picsum.photos/seed/veinly-hero-1/1920/1080',
    headline: 'Best Miners In The World',
    paragraph:
      'Veinly runs safe, modern mines with decades of engineering know-how — extracting value from the earth while protecting the people and places around every site.',
  },
  {
    image: 'https://picsum.photos/seed/veinly-hero-2/1920/1080',
    headline: 'Modern Mining, Measured Results',
    paragraph:
      'From exploration to export, our teams deliver the metals and minerals the world depends on — with transparent reporting every step of the way.',
  },
]

export const investors = {
  heading: 'Our Investors',
  paragraph:
    'We work with partners who share our long view: patient capital, rigorous engineering and communities that grow stronger with every project we open.',
}

export interface Counter {
  value: string
  caption: string
}

export const counters: Counter[] = [
  { value: '15', caption: 'Year of Experience' },
  { value: '392', caption: 'Number of Engineers' },
  { value: '39332', caption: 'Number of Employees' },
  { value: '53500', caption: 'Number of Golds' },
]

export interface TeamMember {
  name: string
  role: string
  blurb: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Jean Smith',
    role: 'Mining Expert',
    blurb:
      'Jean leads our geology teams, with two decades spent mapping and developing some of the most productive deposits in the region.',
    image: 'https://picsum.photos/seed/veinly-team-1/600/600',
  },
  {
    name: 'Bob Carry',
    role: 'Project Manager',
    blurb:
      'Bob keeps complex mine builds on schedule and on budget, coordinating contractors, equipment and safety across every site.',
    image: 'https://picsum.photos/seed/veinly-team-2/600/600',
  },
  {
    name: 'Ricky Fisher',
    role: 'Engineer',
    blurb:
      'Ricky designs the underground systems that keep our operations running — ventilation, drainage and power, engineered for safety first.',
    image: 'https://picsum.photos/seed/veinly-team-3/600/600',
  },
]

export interface PressItem {
  title: string
  date: string
  excerpt: string
}

export const pressItems: PressItem[] = [
  {
    title: 'How To Invest In Mining Industry',
    date: 'Apr 19, 2019',
    excerpt:
      'A practical guide to evaluating mining companies — what the balance sheet hides, and where the real risks and returns live.',
  },
  {
    title: 'The Future of Sustainable Extraction',
    date: 'Mar 2, 2019',
    excerpt:
      'Lower-impact drilling, electrified haulage and smarter water management are reshaping what a responsible mine looks like.',
  },
  {
    title: 'Community Partnerships That Work',
    date: 'Jan 14, 2019',
    excerpt:
      'The best projects start with local buy-in. Here is how we structure agreements that benefit everyone around our sites.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Veinly delivered exactly what our board asked for — on time, on budget, and with safety standards that set the bar for the whole sector.',
    name: 'Ricky Fisher',
    image: 'https://picsum.photos/seed/veinly-test-1/140/140',
  },
  {
    quote:
      'Their reporting is transparent and their engineers are superb. We have renewed our partnership three years running.',
    name: 'Ken Davis',
    image: 'https://picsum.photos/seed/veinly-test-2/140/140',
  },
  {
    quote:
      'The team handled a complex site transition flawlessly. Local communities and regulators both came away impressed.',
    name: 'Mellisa Griffin',
    image: 'https://picsum.photos/seed/veinly-test-3/140/140',
  },
  {
    quote:
      'From exploration data to export logistics, Veinly thinks in decades. Exactly the partner our fund looks for.',
    name: 'Robert Steward',
    image: 'https://picsum.photos/seed/veinly-test-4/140/140',
  },
]

export interface BlogPost {
  title: string
  meta: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'How to Invest In Mining Industry',
    meta: 'January 18, 2019 By James Cooper',
    excerpt:
      'A plain-English breakdown of mining economics, the metrics that matter, and the questions to ask before you commit a dollar.',
    image: 'https://picsum.photos/seed/veinly-blog-1/900/600',
  },
  {
    title: 'Safety First: Inside Our Newest Mine',
    meta: 'December 5, 2018 By Laura Evans',
    excerpt:
      'Automated monitoring, reinforced shafts and a culture where every worker can stop the line — a tour of our flagship operation.',
    image: 'https://picsum.photos/seed/veinly-blog-2/900/600',
  },
]

export const phoneLine = '+1 392 3929 482'

export const footerFeatures = [
  'About Us',
  'Press Releases',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
]
