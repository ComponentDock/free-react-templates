import { HERO } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[750px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO.image})` }}
    >
      {/* Left-to-right black gradient overlay (reference: .hero-overly). */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #000 0%, rgba(60,0,0,0.61) 40%, rgba(0,0,0,0) 73%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl font-normal leading-tight text-white md:text-7xl">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-[22px] font-light leading-relaxed text-white/90">
            {HERO.blurb}
          </p>
          <a
            href={HERO.ctaHref}
            className="mt-9 inline-block bg-white px-10 py-4 text-lg text-brand transition-colors hover:bg-brand hover:text-white"
          >
            {HERO.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
