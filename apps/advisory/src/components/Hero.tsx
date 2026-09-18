import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-32"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/advisory-hero/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-navy/40" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="max-w-xl text-center lg:text-left">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-navy">
            Best Service
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Business Consulting
          </h1>
          <p className="mb-8 text-lg text-text">
            The automated process starts as soon as your clothes go into the machine. We bring ideas
            to life with years of experience.
          </p>
          <a
            href="#services"
            className="inline-block rounded-full bg-gradient-to-r from-brand via-brand-dark to-brand px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-lg"
          >
            Explore Services
          </a>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/advisory-hero-person/600/500"
            alt="Business consultant"
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
      <button
        aria-label="Play video"
        className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark"
        type="button"
      >
        <Play className="h-6 w-6" />
      </button>
    </section>
  )
}
