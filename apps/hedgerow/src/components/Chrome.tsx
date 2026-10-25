import { useEffect, useState } from 'react'
import { ArrowUp, X } from 'lucide-react'
import { cookie } from '../content'

/** Keyboard entry point: hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
    >
      Skip to content
    </a>
  )
}

/**
 * 2 px brand strip pinned to the top edge: scrolled pixels over scrollable
 * height. A document shorter than the viewport stays at zero instead of
 * dividing by a negative maximum.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      data-testid="scroll-progress"
      className="pointer-events-none fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"
      style={{ width: `${progress}%` }}
    />
  )
}

/** 48 px disc that appears once the visitor is past 300 px. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300)

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

/**
 * Slides up 1.5 s after mount and unmounts on either choice. The choice lives
 * in component state, so the strip is shown once per session and never posted.
 */
export function CookieStrip() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  if (dismissed) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-strip"
      data-open={open ? 'true' : 'false'}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-lg transition-transform duration-500 ${
        open ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-gray-600">{cookie.text}</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
          >
            {cookie.decline}
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {cookie.accept}
          </button>
        </div>
      </div>
      <button
        type="button"
        aria-label="Close cookie notice"
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 rounded-full p-1 text-gray-400 transition-colors hover:text-gray-700 sm:hidden"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  )
}
