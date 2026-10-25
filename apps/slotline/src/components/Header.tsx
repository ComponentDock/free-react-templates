import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { chrome, nav } from '../content'
import { useScrollMetrics } from '../lib/scroll'
import { useScrollSpy } from '../lib/use-scroll-spy'
import { Logo } from './Logo'
import { containerClass } from './ui'

const NAV_IDS = nav.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const { top } = useScrollMetrics()
  const active = useScrollSpy(NAV_IDS)
  const lifted = top > 50

  return (
    <header
      id="top"
      className={cn(
        'sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-shadow duration-200 motion-reduce:transition-none',
        lifted && 'shadow-lg',
      )}
    >
      <div className={cn(containerClass, 'flex h-16 items-center justify-between gap-6 lg:h-20')}>
        <a href="#top" aria-label="Slotline home">
          <Logo />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'text-sm leading-5 font-medium text-gray-600 transition-colors hover:text-gray-900',
                active === item.id && 'nav-active',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm leading-5 font-semibold text-white transition-colors hover:bg-primary-700 lg:inline-flex"
          >
            {chrome.headerCta}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? chrome.menuClose : chrome.menuOpen}
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-gray-700 lg:hidden"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-gray-200 bg-white lg:hidden">
          <div className={cn(containerClass, 'py-3')}>
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base leading-6 font-medium text-gray-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block w-full rounded-lg bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {chrome.headerCta}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
