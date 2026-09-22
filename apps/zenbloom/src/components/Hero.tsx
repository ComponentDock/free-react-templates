import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[500px] bg-gray-900" data-testid="hero">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/zenbloom-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[500px] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <p className="mb-2 font-display text-3xl text-sage-400 sm:text-4xl">Zenbloom Studio</p>
        <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
          Yoga Enhances Your Life
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-300">
          Find your inner peace and transform your body through our expert-led yoga classes.
        </p>

        {/* Video play button */}
        <button
          type="button"
          aria-label="Play introduction video"
          className="group mt-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur transition-colors hover:border-sage-400 hover:bg-sage-400/20"
        >
          <Play className="h-6 w-6 text-white transition-colors group-hover:text-sage-400" />
        </button>
      </div>
    </section>
  )
}
