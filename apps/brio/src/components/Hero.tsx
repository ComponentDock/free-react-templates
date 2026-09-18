import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brio-coral to-brio-yellow pb-20 pt-16 text-center">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative mx-auto max-w-3xl px-4">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Bright App Landing
        </h1>
        <p className="mb-8 text-lg text-white/90">
          Inappropriate behavior is often laughed off as &ldquo;boys will be boys,&rdquo; women face
          higher conduct standards &mdash; especially in the workplace.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:border-transparent hover:bg-white hover:text-brio-dark"
        >
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
