import { ArrowDown } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gray-950"
    >
      <img
        src="https://picsum.photos/seed/sapor-1/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative mx-auto px-4 py-20 text-center lg:px-8">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary-400">
          Welcome to Sapor
        </span>
        <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
          Authentic Italian Cuisine
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
          Experience the finest Italian traditions, crafted with love and served with passion since
          1985.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="#reservations" className="h-auto w-full px-8 py-4 text-base sm:w-auto">
            Reserve a Table
          </ButtonLink>
          <ButtonLink
            href="#menu"
            variant="outline"
            className="h-auto w-full border-2 border-white/60 bg-transparent px-8 py-4 text-base text-white hover:bg-white/10 sm:w-auto"
          >
            View Our Menu
          </ButtonLink>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  )
}
