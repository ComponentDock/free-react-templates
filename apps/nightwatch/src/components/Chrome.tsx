import { useEffect, useState } from 'react'
import { ChevronUp, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { scrollToTop, useScrollMetrics } from '../lib/scroll'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-ink-900 focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]"
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
      className="fixed inset-0 z-[70] grid place-items-center bg-white transition-opacity duration-300 motion-reduce:transition-none dark:bg-gray-950"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-ink-100 border-t-primary-600 motion-reduce:animate-none" />
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
      className="fixed top-0 left-0 z-50 h-0.5 bg-primary-600"
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
      aria-label="Cookie notice"
      data-testid="cookie-strip"
      className="fixed inset-x-0 bottom-0 z-[65] border-t border-gray-200 bg-white py-4 sm:py-6 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="max-w-2xl text-sm leading-6 text-ink-500 dark:text-gray-400">
          We use one cookie for the theme you picked and nothing else. Analytics stay off until you
          say otherwise.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose('essential')}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-ink-600 transition-colors hover:border-ink-300 dark:border-gray-700 dark:text-gray-300"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-bold text-ink-900 transition-colors hover:bg-primary-400"
          >
            Accept All
          </button>
        </div>
        <button
          type="button"
          aria-label="Dismiss cookie notice"
          onClick={() => choose('essential')}
          className="absolute top-3 right-3 grid h-7 w-7 place-items-center rounded-md text-ink-400 hover:text-ink-600 sm:hidden"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
