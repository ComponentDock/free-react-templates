import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url('https://picsum.photos/seed/sportium-hero/1920/1080')` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 text-center">
        <a
          href="#"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-brand-400"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
            <Play className="h-4 w-4" aria-hidden="true" />
          </span>
          See Workout Video
        </a>
        <h1 className="mb-4 text-5xl font-bold md:text-7xl">Get fit with us</h1>
        <p className="mb-8 text-lg text-white/80">
          Pilates, Yoga, Fitness, Spinning &amp; many more
        </p>
        <a
          href="#footer"
          className="inline-block rounded-full bg-brand-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
        >
          Join Now
        </a>
      </div>
    </section>
  )
}
