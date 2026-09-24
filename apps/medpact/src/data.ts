/* All copy/content for Medpact — hospital & clinics website template.
   Recreated from the ColorLib "Medicare" design; provenance lives only
   in the spec, TEMPLATES.md, and the PR. */

export const siteName = 'Medpact'
export const skipLabel = 'Skip to main content'

/* TopBar */
export const phone = '+1 (555) 123-4567'
export const email = 'info@medpact.com'
export const hours = 'Mon - Sat: 8:00 AM - 6:00 PM'

/* Navbar */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const appointmentLabel = 'Make Appointment'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Hero */
export const heroTitle = 'Welcome to Medpact Hospital'
export const heroBlurb =
  'We provide world-class healthcare services with compassion and excellence. Our team of experienced doctors is dedicated to your well-being.'
export const heroCtaPrimary = 'Make Appointment'
export const heroCtaSecondary = 'Our Services'
export const heroImageSeed = 'medpact-hero'
export const heroImageAlt = 'Doctor consulting with a patient'

/* Feature Strip */
export interface Feature {
  title: string
  description: string
  icon: 'ambulance' | 'calendar-check' | 'badge-check' | 'clock'
}

export const features: readonly Feature[] = [
  {
    title: 'Emergency Help',
    description: '24/7 emergency care with rapid response teams ready to assist you at any time.',
    icon: 'ambulance',
  },
  {
    title: 'Appointment',
    description: 'Book your appointment online with our easy scheduling system.',
    icon: 'calendar-check',
  },
  {
    title: 'Qualified Doctors',
    description: 'Our team consists of board-certified physicians with years of experience.',
    icon: 'badge-check',
  },
  {
    title: '24/7 Service',
    description: 'Round-the-clock medical support and assistance whenever you need it.',
    icon: 'clock',
  },
]

/* About */
export const aboutTitle = 'Why Choose Us'
export const aboutBlurb =
  'Medpact Hospital has been serving the community with excellence in healthcare for over two decades. We combine cutting-edge technology with compassionate care.'
export const aboutImageSeed = 'medpact-about'
export const aboutImageAlt = 'Medical team in hospital'
export const learnMoreLabel = 'Learn More'

export interface AboutItem {
  title: string
}

export const aboutItems: readonly AboutItem[] = [
  { title: 'Advanced medical equipment' },
  { title: 'Experienced medical staff' },
  { title: 'Affordable healthcare plans' },
  { title: 'Emergency care services' },
]

/* Services */
export const servicesTitle = 'Our Services'
export interface Service {
  title: string
  description: string
  icon: 'heart-pulse' | 'stethoscope' | 'brain' | 'bone'
}

export const services: readonly Service[] = [
  {
    title: 'Cardiology',
    description:
      'Comprehensive heart care including diagnostics, treatment, and preventive cardiology.',
    icon: 'heart-pulse',
  },
  {
    title: 'General Checkup',
    description: 'Routine health examinations and preventive care for all ages.',
    icon: 'stethoscope',
  },
  {
    title: 'Neurology',
    description: 'Expert diagnosis and treatment of disorders of the nervous system.',
    icon: 'brain',
  },
  {
    title: 'Orthopedics',
    description: 'Specialized care for bones, joints, muscles, and related conditions.',
    icon: 'bone',
  },
]

/* Departments */
export const departmentsTitle = 'Our Departments'
export interface Department {
  title: string
  description: string
  icon: 'heart-pulse' | 'stethoscope' | 'brain' | 'bone' | 'eye' | 'baby'
}

export const departments: readonly Department[] = [
  {
    title: 'Cardiology',
    description: 'Heart health and cardiovascular care.',
    icon: 'heart-pulse',
  },
  { title: 'Neurology', description: 'Brain and nervous system specialists.', icon: 'brain' },
  { title: 'Orthopedics', description: 'Bone and joint treatment.', icon: 'bone' },
  { title: 'Ophthalmology', description: 'Eye care and vision health.', icon: 'eye' },
  { title: 'Pediatrics', description: 'Healthcare for children and infants.', icon: 'baby' },
  {
    title: 'General Medicine',
    description: 'Primary care and general health.',
    icon: 'stethoscope',
  },
]

/* Doctors */
export const doctorsTitle = 'Qualified Doctors'
export interface Doctor {
  name: string
  specialty: string
  imageSeed: string
}

