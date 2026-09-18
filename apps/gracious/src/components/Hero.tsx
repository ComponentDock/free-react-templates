import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/gracious-hero/1600/900"
          alt="People in need of help"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Doing Nothing is Not An Option of Our Life
          </h1>
          <p className="mt-4 text-lg font-light text-white/90">
            Give a helping hand to those who need it the most
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-none border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-teal hover:text-teal"
              aria-label="Watch Video"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
