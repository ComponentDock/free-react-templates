import { Compass } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-findly-amber/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Compass className="h-7 w-7 text-findly-amber" aria-hidden="true" />
          <span className="text-xl font-bold tracking-tight text-findly-dark">Findly</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-findly-muted md:flex">
          <a href="#destinations" className="transition-colors hover:text-findly-amber">
            Destinations
          </a>
          <a href="#deals" className="transition-colors hover:text-findly-amber">
            Deals
          </a>
          <a href="#about" className="transition-colors hover:text-findly-amber">
            About
          </a>
        </nav>
        <a
          href="#search"
          className="rounded-lg bg-findly-amber px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-findly-amber-hover"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}
