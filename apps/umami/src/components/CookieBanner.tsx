import { useState } from 'react'
import {
  cookieAcceptLabel,
  cookieDeclineLabel,
  cookieStorageKey,
  cookieText,
  cookieTitle,
} from '../data'

/* Cookie consent banner (repo standard): shown until the visitor stores a
   choice (Accept All / Decline) in localStorage for the session. */
export function CookieBanner() {
  const [dismissed, setDismissed] = useState(
    () => window.localStorage.getItem(cookieStorageKey) !== null,
  )

  if (dismissed) {
    return null
  }

  const choose = (choice: 'accepted' | 'declined') => {
    window.localStorage.setItem(cookieStorageKey, choice)
    setDismissed(true)
  }

  return (
    <div
      role="dialog"
      aria-label={cookieTitle}
      className="fixed inset-x-0 bottom-0 z-[900] bg-ink-dark px-6 py-5 text-white shadow-[0_-2px_12px_rgba(0,0,0,0.2)]"
    >
      <div className="mx-auto flex max-w-[1170px] flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-bold">{cookieTitle}</p>
          <p className="mt-1 text-sm text-white/70">{cookieText}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="cursor-pointer rounded-full border border-white/40 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            {cookieDeclineLabel}
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="cursor-pointer rounded-full bg-brand px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-brand/90"
          >
            {cookieAcceptLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
