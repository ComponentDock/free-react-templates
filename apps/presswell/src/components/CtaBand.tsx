import { Phone } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="bg-brand py-16 dark:bg-brand-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Call us for a service
          </h2>
          <p className="mt-2 text-sm text-white/80">
            We deliver the goods to the most complicated places on earth
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Learn More
        </a>
      </div>
    </section>
  )
}
