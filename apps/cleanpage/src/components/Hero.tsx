import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="flex min-h-[750px] pt-20">
      <div className="flex w-full items-center bg-paper lg:w-3/5">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
            Welcome
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
            We Help to Build You the Product
          </h1>
          <h2 className="mt-2 font-display text-xl font-light text-mist md:text-2xl">
            Business Solution
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 font-display text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Get in touch
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div
        className="hidden h-[750px] w-2/5 bg-cover bg-center lg:block"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/cleanpage-hero/800/750)`,
        }}
      />
    </section>
  )
}
