import { ExternalLink } from 'lucide-react'

interface PortfolioItem {
  title: string
  tags: string
  image: string
}

const ITEMS: PortfolioItem[] = [
  {
    title: 'Project Alpha',
    tags: 'web, branding',
    image: 'https://picsum.photos/seed/cosmos-1/600/400',
  },
  {
    title: 'Project Beta',
    tags: 'illustration, app',
    image: 'https://picsum.photos/seed/cosmos-2/600/400',
  },
  {
    title: 'Project Gamma',
    tags: 'web, branding',
    image: 'https://picsum.photos/seed/cosmos-3/600/400',
  },
  {
    title: 'Project Delta',
    tags: 'photography',
    image: 'https://picsum.photos/seed/cosmos-4/600/400',
  },
  {
    title: 'Project Epsilon',
    tags: 'web, marketing',
    image: 'https://picsum.photos/seed/cosmos-5/600/400',
  },
  {
    title: 'Project Zeta',
    tags: 'branding, design',
    image: 'https://picsum.photos/seed/cosmos-6/600/400',
  },
  { title: 'Project Eta', tags: 'web, app', image: 'https://picsum.photos/seed/cosmos-7/600/400' },
  {
    title: 'Project Theta',
    tags: 'illustration',
    image: 'https://picsum.photos/seed/cosmos-8/600/400',
  },
  {
    title: 'Project Iota',
    tags: 'web, branding',
    image: 'https://picsum.photos/seed/cosmos-9/600/400',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-mulish mb-2 text-4xl font-bold text-ink">Portfolio</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <a key={item.title} href="#" className="group relative block overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/80">
                <div className="translate-y-4 text-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExternalLink size={24} className="mx-auto mb-3" />
                  <h3 className="font-mulish text-lg font-bold">{item.title}</h3>
                  <p className="font-roboto-mono text-sm text-white/70">{item.tags}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
