import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-surface-dark">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-text-light md:text-7xl">
          Welcome to Lumen
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-text-muted md:text-xl">
          We are a creative group of people who design influential brands and digital experiences.
          Let us help bring your vision to life.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-block rounded bg-primary-400 px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-text-light transition-colors hover:bg-primary-500"
          >
            Start a Project
          </a>
          <a
            href="#about"
            className="inline-block rounded border border-text-gray px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-text-gray transition-colors hover:border-text-light hover:text-text-light"
          >
            More About Us
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-5">
          {['Facebook', 'Twitter', 'Instagram', 'Dribbble'].map((name) => (
            <a
              key={name}
              href={`https://${name.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-gray transition-colors hover:text-primary-400"
              aria-label={`Follow us on ${name}`}
            >
              <span className="sr-only">{name}</span>
              <span className="font-display text-xs uppercase tracking-wider">{name[0]}</span>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-gray transition-colors hover:text-primary-400"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}
