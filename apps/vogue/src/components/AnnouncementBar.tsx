import { useEffect, useState } from 'react'
import { promos } from '../data'

export function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % promos.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-accent">
      <p
        key={index}
        aria-live="polite"
        className="mx-auto max-w-[1200px] px-4 py-2.5 text-center text-sm font-medium text-white"
      >
        {promos[index]!}
      </p>
    </div>
  )
}
