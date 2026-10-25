import { useEffect, useState } from 'react'

/**
 * White overlay with a brand ring, removed on `load`. The hidden state is also
 * derived from `document.readyState`, so a document that is already complete
 * (a cached visit, or jsdom) never traps the overlay.
 */
export function Preloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const onLoad = () => setLoaded(true)

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  if (loaded || document.readyState === 'complete') {
    return null
  }

  return (
    <div
      aria-hidden="true"
      data-testid="preloader"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-white"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
  )
}
