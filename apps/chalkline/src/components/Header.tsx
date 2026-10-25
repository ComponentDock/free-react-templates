import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'
import { Wordmark } from './Wordmark'

/** Sticky translucent bar: wordmark, eight labels, one filled CTA. Below `lg`
 * the labels fold into a drawer that closes on Escape and hands focus back to
 * the trigger. */
export function Header() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current!.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-[81px] lg:px-8">
        <a href="#top" aria-label="Chalkline home" className="shrink-0">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 lg:inline-flex"
          >
            Book a walkthrough
          </a>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 lg:hidden"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="nav-drawer"
        aria-hidden={!open}
        className={
          open
            ? 'border-t border-gray-200 bg-white lg:hidden'
            : 'hidden border-t border-gray-200 bg-white lg:hidden'
        }
      >
        <nav aria-label="Primary mobile" className="mx-auto max-w-7xl px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-primary-600 px-3 py-2.5 text-center text-base font-medium text-white"
              >
                Book a walkthrough
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
