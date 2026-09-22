/* All copy/content for Kinectwell, based on the ColorLib "Physical Therapy"
   template description and design patterns. Original preview was 404 at
   implementation time; content follows the same kind of content as the
   source (physiotherapy, chiropractic, massage services). */

export const siteName = 'Kinectwell'
export const skipLabel = 'Skip to main content'

/* Header */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pages', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#contact' },
]

export const phoneLabel = 'Call us'
export const phoneNumber = '+1 (555) 123-4567'
export const appointmentLabel = 'Make an appointment'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Hero */
export const heroEyebrow = 'Welcome to Kinectwell'
export const heroTitle = 'We Help People to Recover from Injuries'
export const heroBlurb =
  'We provide professional physical therapy services to help you recover from injuries, manage chronic pain, and improve your overall mobility and quality of life.'
export const heroImageSeed = 'kinectwell-hero'
export const heroImageAlt = 'Physical therapy session'

/* About */
export const aboutTitle = 'About Us'
export const aboutBlurb =
  'We are a dedicated team of licensed physical therapists committed to helping you achieve your recovery goals. Our evidence-based approach ensures the best outcomes for every patient.'
export const aboutFeatures = [
  'Licensed and experienced therapists',
  'Personalized treatment plans',
  'State-of-the-art rehabilitation equipment',
] as const
export const aboutImageSeed = 'kinectwell-about'
export const learnMoreLabel = 'Learn More'

/* Services */
export const servicesTitle = 'Our Services'
export const services = [
  {
    icon: 'Stethoscope',
    title: 'Physical Therapy',
    description:
      'Comprehensive physical therapy programs designed to restore movement, reduce pain, and prevent disability through targeted exercises and manual therapy.',
  },
  {
    icon: 'Bone',
    title: 'Chiropractic Therapy',
    description:
      "Spinal manipulation and musculoskeletal alignment techniques to relieve pain, improve function, and support the body's natural ability to heal.",
  },
  {
    icon: 'Hand',
    title: 'Massage Therapy',
    description:
      'Therapeutic massage techniques to reduce muscle tension, improve circulation, promote relaxation, and accelerate recovery from injury.',
  },
] as const

/* Why Choose Us */
export const whyTitle = 'Why Choose Us'
export const whyFeatures = [
  {
    icon: 'Users',
    title: 'Professional Staff',
    description:
      'Our team consists of board-certified physical therapists with years of clinical experience.',
  },
  {
    icon: 'Award',
    title: 'Certified Equipment',
    description:
      'We use only the latest rehabilitation equipment and technology for optimal recovery.',
  },
  {
    icon: 'Siren',
    title: 'Emergency Services',
    description: 'Same-day appointments available for urgent rehabilitation needs.',
  },
  {
    icon: 'Clock',
    title: 'Opening Hours',
    description: 'Open Monday through Saturday, 8:00 AM to 6:00 PM for your convenience.',
  },
] as const

/* Appointment CTA */
export const appointmentTitle = 'Book Your Appointment Today'
export const appointmentBlurb =
  'Take the first step toward recovery. Schedule a consultation with our experienced therapists.'
export const appointmentBtnLabel = 'Book Appointment'

/* Testimonials */
export const testimonialsTitle = 'What Our Patients Say'
export const testimonials = [
  {
    quote:
      'After my ACL surgery, the Kinectwell team helped me regain full mobility in just three months. Truly outstanding care.',
    name: 'Sarah Mitchell',
    role: 'ACL Recovery Patient',
    imageSeed: 'kinectwell-testimonial-1',
  },
  {
    quote:
      'I suffered from chronic back pain for years. The personalized treatment plan here changed my life completely.',
    name: 'James Cooper',
    role: 'Chronic Pain Patient',
    imageSeed: 'kinectwell-testimonial-2',
  },
  {
    quote:
      'The massage therapy sessions are incredible. Professional, caring, and results-driven. Highly recommended.',
    name: 'Emily Chen',
    role: 'Wellness Client',
    imageSeed: 'kinectwell-testimonial-3',
  },
] as const

/* Footer */
export const footerAboutBlurb =
  'Kinectwell provides professional physical therapy and rehabilitation services to help you live pain-free and stay active.'
export const footerQuickLinksTitle = 'Quick Links'
export const footerQuickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Appointments', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
] as const
export const footerServicesTitle = 'Services'
export const footerServices = [
  { label: 'Physical Therapy', href: '#services' },
  { label: 'Chiropractic', href: '#services' },
  { label: 'Massage Therapy', href: '#services' },
  { label: 'Rehabilitation', href: '#services' },
] as const
export const copyright = '© 2026 Kinectwell. All rights reserved.'
export const footerCredit = 'More templates at Component Dock'
