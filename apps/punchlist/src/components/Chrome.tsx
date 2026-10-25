import { useEffect, useState } from 'react'
import { ArrowUp, ListChecks, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CHROME, PHONE_DISPLAY, PHONE_HREF } from '../content'
import { ActionButton, Container } from './ui'

/** First focusable element on the page: straight to the content. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      {CHROME.skip}
    </a>
  )
}

/** The 2 px orange hairline at the top of the document, wide as the scroll ratio. */
export function ScrollProgress({ progress }: { readonly progress: number }) {
  return (
    <div id="scroll-progress" aria-hidden="true" className="fixed left-0 top-0 z-[60] h-0.5 w-full">
      <div data-scroll-progress className="h-full bg-primary-600" style={{ width: `${progress}%` }} />
    </div>
  )
}

type Consent = 'accepted' | 'essential'

/**
 * Slides up 1,500 ms after load unless the visitor has already answered. The
 * answer is stored and the strip leaves the tree.
 */
export function CookieStrip() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('cookie-consent') !== null) {
      return undefined
    }
    const id = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(id)
  }, [])

  if (dismissed) {
    return null
  }

  const dismiss = (consent: Consent) => {
    window.localStorage.setItem('cookie-consent', consent)
    setVisible(false)
    setDismissed(true)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      data-cookie-consent
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white transition-transform duration-300 dark:border-gray-800 dark:bg-gray-900',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <Container className="flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-w-0 text-sm text-gray-600 dark:text-gray-300">{CHROME.cookie}</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => dismiss('essential')}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {CHROME.decline}
          </button>
          <button
            type="button"
            onClick={() => dismiss('accepted')}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            {CHROME.accept}
          </button>
        </div>
      </Container>
    </div>
  )
}

/**
 * 48 px orange disc past 300 px of scroll. On phones it sits above the 69 px
 * CTA bar (`bottom-24`) instead of on top of it.
 */
export function BackToTop({ y }: { readonly y: number }) {
  const shown = y > 300

  return (
    <button
      type="button"
      aria-label="Back to top"
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-[0_4px_16px_-4px_rgb(234_88_12_/_0.4)] transition-all duration-200 lg:bottom-6',
        shown
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

/** 69 px phone bar under `lg`: call, or start the list. */
export function MobileCtaBar({ onOpenQuote }: { readonly onOpenQuote: () => void }) {
  return (
    <div
      id="mobile-cta"
      className="fixed inset-x-0 bottom-0 z-40 flex h-[69px] items-center gap-2 border-t border-gray-200 bg-white/95 px-4 backdrop-blur lg:hidden dark:border-gray-800 dark:bg-gray-900/95"
    >
      <a
        href={PHONE_HREF}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-100"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {CHROME.call}
        <span className="sr-only">{PHONE_DISPLAY}</span>
      </a>
      <ActionButton size="md" className="flex-1" onClick={onOpenQuote}>
        <ListChecks className="h-4 w-4" aria-hidden="true" />
        {CHROME.mobileCta}
      </ActionButton>
    </div>
  )
}
