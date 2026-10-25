import { useEffect, useRef, useState } from 'react'
import { counters } from '../data'
import { prefersReducedMotion } from '../lib/motion'

interface CounterItemProps {
  value: number
  caption: string
  animate: boolean
  instant: boolean
}

function CounterItem({ value, caption, animate, instant }: CounterItemProps) {
  const [display, setDisplay] = useState(0)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    if (!animate) {
      return
    }
    const step = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1400, 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }
    frameRef.current = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [animate, value])

  /* A band that cannot observe (jsdom) or a visitor who asked for reduced motion reads the final
     figure straight away; otherwise the figure is whatever the count-up has reached. */
  let shown = 0
  if (instant) {
    shown = value
  } else if (animate) {
    shown = display
  }

  return (
    <li className="text-center">
      <span className="block pb-5 text-[32px] leading-none font-normal text-brand lg:text-[64px]">
        {`${shown.toLocaleString('en-US')}+`}
      </span>
      <span className="mt-5 mx-auto block h-[3px] w-[50px] bg-[rgba(52,58,64,0.3)]" />
      <span className="block text-[14px] tracking-[0.05em] text-body uppercase">{caption}</span>
    </li>
  )
}

/** Four figures that count up once when the band enters the viewport (instant when motion is off). */
export function Counters() {
  const [started, setStarted] = useState(false)
  const [list, setList] = useState<HTMLUListElement | null>(null)
  const instant = typeof IntersectionObserver === 'undefined' || prefersReducedMotion()

  useEffect(() => {
    if (!list || instant) {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(list)
    return () => {
      observer.disconnect()
    }
  }, [instant, list])

  return (
    <ul
      ref={setList}
      aria-label="Dockyard in numbers"
      className="mx-auto mt-[60px] grid max-w-[1140px] grid-cols-2 gap-y-10 px-4 lg:grid-cols-4"
    >
      {counters.map((counter) => (
        <CounterItem
          key={counter.caption}
          value={counter.value}
          caption={counter.caption}
          animate={started}
          instant={instant}
        />
      ))}
    </ul>
  )
}
