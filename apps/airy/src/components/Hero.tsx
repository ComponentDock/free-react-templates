import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center bg-dark-bg pt-20 text-white md:flex-row"
    >
      <div className="flex flex-1 flex-col justify-center px-8 py-16 md:px-16 md:py-0">
        <span className="mb-2 text-sm font-medium uppercase tracking-wider text-primary-300">
          Welcome
        </span>
        <h1 className="mb-3 text-4xl font-bold leading-tight md:text-5xl">
          We Help to Build You the Product
        </h1>
        <h2 className="mb-6 text-xl font-light text-white/70">Business Solution</h2>
        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary-300 px-8 py-3 text-sm font-medium text-dark-bg transition hover:bg-primary-400"
          >
            Get in touch
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="h-72 w-full flex-1 md:h-screen">
        <img
          src="https://picsum.photos/seed/airy-hero/800/600"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
