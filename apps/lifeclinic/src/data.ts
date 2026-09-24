/* All copy/content for LifeClinic — medical & healthcare website template.
   Provenance lives only in the spec, TEMPLATES.md, and the PR. */

export const siteName = 'LifeClinic'
export const skipLabel = 'Skip to main content'

/* TopBar */
export const welcomeText = 'Welcome to LifeClinic'
export const topBarHours = 'Mon - Sat: 7:00 AM - 9:00 PM'
export const topBarPhone = '+1 (800) 567-8901'

/* Navbar */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Pages', href: '#pages' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export const appointmentLabel = 'Make an Appointment'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Hero Carousel */
export interface HeroSlide {
  title: string
  description: string
  cta: string
  imageSeed: string
}

export const heroSlides: readonly HeroSlide[] = [
  {
    title: 'Medical Services that You can Trust 100%',
    description:
      'We provide world-class healthcare services with compassion and excellence. Our team of experienced doctors is dedicated to your well-being.',
    cta: 'Discover',
    imageSeed: 'lifeclinic-hero1',
  },
  {
    title: 'Your Health is Our Top Priority',
    description:
      'Experience advanced medical care with cutting-edge technology and a patient-first approach. We are here for you 24/7.',
    cta: 'Discover',
    imageSeed: 'lifeclinic-hero2',
  },
  {
    title: 'Comprehensive Healthcare Solutions',
    description:
      'From preventive care to specialized treatments, we offer a full range of medical services to keep you and your family healthy.',
    cta: 'Discover',
    imageSeed: 'lifeclinic-hero3',
  },
]

export const heroImageAlt = 'Medical facility'

/* Appointment Form */
export const appointmentTitle = 'Make an Appointment'
export const appointmentDescription =
  'Fill out the form below to schedule your visit with our medical team.'

export interface SelectOption {
  value: string
  label: string
}

export const specialityOptions: readonly SelectOption[] = [
  { value: '', label: 'Select Speciality' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'orthopedics', label: 'Orthopedics' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'general', label: 'General Medicine' },
]

export const doctorOptions: readonly SelectOption[] = [
  { value: '', label: 'Select Doctor' },
  { value: 'dr-smith', label: 'Dr. Smith' },
  { value: 'dr-johnson', label: 'Dr. Johnson' },
  { value: 'dr-williams', label: 'Dr. Williams' },
  { value: 'dr-brown', label: 'Dr. Brown' },
  { value: 'dr-davis', label: 'Dr. Davis' },
]

export const specialityLabel = 'Speciality'
export const doctorLabel = 'Doctor'
export const appointmentSubmitLabel = 'Make an Appointment'
export const appointmentConfirmation =
  'Thank you! Your appointment request has been submitted. We will contact you shortly.'

export const appointmentPhone = '+1 (800) 567-8901'
export const appointmentEmail = 'info@lifeclinic.com'
export const appointmentAddress = '123 Medical Center Drive, Health City, HC 10001'
export const appointmentHours = 'Mon - Fri: 8:00 AM - 6:00 PM'

/* About Us */
export const aboutTitle = 'We always put our patients first'
export const aboutDescription =
  'At LifeClinic, we believe in providing compassionate, high-quality healthcare. Our experienced team of medical professionals is committed to ensuring every patient receives personalized care and attention.'
export const aboutLearnMore = 'View the services +'

export interface AboutService {
  title: string
  icon: 'stethoscope' | 'baby' | 'flask-conical' | 'heart-pulse'
}

export const aboutServices: readonly AboutService[] = [
  { title: 'The Best Doctors', icon: 'stethoscope' },
  { title: 'Baby Nursery', icon: 'baby' },
  { title: 'Laboratory', icon: 'flask-conical' },
  { title: 'Emergency Room', icon: 'heart-pulse' },
]

/* Cool Facts */
export interface Fact {
  value: string
  label: string
}

export const facts: readonly Fact[] = [
  { value: '5632', label: 'Blood donations' },
  { value: '23k', label: 'Patients' },
  { value: '25', label: 'Specialities' },
  { value: '723', label: 'Doctors' },
]

/* Gallery */
export const galleryTitle = 'Our Gallery'
export const gallerySeeMore = 'See More +'

