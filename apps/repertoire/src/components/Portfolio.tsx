import { cn } from '@free-react-templates/ui'
import { Share2, Eye, Heart } from 'lucide-react'

interface PortfolioItem {
  title: string
  tags: string[]
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Brand Identity Project',
    tags: ['Branding', 'Design'],
    image: 'https://picsum.photos/seed/portfolio1/600/400',
  },
  {
    title: 'E-Commerce Redesign',
    tags: ['Web Design', 'UI'],
    image: 'https://picsum.photos/seed/portfolio2/600/400',
  },
  {
    title: 'Mobile App Interface',
    tags: ['UI', 'Development'],
    image: 'https://picsum.photos/seed/portfolio3/600/400',
  },
  {
    title: 'SEO Strategy Dashboard',
    tags: ['SEO', 'Analytics'],
    image: 'https://picsum.photos/seed/portfolio4/600/400',
  },
  {
    title: 'Corporate Website',
    tags: ['Web Design', 'Development'],
    image: 'https://picsum.photos/seed/portfolio5/600/400',
  },
  {
    title: 'Social Media Campaign',
    tags: ['Branding', 'Marketing'],
    image: 'https://picsum.photos/seed/portfolio6/600/400',
  },
]

interface PortfolioProps {
  className?: string
}

export function Portfolio({ className }: PortfolioProps) {
  return (
    <section id="work" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
            My Work
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Recent Work</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <div className="mb-4 flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    aria-label={`Share ${item.title}`}
                    className="text-white transition-colors hover:text-primary-400"
                  >
                    <Share2 size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label={`View ${item.title}`}
                    className="text-white transition-colors hover:text-primary-400"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Like ${item.title}`}
                    className="text-white transition-colors hover:text-primary-400"
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
