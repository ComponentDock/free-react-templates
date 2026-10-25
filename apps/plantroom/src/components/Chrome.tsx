import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/**
 * A 2 px brand bar pinned to the very top: scrolled pixels over scrollable
 * height, as a percentage, clamped to 100. A page shorter than the viewport
 * stays at zero instead of dividing by a negative maximum.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      data-testid="scroll-progress"
      className="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"
      style={{ width: `${progress}%` }}
    />
  )
}

/** 48 px brand circle, fixed bottom-right, shown once the page is past 300 px. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

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
      aria-label="Cookie consent"
      className="animate-slide-up fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white px-4 py-4 shadow-lg sm:py-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-gray-600">
          We use cookies to enhance your experience. By continuing to visit this site you agree to
          our use of cookies.
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
