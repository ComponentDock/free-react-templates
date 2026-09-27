import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    subtitle: 'For website and video editing',
    heading: "Videographer's Portfolio",
    cta: 'See more about us',
    image: 'https://picsum.photos/seed/reelcraft-hero1/1920/1080',
  },
  {
    subtitle: 'Creative storytelling through motion',
    heading: 'Visual Content Studio',
    cta: 'See more about us',
    image: 'https://picsum.photos/seed/reelcraft-hero2/1920/1080',
  },
  {
    subtitle: 'Professional video production',
    heading: 'Cinematic Excellence',
    cta: 'See more about us',
    image: 'https://picsum.photos/seed/reelcraft-hero3/1920/1080',
  },
] as const

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image (first slide shown; simple static hero) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[0].image})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              {slides[0].subtitle}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slides[0].heading}
            </h1>
            <ButtonLink
              href="#about"
              className="mt-8 inline-flex border border-white/30 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {slides[0].cta}
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full ${i === 0 ? 'bg-brand' : 'bg-white/40'}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  )
}
