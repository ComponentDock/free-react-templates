import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/stallion-cta/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-light uppercase tracking-[3px] text-gray-300">
          Book an appointment
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Get into shape now
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Book Now
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
