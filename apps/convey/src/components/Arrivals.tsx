import { ArrowRight } from 'lucide-react'

const arrivals = [
  {
    title: 'Fresh Arrivals',
    image: 'https://picsum.photos/seed/aurora-arrival-1/640/480',
    blurb:
      'Here, we focus on a range of items that we can deliver straight to your door — new in this week.',
  },
  {
    title: 'Online Store',
    image: 'https://picsum.photos/seed/aurora-arrival-2/640/480',
    blurb:
      'Shop the full collection online with free returns and same-day dispatch on in-stock styles.',
  },
  {
    title: 'New Collection',
    image: 'https://picsum.photos/seed/aurora-arrival-3/640/480',
    blurb: 'The autumn drop is here: rich textures, warm palettes, and silhouettes made to layer.',
  },
]

export function Arrivals() {
  return (
    <section id="arrivals" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          What&apos;s New
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {arrivals.map((item) => (
            <article key={item.title} className="group">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.blurb}</p>
              <a
                href="#arrivals"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-blush-400 hover:text-blush-600"
              >
                Learn Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
