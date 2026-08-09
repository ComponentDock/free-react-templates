import { useState } from 'react'

const COOKIE_KEY = 'cura-cookie-consent'

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
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-gray-800 bg-gray-900 p-5 shadow-2xl"
    >
      <p className="text-sm leading-relaxed text-gray-300">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our
        use of cookies.
      </p>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => choose('declined')}
          className="rounded-lg border border-gray-700 px-5 py-2 text-sm font-semibold text-gray-300 transition-colors hover:bg-gray-800"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
