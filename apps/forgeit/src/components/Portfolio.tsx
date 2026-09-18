interface PortfolioItemProps {
  image: string
  title: string
  category: string
}

function PortfolioItem({ image, title, category }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="mt-1 text-sm text-brand">{category}</span>
      </div>
    </div>
  )
}

const ITEMS: PortfolioItemProps[] = [
  {
    image: 'https://picsum.photos/seed/forgeit-work1/600/400',
    title: 'Bonzai Tree',
    category: 'Web Application',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-work2/600/400',
    title: 'Simple Woman',
    category: 'Branding',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-work3/600/400',
    title: 'Fruits',
    category: 'Website',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-work4/600/400',
    title: 'Design Material',
    category: 'Web Application',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-work5/600/400',
    title: 'Handy Food',
    category: 'Branding',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-work6/600/400',
    title: 'Cat With Cup',
    category: 'Website',
  },
]

export function Portfolio() {
  return (
    <section id="work-section" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Our Works</h2>
          <p className="section-subtitle">
            A selection of our finest creative projects and digital experiences.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <PortfolioItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
