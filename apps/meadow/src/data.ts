import {
  Droplets,
  Globe,
  HandHeart,
  Heart,
  HeartHandshake,
  Leaf,
  PawPrint,
  Recycle,
  Sprout,
  Sun,
  TreePine,
  type LucideIcon,
} from 'lucide-react'

export const brandName = 'Meadow'
export const tagline = 'Environment theme'

/* ---------------------------------------------------------------- top bar */

export interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
}

export const contactPhone = '+2 392 3929 210'

export const topBarContacts: ContactItem[] = [
  { icon: Leaf, label: 'Email:', value: '@info@email.com' },
  { icon: Heart, label: 'Call Us', value: contactPhone },
  { icon: Globe, label: 'Location', value: 'San Francisco, California, USA' },
]

/* ----------------------------------------------------------------- navbar */

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#donate' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#campaign' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const navbarCta = 'Donate Now!'

/* ------------------------------------------------------------- hero slider */

export interface HeroSlide {
  eyebrow: string
  title: string
  text: string
  image: string
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Save the World',
    title: 'Make the World Green Again',
    text: 'Together we can restore forests, protect wildlife, and build a sustainable future for the next generation.',
    image: 'https://picsum.photos/seed/meadow-hero-1/1920/1080',
  },
  {
    eyebrow: 'Save the World',
    title: 'Help Us to Save Animals',
    text: 'Every donation funds rescue missions, conservation programs, and safe habitats for endangered species.',
    image: 'https://picsum.photos/seed/meadow-hero-2/1920/1080',
  },
]

export const heroCta = 'Get Started'
export const heroCtaHref = '#services'

/* ---------------------------------------------------------------- services */

export interface Service {
  icon: LucideIcon
  title: string
  text: string
}

export const servicesHeading = 'Over 40K+ People Working with us'
export const servicesHighlight = '40K+'

export const services: Service[] = [
  {
    icon: Recycle,
    title: 'Recycling',
    text: 'Community recycling hubs turn household waste into raw materials for a cleaner, circular economy.',
  },
  {
    icon: Droplets,
    title: 'Water Refine',
    text: 'Affordable filtration projects bring clean drinking water to villages that need it the most.',
  },
  {
    icon: Sprout,
    title: 'Ecosystem',
    text: 'We restore wetlands and woodlands so native plants and animals can thrive again.',
  },
  {
    icon: Sun,
    title: 'Solar Energy',
    text: 'Off-grid solar kits power schools and clinics without adding to the carbon load.',
  },
  {
    icon: PawPrint,
    title: 'Save Animals',
    text: 'Rescue and rehabilitation programs give injured and orphaned wildlife a second chance.',
  },
]

/* ---------------------------------------------------------------- campaign */

export interface CampaignItem {
  chip: string
  title: string
  text: string
  image: string
  percent: number
  raised: string
  goal: string
}

export const campaigns: CampaignItem[] = [
  {
    chip: 'Ecology',
    title: 'Ecological Friendly',
    text: 'Restoring native woodlands around the city to rebuild habitats for birds and pollinators.',
    image: 'https://picsum.photos/seed/meadow-camp-1/640/512',
    percent: 72,
    raised: '$9,800',
    goal: '$15,000',
  },
  {
    chip: 'Planting',
    title: 'Planting more trees',
    text: 'One million new trees across deforested slopes to prevent erosion and cool the climate.',
    image: 'https://picsum.photos/seed/meadow-camp-2/640/512',
    percent: 55,
    raised: '$5,500',
    goal: '$10,000',
  },
  {
    chip: 'Water',
    title: 'Water Pollution',
    text: 'River clean-up crews and waste traps are removing plastic from our largest waterways.',
    image: 'https://picsum.photos/seed/meadow-camp-3/640/512',
    percent: 88,
    raised: '$13,200',
    goal: '$15,000',
  },
  {
    chip: 'Planting',
    title: 'Planting Trees',
    text: 'Schoolyard orchards give children fresh fruit, shade, and daily hands-on nature lessons.',
    image: 'https://picsum.photos/seed/meadow-camp-4/640/512',
    percent: 64,
    raised: '$7,680',
    goal: '$12,000',
  },
]

export const campaignCta = 'Donate Now!'

/* -------------------------------------------------------------- donate CTA */

export interface DonateCard {
  icon: LucideIcon
  title: string
}

export const donateEyebrow = 'Become A Volunteer'
export const donateTitle = 'Join Our Event & Helping us by our Donation'
export const donateText =
  'Every gift — big or small — turns into food for rescued animals, seedlings for forests, and clean water for communities.'

export const donateCards: DonateCard[] = [
  { icon: HandHeart, title: 'Donate Now' },
  { icon: TreePine, title: 'Project Sponsor' },
  { icon: HeartHandshake, title: 'Be A Volunteer' },
]

/* -------------------------------------------------------------- statistics */

export interface Stat {
  icon: LucideIcon
  number: string
  caption: string
}

export const statsEyebrow = 'Great Reviews for our services'
export const statsTitle = 'Technical Statistics'

export const stats: Stat[] = [
  { icon: Heart, number: '$60M', caption: 'Fund Raised' },
  { icon: TreePine, number: '9200', caption: 'Completed Projects' },
  { icon: HandHeart, number: '5800', caption: 'Donation' },
  { icon: HeartHandshake, number: '2750', caption: 'Volunteer' },
]

