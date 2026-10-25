import { useEffect, useState } from 'react'

/** A 2 px brand bar at the very top that tracks scrollY over the scrollable
 * height. Hidden from assistive tech — it duplicates no information. */
export function ScrollProgress() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPercent(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-primary-600 transition-[width] duration-150"
      style={{ width: `${percent}%` }}
    />
  )
}
