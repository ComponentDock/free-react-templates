// Rhythm — content data for the DJ / music artist single-page template.
// Placeholder imagery uses verified picsum.photos IDs (mood-matched, dark and
// vivid for the nightlife aesthetic — picsum has no DJ/concert scenes).

export interface EventItem {
  title: string
  venue: string
  date: string
  image: string
}

export interface ServiceItem {
  title: string
  blurb: string
  icon: 'wedding' | 'clubs' | 'lessons' | 'corporate'
}

export interface TrackItem {
  title: string
  duration: string
}

export interface VideoItem {
  title: string
  url: string
  image: string
}

export const heroImage = 'https://picsum.photos/id/1069/1920/1080'
export const heroVideoUrl = 'https://www.youtube.com/watch?v=JGwWNGJdvx8'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Discography', href: '#events' },
  { label: 'Tours', href: '#tours' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

export const pagesDropdown = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#events' },
  { label: 'Blog Details', href: '#tracks' },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
]

export const heroBlurb =
  'Feel the pulse of the night as rhythm takes over — a journey through beats, basslines and bright lights that keeps the dancefloor moving until sunrise.'

export const events: EventItem[] = [
  {
    title: 'Neon Nights Festival',
    venue: 'Funkhaus Berlin, Berlin, Germany',
    date: 'Dec 15, 2019',
    image: 'https://picsum.photos/id/327/800/600',
  },
  {
    title: 'Beats on the Bay',
    venue: 'Bayfront Park, Miami, FL',
    date: 'Dec 18, 2019',
    image: 'https://picsum.photos/id/564/800/600',
  },
  {
    title: 'Miami Ultra Sessions',
    venue: 'Pier 94, New York, NY',
    date: 'Dec 21, 2019',
    image: 'https://picsum.photos/id/1016/800/600',
  },
  {
    title: 'Sunset Rooftop Party',
    venue: 'Sky Garden, London, UK',
    date: 'Jan 08, 2020',
    image: 'https://picsum.photos/id/327/800/600',
  },
  {
    title: 'Amsterdam Dance Night',
    venue: 'Ziggo Dome, Amsterdam, NL',
    date: 'Jan 12, 2020',
    image: 'https://picsum.photos/id/564/800/600',
  },
  {
    title: 'Desert Beats Open Air',
    venue: 'Red Rocks, Denver, CO',
    date: 'Jan 19, 2020',
    image: 'https://picsum.photos/id/1016/800/600',
  },
]

export const aboutImage = 'https://picsum.photos/id/64/800/900'
export const aboutCopy =
  'DJ Rhythm knows how to move your mind, body and soul by delivering tracks that stand out from the norm. As if this impressive succession of high impact, floor-filling sets was not enough, the stage presence and charisma make every performance an unforgettable night out.'

export const servicesLeftImage = 'https://picsum.photos/id/741/1200/900'
export const serviceVideoUrl = 'https://www.youtube.com/watch?v=JGwWNGJdvx8'

export const services: ServiceItem[] = [
  {
    title: 'Wedding',
    blurb:
      'Tailor-made sets that keep the celebration alive from the first dance to the last toast.',
    icon: 'wedding',
  },
  {
    title: 'Clubs and bar',
    blurb: 'High-energy club nights with seamless mixing and a crowd that never wants it to end.',
    icon: 'clubs',
  },
  {
    title: 'DJ lessons',
    blurb:
      'One-on-one coaching on the decks — beatmatching, phrasing and building your own signature sound.',
    icon: 'lessons',
  },
  {
    title: 'Corporate events',
    blurb: 'Polished background sets for launches and parties, tuned to the mood of your brand.',
    icon: 'corporate',
  },
]

export const tracks: TrackItem[] = [
  { title: 'Neon Nights (Original Mix)', duration: '03:24' },
  { title: 'Heartbeat (Club Edit)', duration: '04:12' },
  { title: 'Midnight Sunrise', duration: '03:58' },
  { title: 'Bassline Symphony', duration: '05:06' },
]

export const allTracksUrl = 'https://www.youtube.com/@music'

export const videos: VideoItem[] = [
  {
    title: 'David Guetta Miami Ultra Music Festival 2019',
    url: 'https://www.youtube.com/watch?v=yJg-Y5byMMw',
    image: 'https://picsum.photos/id/1069/640/420',
  },
  {
    title: 'Martin Garrix (Full live-set) | SLAM!Koningsdag',
    url: 'https://www.youtube.com/watch?v=K4DyBUG242c',
    image: 'https://picsum.photos/id/705/640/420',
  },
  {
    title: "Dimitri Vegas, Steve Aoki & Like Mike's '3 Are Legend'",
    url: 'https://www.youtube.com/watch?v=S19UcWdOA-I',
    image: 'https://picsum.photos/id/1016/640/420',
  },
]

export const countdownImage = 'https://picsum.photos/id/564/1920/900'
export const festivalTitle = 'Tomorrowland 2020'
export const festivalSubtitle = 'Music festival start in'
// Pinned future festival date — the countdown ticks down to it live.
export const festivalDate = new Date('2027-01-15T12:00:00Z')
export const ticketsUrl = 'https://www.tomorrowland.com/'

export const footerImage = 'https://picsum.photos/id/327/1920/900'
export const footerPhone = '1-677-124-44227'
export const footerEmail = 'DJ.Music@gmail.com'
export const brandName = 'Rhythm'
export const componentDockUrl = 'https://www.componentdock.com/'
