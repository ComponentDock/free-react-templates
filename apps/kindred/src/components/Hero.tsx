import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindred-hero/1920/1080)' }}
    >
      <div
        data-testid="hero-blue-band"
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2 bg-brand/40"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center text-white sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-[5px] sm:text-6xl lg:text-7xl">
          Give A Hand To Make The Better World
        </h1>
        <button
          type="button"
          aria-label="Watch intro video"
          className="mt-10 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white/10 transition-colors hover:bg-white/25"
        >
          <Play className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
