/** Synod — church landing template content.
 *  Design-token notes: brand palette recreated from the reference design
 *  (primary red #c0392b, dark charcoal #333333, heading #222222, body
 *  #777777, border #eeeeee). */

export const componentDockUrl = 'https://www.componentdock.com/'

export const topBarText = 'NEXT BIG EVENT IN:'
export const countdownOffsetMs =
  2 * 24 * 60 * 60 * 1000 + 0 * 60 * 60 * 1000 + 29 * 60 * 1000 + 55 * 1000

export const navLinks = [
  'Home',
  'About',
  'Ministries',
  'Sermons',
  'Events',
  'Gallery',
  'News',
  'Giving',
] as const

export const heroImage = 'https://picsum.photos/id/1062/1920/1080'
export const heroTitle = 'Synod — A Place of Faith'
export const heroSubtitle = 'Building a community of believers through worship, service and love.'

export const sermonQuote = 'Love the Lord Your God with All Your Heart'
export const sermonSpeaker = 'Pastor James Mitchell'
export const sermonDate = 'February 12, 2025'
export const sermonCategory = 'Faith'
export const sermonAvatar = 'https://picsum.photos/id/1027/150/150'

export const sectionHeading = 'Find the best church templates'

export const aboutImage = 'https://picsum.photos/id/1067/555/360'
export const aboutTitle = 'Welcome to Synod Church'
export const aboutParagraphs = [
  'We are a community of believers dedicated to spreading faith, hope and love. Our mission is to create a welcoming space where everyone can grow in their spiritual journey.',
  'Join us every Sunday for worship services, Bible studies and fellowship. Together we make a difference in our community and beyond.',
] as const
export const aboutLink = 'Read More'

export interface Feature {
  icon: string
  title: string
  text: string
}

export const features: Feature[] = [
  {
    icon: 'heart',
    title: 'Spread Love',
    text: 'We believe in showing unconditional love and compassion to everyone in our community.',
  },
  {
    icon: 'book-open',
    title: 'Bible Study',
    text: 'Join our weekly Bible study groups to deepen your understanding of scripture and grow in faith.',
  },
  {
    icon: 'users',
    title: 'Community',
    text: 'Build meaningful connections with fellow believers through our fellowship programs and events.',
  },
]

export interface ChurchEvent {
  date: string
  title: string
  location: string
}

export const events: ChurchEvent[] = [
  {
    date: 'Mar 15, 2025',
    title: 'Sunday Worship Service',
    location: 'Main Sanctuary',
  },
  {
    date: 'Mar 22, 2025',
    title: 'Community Outreach Day',
    location: 'City Park',
  },
  {
    date: 'Apr 5, 2025',
    title: 'Easter Celebration',
    location: 'Main Sanctuary',
  },
]

export const footerAboutText =
  'Synod Church is a community of believers dedicated to faith, service and love. Join us in making a difference.'

export const footerQuickLinks = ['About Us', 'Ministries', 'Events', 'Sermons', 'Contact'] as const

export const footerContact = {
  address: '123 Faith Street, Graceville',
  phone: '+1 (555) 123-4567',
  email: 'info@synodchurch.org',
}
