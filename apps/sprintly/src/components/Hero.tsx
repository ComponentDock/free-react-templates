import { ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/sprintly-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-dark-900/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <span className="font-heading text-lg font-semibold uppercase tracking-widest text-brand-500">
          Join Us Now
        </span>
        <h1 className="mt-2 font-heading text-6xl font-bold uppercase leading-tight text-white md:text-8xl">
          Fitness <span className="text-brand-500">&amp;</span> Sport
        </h1>
        <p className="mt-4 max-w-xl text-lg text-dark-200">
          Push your limits and achieve your fitness goals with our expert trainers and world-class
          facilities.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex items-center gap-2 rounded bg-brand-500 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-600"
        >
          Get Started <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
