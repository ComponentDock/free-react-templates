import { useState } from 'react'

const COOKIE_KEY = 'gleam-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(
    () => window.localStorage.getItem(COOKIE_KEY) !== 'accepted',
  )

  const choose = (value: 'declined' | 'accepted') => {
    window.localStorage.setItem(COOKIE_KEY, value)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our
        use of cookies.
      </p>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => choose('declined')}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
