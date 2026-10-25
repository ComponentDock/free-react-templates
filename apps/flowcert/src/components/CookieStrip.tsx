import { useState } from 'react'

/**
 * The cookie strip is component state only — dismissing it removes it for the
 * session and no storage key is invented for a demo page.
 */
export function CookieStrip() {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white px-4 py-4 shadow-lg sm:py-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-ink-600">
          We use cookies to keep this demo page working and to understand which sections people
          read.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
