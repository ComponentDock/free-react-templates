import {
  appointmentLabel,
  heroBlurb,
  heroEyebrow,
  heroImageAlt,
  heroImageSeed,
  heroTitle,
} from '../data'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f0f9f0]">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wide text-brand">
            {heroEyebrow}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-body">{heroBlurb}</p>
          <a
            href="#appointment"
            className="mt-8 inline-flex h-[50px] items-center rounded-full bg-brand px-9 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            {appointmentLabel}
          </a>
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
