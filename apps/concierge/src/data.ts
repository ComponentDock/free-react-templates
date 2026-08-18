// Section content for the Concierge template (original copy, paraphrased
// from the design reference; no assets copied).

export interface Service {
  title: string
  blurb: string
}

export const services: Service[] = [
  {
    title: 'Trekking',
    blurb:
      'Guided trails through rainforest, crater lakes, and highland villages with local expedition leaders.',
  },
  {
    title: 'The Map',
    blurb:
      'Hand-drawn route maps that turn any stay into a self-guided adventure across the island.',
  },
  {
    title: 'Suitcase',
    blurb:
      'Packing checklists and luggage storage so every trip starts light and ends stress-free.',
  },
  {
    title: 'Island Hoping',
    blurb:
      'Daily boat transfers between the archipelago’s quiet coves, coral gardens, and sandbars.',
  },
  {
    title: 'World Round',
    blurb:
      'Multi-stop itineraries that string together the region’s best stays, ferries, and flights.',
  },
  {
    title: 'Travel with Plane',
    blurb: 'Arranged transfers from the airport to your door, with real-time arrival tracking.',
  },
]

export interface Post {
  title: string
  image: string
}

export const posts: Post[] = [
  {
    title: 'Five quiet islands to reset your mind',
    image: 'https://picsum.photos/seed/concierge-post-1/600/400',
  },
  {
    title: 'Packing smart for a month abroad',
    image: 'https://picsum.photos/seed/concierge-post-2/600/400',
  },
  {
    title: 'A morning at the floating market',
    image: 'https://picsum.photos/seed/concierge-post-3/600/400',
  },
  {
    title: 'Where to eat like a local after dark',
    image: 'https://picsum.photos/seed/concierge-post-4/600/400',
  },
  {
    title: 'Slow travel: one bay, three weeks',
    image: 'https://picsum.photos/seed/concierge-post-5/600/400',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Is it free?',
    answer:
      'Yes — Concierge is a free template. You can use it for personal or commercial projects without any fees.',
  },
  {
    question: 'How to install this template?',
    answer:
      'Download the source, run npm install at the repository root, then start the dev server with npm run dev to preview the page locally.',
  },
  {
    question: 'Where can i get help?',
    answer:
      'Open an issue on the project repository or reach out through the contact details in the footer — we answer within a day.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The concierge team rearranged our entire route after a storm delay — every transfer, every table, flawless.',
    name: 'Alex Morgan',
    role: 'Travel Blogger',
  },
  {
    quote:
      'Our family stayed three weeks and never once wondered what to do next. The daily suggestions were spot on.',
    name: 'Priya Shah',
    role: 'Resort Manager',
  },
  {
    quote:
      'From the airport pickup to the last sunset cruise, everything felt effortless. We will be back next year.',
    name: 'Daniel Kim',
    role: 'Family Traveler',
  },
  {
    quote:
      'I planned nothing and loved everything. The island-hopping day turned out to be the highlight of our trip.',
    name: 'Sofia Reyes',
    role: 'Photographer',
  },
  {
    quote:
      'Rare to find a stay where the staff already know your coffee order by day two. Genuinely thoughtful service.',
    name: 'Tom Becker',
    role: 'Freelance Writer',
  },
  {
    quote:
      'The booking widget made it effortless to compare dates and lock the best room rate for our anniversary.',
    name: 'Lena Fischer',
    role: 'Event Planner',
  },
  {
    quote:
      'Our guide knew every tide and trail on the north shore. The trekking package exceeded every expectation.',
    name: 'Marcus Webb',
    role: 'Outdoor Instructor',
  },
  {
    quote:
      'A seamless experience from the first enquiry to checkout. The team genuinely cares about the details.',
    name: 'Yuki Tanaka',
    role: 'Hotel Consultant',
  },
]

export interface GalleryTile {
  image: string
  alt: string
}

export const instagramTiles: GalleryTile[] = [
  { image: 'https://picsum.photos/seed/concierge-instagram-1/400/400', alt: 'Sunset jetty view' },
  { image: 'https://picsum.photos/seed/concierge-instagram-2/400/400', alt: 'Overwater bungalows' },
  { image: 'https://picsum.photos/seed/concierge-instagram-3/400/400', alt: 'Palm-lined beach' },
  {
    image: 'https://picsum.photos/seed/concierge-instagram-4/400/400',
    alt: 'Fresh seafood platter',
  },
  { image: 'https://picsum.photos/seed/concierge-instagram-5/400/400', alt: 'Kayaking at dawn' },
  { image: 'https://picsum.photos/seed/concierge-instagram-6/400/400', alt: 'Hidden waterfall' },
  {
    image: 'https://picsum.photos/seed/concierge-instagram-7/400/400',
    alt: 'Night market lanterns',
  },
  {
    image: 'https://picsum.photos/seed/concierge-instagram-8/400/400',
    alt: 'Island viewpoint hike',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destination', href: '#destination' },
  { label: 'Menu One', href: '#menu-one' },
  { label: 'Menu Two', href: '#menu-two' },
  { label: 'Dropdown', href: '#dropdown' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const dropdownItems = ['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three']

export const phoneNumber = '123-489-9381'

export const footerLinkGroups: { title: string; links: string[] }[] = [
  {
    title: 'Home',
    links: ['Home', 'About us', 'Places', 'Services', 'Destination', 'Terms', 'Privacy'],
  },
  {
    title: 'Practice Area',
    links: ['Travel', 'Popular places', 'Destination', 'Tour', 'Family Vacation'],
  },
  {
    title: 'Services',
    links: ['Tour', 'Swimming', 'Kayak', 'Surfing'],
  },
]

export const contactDetails = {
  address: '18 Palm Harbor Dr, Bayview, Tropical Coast 3910',
  phones: ['+1(123)-456-7890', '+1(123)-456-7891'],
  email: 'stay@concierge.example',
}

export const socials = ['Facebook', 'X', 'LinkedIn', 'Pinterest', 'Instagram'] as const
