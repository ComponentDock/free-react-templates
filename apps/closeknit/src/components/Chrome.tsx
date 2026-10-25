import { useEffect, useState } from 'react'
import { ArrowUp, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { COOKIE, MOBILE_CTA } from '../content'

/** Keyboard entry point: hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
    >
      Skip to content
    </a>
  )
}

/**
 * 2 px brand bar: scrolled pixels over the scrollable height. A document
 * shorter than the viewport stays at zero instead of dividing by a negative
 * maximum.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      data-testid="scroll-progress"
      className="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"
      style={{ width: `${progress}%` }}
    />
  )
}

/**
 * Sheet over the page until the document has loaded. A document that is
 * already complete never fires another `load`, so readiness is read on mount
 * as well as listened for.
 */
export function Preloader() {
  const [loaded, setLoaded] = useState(() => document.readyState === 'complete')

  useEffect(() => {
    if (document.readyState === 'complete') {
      return
    }
    const onLoad = () => setLoaded(true)
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  if (loaded || document.readyState === 'complete') {
    return null
  }

  return (
    <div
      data-testid="preloader"
      aria-hidden="true"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-white"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
  )
}

/** 48 px brand disc, fixed bottom-right, shown once the page is past 300 px. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

/** Fixed bottom action bar below `lg`: a phone control and the closing CTA. */
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden">
      <div className="flex gap-3">
        <a
          href={MOBILE_CTA.phoneHref}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          {MOBILE_CTA.call}
        </a>
        <a
          href={MOBILE_CTA.tourHref}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          {MOBILE_CTA.tour}
        </a>
      </div>
    </div>
  )
}

const DELAY_MS = 1500

/**
 * Consent strip: 1,500 ms after mount, once. The choice lives in component
 * state — the strip leaves the document and does not return this session.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed || !visible) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg sm:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
        <p className="text-sm text-gray-600">{COOKIE.text}</p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {COOKIE.decline}
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {COOKIE.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
