import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home-section" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/lenscape-hero/1920/1080')`,
        }}
      />
      {/* Golden overlay on right half */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gold opacity-90 max-md:hidden" />
      {/* Dark overlay for text readability on left */}
      <div className="absolute inset-0 bg-ink/60 max-md:bg-ink/70" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
        {/* Left — text */}
        <div className="flex flex-col justify-center py-32">
          <span className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
            UI/UX Designer &amp; Developer
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-ink md:text-7xl">
            I&apos;m Alex Mercer
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about-section"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-transparent hover:text-gold hover:ring-1 hover:ring-gold"
            >
              More About Me <ArrowRight size={16} />
            </a>
            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 border border-white bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink shadow-lg transition-all hover:bg-transparent hover:text-white"
            >
              Hire Me <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hidden items-end justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/lenscape-portrait/500/700"
            alt="Portrait of Alex Mercer"
            className="max-h-[500px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
