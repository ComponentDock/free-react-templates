import { ArrowRight } from 'lucide-react'

const causes = [
  {
    title: 'Feed the Hungry',
    description: 'Providing meals and food supplies to families in need across the community.',
    image: 'https://picsum.photos/seed/sacredgate-cause1/400/250',
  },
  {
    title: 'Shelter Project',
    description: 'Building homes and providing shelter for the homeless and vulnerable.',
    image: 'https://picsum.photos/seed/sacredgate-cause2/400/250',
  },
  {
    title: 'Education Fund',
    description: 'Supporting children with school supplies, tutoring, and scholarships.',
    image: 'https://picsum.photos/seed/sacredgate-cause3/400/250',
  },
] as const

export function Causes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          Our Church&apos;s Causes
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <article
              key={cause.title}
              className="group overflow-hidden border border-gray-200 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{cause.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{cause.description}</p>
                <a
                  href="#donate"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Donate Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
