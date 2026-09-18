import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/molars-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-24">
        {/* Play button (decorative) */}
        <button
          type="button"
          aria-label="Play introduction video"
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          <Play className="ml-1 h-6 w-6 text-white" aria-hidden="true" />
        </button>

        <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
          Dental Clinic for Everyone
        </h1>
        <p className="mb-8 text-lg text-white/80">
          Quality dental care for the whole family. Our experienced team provides gentle,
          professional treatment in a comfortable environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="border border-transparent bg-white px-6 py-3 text-sm font-semibold text-primary-400 transition-colors hover:border-white hover:bg-transparent hover:text-white"
          >
            Check Out Our Services
          </a>
          <a
            href="#about"
            className="border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-400"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  )
}
