import { useEffect } from 'react'
import { Heart, X } from 'lucide-react'
import { copyrightBrand, copyrightLine, copyrightPrefix, menuCloseLabel, navLinks } from '../data'

interface SlideOutNavProps {
  open: boolean
  onClose: () => void
}

export function SlideOutNav({ open, onClose }: SlideOutNavProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const year = new Date().getFullYear()

  return (
    <nav
      aria-label="Main menu"
      className="fixed inset-y-0 left-0 z-[100] flex w-1/2 flex-col bg-gradient-to-br from-cyan to-brand"
    >
      <div className="flex justify-end p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label={menuCloseLabel}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <X className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <ul className="mt-8 flex flex-col gap-7 px-10 lg:px-16">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#top"
              onClick={onClose}
              aria-current={link === 'Home' ? 'page' : undefined}
              className="group relative font-display text-3xl font-normal text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {link}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-auto p-8 text-xs text-white/85">
        {copyrightPrefix} {year}. {copyrightLine}{' '}
        <Heart className="inline h-3 w-3 fill-white text-white" aria-hidden="true" /> by{' '}
        {copyrightBrand}
      </p>
    </nav>
  )
}
