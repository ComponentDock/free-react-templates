import { useEffect, useState } from 'react'
import { ChevronUp, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { chrome, site } from '../content'
import { scrollToTop, useScrollMetrics } from '../lib/scroll'
import { ActionButton, containerClass } from './ui'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-lg bg-primary-600 px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70]"
    >
      {chrome.skip}
    </a>
  )
}

/** The overlay finishes as soon as the document has: a complete page never fires another `load`. */
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
      className="fixed inset-0 z-[100] grid place-items-center bg-white transition-opacity duration-300 dark:bg-gray-950"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-ink-200 border-t-primary-600 motion-reduce:animate-none" />
    </div>
  )
}

/** 2 px of brand green, pinned to the top edge. */
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
        'fixed right-6 bottom-24 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 motion-reduce:transition-none lg:bottom-6',
        top ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ChevronUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

export const COOKIE_KEY = 'cookie-consent'
const COOKIE_DELAY = 1500

/**
 * One decision, stored, and never asked again. It sits above the mobile call
 * bar rather than on top of it, and carries a spacer of its own height so the
 * footer's bottom row is never covered either.
 */
export function CookieStrip() {
  const [consent, setConsent] = useState<string | null>(() => localStorage.getItem(COOKIE_KEY))
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (consent) {
      return
    }
    const timer = window.setTimeout(() => setShown(true), COOKIE_DELAY)
    return () => window.clearTimeout(timer)
  }, [consent])

  if (consent) {
    return null
  }

  const choose = (value: 'accepted' | 'essential') => {
    localStorage.setItem(COOKIE_KEY, value)
    setConsent(value)
  }

  return (
    <>
      <div aria-hidden="true" data-testid="cookie-spacer" className="h-[188px] lg:h-[104px]" />
      <div
        role="dialog"
        aria-label="Cookie consent"
        data-testid="cookie-strip"
        className={cn(
          'fixed inset-x-0 bottom-[73px] z-50 border-t border-gray-200 bg-white p-4 transition-transform duration-300 lg:bottom-0 dark:border-gray-800 dark:bg-gray-900',
          shown ? 'translate-y-0' : 'translate-y-[120%]',
        )}
      >
        <div className={cn(containerClass, 'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between')}>
          <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            {chrome.cookie.copy}
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <ActionButton variant="quiet" className="px-4 py-2" onClick={() => choose('essential')}>
              {chrome.cookie.decline}
            </ActionButton>
            <ActionButton className="px-4 py-2" onClick={() => choose('accepted')}>
              {chrome.cookie.accept}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  )
}

/** One tap to call, below `lg` only. */
export function MobileCallBar() {
  return (
    <div
      data-testid="sticky-call"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden dark:border-gray-800 dark:bg-gray-900"
    >
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-sm font-bold text-white"
      >
        <Phone aria-hidden="true" className="h-4 w-4" />
        {chrome.mobile.call} · {site.phone}
      </a>
    </div>
  )
}
