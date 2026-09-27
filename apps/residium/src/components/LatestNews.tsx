import { ArrowRight } from 'lucide-react'

const NEWS_ITEMS = [
  {
    date: '24',
    month: 'Nov',
    category: 'Properties',
    title: 'Footprints in Time: House in Kurashiki, Japan',
    seed: 'news-1',
  },
  {
    date: '18',
    month: 'Nov',
    category: 'Properties',
    title: 'Modern Living Spaces: Urban Apartments Guide',
    seed: 'news-2',
  },
]

export function LatestNews() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-navy-800">Our Latest News</h2>
          <div className="mx-auto mt-4 flex justify-center gap-1">
            <span className="h-1 w-12 bg-red-500" />
            <span className="h-1 w-4 bg-red-500" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {NEWS_ITEMS.map(({ date, month, category, title, seed }) => (
            <article
              key={seed}
              className="group overflow-hidden bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/residium-${seed}/800/400`}
                  alt={title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex gap-4 p-6">
                {/* Date badge */}
                <div className="shrink-0 text-center">
                  <span className="block text-2xl font-bold font-heading text-red-500">{date}</span>
                  <span className="text-xs text-gray-500">{month}</span>
                </div>
                {/* Content */}
                <div>
                  <span className="text-xs font-medium uppercase text-red-500">{category}</span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-navy-800">{title}</h3>
                  <a
                    href="#"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-red-500"
                  >
                    Read more <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
