// Salus — single-page medical & hospital template.
// Brand palette: #009DFF brand blue, #0181f5→#5db2ff CTA gradient,
// #5DB2FF/#83C4FF light blues, #F5FBFF tint, #1F1F1F ink, #727272 body.

export const contact = {
  email: 'info@salusmed.com',
  phoneTop: '160160',
  phoneServices: '+10 672 356 3567',
  phoneEmergency: '+10 378 4673 467',
  phoneFooter: '+10 367 467 8934',
  address: '200, D-block, Green lane USA',
}

export interface NavLink {
  label: string
  href: string
  children?: readonly string[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Department', href: '#departments' },
  { label: 'Blog', href: '#blog', children: ['Blog', 'Single Blog'] },
  { label: 'Pages', href: '#pages', children: ['Elements', 'About'] },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    image: 'https://picsum.photos/id/244/1600/700',
    eyebrow: 'Health care',
    headline: 'For Whole Family',
    excerpt:
      'In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently.',
  },
  {
    image: 'https://picsum.photos/id/119/1600/700',
    eyebrow: 'Health care',
    headline: 'For Whole Family',
    excerpt:
      'In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently.',
  },
  {
    image: 'https://picsum.photos/id/244/1600/700',
    eyebrow: 'Health care',
    headline: 'For Whole Family',
    excerpt:
      'In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently.',
  },
] as const

export const services = [
  {
    title: 'Hospitality',
    blurb:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    cta: 'Apply For a Bed',
  },
  {
    title: 'Emergency Care',
    blurb:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    cta: contact.phoneServices,
  },
  {
    title: 'Chamber Service',
    blurb:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    cta: 'Make an Appointment',
  },
] as const

export const welcomePoints = [
  'Apartments frequently or motionless.',
  'Duis aute irure dolor in reprehenderit in voluptate.',
  'Voluptatem quia voluptas sit aspernatur.',
] as const

export const departments = [
  { title: 'Eye Care', image: 'https://picsum.photos/seed/salus-dept-1/600/400' },
  { title: 'Physical Therapy', image: 'https://picsum.photos/seed/salus-dept-2/600/400' },
  { title: 'Dental Care', image: 'https://picsum.photos/seed/salus-dept-3/600/400' },
  { title: 'Diagnostic Test', image: 'https://picsum.photos/seed/salus-dept-4/600/400' },
  { title: 'Skin Surgery', image: 'https://picsum.photos/seed/salus-dept-5/600/400' },
  { title: 'Surgery Service', image: 'https://picsum.photos/seed/salus-dept-6/600/400' },
] as const

export const testimonials = [
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    author: 'Asana Korim',
    image: 'https://picsum.photos/seed/salus-testi-1/1600/700',
  },
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    author: 'Mila Rayhan',
    image: 'https://picsum.photos/seed/salus-testi-2/1600/700',
  },
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    author: 'Jonas Kade',
    image: 'https://picsum.photos/seed/salus-testi-3/1600/700',
  },
] as const

export const businessTabs = [
  {
    title: 'Comprehensive Medical Services',
    blurb:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    image: 'https://picsum.photos/seed/salus-tab-1/700/500',
  },
  {
    title: 'Expert Physicians You Can Trust',
    blurb:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    image: 'https://picsum.photos/seed/salus-tab-2/700/500',
  },
  {
    title: '24/7 Emergency Medical Care',
    blurb:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    image: 'https://picsum.photos/seed/salus-tab-3/700/500',
  },
] as const

export const doctors = [
  { name: 'Dr. Aria Bennett', specialty: 'Cardiologist' },
  { name: 'Dr. Omar Haddad', specialty: 'Neurologist' },
  { name: 'Dr. Lena Fischer', specialty: 'Dermatologist' },
  { name: 'Dr. Mateo Silva', specialty: 'Orthopedic Surgeon' },
  { name: 'Dr. Ingrid Larsen', specialty: 'Pediatrician' },
  { name: 'Dr. Kenji Mori', specialty: 'Ophthalmologist' },
] as const

export const footerDepartments = [
  'Eye Care',
  'Skin Care',
  'Pathology',
  'Medicine',
  'Dental',
] as const

export const footerLinks = ['About', 'Blog', 'About', 'Contact', 'Appointment'] as const

export const appointmentDepartments = ['Eye Care', 'Physical Therapy', 'Dental Care'] as const

export const appointmentDoctors = ['Aria Bennett', 'Omar Haddad', 'Lena Fischer'] as const
