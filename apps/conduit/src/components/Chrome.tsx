import { useEffect, useState } from 'react'
import { ChevronUp, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { emergency, site } from '../content'
import { scrollToTop, useScrollMetrics } from '../lib/scroll'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]"
    >
      Skip to content
    </a>
  )
}

/** The overlay never traps content: it is finished as soon as the document is. */
export function Preloader() {
  const [gone, setGone] = useState(() => document.readyState === 'complete')

  useEffect(() => {
    if (gone) {
      return
    }
    const finish = () => setGone(true)
    window.addEventListener('load', finish, { once: true })
    return () => window.removeEventListener('load', finish)
  }, [gone])

  if (gone) {
    return null
  }

  return (
    <div
      id="preloader"
      data-testid="preloader"
      className="fixed inset-0 z-[100] grid place-items-center bg-white transition-opacity duration-300 motion-reduce:transition-none dark:bg-gray-950"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-ink-100 border-t-primary-600 motion-reduce:animate-none dark:border-gray-800" />
    </div>
  )
}

export function ScrollProgress() {
  const { progress } = useScrollMetrics()
  return (
    <div
      id="scroll-progress"
      data-testid="scroll-progress"
      aria-hidden="true"
      className="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"
      style={{ width: `${progress}%` }}
    />
  )
}

export function BackToTop() {
  const { top } = useScrollMetrics()
  return (
    <button
      type="button"
      id="back-to-top"
      data-testid="back-to-top"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        'fixed right-6 bottom-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 motion-reduce:transition-none',
        top ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ChevronUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

/** Fixed call bar — the mobile page's only persistent action. Hidden from `lg`. */
export function StickyCallBar() {
  return (
    <div
      data-testid="call-bar"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden dark:border-gray-800 dark:bg-gray-950"
    >
      <a
        href={site.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-3 text-sm font-bold text-white"
      >
        <Phone aria-hidden="true" className="h-4 w-4" />
        {emergency.callBar} · {site.phone}
      </a>
    </div>
  )
}

export const COOKIE_KEY = 'cookie-consent'
export const COOKIE_DELAY = 1500

export function CookieStrip() {
  const [consent, setConsent] = useState<string | null>(() => localStorage.getItem(COOKIE_KEY))
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (consent) {
      return
    }
    const id = setTimeout(() => setShown(true), COOKIE_DELAY)
    return () => clearTimeout(id)
  }, [consent])

  if (consent || !shown) {
    return null
  }

  const choose = (value: 'accepted' | 'essential') => {
    localStorage.setItem(COOKIE_KEY, value)
    setConsent(value)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-strip"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white py-4 sm:py-6 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          We use cookies to enhance your experience. By continuing to visit this site you agree to
          our use of cookies.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose('essential')}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-700"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
