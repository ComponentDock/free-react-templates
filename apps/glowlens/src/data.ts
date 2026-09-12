export const siteName = 'GLOWLENS'

export const navLabel = 'Primary'
export const mobileNavLabel = 'Mobile'

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchOpenLabel = 'Open search'
export const searchCloseLabel = 'Close search'

/* Hero */
export const heroHeading = 'Glowlens'
export const heroSubtitle = 'We Create Awesome Photographies and more'

/* Intro */
export const introSubtitle = 'Amazing Studio'
export const introHeading = 'We Are So Creative'
export const introText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
export const introButtonLabel = 'Read More'

/* Portfolio */
export interface PortfolioItem {
  title: string
  category: string
  seed: string
}

export const portfolioItems: PortfolioItem[] = [
  { title: 'Mountain Sunrise', category: 'Landscape', seed: 'glowlens-1' },
  { title: 'Ocean Breeze', category: 'Landscape', seed: 'glowlens-2' },
  { title: 'Forest Trail', category: 'Landscape', seed: 'glowlens-3' },
  { title: 'Desert Dunes', category: 'Landscape', seed: 'glowlens-4' },
  { title: 'Autumn Valley', category: 'Landscape', seed: 'glowlens-5' },
  { title: 'Snowy Peaks', category: 'Landscape', seed: 'glowlens-6' },
  { title: 'Golden Meadow', category: 'Landscape', seed: 'glowlens-7' },
]

/* Milestones */
export interface Milestone {
  value: string
  label: string
  iconName: string
}

export const milestones: Milestone[] = [
  { value: '48', label: 'Projects', iconName: 'Monitor' },
  { value: '7', label: 'Awards', iconName: 'Trophy' },
  { value: '23K', label: 'Photos', iconName: 'Camera' },
  { value: '19', label: 'Tutorials', iconName: 'Video' },
]

/* Services */
export const servicesSubtitle = 'Amazing Studio'
export const servicesHeading = 'See What We Offer'
export const servicesText =
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
export const servicesButtonLabel = 'Read More'

export interface ServiceCard {
  title: string
  description: string
  iconName: string
}

export const serviceCards: ServiceCard[] = [
  {
    title: 'Video Production',
    description: 'Professional video production services for all your needs.',
    iconName: 'Video',
  },
  {
    title: 'Photography',
    description: 'Capturing moments that last forever with expert photography.',
    iconName: 'Camera',
  },
  {
    title: 'Image Editing',
    description: 'Expert post-production editing to perfect every shot.',
    iconName: 'Image',
  },
  {
    title: 'Creative Direction',
    description: 'Innovative creative direction to bring your vision to life.',
    iconName: 'Lightbulb',
  },
]

/* Contact */
export const contactPhone = '+1 234 567 890'
export const contactEmail = 'info@glowlens.com'
export const contactAddress = '123 Photography Lane, Studio City, CA'
export const contactFormNameLabel = 'Your Name'
export const contactFormEmailLabel = 'Your Email'
export const contactFormSubjectLabel = 'Subject'
export const contactFormMessageLabel = 'Message'
export const contactFormSubmitLabel = 'Send'
export const contactFormSubmittingLabel = 'Sending...'

/* Footer */
export const footerHeading = "Let's Work Together!"
export const footerEmail = 'hello@glowlens.com'
export const footerMoreLink = 'https://www.componentdock.com/'
export const footerMoreText = 'More templates at Component Dock'

export type SocialPlatform = 'Pinterest' | 'Facebook' | 'Twitter' | 'Dribbble'

export const socialLinks: Array<{ platform: SocialPlatform; href: string }> = [
  { platform: 'Pinterest', href: '#' },
  { platform: 'Facebook', href: '#' },
  { platform: 'Twitter', href: '#' },
  { platform: 'Dribbble', href: '#' },
]
