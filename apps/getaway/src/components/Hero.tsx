import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gray-900"
    >
      <img
        src="https://picsum.photos/seed/getaway-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <a
          href="#"
          aria-label="Play video"
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 text-white transition hover:bg-white/10"
        >
          <Play className="h-7 w-7 ml-0.5" />
        </a>

        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sunset-400">
          Travel to the any corner of the world, without going around in circles
        </p>

        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Make Your Tour Amazing With Us
        </h1>
      </div>
    </section>
  )
}
