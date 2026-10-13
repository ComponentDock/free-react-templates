import { useEffect, useState } from 'react'
import { Diamond } from 'lucide-react'

export function Preloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const hide = () => setLoaded(true)
    window.addEventListener('load', hide)
    return () => window.removeEventListener('load', hide)
  }, [])

  /* A document that is already complete never fires another `load`, so
     readiness is derived during render instead of written from the effect. */
  const hidden = loaded || document.readyState === 'complete'

  if (hidden) {
    return null
  }

  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
    >
      <span className="flex h-14 w-14 animate-pulse items-center justify-center rounded-xl bg-primary-900 text-accent-400">
        <Diamond className="h-7 w-7" aria-hidden="true" />
      </span>
    </div>
  )
}
