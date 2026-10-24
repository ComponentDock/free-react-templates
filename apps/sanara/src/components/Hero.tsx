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
    <section className="relative overflow-hidden bg-[#f9fbff]">
      {/* soft abstract blobs mimicking the source's light background shapes */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-2/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div>
          <h5 className="mb-4 text-sm font-medium uppercase tracking-wide text-heading">
            {heroEyebrow}
          </h5>
          <h1 className="font-serif text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted">{heroBlurb}</p>
          <a
            href="#appointment"
            className="mt-8 inline-flex h-[50px] items-center bg-gradient-to-r from-brand-2 to-brand px-9 text-sm font-medium text-white transition-[background-position] duration-300 hover:bg-brand-hover"
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
