import { Play } from 'lucide-react'

export function Banner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-banner-fallback/40 to-white px-4 py-24 sm:px-6 lg:px-8"
      style={{ minHeight: '80vh' }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute right-10 top-20 h-40 w-40 animate-pulse rounded-full bg-brand-start/20" />
      <div className="pointer-events-none absolute bottom-20 right-40 h-24 w-24 animate-pulse rounded-full bg-brand-end/15" />
      <div className="pointer-events-none absolute left-10 top-40 h-16 w-16 animate-pulse rounded-full bg-green-accent/50" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-20 w-20 animate-pulse rounded-full bg-border-warm/30" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-12 w-12 animate-pulse rounded-full bg-brand-start/10" />

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl lg:max-w-md">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
            Lead from
            <br />
            Front in Business
            <br />
            Innovation.
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-body">
            Male bring land dominion over can yielding his moveth under of depend brought him is.
            Multiply which firmament deep make.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#about" className="gradient-btn">
              Learn More
            </a>
            <a
              href="#"
              className="flex items-center gap-2 font-medium text-heading transition-colors hover:text-brand-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-end/10">
                <Play size={18} fill="currentColor" className="text-brand-end" />
              </span>
              Intro Video
            </a>
          </div>
        </div>
        <div className="hidden flex-1 justify-center lg:flex">
          <img
            src="https://picsum.photos/seed/bizmark-hero/500/400"
            alt="Business consulting illustration"
            className="rounded-xl object-cover shadow-lg"
            width={500}
            height={400}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
