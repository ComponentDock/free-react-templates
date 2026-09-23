import { BrandIcon } from './BrandIcon'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/pediment-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:w-1/2 lg:pl-16">
        <h1 className="mb-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Quality is not only our standard.
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            See Project
          </a>
          <a
            href="#about"
            className="inline-block border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
          >
            Discover more
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/70 transition-colors hover:text-brand"
          >
            <BrandIcon name="facebook" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white/70 transition-colors hover:text-brand"
          >
            <BrandIcon name="x" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/70 transition-colors hover:text-brand"
          >
            <BrandIcon name="instagram" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white/70 transition-colors hover:text-brand"
          >
            <BrandIcon name="linkedin" />
          </a>
        </div>
      </div>
    </section>
  )
}
