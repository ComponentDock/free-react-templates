/** Epicure site data — fine-dining restaurant template content.
 *  All photography is seeded picsum placeholders (one deterministic
 *  seed per image). */

export interface OfferCell {
  image: string
  alt: string
  title: string
  blurb: string
  price: string
  /** Row 2 flips the first cell to text so cells alternate img/text. */
  order?: 'text-first' | 'img-first'
}

export interface Testimonial {
  avatar: string
  name: string
  quote: string
}

export const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Menu', href: '#offers' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
] as const

export const phoneDisplay = '+91 80102 00777'

export const openingHours = 'Mon - Sun, 8:00AM - 11:00PM'

export const hero = {
  headline: "You don't need a silver fork to eat good food.",
  subtext:
    'Honest plates, seasonal produce and a room that feels like home — fine dining without the fuss.',
  image: 'https://picsum.photos/seed/epicure-hero/900/1100',
  primaryCta: { label: 'See Our Menu', href: '#offers' },
  secondaryCta: { label: 'Special Offers', href: '#offers' },
}

export const offers: { eyebrow: string; heading: string; cells: OfferCell[] } = {
  eyebrow: 'Offers',
  heading: 'Special Offers',
  cells: [
    {
      image: 'https://picsum.photos/seed/epicure-1/600/600',
      alt: 'Roast chicken with herbs',
      title: 'Roast of the day',
      blurb: 'Slow-roasted chicken with garden herbs, charred lemon and roasted baby potatoes.',
      price: '$9.00',
    },
    {
      image: 'https://picsum.photos/seed/epicure-2/600/600',
      alt: 'Grilled fish fillet',
      title: 'Catch of the day',
      blurb: 'Wood-grilled fillet with brown butter, capers and a hint of chili oil.',
      price: '$9.00',
    },
    {
      image: 'https://picsum.photos/seed/epicure-3/600/600',
      alt: 'Pasta with tomato',
      title: 'Sunday pasta',
      blurb: 'Hand-rolled pasta tossed with slow tomato sugo, basil and aged pecorino.',
      price: '$9.00',
    },
    {
      image: 'https://picsum.photos/seed/epicure-4/600/600',
      alt: 'Dessert plate',
      title: 'Sweet ending',
      blurb: 'Seasonal fruit, whipped cream and a warm crumble baked to order.',
      price: '$9.00',
    },
  ],
}

export const about = {
  eyebrow: 'About Us',
  heading: 'About Epicure',
  paragraph:
    'Epicure began as a neighbourhood kitchen with one rule: cook what you would happily serve your own family. Every plate that leaves our pass is built on seasonal produce, honest technique and a little bit of heart.',
  checks: [
    'Seasonal produce from local farms',
    'Wood-fired oven and open kitchen',
    'Award-winning pastry team',
    'Reservations welcome every night',
  ],
  cta: { label: 'See Our Menu', href: '#offers' },
  sliderImages: [
    'https://picsum.photos/seed/epicure-about-1/800/600',
    'https://picsum.photos/seed/epicure-about-2/800/600',
  ],
}

export const testimonials: {
  eyebrow: string
  heading: string
  items: Testimonial[]
} = {
  eyebrow: 'Testimonials',
  heading: 'Happy Customers',
  items: [
    {
      avatar: 'https://picsum.photos/seed/epicure-ava-1/200/200',
      name: 'Sheena Smith',
      quote:
        'The tasting menu was the best meal we have had in years — every course felt like a story.',
    },
    {
      avatar: 'https://picsum.photos/seed/epicure-ava-2/200/200',
      name: 'Ben Miller',
      quote: 'Warm service, a room full of laughter and food that honestly does the talking.',
    },
    {
      avatar: 'https://picsum.photos/seed/epicure-ava-3/200/200',
      name: 'Sheena Smith',
      quote:
        'We booked for an anniversary and left planning the next visit before the car door closed.',
    },
  ],
}

export const footer = {
  blurb:
    'A neighbourhood kitchen with a fine-dining soul — seasonal plates, warm room, honest prices.',
  readMore: { label: 'Read more', href: '#about' },
  linksColumn: {
    heading: 'Links',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'Our Menu', href: '#offers' },
      { label: 'Special Offers', href: '#offers' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  menuColumn: {
    heading: 'Our Menu',
    links: [
      { label: 'Breakfast', href: '#offers' },
      { label: 'Brunch', href: '#offers' },
      { label: 'Dinner', href: '#offers' },
      { label: 'Drinks', href: '#offers' },
    ],
  },
  hoursColumn: {
    heading: 'Opening Hours',
    rows: [
      { days: 'Monday - Friday', hours: '8:00 am — 5:00pm' },
      { days: 'Sunday', hours: '8:00 am — 8:00pm' },
    ],
  },
  copyright: 'All rights reserved. Made with',
}
