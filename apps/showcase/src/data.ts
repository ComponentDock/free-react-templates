/* Showcase — content model for the personal-portfolio template.
   All copy is paraphrased from the source design's content *types*
   (headline + subtext + CTA, card title + blurb + meta); no source
   assets or brand strings are reproduced. */

export const skipLabel = 'Skip to main content'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-section' },
  { label: 'Resume', href: '#resume-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Projects', href: '#projects-section' },
  { label: 'My Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

export const heroName = 'Alex Rivera'

export const rotatingRoles = [
  'Web Designer.',
  'Developer.',
  'Photographer.',
  'Marketer.',
  'Blogger',
] as const

export const aboutParagraph =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

export const aboutDetails = [
  { label: 'Name', value: 'Alex Rivera' },
  { label: 'Date of birth', value: 'November 28, 2002' },
  { label: 'Address', value: 'San Francisco CA 97987 USA' },
  { label: 'Zip code', value: '1000' },
  { label: 'Email', value: 'alex@showcase.dev' },
  { label: 'Phone', value: '+1-2234-5678-9-0' },
] as const

export const partnerLogos = ['Acme', 'Globex', 'Initech', 'Umbra', 'Nimbus'] as const

export const resumeTabs = ['Education', 'Experience', 'Skills', 'Awards'] as const

export interface ResumeEntry {
  date: string
  title: string
  org: string
  blurb: string
}

export const educationEntries: readonly ResumeEntry[] = [
  {
    date: '2024-2028',
    title: 'Bachelor of Science in Computer Science',
    org: 'Stanford University',
    blurb: 'Core systems, algorithms, and human-computer interaction foundations.',
  },
  {
    date: '2028-2030',
    title: "Master's in Human-Computer Interaction",
    org: 'MIT Media Lab',
    blurb: 'Research-focused degree on interface design and interactive systems.',
  },
  {
    date: '2022-2023',
    title: 'UX Design Professional Certificate',
    org: 'Google Career Certificates',
    blurb: 'Practical design process: research, wireframing, prototyping, testing.',
  },
  {
    date: '2030-2032',
    title: 'Art & Creative Director',
    org: 'Cambridge University',
    blurb: 'Advanced studies in visual communication and creative direction.',
  },
]

export const experienceEntries: readonly ResumeEntry[] = [
  {
    date: '2030-2032',
    title: 'Software Developer',
    org: 'Cambridge University',
    blurb: 'Built and shipped web applications across the full stack.',
  },
  {
    date: '2030-2032',
    title: 'Web Designer',
    org: 'Cambridge University',
    blurb: 'Designed responsive, accessible interfaces for product teams.',
  },
  {
    date: '2030-2032',
    title: 'Web Marketing',
    org: 'Cambridge University',
    blurb: 'Planned and ran growth campaigns for digital products.',
  },
  {
    date: '2030-2032',
    title: 'Art & Creative Director',
    org: 'Cambridge University',
    blurb: 'Led the visual direction of brand and product work.',
  },
  {
    date: '2030-2032',
    title: 'WordPress Developer',
    org: 'Cambridge University',
    blurb: 'Custom themes and plugins for content-driven sites.',
  },
  {
    date: '2028-2030',
    title: 'UI/UX Designer',
    org: 'Side Tech',
    blurb: 'End-to-end product design for a fast-moving tech studio.',
  },
]

export interface CircularSkill {
  label: string
  pct: number
  level: string
}

export const circularSkills: readonly CircularSkill[] = [
  { label: 'CSS3', pct: 90, level: 'Advanced' },
  { label: 'HTML5', pct: 95, level: 'Expert' },
  { label: 'JavaScript', pct: 85, level: 'Advanced' },
]

export interface LinearSkill {
  label: string
  pct: number
}

export const linearSkills: readonly LinearSkill[] = [
  { label: 'Photoshop', pct: 90 },
  { label: 'jQuery', pct: 85 },
  { label: 'HTML5', pct: 95 },
  { label: 'CSS3', pct: 90 },
  { label: 'WordPress', pct: 70 },
  { label: 'SEO', pct: 80 },
]

export const awardEntries: readonly ResumeEntry[] = [
  {
    date: '2030-2032',
    title: 'Top 10 Web Developer',
    org: 'Cambridge University',
    blurb: 'Recognized for outstanding full-stack delivery in a national cohort.',
  },
  {
    date: '2030-2032',
    title: 'Top 5 Leadership Excellence Winner',
    org: 'Cambridge University',
    blurb: 'Awarded for leading cross-functional product teams.',
  },
  {
    date: '2030-2032',
    title: 'Top 4 Web Tester',
    org: 'Cambridge University',
    blurb: 'Honored for rigorous, accessible quality assurance work.',
  },
  {
    date: '2030-2032',
    title: 'Art & Creative Director',
    org: 'Cambridge University',
    blurb: 'Excellence prize for creative direction and visual design.',
  },
]

export const counters = [
  { label: 'Awards', value: 100 },
  { label: 'Projects', value: 1200 },
  { label: 'Clients', value: 1200 },
  { label: 'Coffees', value: 500 },
] as const

export const blogPosts = [
  {
    image: 'https://picsum.photos/seed/showcase-blog-1/600/400',
    date: 'March 10, 2032',
    author: 'Admin',
    comments: 3,
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    image: 'https://picsum.photos/seed/showcase-blog-2/600/400',
    date: 'March 12, 2032',
    author: 'Admin',
    comments: 5,
    title: 'Design Systems That Scale With Your Team',
    excerpt:
      'There live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
  },
  {
    image: 'https://picsum.photos/seed/showcase-blog-3/600/400',
    date: 'March 15, 2032',
    author: 'Admin',
    comments: 2,
    title: 'Measuring the Impact of a Strong Portfolio',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export const contactInfo = [
  { label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016' },
  { label: 'Phone', value: '+1 235 2355 98' },
  { label: 'Email', value: 'info@showcase.dev' },
  { label: 'Website', value: 'showcase.dev' },
] as const

export const footerBlurb =
  'Showcase is a clean, modern portfolio template for designers, developers, and creative professionals.'

export const footerLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'] as const

export const footerServices = [
  'Web Design',
  'Web Development',
  'Business Strategy',
  'Data Analysis',
  'Graphic Design',
] as const

export const questionsContact = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@showcase.dev',
} as const