export interface GalleryImage {
  seed: string
  alt: string
}

export const galleryImages: readonly GalleryImage[] = [
  { seed: 'lifeclinic-gallery1', alt: 'Medical facility interior' },
  { seed: 'lifeclinic-gallery2', alt: 'Doctor consultation' },
  { seed: 'lifeclinic-gallery3', alt: 'Modern operating room' },
  { seed: 'lifeclinic-gallery4', alt: 'Medical equipment' },
  { seed: 'lifeclinic-gallery5', alt: 'Hospital reception' },
  { seed: 'lifeclinic-gallery6', alt: 'Healthcare team' },
]

/* Features */
export const featuresTitle = 'A new way to treat patients in a revolutionary facility'
export const featuresDescription =
  'Our state-of-the-art facility combines the latest medical technology with a patient-centered approach. We are dedicated to providing the highest standard of care in a comfortable and welcoming environment.'
export const featuresLearnMore = 'View the services +'
export const featuresImageSeed = 'lifeclinic-features'
export const featuresImageAlt = 'Modern medical facility'

/* Blog */
export const blogTitle = 'Latest News'
export const blogCommentsLabel = '3 Comments'

export interface BlogPost {
  title: string
  date: string
  excerpt: string
  imageSeed: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'Maintaining a Healthy Heart',
    date: 'Jan 15, 2026',
    excerpt:
      'Learn about the essential steps to keep your heart healthy and prevent cardiovascular diseases.',
    imageSeed: 'lifeclinic-blog1',
  },
  {
    title: 'Benefits of Regular Checkups',
    date: 'Jan 10, 2026',
    excerpt:
      'Regular health checkups can help detect potential health issues before they become serious.',
    imageSeed: 'lifeclinic-blog2',
  },
  {
    title: 'Understanding Neurological Health',
    date: 'Jan 5, 2026',
    excerpt:
      'Explore the importance of brain health and how to maintain optimal neurological function.',
    imageSeed: 'lifeclinic-blog3',
  },
]

/* Emergency / Helpline */
export const emergencyTitle = 'For Emergency calls'
export const emergencyPhone = '+1 (800) 567-8901'

export interface EmergencyLocation {
  city: string
  phone: string
  email: string
  address: string
}

export const emergencyLocations: readonly EmergencyLocation[] = [
  {
    city: 'London',
    phone: '+44 20 7946 0958',
    email: 'london@lifeclinic.com',
    address: '45 Harley St, London W1G 8BT',
  },
  {
    city: 'New Castle',
    phone: '+44 191 234 5678',
    email: 'newcastle@lifeclinic.com',
    address: '12 Grey St, Newcastle NE1 6AE',
  },
  {
    city: 'Manchester',
    phone: '+44 161 234 5678',
    email: 'manchester@lifeclinic.com',
    address: '8 Deansgate, Manchester M3 1RH',
  },
  {
    city: 'Bristol',
    phone: '+44 117 234 5678',
    email: 'bristol@lifeclinic.com',
    address: '22 Park St, Bristol BS1 5JA',
  },
]

/* Footer */
export const footerAbout =
  'LifeClinic is dedicated to providing exceptional healthcare services with state-of-the-art facilities and compassionate medical professionals.'
export const quickLinksTitle = 'Latest News'
export const contactFormTitle = 'Contact Form'
export const newsletterTitle = 'Newsletter'
export const newsletterDescription =
  'Subscribe to our newsletter for the latest health tips and hospital updates.'
export const newsletterPlaceholder = 'Enter your email'
export const subscribeLabel = 'Subscribe'
export const subscribeConfirmation = 'Thank you for subscribing!'
export const copyright = `© ${new Date().getFullYear()} LifeClinic. All rights reserved.`
export const footerCredit = 'More templates at Component Dock'
export const footerCreditUrl = 'https://www.componentdock.com/'

export interface FooterLink {
  label: string
  href: string
}

export const footerQuickLinks: readonly FooterLink[] = [
  { label: 'Maintaining a Healthy Heart', href: '#news' },
  { label: 'Benefits of Regular Checkups', href: '#news' },
  { label: 'Understanding Neurological Health', href: '#news' },
]
