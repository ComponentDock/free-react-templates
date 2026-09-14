import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50, label: 'Years Experience', suffix: '+' },
  { value: 8500, label: 'Happy Customers', suffix: '+' },
  { value: 20, label: 'Products', suffix: '+' },
  { value: 50, label: 'Team Members', suffix: '+' },
]

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current!
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center py-4">
      <div className="text-4xl font-extrabold text-white mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="bg-brand-500 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-4">We Provide Free Quotation</h2>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold px-6 py-2 rounded transition-colors text-sm"
            >
              Free Consultation
            </a>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
