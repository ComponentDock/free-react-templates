export interface NavItem {
  label: string
  href: string
}

export type DeptIcon = 'dentistry' | 'cardiology' | 'ent' | 'astrology' | 'neuro' | 'blood'

export const brand = {
  name: 'Clinica',
  tagline: 'Medical Template',
}

export const phone = '01654.066.456'

export const navLinks: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Doctors', href: '#team-section' },
  { label: 'Department', href: '#department-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const blogSubmenu = ['Blog', 'Blog Details', 'Element']

export const hero = {
  kicker: 'Committed to success',
  headline: 'We care about your',
  rotatingWords: ['health', 'healing', 'wellness'],
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.',
  cta: 'Appointment',
  href: '#contact-section',
  image: 'https://picsum.photos/seed/clinica-hero/1400/900',
  alt: 'Smiling doctor in a white coat with a tablet',
}

export const about = {
  kicker: 'About Our Company',
  title: 'Welcome To Our Hospital',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse id pulvinar nisl.',
  buttons: [
    { label: 'Find Doctors', href: '#team-section' },
    { label: 'Appointment', href: '#contact-section' },
    { label: 'Emergency 1', href: '#contact-section' },
  ],
  frontImage: 'https://picsum.photos/seed/clinica-about-front/600/700',
  frontAlt: 'Smiling woman patient',
  backImage: 'https://picsum.photos/seed/clinica-about-back/600/700',
  backAlt: 'Nurse in blue scrubs wearing a surgical mask',
}

export const departments = {
  kicker: 'Our Departments',
  title: 'Our Medical Services',
  tabs: [
    { label: 'Dentistry', icon: 'dentistry' as const },
    { label: 'Cardiology', icon: 'cardiology' as const },
    { label: 'ENT Specialists', icon: 'ent' as const },
    { label: 'Astrology', icon: 'astrology' as const },
    { label: 'Neuroanatomy', icon: 'neuro' as const },
    { label: 'Blood Screening', icon: 'blood' as const },
  ],
  pane: {
    title: 'Dentist with surgical mask holding scaler near patient',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.',
    cta: 'Appointment',
    href: '#contact-section',
    image: 'https://picsum.photos/seed/clinica-dept/500/600',
    alt: 'Doctor examining a patient',
  },
}

export const gallery = {
  kicker: 'Our Gallery',
  title: 'Our Medical Camp',
  images: [
    {
      src: 'https://picsum.photos/seed/clinica-camp1/900/690',
      alt: 'Medical camp photo one',
      big: true,
    },
    {
      src: 'https://picsum.photos/seed/clinica-camp2/600/330',
      alt: 'Medical camp photo two',
      big: false,
    },
    {
      src: 'https://picsum.photos/seed/clinica-camp3/600/330',
      alt: 'Medical camp photo three',
      big: false,
    },
    {
      src: 'https://picsum.photos/seed/clinica-camp4/600/330',
      alt: 'Medical camp photo four',
      big: false,
    },
    {
      src: 'https://picsum.photos/seed/clinica-camp5/600/330',
      alt: 'Medical camp photo five',
      big: false,
    },
    {
      src: 'https://picsum.photos/seed/clinica-camp6/900/690',
      alt: 'Medical camp photo six',
      big: true,
    },
  ],
}

export const testimonial = {
  quote:
    'I am at an age where I just want to be fit and healthy. Our bodies are our responsibility — so start caring for your body, it will return the favor.',
  founder: 'Margaret Lawson',
  role: 'Chief Photographer',
  avatar: 'https://picsum.photos/seed/clinica-founder/80/80',
  avatarAlt: 'Portrait of Margaret Lawson',
  background: 'https://picsum.photos/seed/clinica-testi-bg/900/700',
  photo: 'https://picsum.photos/seed/clinica-testi-photo/900/700',
  photoAlt: 'Medical team at work',
}

export const team = {
  kicker: 'Our Doctors',
  title: 'Our Specialist',
  members: [
    {
      name: 'Alvin Maxwell',
      role: 'Creative UI Designer',
      image: 'https://picsum.photos/seed/clinica-team1/500/600',
      alt: 'Portrait of Alvin Maxwell',
    },
    {
      name: 'Maria Smith',
      role: 'Agency Manager',
      image: 'https://picsum.photos/seed/clinica-team2/500/600',
      alt: 'Portrait of Maria Smith',
    },
    {
      name: 'Angela Doe',
      role: 'Designer',
      image: 'https://picsum.photos/seed/clinica-team3/500/600',
      alt: 'Portrait of Angela Doe',
    },
  ],
}

export const appointment = {
  kicker: 'Appointment Apply Form',
  title: 'Appointment Form',
  doctors: ['Health Law', 'saiful islam', 'Arafath Miya', 'Shakil Miya', 'Tamim Sharker'],
  image: 'https://picsum.photos/seed/clinica-form/700/837',
  alt: 'Doctor at a desk with a patient',
}

export const blog = {
  kicker: 'Our Recent News',
  title: 'Our News From Blog',
  posts: [
    {
      category: 'Health',
      date: 'Nov 30, 2020',
      title: 'Amazing Places To Visit In Summer',
      image: 'https://picsum.photos/seed/clinica-blog1/600/400',
      alt: 'Summer travel destination',
    },
    {
      category: 'Checkup',
      date: 'Nov 30, 2020',
      title: 'Developing Creativithout Losing Visual',
      image: 'https://picsum.photos/seed/clinica-blog2/600/400',
      alt: 'Creative design workspace',
    },
    {
      category: 'Operation',
      date: 'Nov 30, 2020',
      title: 'Winter Photography Tips from Glenn',
      image: 'https://picsum.photos/seed/clinica-blog3/600/400',
      alt: 'Winter photography scene',
    },
  ],
}

export const footer = {
  aboutParagraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
    'Ut ac ligula sapien. Suspendisse id pulvinar nisl, sed faucibus sem.',
  ],
  phone: '+564 7885 3222',
  email: 'youremail@gmail.com',
  placeholder: 'Your email address',
}
