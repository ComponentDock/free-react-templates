import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/stallion-final/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          It&apos;s never late to start, join us today!
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
          Thinking about your fitness journey? Have you put any thought into where to begin? Now is
          the best time to take the first step toward a healthier, stronger you.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Become a Member
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
