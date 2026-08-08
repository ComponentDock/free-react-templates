import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function CookieConsent() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:flex-row dark:border-gray-800 dark:bg-gray-900"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400">
        We use cookies to enhance your experience and analyze site traffic. By continuing, you agree
        to our use of cookies.
      </p>
      <div className="flex flex-shrink-0 items-center gap-3">
        <Button variant="outline" onClick={() => setDismissed(true)} className="rounded-full">
          Decline
        </Button>
        <Button
          onClick={() => setDismissed(true)}
          className="rounded-full bg-accent-500 hover:bg-accent-600"
        >
          Accept All
        </Button>
      </div>
    </div>
  )
}
