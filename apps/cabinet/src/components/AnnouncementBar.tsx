import { useState, useEffect } from 'react'

const messages = [
  'Free delivery on orders over $500',
  '100 night trial on every bed and sofa',
  '10 year guarantee on all solid wood frames',
]

export function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="w-full bg-navy py-2.5 text-center text-xs tracking-widest text-white"
      aria-label="Promotional announcements"
    >
      <p className="m-0">{messages[index]}</p>
    </div>
  )
}
