export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'DJs', href: '#djs' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Podcasts', href: '#podcasts' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
] as const

export interface ShowCard {
  title: string
  schedule: string
  img: string
  alt: string
}

export const showCards: ShowCard[] = [
  {
    title: 'Art Gossip',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-1/800/600',
    alt: 'Art Gossip show artwork',
  },
  {
    title: 'Good Morning Show',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-2/800/600',
    alt: 'Good Morning Show artwork',
  },
  {
    title: 'Blues Radio',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-3/800/600',
    alt: 'Blues Radio show artwork',
  },
  {
    title: 'Classic Songs',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-4/800/600',
    alt: 'Classic Songs show artwork',
  },
]

export const retroShows: ShowCard[] = [
  {
    title: 'Classic Songs For Classic People',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-5/800/600',
    alt: 'Classic Songs For Classic People show artwork',
  },
  {
    title: 'Classic Songs For Classic People',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-6/800/600',
    alt: 'Classic Songs For Classic People stacked show artwork',
  },
  {
    title: 'Classic Songs For Classic People',
    schedule: 'Friday 1:00pm — 2:30pm',
    img: 'https://picsum.photos/seed/wavelength-7/800/600',
    alt: 'Classic Songs For Classic People second stacked show artwork',
  },
]

export interface Testimonial {
  name: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Megan Smith',
    quote:
      '“I start every morning with the Good Morning Show — it sets the tone for the whole day.”',
    avatar: 'https://picsum.photos/seed/wavelength-8/200/200',
  },
  {
    name: 'Brooke Cagle',
    quote: '“The weekend blues block is the only place I can hear real classics anymore.”',
    avatar: 'https://picsum.photos/seed/wavelength-9/200/200',
  },
  {
    name: 'Philip Martin',
    quote: '“Wavelength has a way of making even the busiest commute feel like a private concert.”',
    avatar: 'https://picsum.photos/seed/wavelength-10/200/200',
  },
  {
    name: 'Steven Ericson',
    quote: '“I discovered half of my favorite artists through the Friday evening specials.”',
    avatar: 'https://picsum.photos/seed/wavelength-11/200/200',
  },
  {
    name: 'Nathan Dumlao',
    quote: '“The DJs know their records — every show feels curated, never random.”',
    avatar: 'https://picsum.photos/seed/wavelength-12/200/200',
  },
  {
    name: 'Brook Smith',
    quote: '“Live streaming on the go is flawless. It is the soundtrack to my studio days.”',
    avatar: 'https://picsum.photos/seed/wavelength-13/200/200',
  },
]

export interface DJ {
  name: string
  role: string
  img: string
  alt: string
}

export const djs: DJ[] = [
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/wavelength-14/600/750',
    alt: 'Megan Smith portrait',
  },
  {
    name: 'Brooke Cagle',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/wavelength-15/600/750',
    alt: 'Brooke Cagle portrait',
  },
  {
    name: 'Philip Martin',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/wavelength-16/600/750',
    alt: 'Philip Martin portrait',
  },
  {
    name: 'Steven Ericson',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/wavelength-17/600/750',
    alt: 'Steven Ericson portrait',
  },
  {
    name: 'Nathan Dumlao',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/wavelength-18/600/750',
    alt: 'Nathan Dumlao portrait',
  },
  {
    name: 'Brooke Cagle',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/wavelength-19/600/750',
    alt: 'Brooke Cagle second portrait',
  },
]

export interface NewsPost {
  date: string
  title: string
  excerpt: string
  img: string
  alt: string
}

export const newsPosts: NewsPost[] = [
  {
    date: 'Jan 20th, 2032',
    title: 'Art Gossip by Mike Charles',
    excerpt:
      'Mike Charles takes us behind the scenes of the art world every Friday with the sharpest studio talk on air.',
    img: 'https://picsum.photos/seed/wavelength-20/800/600',
    alt: 'Art Gossip news photo',
  },
  {
    date: 'Jan 20th, 2032',
    title: 'Good Morning Show Returns',
    excerpt:
      'The Good Morning Show is back with a fresh studio, new segments, and the same early-bird energy our listeners love.',
    img: 'https://picsum.photos/seed/wavelength-21/800/600',
    alt: 'Good Morning Show news photo',
  },
  {
    date: 'Jan 20th, 2032',
    title: 'Blues Radio Goes Live',
    excerpt:
      'Blues Radio now streams live every night — from vinyl deep cuts to the latest releases, all in one place.',
    img: 'https://picsum.photos/seed/wavelength-22/800/600',
    alt: 'Blues Radio news photo',
  },
]

export interface SocialIcon {
  label: string
  name: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'pinterest' | 'youtube'
}

export const socialIcons: SocialIcon[] = [
  { label: 'Follow us on Facebook', name: 'facebook' },
  { label: 'Follow us on Twitter', name: 'twitter' },
  { label: 'Follow us on Instagram', name: 'instagram' },
  { label: 'Follow us on LinkedIn', name: 'linkedin' },
  { label: 'Follow us on Pinterest', name: 'pinterest' },
  { label: 'Subscribe on YouTube', name: 'youtube' },
]

export const footerNavPrimary = [
  { label: 'Home', href: '#home' },
  { label: 'DJs', href: '#djs' },
  { label: 'News', href: '#news' },
  { label: 'Top 20 of the week', href: '#top20' },
] as const

export const footerNavSecondary = [
  { label: 'About Us', href: '#about' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Membership', href: '#membership' },
] as const

export const djSocials = ['facebook', 'twitter', 'instagram'] as const
