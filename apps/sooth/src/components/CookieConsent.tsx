import { useState } from 'react'

const STORAGE_KEY = 'sooth-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(() => window.localStorage.getItem(STORAGE_KEY) === null)

  const choose = (value: string) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-soft-lg sm:left-6 sm:right-auto dark:border-gray-800 dark:bg-gray-900"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">
        We use cookies to enhance your browsing experience and analyze our traffic. By clicking
        &ldquo;Accept All&rdquo;, you consent to our use of cookies.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose('declined')}
          className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
