import { Badge, cn } from '@free-react-templates/ui'

interface FeaturedCase {
  tag: string
  title: string
  image: string
}

const cases: FeaturedCase[] = [
  {
    tag: 'Strategy planning',
    title: 'Within the construction industry as their overdraft',
    image: 'https://picsum.photos/seed/consilio-5/500/400',
  },
  {
    tag: 'Market entry',
    title: 'Scaling a regional manufacturer into new territories',
    image: 'https://picsum.photos/seed/consilio-6/500/400',
  },
  {
    tag: 'Operations',
    title: 'Reworking a distribution network for speed and cost',
    image: 'https://picsum.photos/seed/consilio-7/500/400',
  },
  {
    tag: 'Digital growth',
    title: 'Building an e-commerce engine for a retail group',
    image: 'https://picsum.photos/seed/consilio-8/500/400',
  },
]

export function FeaturedCases() {
  return (
    <section aria-labelledby="featured-cases-heading" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
              <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
              Our Portfolios of Cases
            </p>
            <h2
              id="featured-cases-heading"
              className="font-display text-3xl font-bold text-brand-deep dark:text-white"
            >
              Featured Case Study
            </h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded bg-white shadow-sm dark:bg-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <Badge className={cn('mb-3 bg-eyebrow/10 text-eyebrow')}>{item.tag}</Badge>
                <h3 className="font-display text-sm font-bold leading-snug text-brand-deep dark:text-white">
                  <a href="#case-studies" className="transition-colors hover:text-accent">
                    {item.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
