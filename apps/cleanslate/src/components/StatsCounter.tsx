import { useEffect, useRef, useState } from 'react'

interface CounterItemProps {
  target: number
  label: string
}

function CounterItem({ target, label }: CounterItemProps) {
  const [count, setCount] = useState(0)
  const counted = useRef(false)

  useEffect(() => {
    /* istanbul ignore next -- guard: ref resets only on mount, not observable */
    if (counted.current) return
    counted.current = true
    let current = 0
    const increment = Math.ceil(target / 60)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center px-8 py-4">
      <span className="text-brand-accent text-4xl md:text-5xl font-bold">{count}</span>
      <p className="text-brand-body mt-2 text-sm">{label}</p>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <CounterItem target={45} label="Years of Experience" />
          <CounterItem target={2342} label="Happy Customers" />
          <CounterItem target={30} label="Buildings Cleaned" />
        </div>
      </div>
    </section>
  )
}
