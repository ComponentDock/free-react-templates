import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LEFT, NAV_RIGHT, site } from '../content'
import { useScrollMetrics } from '../lib/scroll'
import { containerClass } from './ui'

export const NAV = [...NAV_LEFT, ...NAV_RIGHT]

/** The wordmark is live type, not a raster logo: Playfair caps over a brass rule. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${site.name} home`}
      className={cn('inline-flex shrink-0 flex-col items-center leading-none', className)}
    >
      <span className="font-serif text-2xl leading-none font-medium tracking-[3px] text-ink-50">
        {site.name.toUpperCase()}
      </span>
      <span aria-hidden="true" className="mt-1 block h-px w-[86px] bg-primary-500" />
      <span className="mt-1 block text-[9px] font-semibold tracking-[0.24em] text-ink-300 uppercase">
        {site.descriptor}
      </span>
    </a>
  )
}

const LABEL_CLASS =
  'text-xs leading-4 font-semibold tracking-[0.18em] whitespace-nowrap text-ink-200 uppercase transition-colors hover:text-primary-400'

/**
 * Transparent over the hero, pinned past 80 px. The nav starts at `xl` (1280),
 * not `lg`, so between 1024 and 1279 there is a wordmark and a hamburger only.
 */
export function Header() {
  const { shadow, stuck } = useScrollMetrics()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      data-header
      data-stuck={stuck ? 'true' : undefined}
      className={cn(
        'inset-x-0 top-0 z-50 w-full border-b border-white/10 transition-shadow',
        stuck ? 'fixed bg-ink-900/95 backdrop-blur-md' : 'absolute bg-transparent',
        shadow ? 'shadow-lg' : '',
      )}
    >
      <div className={cn(containerClass, 'flex h-20 items-center justify-between gap-6 lg:h-24')}>
        <nav aria-label="Bathrooms and renovations" className="hidden flex-1 xl:flex xl:gap-8">
          {NAV_LEFT.map((item) => (
            <a key={item.label} href={item.href} className={LABEL_CLASS}>
              {item.label}
            </a>
          ))}
        </nav>

        <Wordmark className="lg:mx-6" />

        <nav aria-label="Main navigation" className="hidden flex-1 xl:flex xl:justify-end xl:gap-8">
          {NAV_RIGHT.map((item) => (
            <a key={item.label} href={item.href} className={LABEL_CLASS}>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-none border border-primary-500 px-5 py-2.5 text-xs leading-4 font-semibold tracking-[0.18em] text-primary-400 uppercase transition-colors hover:bg-primary-500 hover:text-ink-900"
          >
            Book a consultation
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close the menu' : 'Open the menu'}
          className="ml-auto rounded p-2 text-ink-100 transition-colors hover:text-primary-400 xl:hidden"
        >
          {menuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="border-t border-white/10 bg-ink-900 xl:hidden"
        >
          <div className={cn(containerClass, 'flex flex-col gap-1 py-4')}>
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-xs font-semibold tracking-[0.18em] text-ink-100 uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center border border-primary-500 px-5 py-3 text-xs font-semibold tracking-[0.18em] text-primary-400 uppercase"
            >
              Book a consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
