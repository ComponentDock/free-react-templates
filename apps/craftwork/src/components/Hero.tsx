import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/craftwork-hero/1920/1080')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <span className="mb-4 inline-block rounded-full bg-brand/20 px-4 py-2 text-sm font-medium text-brand">
            UI/UX Designer &amp; Developer
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            I&apos;m John
            <br />
            Craftwork
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-ink transition-colors hover:bg-brand-dark"
            >
              More About Me <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Hire Me <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hidden flex-shrink-0 md:block">
          <img
            src="https://picsum.photos/seed/craftwork-portrait/500/600"
            alt="Portrait of John Craftwork"
            className="rounded-2xl object-cover shadow-2xl"
            width={400}
            height={480}
          />
        </div>
      </div>
    </section>
  )
}
