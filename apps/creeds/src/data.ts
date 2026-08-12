/** Creeds — church landing template content.
 *  Design-token notes: brand palette recreated from the reference design
 *  (primary cyan #00c8e6, dark navy #04091e, light section #f9f9ff,
 *  heading #222222, body #777777, secondary accents #4cd3e3/#38a4ff/
 *  #52c5fd/#f4e700/#f44a40/#f54940). */

export const topBarLinks = ['My Account', 'Donate Now'] as const

export const navLinks = [
  'Home',
  'Ministries',
  'Sermons',
  'Event',
  'Pages',
  'Blog',
  'Contact',
] as const

export const heroEyebrow = 'Who Created Us'
export const heroTitle = 'Keep faith always'
export const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
export const heroImage = 'https://picsum.photos/id/508/1920/1080'

export const countdownEventTitle = 'Spreading the faith to all'
export const countdownEventLine = '5th may, 2018, Saturday, 09.00 am to 05.00 pm'
export const countdownHeading = 'Our Next Event Starts in'

/** Countdown target: a fixed offset from mount time (~9d 23h 59m 51s). */
export const countdownOffsetMs =
  9 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 51 * 1000

export const aboutImage = 'https://picsum.photos/id/396/555/360'
export const aboutTitle = 'Welcome to Creeds Church'
export const aboutParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
] as const
export const aboutLink = 'Read Full Story'

export interface Feature {
  title: string
  text: string
}

export const features: Feature[] = [
  {
    title: 'Spreading Light to world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Spreading Peace to world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Spread Happyness to world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Spreading Joy to world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as const

export interface Sermon {
  title: string
  text: string
  meta: string
  image: string
}

export const sermons: Sermon[] = [
  {
    title: 'The Light of the World',
    text: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence.',
    meta: 'Pastor James · May 2018',
    image: 'https://picsum.photos/id/443/360/240',
  },
  {
    title: 'Grace for Every Season',
    text: 'Inappropriate behavior is often laughed off as "boys will be boys" — women face higher consequences for the same actions.',
    meta: 'Pastor Sarah · May 2018',
    image: 'https://picsum.photos/id/1055/360/240',
  },
  {
    title: 'Walking in Faith',
    text: 'We all live in an age that belongs to the young at heart. Life that is becoming extremely fast and complicated.',
    meta: 'Pastor James · May 2018',
    image: 'https://picsum.photos/id/610/360/240',
  },
] as const

export const donateTitle = 'Your donation can save many lives'
export const donateText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const donateFormTitle = 'How much would you like to donate?'
export const donateImage = 'https://picsum.photos/id/1021/1920/500'

export interface EventPost {
  title: string
  date: string
  venue: string
}

export const eventPosts: EventPost[] = [
  {
    title: 'Spreading Peace to world',
    date: 'Saturday, 5th may, 2018',
    venue: 'Rocky beach Church, Santa monica, Los Angeles, USA',
  },
  {
    title: 'Spread Happyness to world',
    date: 'Saturday, 5th may, 2018',
    venue: 'Rocky beach Church, Santa monica, Los Angeles, USA',
  },
  {
    title: 'Spreading Light to world',
    date: 'Saturday, 5th may, 2018',
    venue: 'Rocky beach Church, Santa monica, Los Angeles, USA',
  },
] as const

export const footerAboutText =
  'We all live in an age that belongs to the young at heart. Life that is becoming extremely fast and complicated.'
export const footerNavLinks = [
  'Home',
  'Feature',
  'Services',
  'Portfolio',
  'Team',
  'Pricing',
  'Blog',
  'Contact',
] as const
export const footerNewsletterText =
  'For business professionals caught between high OEM price and mediocre print and graphic output.'
export const instaFeedImages = [
  'https://picsum.photos/seed/creeds-insta-1/120/120',
  'https://picsum.photos/seed/creeds-insta-2/120/120',
  'https://picsum.photos/seed/creeds-insta-3/120/120',
  'https://picsum.photos/seed/creeds-insta-4/120/120',
  'https://picsum.photos/seed/creeds-insta-5/120/120',
  'https://picsum.photos/seed/creeds-insta-6/120/120',
  'https://picsum.photos/seed/creeds-insta-7/120/120',
  'https://picsum.photos/seed/creeds-insta-8/120/120',
] as const
export const componentDockUrl = 'https://www.componentdock.com/'
