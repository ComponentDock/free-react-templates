export const navLinks = ['Home', 'News', 'Travel', 'Fashion', 'Team'] as const

export const pageLinks = ['Single', 'Category', 'Search', 'Archive', 'Generic', 'Elements'] as const

export const darkStorageKey = 'quill:dark'

export const hero = {
  headline: 'A Discount Toner Cartridge Is Better Than Ever.',
  likes: '15',
  comments: '02',
  author: 'Mark wiens',
  date: '12 Dec, 2017 11:21 am',
  image: 'https://picsum.photos/seed/quill-hero/1920/1080',
  imageAlt: 'River cruise passing historic buildings at golden hour',
  avatar: 'https://picsum.photos/seed/quill-avatar/80/80',
} as const

export const categoryPosts = [
  {
    seed: 'quill-cat-1',
    date: 'Jan 2018',
    title: "It's Hurricane Season — Visiting Hilton",
    comments: 6,
  },
  {
    seed: 'quill-cat-2',
    date: 'Jan 2018',
    title: 'What Makes A Hotel Boutique',
    comments: 9,
  },
  {
    seed: 'quill-cat-3',
    date: 'Jan 2018',
    title: 'Les Houches: The Hidden Gem Valley',
    comments: 4,
  },
] as const

export const travelPosts = [
  {
    seed: 'quill-travel-1',
    day: '12',
    month: 'Jan 2018',
    title: 'The Best Danube River Cruise Routes',
    comments: 7,
  },
  {
    seed: 'quill-travel-2',
    day: '18',
    month: 'Jan 2018',
    title: 'Hidden Valleys of the Alps',
    comments: 5,
  },
  {
    seed: 'quill-travel-3',
    day: '24',
    month: 'Jan 2018',
    title: 'City Breaks on a Budget',
    comments: 8,
  },
  {
    seed: 'quill-travel-4',
    day: '05',
    month: 'Jan 2018',
    title: 'Island Hopping in the Aegean',
    comments: 3,
  },
] as const

export const fashionPosts = [
  {
    seed: 'quill-fashion-1',
    date: 'Jan 2018',
    title: 'Spring Pastels Are Back in Full Force',
    comments: 11,
  },
  {
    seed: 'quill-fashion-2',
    date: 'Jan 2018',
    title: 'The Return of Minimalist Tailoring',
    comments: 6,
  },
  {
    seed: 'quill-fashion-3',
    date: 'Jan 2018',
    title: 'Denim Trends for This Season',
    comments: 9,
  },
  {
    seed: 'quill-fashion-4',
    date: 'Jan 2018',
    title: 'Runway Report: Milan Fashion Week',
    comments: 13,
  },
] as const

export const fashionMorePosts = [
  {
    seed: 'quill-fashion-5',
    date: 'Jan 2018',
    title: 'Street Style: Paris Edition',
    comments: 7,
  },
  {
    seed: 'quill-fashion-6',
    date: 'Jan 2018',
    title: 'The Capsule Wardrobe Guide',
    comments: 4,
  },
  {
    seed: 'quill-fashion-7',
    date: 'Jan 2018',
    title: 'Statement Accessories 2018',
    comments: 8,
  },
  {
    seed: 'quill-fashion-8',
    date: 'Jan 2018',
    title: 'Behind the Seams: Atelier Visit',
    comments: 5,
  },
] as const

export const teamMembers = [
  { seed: 'quill-team-1', name: 'Dora Walker', role: 'Editor' },
  { seed: 'quill-team-2', name: 'Lena Keller', role: 'Photographer' },
  { seed: 'quill-team-3', name: 'Noah Fischer', role: 'Writer' },
  { seed: 'quill-team-4', name: 'Mia Thompson', role: 'Designer' },
] as const

export const footerProducts = [
  'Super Fast WordPress Hosting',
  'Social Media Optimization',
  'Small Business Design',
  'Website Builder',
] as const

export const instaImages = [
  { seed: 'quill-insta-1', alt: 'Sneak peek from the fashion shoot' },
  { seed: 'quill-insta-2', alt: 'Coffee and notes at the office' },
  { seed: 'quill-insta-3', alt: 'City skyline at dusk' },
  { seed: 'quill-insta-4', alt: 'Tailor at work in the studio' },
] as const

export const socialLinks = ['facebook', 'twitter', 'instagram', 'pinterest'] as const

export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  pinterest: 'Pinterest',
}
