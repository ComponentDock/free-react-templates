import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/stallion-hero/1600/800)' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Shape your
            <br />
            Perfect body
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-gray-200">
            Transform your lifestyle with our expert trainers, state-of-the-art equipment, and
            personalized fitness programs designed to help you reach your goals.
          </p>
          <a
            href="#courses"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Become a Member
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
