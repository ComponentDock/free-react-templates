export interface CookieStripProps {
  open: boolean
  onDismiss: () => void
}

/**
 * Fixed consent strip. The choice is component state only — dismissing it
 * removes it for the session and no storage key is invented for a demo page.
 */
export function CookieStrip({ open, onDismiss }: CookieStripProps) {
  if (!open) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="animate-slide-up fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white px-4 py-4 shadow-lg sm:py-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-gray-600">
          We use cookies to keep this demo page working and to see which sections people read.
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={onDismiss} className="btn btn-secondary">
            Decline
          </button>
          <button type="button" onClick={onDismiss} className="btn btn-primary">
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
