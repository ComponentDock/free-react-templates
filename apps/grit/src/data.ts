export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const siteName = 'Grit'

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const skipLabel = 'Skip to content'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home-section', active: true },
  { label: 'Classes', href: '#classes-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Trainer', href: '#trainer-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const heroTitle = 'We Believe Little Things Matter'
export const heroLead =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptate, optio praesentium. Ex, veniam, harum.'
export const heroCtaLabel = 'Get Started'
export const heroImage = 'https://picsum.photos/id/593/1920/1080'

export const hoursTitle = 'Hours'
export const hoursOpening = 'Opening: 7:30am'
export const hoursClosing = 'Closing: 9:00pm'
export const hoursCtaLabel = 'Contact us'

export interface Feature {
  icon: 'dumbbell' | 'users' | 'activity' | 'salad' | 'citrus' | 'bike'
  title: string
  text: string
}

export const featureItems: Feature[] = [
  {
    icon: 'dumbbell',
    title: 'Be Fit',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'users',
    title: 'Join Club',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'activity',
    title: 'Gym Fitness',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'salad',
    title: 'Eat Vegie',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'citrus',
    title: 'Fruit Juices',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'bike',
    title: 'Body Warmup',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const featuresEyebrow = 'Stay Healthy'
export const featuresTitle = 'Get A Perfect Body'
export const featuresLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export interface CtaBandContent {
  eyebrow?: string
  heading: string
  lead: string
  ctaLabel: string
  ctaHref: string
  inlineLink?: boolean
  image: string
}

export const ctaBands: CtaBandContent[] = [
  {
    heading: 'Get The Result You Want',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, laudantium quia blanditiis ipsum.',
    ctaLabel: 'Get Started',
    ctaHref: '#',
    inlineLink: true,
    image: 'https://picsum.photos/seed/grit-cta-1/1920/700',
  },
  {
    heading: 'Every Step Counts',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ad, reprehenderit enim!',
    ctaLabel: 'Get Started',
    ctaHref: '#',
    image: 'https://picsum.photos/seed/grit-cta-2/1920/700',
  },
  {
    heading: 'Your Fitness Partner Where Ever You Are',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate distinctio, quasi omnis!',
    ctaLabel: 'Get Started',
    ctaHref: '#',
    image: 'https://picsum.photos/seed/grit-cta-3/1920/700',
  },
]

export interface ClassCard {
  title: string
  instructor: string
  duration: string
  image: string
}

export const classCards: ClassCard[] = Array.from({ length: 5 }, (_, index) => ({
  title: `Fitness Class Name #${index + 1}`,
  instructor: 'By Ava Martinez',
  duration: '30 minutes',
  image: `https://picsum.photos/seed/grit-class-${index + 1}/600/400`,
}))

export const classesEyebrow = 'Fitness Class'
export const classesTitle = 'Classes'
export const classesLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export interface ScheduleDay {
  tab: string
  name: string
}

export const scheduleDays: ScheduleDay[] = [
  { tab: 'S', name: 'Sunday' },
  { tab: 'M', name: 'Monday' },
  { tab: 'T', name: 'Tuesday' },
  { tab: 'W', name: 'Wednesday' },
  { tab: 'T', name: 'Thursday' },
  { tab: 'F', name: 'Friday' },
  { tab: 'S', name: 'Saturday' },
]

export interface ScheduleEntry {
  time: string
  title: string
  instructor: string
  duration: string
  image: string
}

export const scheduleEntries: ScheduleEntry[] = Array.from({ length: 5 }, (_, index) => ({
  time: '7:30am - 9:00am',
  title: `Fitness Class Name #${index + 1}`,
  instructor: 'By Ava Martinez',
  duration: '30 minutes',
  image: `https://picsum.photos/seed/grit-schedule-${index + 1}/200/200`,
}))

export const scheduleEyebrow = 'Fitness Sched'
export const scheduleTitle = 'Schedule'
export const scheduleLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export interface Trainer {
  name: string
  position: string
  text: string
  image: string
}

export const trainers: Trainer[] = [
  {
    name: 'Ava Martinez',
    position: 'Trainer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/id/1027/400/500',
  },
  {
    name: 'Elena Reyes',
    position: 'Trainer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/id/64/400/500',
  },
  {
    name: 'Mia Chen',
    position: 'Trainer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/id/823/400/500',
  },
  {
    name: 'Sofia Alvarez',
    position: 'Trainer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/id/996/400/500',
  },
]

export const trainersEyebrow = 'Trainer'
export const trainersTitle = 'Our Trainers'
export const trainersLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export const servicesEyebrow = 'Fitness Services'
export const servicesTitle = 'Services'
export const servicesLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export const contactEyebrow = 'Get In Touch'
export const contactTitle = 'Contact Us'
export const contactLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
export const contactFirstNameLabel = 'First name'
export const contactLastNameLabel = 'Last name'
export const contactSubjectLabel = 'Subject'
export const contactEmailLabel = 'Email'
export const contactMessageLabel = 'Write your message here.'
export const contactSubmitLabel = 'Send Message'
export const contactSuccessMessage = 'Thanks for your message — we will get back to you soon.'

export const footerAboutTitle = 'About Grit'
export const footerAboutText =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const footerLinksTitle = 'Links'
export const footerLinks: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Classes', href: '#classes-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Trainer', href: '#trainer-section' },
]
export const footerSubscribeTitle = 'Subscribe'
export const footerSubscribeText =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const footerSubscribeLabel = 'Email'
export const footerSubscribeButton = 'Subscribe'
export const componentDockLabel = 'More templates at Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
