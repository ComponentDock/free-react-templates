import { useState } from 'react'

interface PortfolioItem {
  title: string
  subtitle: string
  image: string
  size: 'large' | 'small'
}

const PROJECTS: PortfolioItem[] = [
  {
    title: 'Nike Campaign',
    subtitle: 'View Case Study',
    image: 'https://picsum.photos/seed/playbook-1/800/600',
    size: 'large',
  },
  {
    title: 'Adidas Rebrand',
    subtitle: 'View Case Study',
    image: 'https://picsum.photos/seed/playbook-2/800/600',
    size: 'large',
  },
  {
    title: 'Spotify Design',
    subtitle: 'View Case Study',
    image: 'https://picsum.photos/seed/playbook-3/600/400',
    size: 'small',
  },
  {
    title: 'Apple Interface',
    subtitle: 'View Case Study',
    image: 'https://picsum.photos/seed/playbook-4/600/400',
    size: 'small',
  },
  {
    title: 'Google UX',
    subtitle: 'View Case Study',
    image: 'https://picsum.photos/seed/playbook-5/600/400',
    size: 'small',
  },
]

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${
        item.size === 'large' ? 'col-span-1 md:col-span-1' : 'col-span-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-brand/90 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-sm text-white/90">{item.subtitle}</p>
      </div>
    </div>
  )
}

export function Portfolio() {
  const largeItems = PROJECTS.filter((p) => p.size === 'large')
  const smallItems = PROJECTS.filter((p) => p.size === 'small')

  return (
    <section id="work" className="relative z-10 -mt-24 px-6 pb-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* First row: 2 large items */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {largeItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
        {/* Second row: 3 small items */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {smallItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