/* --------------------------------------------------------------- volunteers */

export interface Volunteer {
  name: string
  image: string
  bio: string
}

export const volunteersEyebrow = 'Meet Our Volunteer'
export const volunteersTitle = 'Our Volunteer'
export const volunteerPosition = 'Volunteer'

export const volunteers: Volunteer[] = [
  {
    name: 'Jason Smith',
    image: 'https://picsum.photos/id/1027/400/400',
    bio: 'Jason coordinates the tree-planting drives and keeps our weekend crews stocked and safe.',
  },
  {
    name: 'Jeffrey Rockenson',
    image: 'https://picsum.photos/id/64/400/400',
    bio: 'Jeffrey leads river clean-ups and teaches school groups about water conservation.',
  },
  {
    name: 'Maria Chen',
    image: 'https://picsum.photos/id/823/400/400',
    bio: 'Maria runs the wildlife rescue hotline and trains new volunteers on animal care.',
  },
  {
    name: 'Daniel Okafor',
    image: 'https://picsum.photos/id/996/400/400',
    bio: 'Daniel manages the solar-energy program, installing off-grid kits in remote villages.',
  },
]

/* ------------------------------------------------------------- testimonials */

export interface Testimonial {
  quote: string
  name: string
  position: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Our river is swimmable again thanks to the meadow volunteers who cleared years of plastic in a single season.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    avatar: 'https://picsum.photos/id/1027/120/120',
  },
  {
    quote:
      'The solar kits changed everything for our clinic — reliable light for night births for the first time.',
    name: 'Ava Martinez',
    position: 'Donor Relations Lead',
    avatar: 'https://picsum.photos/id/64/120/120',
  },
  {
    quote:
      'Watching the children plant their schoolyard orchard, I knew our donations were going exactly where they should.',
    name: 'Liam Turner',
    position: 'Field Coordinator',
    avatar: 'https://picsum.photos/id/823/120/120',
  },
]

/* ------------------------------------------------------------ fund raised */

export const fundTitle = 'Do You Care Our Mother Earth Like We Do?'
export const fundText1 =
  'Our planet gives us everything we need — clean air, fresh water, and breathtaking wild places. In return, she asks only that we care.'
export const fundText2 =
  'Join thousands of supporters who fund reforestation, wildlife rescue, and clean-energy programs around the globe.'
export const fundAmount = '$920,000'
export const fundCaption = 'Funds raised by 1200 people'

/* -------------------------------------------------------------------- blog */

export interface BlogPost {
  title: string
  date: string
  comments: string
  snippet: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Deforestation is the Threat to Our Ecological System',
    date: 'Feb. 22, 2021',
    comments: '3 Comments',
    snippet:
      'Forests are vanishing at an alarming rate — here is what it means for rainfall, air quality, and wildlife.',
    image: 'https://picsum.photos/seed/meadow-blog-1/640/480',
  },
  {
    title: '5 Simple Ways to Reduce Plastic in Daily Life',
    date: 'Mar. 08, 2021',
    comments: '5 Comments',
    snippet:
      'Small swaps at the market and at home can keep hundreds of kilograms of plastic out of the ocean each year.',
    image: 'https://picsum.photos/seed/meadow-blog-2/640/480',
  },
  {
    title: 'How Urban Tree Planting Cools Our Cities',
    date: 'Apr. 05, 2021',
    comments: '8 Comments',
    snippet:
      'A single mature street tree can offset the heat of ten air conditioners — and they make streets livable too.',
    image: 'https://picsum.photos/seed/meadow-blog-3/640/480',
  },
  {
    title: 'The Hidden Cost of Fast Fashion on Water',
    date: 'May 19, 2021',
    comments: '12 Comments',
    snippet:
      'Textile dyeing pollutes entire river systems. Mindful wardrobes are one of the easiest wins for clean water.',
    image: 'https://picsum.photos/seed/meadow-blog-4/640/480',
  },
]

export const blogAuthor = 'Admin'

/* -------------------------------------------------------------- newsletter */

export const newsletterEyebrow = 'Newsletter'
export const newsletterTitle = 'Subscribe for Newsletter'
export const newsletterCta = 'Subscribe now!'

/* ------------------------------------------------------------------ footer */

export const socialLabels = ['Twitter', 'Facebook', 'Google', 'Instagram'] as const
export type SocialLabel = (typeof socialLabels)[number]

export const footerBlurb =
  'Meadow is a free environment & wildlife charity theme — join us to protect nature, plant trees, and save animals across the world.'

export const footerServices = [
  'Recycling',
  'Water Refine',
  'Ecosystem',
  'Solar Energy',
  'Save Animals',
  'Plant Ecology',
  'Dynamic Ecology',
  'Tree Planting',
]

export interface RecentPost {
  title: string
  date: string
  image: string
}

export const recentPosts: RecentPost[] = [
  {
    title: 'Ecological System Responsible for Green Energy',
    date: 'Feb. 22, 2021',
    image: 'https://picsum.photos/seed/meadow-post-1/120/120',
  },
  {
    title: 'How Coral Reefs Recover After Storm Seasons',
    date: 'Mar. 08, 2021',
    image: 'https://picsum.photos/seed/meadow-post-2/120/120',
  },
]

export const footerAddress = '203 Fake St. Mountain View, San Francisco, California, USA'

export const copyrightLine = `© 2026 ${brandName} — All rights reserved`
export const componentDockLabel = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
