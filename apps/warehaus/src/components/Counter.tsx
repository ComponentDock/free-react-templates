import { useEffect, useRef, useState } from 'react'
import { Users, Trophy, Headphones, ThumbsUp } from 'lucide-react'

const STATS = [
  { icon: Users, label: 'Happy Customers', target: 10000, suffix: '+' },
  { icon: Trophy, label: 'Number of Awards', target: 350, suffix: '' },
  { icon: Headphones, label: 'Hours Support', target: 5500, suffix: '+' },
  { icon: ThumbsUp, label: 'Happy Clients', target: 4500, suffix: '+' },
]

export function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let elapsed = 0
    const step = 50

    const timer = setInterval(() => {
      elapsed += step
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress >= 1) {
        clearInterval(timer)
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

export function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // ref.current is guaranteed non-null after first render (React assigns it)
    const el = ref.current!
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function StatItem({
  icon: Icon,
  label,
  target,
  suffix,
}: {
  icon: typeof Users
  label: string
  target: number
  suffix: string
}) {
  const { ref, inView } = useInView()
  const count = useCountUp(target, inView)

  return (
    <div ref={ref} className="text-center text-white">
      <Icon className="mx-auto mb-3 h-8 w-8" />
      <div className="text-3xl font-bold">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-gray-300">{label}</p>
    </div>
  )
}

export function Counter() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/warehaus-counter/1920/600)' }}
      aria-label="Statistics"
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
