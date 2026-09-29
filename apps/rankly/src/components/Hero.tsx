import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center overflow-hidden bg-ink">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background image */}
      <img
        src="https://picsum.photos/seed/rankly-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="container relative z-10 mx-auto grid items-center gap-8 px-4 py-20 md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
            SEO Analysis
            <br />
            Helps to Upgrade
            <br />
            Website Ranking
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-gray-300">
            Data-driven SEO strategies that help your business climb search engine rankings and
            reach more customers organically.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="hidden md:block">
          <img
            src="https://picsum.photos/seed/rankly-hero-img/600/500"
            alt="SEO analysis illustration"
            className="mx-auto w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
