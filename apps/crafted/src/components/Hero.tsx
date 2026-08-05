import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <img
        src="https://picsum.photos/seed/crafted-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 text-center sm:px-6 sm:py-36">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          We Are Crafted.
          <span className="mt-3 block text-2xl font-medium text-primary-300 sm:text-4xl">
            Design &amp; Development Service Provider.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center border-2 border-primary-500 bg-transparent px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-300 hover:text-white"
          >
            More About Us
          </a>
          <a
            href="https://vimeo.com/317571768"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-colors hover:text-primary-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-300 text-white">
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
            Watch Live Demo
          </a>
        </div>
      </div>
    </section>
  )
}
