import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const CONSENT_KEY = 'aegis-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(() => window.localStorage.getItem(CONSENT_KEY) === null)

  const choose = (choice: 'accepted' | 'declined') => {
    window.localStorage.setItem(CONSENT_KEY, choice)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-40 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:left-auto sm:max-w-xl sm:flex-row sm:items-center"
    >
      <p className="flex-1 text-sm text-gray-600 dark:text-gray-300">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our
        use of cookies.
      </p>
      <div className="flex shrink-0 gap-3">
        <Button variant="ghost" size="sm" onClick={() => choose('declined')}>
          Decline
        </Button>
        <Button size="sm" onClick={() => choose('accepted')}>
          Accept All
        </Button>
      </div>
    </div>
  )
}
