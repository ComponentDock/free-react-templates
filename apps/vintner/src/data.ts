export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Wines', href: '#wines' },
  { label: 'Shop', href: '#wines' },
  { label: 'Contact', href: '#contact' },
]

export interface HeroSlide {
  id: string
  image: string
  alt: string
  subTitle: string
  headline: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://picsum.photos/id/431/1600/1000',
    alt: 'Dark artisanal bar counter under warm light',
    subTitle: 'Royal Wine',
    headline: 'Grape Wine',
  },
  {
    id: 'slide-2',
    image: 'https://picsum.photos/id/1080/1600/1000',
    alt: 'Deep red harvest fruit in a wooden crate',
    subTitle: 'Welcome',
    headline: 'Wines For Everyone',
  },
]

export interface Product {
  id: string
  name: string
  image: string
  alt: string
  price: string
  originalPrice: string
  rating: number
  ratingMax: number
}

export const products: Product[] = [
  {
    id: 'cabernet',
    name: 'Cabernet Sauvignon 2019',
    image: 'https://picsum.photos/id/292/600/700',
    alt: 'Cabernet Sauvignon 2019 bottle',
    price: '$629.00',
    originalPrice: '$900.00',
    rating: 4,
    ratingMax: 5,
  },
  {
    id: 'merlot',
    name: 'Merlot Reserve 2018',
    image: 'https://picsum.photos/id/425/600/700',
    alt: 'Merlot Reserve 2018 bottle',
    price: '$629.00',
    originalPrice: '$900.00',
    rating: 4,
    ratingMax: 5,
  },
  {
    id: 'rose',
    name: 'Rosé Cuvée 2021',
    image: 'https://picsum.photos/id/1080/600/700',
    alt: 'Rosé Cuvée 2021 bottle',
    price: '$629.00',
    originalPrice: '$900.00',
    rating: 4,
    ratingMax: 5,
  },
]

export interface Testimonial {
  id: string
  quote: string
  name: string
  photo: string
  alt: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Every bottle tells the story of the harvest — from the first vine to the last pour. Vintner turned our cellar into the heart of every dinner.',
    name: 'Allie Smith',
    photo: 'https://picsum.photos/id/1027/400/400',
    alt: 'Portrait of Allie Smith',
  },
  {
    id: 'testimonial-2',
    quote:
      'The tasting visits became a monthly ritual. The team knows every vintage by heart and pours with real passion.',
    name: 'Harper Quinn',
    photo: 'https://picsum.photos/id/64/400/400',
    alt: 'Portrait of Harper Quinn',
  },
  {
    id: 'testimonial-3',
    quote:
      'From the first glass of the reserve to the last sip of the rosé, every selection has been outstanding.',
    name: 'Amelia Stone',
    photo: 'https://picsum.photos/id/823/400/400',
    alt: 'Portrait of Amelia Stone',
  },
  {
    id: 'testimonial-4',
    quote:
      'We served Vintner wines at our wedding and guests are still talking about the pairings.',
    name: 'Livia Ray',
    photo: 'https://picsum.photos/id/996/400/400',
    alt: 'Portrait of Livia Ray',
  },
]

export interface BlogPost {
  id: string
  title: string
  image: string
  alt: string
  excerpt: string
  author: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'What You Need To Know About Premium Rosé',
    image: 'https://picsum.photos/id/791/700/500',
    alt: 'Rolling hills at golden hour',
    excerpt:
      'A guide to reading the label, picking the right vintage, and serving rosé the way it was meant to be enjoyed.',
    author: 'Dave Rogers',
    category: 'News',
  },
  {
    id: 'post-2',
    title: 'Five Food Pairings For A Cellar Dinner',
    image: 'https://picsum.photos/id/343/700/500',
    alt: 'Vineyard hillside with a rocky arch',
    excerpt:
      'From soft cheeses to slow-roasted lamb, these pairings bring out the best in every bottle we carry.',
    author: 'Dave Rogers',
    category: 'Pairings',
  },
  {
    id: 'post-3',
    title: 'Inside The Harvest: A Weekend In The Vines',
    image: 'https://picsum.photos/id/48/700/500',
    alt: 'Notebook and coffee on a wooden table',
    excerpt:
      'We followed the picking crew from dawn until dusk to capture what it really takes to make a great vintage.',
    author: 'Dave Rogers',
    category: 'News',
  },
]
