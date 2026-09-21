import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/carnivor-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-lg text-brand">Welcome to Carnivor</p>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
              We serve the best steaks in town
            </h1>
            <p className="mt-6 max-w-lg text-gray-300">
              Hand-selected prime cuts, dry-aged to perfection and flame-grilled by our master
              chefs. Every bite tells a story of craftsmanship and flavour.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-block border-2 border-brand bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand hover:text-white"
            >
              Explore Menu
            </a>
          </div>
          <div className="hidden md:flex md:justify-end">
            <button
              type="button"
              aria-label="Watch video"
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
