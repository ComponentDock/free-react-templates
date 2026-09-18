import { useEffect, useRef, useState } from 'react'

const counters = [
  { label: 'Cases Won', target: 1200 },
  { label: 'Happy Clients', target: 450 },
  { label: 'Years Experience', target: 25 },
  { label: 'Awards Won', target: 35 },
] as const

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (count >= target) return

    const duration = 2000
    const stepTime = 50
    const steps = duration / stepTime
    const increment = target / steps

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= target) {
          clearInterval(timer)
          return target
        }
        return next
      })
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, target, count])

  return Math.floor(count)
}

function CounterItem({ label, target }: { label: string; target: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]!.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [])

  const value = useCountUp(target, inView)

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl font-bold text-white">{value}+</span>
      <p className="mt-2 text-sm text-gray-200">{label}</p>
    </div>
  )
}

export function Counter() {
  return (
    <section className="relative bg-dark-bg py-20 lg:py-[120px]">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/statute-counter/1920/800"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-12 px-4 sm:px-6 lg:grid-cols-4">
        {counters.map((counter) => (
          <CounterItem key={counter.label} label={counter.label} target={counter.target} />
        ))}
      </div>
    </section>
  )
}
