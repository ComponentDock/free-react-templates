import { useEffect, useState } from 'react'

/**
 * Full-screen black curtain that fades out once the document has loaded. The
 * "hidden" answer is derived during render (a document that is already
 * `complete` never fires another `load`), so the curtain can never trap a page
 * that mounted after load.
 */
export function Preloader() {
  const [loaded, setLoaded] = useState(() => document.readyState === 'complete')

  useEffect(() => {
    if (loaded) {
      return
    }

    const onLoad = () => setLoaded(true)
    window.addEventListener('load', onLoad)

    return () => window.removeEventListener('load', onLoad)
  }, [loaded])

  if (loaded) {
    return null
  }

  return (
    <div
      data-testid="preloader"
      aria-hidden="true"
      className="fixed inset-0 z-100 bg-black transition-opacity duration-300"
    />
  )
}
