import { useEffect, useRef, useState } from 'react'

const PROGRESS_ITEMS = [
  { label: 'Cake design', value: 95 },
  { label: 'Cake Class', value: 80 },
  { label: 'Cake Recipes', value: 90 },
] as const

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-brand">
              About Cake shop
            </span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold text-ink leading-tight">
              Cakes and bakes from the house of Queens!
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Every great celebration deserves a great cake. We craft each creation with premium
              ingredients, timeless techniques, and genuine passion — turning your sweetest moments
              into unforgettable flavors.
            </p>
          </div>

          {/* Right progress bars */}
          <div className="flex flex-col justify-center gap-6">
            {PROGRESS_ITEMS.map((item) => (
              <ProgressBar key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    /* v8 ignore start -- ref is always set after mount in jsdom */
    if (!el) return
    /* v8 ignore stop */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setWidth(value)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm font-medium text-ink">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-border/30">
        <div
          className="h-full rounded-full bg-brand transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
