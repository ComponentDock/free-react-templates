import { useEffect, useState } from 'react'
import { hasAnsweredCookies, rememberCookies } from '../theme'

const DELAY_MS = 1500

/**
 * Delayed consent panel: 1,500 ms after load, once, unless the visitor has
 * answered before — in which case nothing is rendered at all, not hidden.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [answered, setAnswered] = useState(() => hasAnsweredCookies())

  useEffect(() => {
    if (answered) {
      return
    }
    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [answered])

  if (answered || !visible) {
    return null
  }

  const dismiss = () => {
    rememberCookies()
    setAnswered(true)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-200 bg-white px-4 py-4 shadow-lg lg:px-8 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
        <p className="text-sm text-ink-500 dark:text-gray-400">
          We use cookies to enhance your experience. By continuing to visit this site you agree to
          our use of cookies.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
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
