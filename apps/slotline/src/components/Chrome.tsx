import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { chrome } from '../content'
import { scrollToTop, useScrollMetrics } from '../lib/scroll'
import { containerClass } from './ui'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-lg bg-primary-700 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70]"
    >
      {chrome.skip}
    </a>
  )
}

/** Two pixels of sage, pinned to the top edge and full exactly at the footer. */
export function ScrollProgress() {
  const { progress } = useScrollMetrics()
  return (
    <div
      data-testid="scroll-progress"
      aria-hidden="true"
      className="fixed top-0 left-0 z-[60] h-0.5 bg-accent-500"
      style={{ width: `${progress}%` }}
    />
  )
}

/** A 48 px disc that only appears once the page has actually been read into. */
export function BackToTop() {
  const { top } = useScrollMetrics()
  const shown = top > 300
  return (
    <button
      type="button"
      aria-label={chrome.backToTop}
      data-testid="back-to-top"
      onClick={scrollToTop}
      className={cn(
        'fixed right-6 bottom-24 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 motion-reduce:transition-none lg:bottom-6',
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ChevronUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

const COOKIE_DELAY = 1500

/**
 * One decision, held in memory for the session. It slides up once, and after
 * an answer it is gone — the reference would have written a key to storage.
 */
export function CookieStrip() {
  const [answer, setAnswer] = useState<string | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShown(true), COOKIE_DELAY)
    return () => window.clearTimeout(timer)
  }, [])

  if (answer !== null) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-strip"
      className={cn(
        'fixed inset-x-0 bottom-0 z-[55] border-t border-gray-200 bg-white/95 backdrop-blur transition-transform duration-300 motion-reduce:transition-none',
        shown ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className={cn(containerClass, 'flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between')}>
        <p className="max-w-2xl text-sm leading-6 text-gray-600">{chrome.cookie.copy}</p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setAnswer('essential')}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {chrome.cookie.decline}
          </button>
          <button
            type="button"
            onClick={() => setAnswer('accepted')}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700"
          >
            {chrome.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Two pills pinned to the bottom below `lg`; the page keeps padding for them. */
export function MobileBar() {
  return (
    <div
      data-testid="mobile-bar"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 backdrop-blur lg:hidden"
    >
      <div className="flex items-center gap-2">
        <a
          href="#pricing"
          className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700"
        >
          {chrome.mobileBar.secondary}
        </a>
        <a
          href="#book"
          className="flex-1 rounded-full bg-primary-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
        >
          {chrome.mobileBar.primary}
        </a>
      </div>
    </div>
  )
}
