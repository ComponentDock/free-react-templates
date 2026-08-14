import { useEffect, useState } from 'react'

const READY_DELAY = 600

/* Full-screen black preloader with a rotating red/purple ring, matching the
   reference's fixed #preloder overlay; hides itself once the page is ready. */
export function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), READY_DELAY)
    return () => window.clearTimeout(timer)
  }, [])

  if (done) {
    return null
  }

  return (
    <div
      data-testid="preloader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div
        data-testid="preloader-ring"
        aria-hidden="true"
        className="h-16 w-16 animate-spin rounded-full border-4 border-t-brand-red border-r-brand-purple border-b-brand-red border-l-brand-purple"
      />
    </div>
  )
}
