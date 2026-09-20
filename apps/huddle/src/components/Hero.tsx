export interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={`relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat pt-20 ${
        className ?? ''
      }`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/huddle-hero/1920/1080)',
      }}
    >
      <div className="px-6 text-center">
        <h1
          className="mb-4 text-5xl font-bold text-white md:text-7xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          The Future of Innovation
        </h1>
        <p className="mb-8 text-lg text-white/90">April 17 – 21, 2025 &bull; Vancouver</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-hover hover:shadow-lg"
          >
            Get Your Ticket
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
