/** Homestead — one-page real-estate landing copy and imagery.
 *  Design tokens + section copy paraphrased from the ColorLib "Estate"
 *  reference; images are seeded placeholders (picsum) chosen for subject fit. */

export const brand = {
  name: 'HOMESTEAD',
  tagline: 'Real Estate',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Property', href: '#property' },
  { label: 'Developments', href: '#developments' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

export const heroSlides = [
  {
    headline: '3 Modern homes for modern thinking people.',
    image: 'https://picsum.photos/seed/homemark-hero1/1920/900',
    bedrooms: '3 bedrooms version',
    available: 'Available from March 2019',
    price: '$145,000',
  },
  {
    headline: '4 Modern homes for modern thinking people.',
    image: 'https://picsum.photos/seed/homemark-hero2/1920/900',
    bedrooms: '4 bedrooms version + PRIVATE POOL',
    available: 'Available from March 2019',
    price: '$145,000',
  },
  {
    headline: '6 Modern homes for modern thinking people.',
    image: 'https://picsum.photos/seed/homemark-hero3/1920/900',
    bedrooms: '6 bedrooms version + PRIVATE POOL',
    available: 'Available from March 2019',
    price: '$145,000',
  },
] as const

export const featureIcons = [
  'Easy Buying',
  'Ready to Move',
  'Great Location',
  'Community Pool',
  '30% Park',
  'Sunny Location',
  'Modern Design',
  'Parking Spaces',
  'Garage Included',
] as const

export const introHouses = [
  {
    title: 'MODERN VILLA 1',
    image: 'https://picsum.photos/seed/homemark-villa1/800/600',
    text: 'Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. Sed a lectus risus. Morbi eros sapien, interdum ut sollicitudin eget.',
  },
  {
    title: 'MODERN VILLA 2',
    image: 'https://picsum.photos/seed/homemark-villa2/800/600',
    text: 'Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. Sed a lectus risus. Morbi eros sapien, interdum ut sollicitudin eget.',
  },
] as const

export const galleryImages = [
  'https://picsum.photos/seed/homemark-gallery1/600/400',
  'https://picsum.photos/seed/homemark-gallery2/600/400',
  'https://picsum.photos/seed/homemark-gallery3/600/400',
  'https://picsum.photos/seed/homemark-gallery4/600/400',
] as const

export const galleryTexts = [
  {
    title: 'INTERIOR',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'ENVIRONMENT FRIENDLY',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as const

export const locationTabs = [
  {
    label: 'Surroundings',
    image: 'https://picsum.photos/seed/homemark-loc1/1200/600',
    thumb: 'https://picsum.photos/seed/homemark-thumb1/200/130',
  },
  {
    label: 'Interior Design',
    image: 'https://picsum.photos/seed/homemark-loc2/1200/600',
    thumb: 'https://picsum.photos/seed/homemark-thumb2/200/130',
  },
  {
    label: 'Community Pool',
    image: 'https://picsum.photos/seed/homemark-loc3/1200/600',
    thumb: 'https://picsum.photos/seed/homemark-thumb3/200/130',
  },
  {
    label: 'Views',
    image: 'https://picsum.photos/seed/homemark-loc4/1200/600',
    thumb: 'https://picsum.photos/seed/homemark-thumb4/200/130',
  },
] as const

export const features = [
  {
    title: 'ECO-FRIENDLY HOMES',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'SECURE AREA',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'FREE PARKING',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'COMMUNITY POOL',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'BEST DEALS',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as const

export const cta = {
  heading: 'Ask our top consultants for a personalized offer today.',
  button: 'CALL 800-1-5141',
  background: 'https://picsum.photos/seed/homemark-cta/1920/600',
} as const

export const footer = {
  columns: [
    {
      heading: 'COMPANY',
      links: ['About Us', 'Offices', 'Contact Us'],
    },
    {
      heading: 'LEGAL',
      links: ['Documents', 'How to buy a house', 'Terms & Condition'],
    },
  ],
} as const
