import { Menu, X } from 'lucide-react'
import { menuCloseLabel, menuOpenLabel, siteName } from '../data'

interface LogoProps {
  menuOpen: boolean
  onToggle: () => void
}

/* Centered brand block (reference `div.logo-wrap`): huge Josefin Sans wordmark
   (90px desktop / 40px mobile) with a mobile-only hamburger toggle. */
export function Logo({ menuOpen, onToggle }: LogoProps) {
  return (
    <div className="relative px-4 pt-6 pb-2 text-center md:pt-10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-ink md:hidden"
      >
        {menuOpen ? (
          <X className="h-7 w-7" aria-hidden="true" />
        ) : (
          <Menu className="h-7 w-7" aria-hidden="true" />
        )}
      </button>
      <h1 className="font-heading text-[40px] leading-none font-bold text-ink md:text-[90px]">
        <a href="#" className="text-ink transition-colors hover:text-brand">
          {siteName}
        </a>
      </h1>
    </div>
  )
}
