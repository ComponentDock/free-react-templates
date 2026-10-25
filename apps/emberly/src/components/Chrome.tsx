import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FOOTER } from '../content'

/** First focusable element on the page: straight to the content. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-ink-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      Skip to content
    </a>
  )
}

/** The 2 px brand bar at the top of the document, wide as the scroll ratio. */
export function ScrollProgress({ progress }: { readonly progress: number }) {
  return (
    <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent" aria-hidden="true">
      <div
        data-scroll-progress
        className="h-full bg-primary-600 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/** Bottom-of-page cookie strip: slides up once, dismissed into state only. */
export function CookieStrip() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(id)
  }, [])

  if (dismissed) {
    return null
  }

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      data-cookie-consent
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-lg transition-transform duration-300',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="min-w-0 text-sm text-gray-600">{FOOTER.cookieCopy}</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

/** 48 px disc, appears past 300 px of scroll. */
export function BackToTop({ y }: { readonly y: number }) {
  const shown = y > 300

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-all duration-200',
        shown
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
