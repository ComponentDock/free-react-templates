export interface Slide {
  id: number
  image: string
  heading: string
  subtext: string
  cta: string
}

export interface GridItem {
  id: number
  title: string
  category: string
  imageUrl: string
}

export interface SliderItem {
  id: number
  title: string
  description: string
  imageUrl: string
}

export const slides: Slide[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/carouselhub-1/1920/1080',
    heading: 'Creative Portfolios',
    subtext: 'Showcase your best work with stunning visual presentations',
    cta: 'View Gallery',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/carouselhub-2/1920/1080',
    heading: 'Modern Design',
    subtext: 'Clean layouts that put your content front and center',
    cta: 'Explore More',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/carouselhub-3/1920/1080',
    heading: 'Visual Storytelling',
    subtext: 'Let your images speak volumes with elegant compositions',
    cta: 'Get Started',
  },
] as const

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: 'Project Alpha',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/seed/carouselhub-4/600/400',
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/carouselhub-5/600/400',
  },
  {
    id: 3,
    title: 'Photo Series',
    category: 'Photography',
    imageUrl: 'https://picsum.photos/seed/carouselhub-6/600/400',
  },
  {
    id: 4,
    title: 'App Interface',
    category: 'UI/UX',
    imageUrl: 'https://picsum.photos/seed/carouselhub-7/600/400',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    category: 'Animation',
    imageUrl: 'https://picsum.photos/seed/carouselhub-8/600/400',
  },
  {
    id: 6,
    title: 'Digital Campaign',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/seed/carouselhub-9/600/400',
  },
]

export const sliderItems: SliderItem[] = [
  {
    id: 1,
    title: 'Website Redesign',
    description: 'A complete overhaul of a corporate website with modern aesthetics.',
    imageUrl: 'https://picsum.photos/seed/carouselhub-10/600/400',
  },
  {
    id: 2,
    title: 'Mobile App UI',
    description: 'Clean and intuitive interface design for a fitness tracking app.',
    imageUrl: 'https://picsum.photos/seed/carouselhub-11/600/400',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A sleek online store with seamless checkout experience.',
    imageUrl: 'https://picsum.photos/seed/carouselhub-12/600/400',
  },
  {
    id: 4,
    title: 'Social Dashboard',
    description: 'Real-time analytics dashboard with data visualization.',
    imageUrl: 'https://picsum.photos/seed/carouselhub-13/600/400',
  },
]
