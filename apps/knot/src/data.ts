export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const siteName = 'Knot'

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const skipLabel = 'Skip to content'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Our Story', href: '#story-section' },
  { label: 'Gallery', href: '#gallery-section' },
  {
    label: 'Blog',
    href: '#blog-section',
    children: [
      { label: 'Blog', href: '#blog-section' },
      { label: 'Single Blog', href: '#single-blog-section' },
    ],
  },
  {
    label: 'Pages',
    href: '#pages-section',
    children: [
      { label: 'Accommodation', href: '#accommodation-section' },
      { label: 'Elements', href: '#elements-section' },
    ],
  },
  { label: 'Contact', href: '#location-section' },
]

export const heroDate = '14 Jan 2020'
export const heroNames = 'Anjelina & Jack'
export const heroTagline = 'Wedding Ceremony'
export const heroCta = 'Get Married'
export const heroImage = 'https://picsum.photos/seed/knot-1/1920/1080'
export const heroAlt = 'Golden-hour river valley at the wedding venue'

export const countdownKicker = '14. January. 2020'
export const countdownTitle = 'THE. WEDDING. Countdown'
export const countdownImage = 'https://picsum.photos/seed/knot-countdown/1920/500'

type CountdownUnitKey = 'days' | 'hours' | 'minutes' | 'seconds'

export interface CountdownUnit {
  key: CountdownUnitKey
  label: string
}

export const countdownUnits: CountdownUnit[] = [
  { key: 'days', label: 'DAYS' },
  { key: 'hours', label: 'HOURS' },
  { key: 'minutes', label: 'MINUTES' },
  { key: 'seconds', label: 'SECONDS' },
]

const countdownOffsetMs = 90 * 24 * 60 * 60 * 1000

export function getCountdownTarget(): Date {
  return new Date(Date.now() + countdownOffsetMs)
}

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function getCountdownParts(target: Date, now: Date): CountdownParts {
  const diff = Math.max(0, target.getTime() - now.getTime())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export const loveStoryTitle = 'Our. Love. Story'

export interface LoverCard {
  label: string
  name: string
  text: string
  image: string
  alt: string
}

export const groomCard: LoverCard = {
  label: 'Groom',
  name: 'Jack Wonner',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
  image: 'https://picsum.photos/seed/knot-groom/247/247',
  alt: 'Portrait of the groom',
}

export const brideCard: LoverCard = {
  label: 'Bride',
  name: 'Anjelina Kona',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
  image: 'https://picsum.photos/seed/knot-bride/247/247',
  alt: 'Portrait of the bride',
}

export interface TimelineStep {
  title: string
  text: string
}

export const timelineSteps: TimelineStep[] = [
  {
    title: 'Fast Meet',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'He Proposed',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Love Story',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Wedding Day',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export type BrandIconName = 'facebook' | 'twitter' | 'instagram'

export interface SocialLink {
  label: string
  href: string
  icon: BrandIconName
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
]

export const galleryTitle = 'Gallery. Photos'

export interface GalleryPhoto {
  src: string
  alt: string
  span: 3 | 4 | 5
}

const gallerySpans: GalleryPhoto['span'][] = [4, 3, 5, 3, 5, 4, 4, 3, 5]

export const galleryPhotos: GalleryPhoto[] = gallerySpans.map((span, index) => ({
  src: `https://picsum.photos/seed/knot-gallery-${index + 1}/800/410`,
  alt: `Wedding photo ${index + 1}`,
  span,
}))

export const galleryOpenLabel = 'Open photo'
export const galleryCloseLabel = 'Close photo viewer'
export const galleryDialogLabel = 'Photo viewer'

export const programTitle = 'Program. Details'

export interface ProgramCard {
  time: string
  title: string
  text: string
  image: string
  alt: string
}

export const programCards: ProgramCard[] = [
  {
    time: '16.00',
    title: 'Wedding Ceremony',
    text: 'Say your vows beneath the garden arbour as the sun dips low, surrounded by family and the sound of the string quartet.',
    image: 'https://picsum.photos/seed/knot-program-1/600/500',
    alt: 'Ceremony aisle decorated with flowers',
  },
  {
    time: '20.00',
    title: 'Lunch Time',
    text: 'A long-table feast of seasonal dishes and champagne toasts, with speeches, laughter, and the first dance to follow.',
    image: 'https://picsum.photos/seed/knot-program-2/600/500',
    alt: 'Banquet table set for the wedding lunch',
  },
  {
    time: '22.00',
    title: 'WeParty Time',
    text: 'The lights go low and the band strikes up — cake, dancing, and fireworks close the night under the open sky.',
    image: 'https://picsum.photos/seed/knot-program-3/600/500',
    alt: 'Dance floor lights at the wedding party',
  },
]

export const rsvpTitle = 'Are You Attending?'
export const rsvpSubtext = 'Kindly respond before 30 August'
export const rsvpNameLabel = 'Your Name'
export const rsvpEmailLabel = 'Email'
export const rsvpGuestsLabel = 'Number of Guests'
export const rsvpMessageLabel = 'Additional Message'
export const rsvpSubmitLabel = 'R.S.V.P'
export const rsvpNamePlaceholder = 'Your Name'
export const rsvpEmailPlaceholder = 'Email'
export const rsvpMessagePlaceholder = 'Write your message here.'
export const rsvpNameError = 'Please enter your name.'
export const rsvpEmailError = 'Please enter a valid email address.'
export const rsvpSuccessTitle = 'Thank You!'
export const rsvpSuccessText =
  'Your response has been received. We look forward to celebrating with you.'
export const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests'] as const

export const locationTitle = 'Location'
export const locationAddress = 'Mas Montagnette, 19 West 21th Str.'
export const locationPhone = '+1 843-853-1810'
export const mapEmbedTitle = 'Wedding venue map'
export const mapEmbedUrl =
  'https://www.openstreetmap.org/export/embed.html?bbox=-74.0134%2C40.7068%2C-73.9986%2C40.7188&layer=mapnik&marker=40.7128%2C-74.0060'

export interface AddressColumn {
  title: string
  hours: string
  venue: string
}

export const addressColumns: AddressColumn[] = [
  { title: 'Where to stay', hours: '4:00p – 12:00p', venue: 'The Secret Shrine Club' },
  { title: 'Activities', hours: '4:00p – 12:00p', venue: 'The Secret Shrine Club' },
]

export const footerLinks: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Our Story', href: '#story-section' },
  { label: 'Gallery', href: '#gallery-section' },
  { label: 'Accommodation', href: '#accommodation-section' },
  { label: 'Contact', href: '#location-section' },
]

export const copyrightPrefix = 'All rights reserved | This template is made with'
export const componentDockLabel = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
