import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/archcraft-hero/1600/900)',
      }}
    >
      <div className="text-center text-white">
        <button
          type="button"
          aria-label="Play video"
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 text-white/80 transition-colors hover:border-white hover:text-white"
        >
          <Play className="ml-1 h-6 w-6" aria-hidden="true" />
        </button>
        <h1 className="mb-4 text-5xl font-extrabold uppercase tracking-wide md:text-6xl">
          Interior Design
        </h1>
        <p className="mx-auto max-w-xl text-lg italic text-white/80">
          We create inspiring spaces that blend aesthetics with functionality
        </p>
      </div>
    </section>
  )
}
