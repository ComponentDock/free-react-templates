import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/needlecraft-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Improve your overall <span className="text-brand">health.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
          Discover holistic wellness treatments that restore balance and vitality. Our expert
          practitioners guide you on the path to better health.
        </p>
        <button
          type="button"
          aria-label="Watch intro video"
          className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 bg-white/20 text-white transition-colors hover:bg-white/30"
        >
          <Play className="h-6 w-6" fill="currentColor" />
        </button>
        <p className="mt-3 text-sm text-gray-300">Watch intro video</p>
      </div>
    </section>
  )
}
