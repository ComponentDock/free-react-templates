import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: 'E-commerce Growth',
    description:
      'We helped a retail brand increase their online revenue by 150% through strategic digital transformation and UX optimization.',
    image: 'https://picsum.photos/seed/case1/600/400',
  },
  {
    title: 'Brand Revamp',
    description:
      'A complete brand identity overhaul that resulted in 3x more brand recognition and significantly higher customer engagement.',
    image: 'https://picsum.photos/seed/case2/600/400',
  },
  {
    title: 'Startup Acceleration',
    description:
      'From zero to product-market fit in 6 months — our strategy and execution helped a SaaS startup secure Series A funding.',
    image: 'https://picsum.photos/seed/case3/600/400',
  },
] as const

export function CaseStudy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-ink md:text-4xl">
          Case Study
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{c.description}</p>
                <a
                  href="#work"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
