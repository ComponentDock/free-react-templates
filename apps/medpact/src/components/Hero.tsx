import {
  heroTitle,
  heroBlurb,
  heroCtaPrimary,
  heroCtaSecondary,
  heroImageSeed,
  heroImageAlt,
} from '../data'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f0f8ff]">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted">{heroBlurb}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="inline-flex h-[50px] items-center rounded bg-brand px-9 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              {heroCtaPrimary}
            </a>
            <a
              href="#services"
              className="inline-flex h-[50px] items-center rounded border-2 border-brand px-9 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              {heroCtaSecondary}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={`https://picsum.photos/seed/${heroImageSeed}/560/520`}
            alt={heroImageAlt}
            loading="eager"
            className="w-full max-w-[560px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
