import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative min-h-screen bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pt-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-accent-400">
            Best Seller Book Of The Week
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Clue Of The Wooden Cottage
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
            A captivating journey through mystery and wonder. Follow the clues left behind in an
            ancient cottage hidden deep within the forest, where every page turns to reveal a new
            secret.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#contact"
              className="inline-block rounded bg-accent-400 px-8 py-3.5 font-display font-semibold text-white transition-colors hover:bg-accent-500"
            >
              Buy Now For $22.78
            </ButtonLink>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          <img
            src="https://picsum.photos/seed/prose-hero/480/560"
            alt="Book cover illustration"
            className="w-full max-w-sm rounded-lg shadow-2xl lg:max-w-md"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
