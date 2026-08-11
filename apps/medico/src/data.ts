/* All copy/content for Medico, extracted from the ColorLib "Medico" live
   preview (https://preview.colorlib.com/theme/medico/) on 2026-08-11.
   Text keeps the source's kind of content; the source's typos are fixed
   deliberately ("Depertment" → "Departments", "Qualfied" → "Qualified",
   "CHeart" → "Cardiac"), and the footer credit is reworded (no ColorLib
   branding). */

export const siteName = 'Medico'
export const skipLabel = 'Skip to main content'

/* Header — white bar: wordmark left, centered nav, hotline callout +
   gradient appointment button right. */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#about' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Pages', href: '#' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const hotline = 'HOT LINE- 09856'
export const hotlineLabel = 'Hotline'
export const appointmentLabel = 'Make an appointment'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Hero — 935px-tall banner: eyebrow + serif headline + paragraph +
   gradient CTA + illustration placeholder. */
export const heroEyebrow = 'We are here for your care'
export const heroTitle = 'Best Care & Better Doctor'
export const heroBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra maecenas accumsan lacus vel.'
export const heroImageSeed = 'medico-hero'
export const heroImageAlt = 'Medical care illustration'

/* About — photo left, heading + paragraph + "learn more" + 3 icon items. */
export const aboutTitle = 'About us'
export const aboutBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra maecenas accumsan lacus vel.'
export const learnMoreLabel = 'learn more'
export const aboutImageSeed = 'medico-about'
export const aboutImageAlt = 'Doctor with a patient'
export interface AboutItem {
  title: string
  icon: 'ambulance' | 'calendar' | 'shield'
}
export const aboutItems: readonly AboutItem[] = [
  { title: 'Emergency', icon: 'ambulance' },
  { title: 'Appointment', icon: 'calendar' },
  { title: 'Qualified', icon: 'shield' },
]

/* Services — light band, centered title, 4 icon cards. */
export const servicesHeading = 'Our services'
export interface Service {
  title: string
  blurb: string
  icon: 'stethoscope' | 'heart' | 'activity' | 'pill'
}
const serviceBlurb =
  'Darkness multiply rule which from without life creature blessed give moveth moveth seas make day which divided our have.'
export const services: readonly Service[] = [
  { title: 'Better Future', blurb: serviceBlurb, icon: 'stethoscope' },
  { title: 'Better Future', blurb: serviceBlurb, icon: 'heart' },
  { title: 'Better Future', blurb: serviceBlurb, icon: 'activity' },
  { title: 'Better Future', blurb: serviceBlurb, icon: 'pill' },
]

/* Departments — bordered cards. */
export const departmentsHeading = 'Our Departments'
export interface Department {
  title: string
  blurb: string
  icon: 'hospital' | 'syringe' | 'ambulance' | 'user'
}
const departmentBlurb =
  'Darkness multiply rule which from without life creature blessed give moveth moveth seas make day which divided our have.'
export const departments: readonly Department[] = [
  { title: 'Better Future', blurb: departmentBlurb, icon: 'hospital' },
  { title: 'Better Future', blurb: departmentBlurb, icon: 'syringe' },
  { title: 'Better Future', blurb: departmentBlurb, icon: 'ambulance' },
  { title: 'Better Future', blurb: departmentBlurb, icon: 'user' },
]

/* Doctors — 4 photo cards, name + specialty, social overlay. */
export const doctorsHeading = 'Experienced Doctors'
export const doctorsSubtitle =
  'Face replenish sea good winged bearing years air divide was have night male also.'
export interface Doctor {
  name: string
  specialty: string
  seed: string
}
export const doctors: readonly Doctor[] = [
  { name: 'DR Adam Billiard', specialty: 'Heart specialist', seed: 'medico-doctor-1' },
  { name: 'DR Adam Billiard', specialty: 'Medicine specialist', seed: 'medico-doctor-2' },
  { name: 'DR Fred Macyard', specialty: 'Cardiac specialist', seed: 'medico-doctor-3' },
  { name: 'DR Justin Stuard', specialty: 'Heart specialist', seed: 'medico-doctor-4' },
]
export type SocialName = 'Facebook' | 'Twitter' | 'Skype' | 'Instagram'
export const socialNames: readonly SocialName[] = ['Facebook', 'Twitter', 'Skype', 'Instagram']
export const socialLabel = (name: string) => `Visit ${name}`
export const doctorImageAlt = (name: string) => `Portrait of ${name}`

/* Reservation — gradient band, service + time selects, submit. */
export const reservationHeading = 'Make an Appointment'
export const serviceSelectLabel = 'Select service'
export const serviceOptions: readonly string[] = [
  'Name of service',
  'Name of service',
  'Name of service',
  'Name of service',
]
export const timeSelectLabel = 'Time'
export const timeOptions: readonly string[] = [
  '8 AM TO 10AM',
  '10 AM TO 12PM',
  '12PM TO 2PM',
  '2PM TO 4PM',
  '4PM TO 6PM',
  '6PM TO 8PM',
  '4PM TO 10PM',
  '10PM TO 12PM',
]
export const submitLabel = 'Make an Appointment'
export const confirmationMessage = 'Your appointment request has been received.'

/* Blog — 2 article cards. */
export const blogHeading = 'Our Blog'
export interface BlogPost {
  title: string
  author: string
  category: string
  blurb: string
  seed: string
}
const blogBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const blogPosts: readonly BlogPost[] = [
  {
    title: 'First cattle which earth unto let health for can get and see what you',
    author: 'Jhon mike',
    category: 'Clinic, doctors',
    blurb: blogBlurb,
    seed: 'medico-blog-1',
  },
  {
    title: 'First cattle which earth unto let health for can get and see what you',
    author: 'Jhon mike',
    category: 'Clinic, doctors',
    blurb: blogBlurb,
    seed: 'medico-blog-2',
  },
]
export const blogImageAlt = (index: number) => `Blog article image ${index + 1}`

/* Footer — light #f3f6f7, 5 widgets + copyright bar. */
export const footerAboutBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const quickLinksTitle = 'Quick Links'
export const quickLinks: readonly NavItem[] = [
  { label: 'About us', href: '#' },
  { label: 'Department', href: '#' },
  { label: 'Online payment', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Department', href: '#' },
]
export const exploreTitle = 'Explore'
export const exploreLinks: readonly NavItem[] = [
  { label: 'In the community', href: '#' },
  { label: 'IU health foundation', href: '#' },
  { label: 'Family support', href: '#' },
  { label: 'Business solution', href: '#' },
  { label: 'Community clinic', href: '#' },
]
export const resourcesTitle = 'Resources'
export const resourcesLinks: readonly NavItem[] = [
  { label: 'Lights were season', href: '#' },
  { label: 'Their is let wherein', href: '#' },
  { label: 'Which given over', href: '#' },
  { label: 'Without given she', href: '#' },
  { label: 'Isn two signs think', href: '#' },
]
export const newsletterTitle = 'Newsletter'
export const newsletterBlurb =
  'Seed good winged wherein which night multiply midst does not fruitful.'
export const newsletterPlaceholder = 'Your email address'
export const subscribeLabel = 'Subscribe'
export const subscribeConfirmation = 'Thank you for subscribing!'
export const footerCredit = 'This template is made with ♥ by Component Dock'
export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
