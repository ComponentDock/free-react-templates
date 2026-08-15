import { Menu } from 'lucide-react'
import { heroPortrait } from '../data'

interface HeroProps {
  menuOpen: boolean
  onMenuToggle: () => void
}

export function Hero({ menuOpen, onMenuToggle }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen flex-col bg-slate text-white">
      <div className="grid flex-1 lg:grid-cols-[2fr_3fr]">
        <div className="flex items-center px-6 pb-24 pt-20 lg:items-end lg:px-16 lg:pb-28">
          <div>
            <h1 className="max-w-md text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Business Websites, Simplified
            </h1>
            <p className="mt-4 max-w-sm text-lg font-light text-white/90 sm:text-xl">
              Tired of puzzling frameworks?
            </p>
          </div>
        </div>
        <div className="relative h-[45vh] lg:h-auto">
          <img
            src={heroPortrait}
            alt="Professional business portrait"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <p className="absolute bottom-6 left-6 text-sm font-light tracking-wide text-white/90">
        Slate
      </p>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
        className="absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>
    </section>
  )
}
