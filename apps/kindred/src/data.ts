export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Causes', href: '#causes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const services = [
  {
    title: 'Help & Support',
    blurb: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    title: 'Adoption',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Volunteering',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    title: 'Education',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
] as const

export const causes = [
  {
    title: 'Clean water for South Sudan',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    progress: 70,
  },
  {
    title: 'Home for Asias Child',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    progress: 75,
  },
  {
    title: 'Education for Asian School',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    progress: 40,
  },
] as const

export const blogEntries = [
  {
    title: 'Advocating on behalf of abused and neglected',
    date: 'Sept. 04, 2019',
    author: 'Admin',
    comments: 3,
    featured: true,
  },
  {
    title: 'Gathering Books for Children',
    date: 'Sept. 04, 2019',
    author: 'Admin',
    comments: 3,
    featured: false,
  },
  {
    title: 'Access to Clean Water',
    date: 'Sept. 04, 2019',
    author: 'Admin',
    comments: 3,
    featured: false,
  },
  {
    title: 'Super typhoon Haiyan Disaster Relief',
    date: 'Sept. 04, 2019',
    author: 'Admin',
    comments: 3,
    featured: false,
  },
] as const

export const testimonials = [
  { name: 'Fernando Obiga', role: 'Businessman' },
  { name: 'Jeffrey Blatch', role: 'Businessman' },
  { name: 'Henry Ford', role: 'Businessman' },
  { name: 'Jeff Chan', role: 'Businessman' },
  { name: 'Michael Bubble', role: 'Businessman' },
] as const

export const testimonyQuote =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export const infoLinks = ['Donation', 'Privacy', 'Terms Condition'] as const

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Who we are', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const contact = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
} as const
