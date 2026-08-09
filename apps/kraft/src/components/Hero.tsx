import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center justify-center"
      style={{ minHeight: '700px' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url('https://picsum.photos/seed/kraft-hero/1920/1080')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="text-xl font-light">A free template by Kraft</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          We create awesome stuff.
        </h1>
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.youtube.com/watch?v=_VnYSoMI-9Q"
            target="_blank"
            rel="noreferrer"
            aria-label="Play video"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:scale-[1.33] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
