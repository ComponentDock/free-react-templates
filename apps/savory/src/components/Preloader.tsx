import { useEffect, useState } from 'react'

export function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand"
    >
      <p className="mb-6 font-display text-xl tracking-wide text-white">Cooking in progress..</p>
      <div aria-label="Pot animation" className="flex flex-col items-center">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 animate-ping rounded-full bg-white/80 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-ping rounded-full bg-white/80" />
          <span className="h-2 w-2 animate-ping rounded-full bg-white/80 [animation-delay:300ms]" />
        </div>
        <div className="mt-2 h-3 w-16 rounded-full bg-white/90" />
      </div>
    </div>
  )
}
