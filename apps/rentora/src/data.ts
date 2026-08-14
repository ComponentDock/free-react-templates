export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pages', href: '#pages' },
  { label: 'Single Blog', href: '#single-blog' },
  { label: 'Elements', href: '#elements' },
  { label: 'Contact Us', href: '#contact' },
] as const

export const HERO = {
  kicker: 'Beautiful investments',
  headline: 'Everyone Deserves the Opportunity of the Home',
  blurb:
    'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
  ctaLabel: 'View Property',
  playLabel: 'Watch the video',
  /* Curved-glass skyscraper observation deck (picsum id 378, monochrome —
     matches the reference's low-angle glass tower). */
  image: 'https://picsum.photos/id/378/820/800',
} as const

export const TEAM = {
  heading: 'Living From The Team That Cares',
  blurb:
    'Our team of local specialists guides you from first viewing to final signature, with honest advice at every step.',
  checklist: [
    {
      icon: 'paint',
      text: 'Set dry signs spirit a kind first shall them winged creeping',
    },
    {
      icon: 'check',
      text: 'He two face one moved dominion man likeness',
    },
    {
      icon: 'ruler',
      text: 'Sea forth fill have divide be dominion from life for seven',
    },
  ],
  ctaLabel: 'Read More',
  /* Golden-hour portrait (picsum id 64) — warm tones echo the warm block
     behind the photo in the reference design. */
  image: 'https://picsum.photos/id/64/640/520',
} as const

export const PASSION = {
  heading: "Our Passion is People What's Yours?",
  cards: [
    { icon: 'compass', title: 'Creative Design', blurb: 'Every listing presented with care and a sharp, modern eye.' },
    { icon: 'desk', title: 'Experience Style', blurb: 'Homes chosen for character, light, and effortless living.' },
    { icon: 'bath', title: 'Product Research', blurb: 'We verify every detail so you can decide with confidence.' },
    { icon: 'beach', title: 'Affordable Price', blurb: 'Fair valuations and honest pricing on every property.' },
  ],
  ctaLabel: 'Read More',
} as const

export const APARTMENTS = {
  heading: 'Provide The Beautiful Apartment',
  viewMoreLabel: 'View More',
  cards: [
    {
      /* White stepped tower (picsum id 1081) — verified architecture. */
      image: 'https://picsum.photos/id/1081/420/320',
      location: '384 Treeline Park, San Antonio, TX',
      price: '$1,235,632',
      title: 'Detached House For Sale',
      meta: 'Home, Apartment',
    },
    {
      /* City skyline (picsum id 868) — verified urban view. */
      image: 'https://picsum.photos/id/868/420/320',
      location: '512 Magnolia Lane, Austin, TX',
      price: '$986,400',
      title: 'Modern Family Home',
      meta: 'Home, Apartment',
    },
    {
      /* High-rise facade (picsum id 1076) — verified architecture. */
      image: 'https://picsum.photos/id/1076/420/320',
      location: '27 Cypress Court, Dallas, TX',
      price: '$742,150',
      title: 'Cozy Studio Unit',
      meta: 'Apartment, Studio',
    },
  ],
} as const

export const ROOM_ROWS = [
  {
    title: 'Beginning own light divided male is light',
    /* City skyline band (picsum id 868, wide crop) — verified urban view. */
    image: 'https://picsum.photos/id/868/1600/700',
  },
  {
    title: 'Green very from for rule stars seasons',
    /* High-rise facade band (picsum id 1076, wide crop) — verified architecture. */
    image: 'https://picsum.photos/id/1076/1600/700',
  },
] as const

export const TESTIMONIALS = {
  heading: 'Our Happy Customer Says About us',
  slides: [
    {
      quote:
        'Rentora found us our dream home in a single weekend. The whole process felt personal and transparent from start to finish.',
      name: 'Mouunt Alezaber',
      role: 'Project manager',
      seed: 'rentora-client-1',
    },
    {
      quote:
        'The team knew the market inside out. We sold above asking and closed in under a month.',
      name: 'Cora Bellamy',
      role: 'Interior designer',
      seed: 'rentora-client-2',
    },
    {
      quote:
        'Honest advice, no pressure, and a beautiful shortlist. I recommend Rentora to every friend relocating.',
      name: 'Dexter Vance',
      role: 'Software engineer',
      seed: 'rentora-client-3',
    },
    {
      quote:
        'From the first viewing to the keys in our hands, everything ran like clockwork.',
      name: 'Sienna Moore',
      role: 'School teacher',
      seed: 'rentora-client-4',
    },
  ],
} as const

export const CTA = {
  heading: 'Are You Ready For Move?',
  blurb:
    'Tell us what you are looking for and let our specialists curate the perfect shortlist for you.',
  ctaLabel: 'Sign Up',
  seed: 'rentora-cta',
} as const

export const BLOG = {
  heading: 'Read Latest News From Our Blog',
  posts: [
    {
      title: 'Doee lights without darkness that said good deep years very.',
      meta: 'Apartment / March 20, 2019',
      comments: '3 Comments',
      likes: '2k',
      excerpt:
        'Seed gathering dry appear. Itself appear great, bring fowl cattle moved dominion living.',
      seed: 'rentora-blog-1',
      media: false,
    },
    {
      title: 'Green very from for rule stars seasons',
      meta: 'House / March 18, 2019',
      comments: '5 Comments',
      likes: '1k',
      excerpt:
        'Green living, quiet streets, and a community that looks out for one another.',
      seed: 'rentora-blog-2',
      media: false,
    },
    {
      title: 'Moveth wherein subdue of brought',
      meta: 'Apartment / March 15, 2019',
      comments: '2 Comments',
      likes: '800',
      excerpt:
        'From trendy lofts to family townhouses, the city has a home for every rhythm of life.',
      seed: 'rentora-blog-3',
      media: true,
    },
    {
      title: 'Firmament heaven cant him night rule',
      meta: 'Villa / March 12, 2019',
      comments: '7 Comments',
      likes: '3k',
      excerpt:
        'A quiet escape with generous gardens and interiors flooded with natural light.',
      seed: 'rentora-blog-4',
      media: true,
    },
  ],
} as const

export const FOOTER = {
  aboutTitle: 'About Us',
  aboutBlurb:
    'Rentora is a full-service real estate agency pairing buyers and sellers with homes they love across the state.',
  contactTitle: 'Contact Info',
  address: 'Your address goes here, your demo address.',
  phone: '+8880 44338899',
  email: 'info@rentora.example',
  linksTitle: 'Important Link',
  links: ['WHMCS-bridge', 'Search Domain', 'My Account', 'Shopping Cart', 'Our Shop'],
  newsletterTitle: 'Newsletter',
  newsletterBlurb:
    'Subscribe to our newsletter for new listings, market news, and home inspiration.',
  newsletterPlaceholder: 'Your email address',
  newsletterLabel: 'Subscribe',
  sendLabel: 'Send',
  credit: 'More templates at Component Dock',
} as const

export const SOCIALS = ['facebook', 'twitter', 'instagram', 'linkedin'] as const
