import { RefreshCw } from 'lucide-react'
import { PortfolioItem } from './PortfolioItem'

const portfolioItems = [
  {
    category: 'Portrait',
    title: 'Black & Gold Paint Face',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-portrait-1/800/600',
    imageAlt: 'Portrait photography with black and gold paint',
  },
  {
    category: 'Nature',
    title: 'Green Leaves',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-nature-1/800/600',
    imageAlt: 'Nature photography of green leaves',
  },
  {
    category: 'Nature',
    title: 'Coal',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-nature-2/800/600',
    imageAlt: 'Nature photography of coal',
  },
  {
    category: 'Nature',
    title: 'Top Leaf',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-nature-3/800/600',
    imageAlt: 'Nature photography of a top leaf',
  },
  {
    category: 'Portrait',
    title: 'Building',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-portrait-2/800/600',
    imageAlt: 'Portrait photography of a building',
  },
  {
    category: 'Fashion',
    title: 'Black Girl Model',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-fashion-1/800/600',
    imageAlt: 'Fashion photography of a model',
  },
  {
    category: 'Animals',
    title: 'Pug Puppy',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-animals-1/800/600',
    imageAlt: 'Animal photography of a pug puppy',
  },
  {
    category: 'Nature',
    title: 'White Flower',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-nature-4/800/600',
    imageAlt: 'Nature photography of a white flower',
  },
  {
    category: 'Animals',
    title: 'Turtle',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    imageSrc: 'https://picsum.photos/seed/lumiere-animals-2/800/600',
    imageAlt: 'Animal photography of a turtle',
  },
]

export function PortfolioGrid() {
  return (
    <section id="gallery" className="w-full">
      {portfolioItems.map((item, index) => (
        <PortfolioItem key={item.title} {...item} reversed={index % 2 === 1} />
      ))}

      {/* Load more */}
      <div className="border-t border-gray-100">
        <a
          href="#more"
          className="flex items-center justify-center gap-2 py-5 text-xs font-semibold uppercase tracking-widest text-heading transition-colors hover:bg-gray-50"
        >
          Load more
          <RefreshCw className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
