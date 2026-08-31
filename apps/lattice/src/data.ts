export interface PortfolioItem {
  id: number
  title: string
  category: string
  imageUrl: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Work 01',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/seed/lattice-1/600/400',
  },
  {
    id: 2,
    title: 'Work 02',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/lattice-2/600/400',
  },
  {
    id: 3,
    title: 'Work 03',
    category: 'Photography',
    imageUrl: 'https://picsum.photos/seed/lattice-3/600/400',
  },
  {
    id: 4,
    title: 'Work 04',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/seed/lattice-4/600/400',
  },
  {
    id: 5,
    title: 'Work 05',
    category: 'UI/UX',
    imageUrl: 'https://picsum.photos/seed/lattice-5/600/400',
  },
  {
    id: 6,
    title: 'Work 06',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/lattice-6/600/400',
  },
]
