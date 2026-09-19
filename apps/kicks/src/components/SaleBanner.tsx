import { useEffect, useState, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'

const messages = [
  '25% off Everything! Use Code: Summer Sale',
  'Our biggest sale yet 50% off all summer shoes',
]

export function SaleBanner() {
  const [current, setCurrent] = useState(0)

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % messages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(advance, 4000)
    return () => clearInterval(timer)
  }, [advance])

  return (
    <div
      className="bg-brand-500 text-white text-center py-2.5 text-sm font-medium overflow-hidden"
      role="marquee"
      aria-live="polite"
      aria-label="Sale announcements"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {messages.map((msg, i) => (
          <div
            key={msg}
            className={cn('w-full shrink-0', i !== 0 && 'hidden')}
            aria-hidden={i !== current}
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}
