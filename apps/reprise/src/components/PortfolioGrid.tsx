export interface PortfolioItem {
  category: string
  type: string
  image: string
  wide?: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    category: 'SMARTPHONE',
    type: 'GALLERY',
    image: 'https://picsum.photos/seed/reprise-1/800/600',
  },
  { category: 'BOOK', type: 'VIDEO', image: 'https://picsum.photos/seed/reprise-2/800/600' },
  { category: 'DOODLE', type: 'VIDEO', image: 'https://picsum.photos/seed/reprise-3/800/600' },
  {
    category: 'FOSTER',
    type: 'GALLERY',
    image: 'https://picsum.photos/seed/reprise-4/800/1000',
    wide: true,
  },
  { category: 'STARLIGHT', type: 'ARTICLE', image: 'https://picsum.photos/seed/reprise-5/800/600' },
  { category: 'OPEN BOOK', type: 'VIDEO', image: 'https://picsum.photos/seed/reprise-6/800/600' },
  { category: 'BURGER', type: 'VIDEO', image: 'https://picsum.photos/seed/reprise-7/800/600' },
  {
    category: 'PRINTSCREEN',
    type: 'ARTICLE',
    image: 'https://picsum.photos/seed/reprise-8/800/600',
  },
  { category: 'BOTTLE', type: 'ARTICLE', image: 'https://picsum.photos/seed/reprise-9/800/600' },
]

function GridItem({ item }: { item: PortfolioItem }) {
  return (
    <a
      href="#"
      className={`group relative block overflow-hidden ${item.wide ? 'col-span-2' : 'col-span-1'}`}
    >
      <img
        src={item.image}
        alt={item.category}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      <div className="absolute left-6 top-6 z-10">
        <p className="font-heading text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">
          {item.category}
        </p>
        <p className="mt-1 text-xs uppercase tracking-widest text-white/80 drop-shadow-md">
          {item.type}
        </p>
      </div>
    </a>
  )
}

export function PortfolioGrid() {
  return (
    <section className="bg-warm-gray">
      <div className="mx-auto max-w-[1170px] px-4 py-8">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <GridItem key={item.category} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
