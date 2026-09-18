import { useEffect, useRef, useState } from 'react'

const counters = [
  { target: 12000, label: 'Download' },
  { target: 100, label: 'Awards Won' },
  { target: 4050, label: 'Contributors' },
  { target: 9000, label: 'Satisfied Customers' },
]

export function formatNumber(n: number) {
  return n.toLocaleString()
}

export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started.current) {
          started.current = true
          const step = Math.ceil(target / (duration / 16))
          const id = setInterval(() => {
            setCount((prev) => {
              if (prev + step >= target) {
                clearInterval(id)
                return target
              }
              return prev + step
            })
          }, 16)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, count }
}

function Counter({ target, label }: { target: number; label: string }) {
  const { ref, count } = useCountUp(target)

  return (
    <div ref={ref} className="text-center">
      <strong className="block text-4xl font-bold text-white md:text-5xl">
        {formatNumber(count)}
      </strong>
      <span className="mt-2 block text-base text-white/70">{label}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          We Always Try To Understand Users Expectation
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {counters.map((c) => (
            <Counter key={c.label} target={c.target} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