export const doctors: readonly Doctor[] = [
  { name: 'Dr. Sarah Mitchell', specialty: 'Cardiologist', imageSeed: 'medpact-doc1' },
  { name: 'Dr. James Wilson', specialty: 'Neurologist', imageSeed: 'medpact-doc2' },
  { name: 'Dr. Emily Chen', specialty: 'Orthopedic Surgeon', imageSeed: 'medpact-doc3' },
  { name: 'Dr. Michael Brown', specialty: 'Pediatrician', imageSeed: 'medpact-doc4' },
]

/* Appointment */
export const appointmentTitle = 'Book An Appointment'
export const appointmentDescription =
  'Fill out the form below to schedule your visit with our medical team.'
export interface DepartmentOption {
  value: string
  label: string
}

export const departmentOptions: readonly DepartmentOption[] = [
  { value: '', label: 'Select Department' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'orthopedics', label: 'Orthopedics' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'general', label: 'General Medicine' },
]

export const nameLabel = 'Your Name'
export const emailLabel = 'Your Email'
export const phoneLabel = 'Phone Number'
export const departmentLabel = 'Department'
export const dateLabel = 'Preferred Date'
export const messageLabel = 'Your Message'
export const submitLabel = 'Book Appointment'
export const confirmationMessage =
  'Thank you! Your appointment request has been submitted. We will contact you shortly.'

/* Testimonials */
export const testimonialsTitle = 'What Our Patients Say'
export interface Testimonial {
  name: string
  role: string
  quote: string
  avatarSeed: string
}

export const testimonials: readonly Testimonial[] = [
  {
    name: 'Robert Johnson',
    role: 'Patient',
    quote:
      'The care I received at Medpact was exceptional. The doctors were attentive and the staff was incredibly kind.',
    avatarSeed: 'medpact-test1',
  },
  {
    name: 'Maria Garcia',
    role: 'Patient',
    quote:
      'I had a wonderful experience. The facility is modern and the medical team made me feel comfortable throughout.',
    avatarSeed: 'medpact-test2',
  },
  {
    name: 'David Lee',
    role: 'Patient',
    quote: 'Highly recommend Medpact for their professional and compassionate healthcare services.',
    avatarSeed: 'medpact-test3',
  },
]

/* Blog */
export const blogTitle = 'Latest News'
export interface BlogPost {
  title: string
  date: string
  excerpt: string
  imageSeed: string
  category: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'Maintaining a Healthy Heart',
    date: 'Jan 15, 2026',
    excerpt:
      'Learn about the essential steps to keep your heart healthy and prevent cardiovascular diseases.',
    imageSeed: 'medpact-blog1',
    category: 'Cardiology',
  },
  {
    title: 'Benefits of Regular Checkups',
    date: 'Jan 10, 2026',
    excerpt:
      'Regular health checkups can help detect potential health issues before they become serious.',
    imageSeed: 'medpact-blog2',
    category: 'General',
  },
  {
    title: 'Understanding Neurological Health',
    date: 'Jan 5, 2026',
    excerpt:
      'Explore the importance of brain health and how to maintain optimal neurological function.',
    imageSeed: 'medpact-blog3',
    category: 'Neurology',
  },
]

/* Footer */
export const footerAbout =
  'Medpact Hospital is dedicated to providing exceptional healthcare services with state-of-the-art facilities and compassionate medical professionals.'
export const quickLinksTitle = 'Quick Links'
export const servicesTitle2 = 'Our Services'
export const newsletterTitle = 'Newsletter'
export const newsletterDescription =
  'Subscribe to our newsletter for the latest health tips and hospital updates.'
export const newsletterPlaceholder = 'Enter your email'
export const subscribeLabel = 'Subscribe'
export const subscribeConfirmation = 'Thank you for subscribing!'
export const copyright = `© ${new Date().getFullYear()} Medpact Hospital. All rights reserved.`
export const footerCredit = 'More templates at Component Dock'
export const footerCreditUrl = 'https://www.componentdock.com/'

export const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const footerServices = [
  { label: 'Cardiology', href: '#services' },
  { label: 'Neurology', href: '#services' },
  { label: 'Orthopedics', href: '#services' },
  { label: 'Pediatrics', href: '#services' },
  { label: 'General Medicine', href: '#services' },
]
