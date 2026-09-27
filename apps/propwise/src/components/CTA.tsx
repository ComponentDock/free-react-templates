import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/propwise-cta/1600/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-heading/70" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Find Your Dream Property Today
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
          Browse thousands of properties and discover the one that fits your lifestyle. Our expert
          team is here to help you every step of the way.
        </p>
        <a
          href="#property"
          className="mt-8 inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
        >
          Browse Properties
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
