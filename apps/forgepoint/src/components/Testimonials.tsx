import { useState, useEffect, useCallback } from 'react'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    text: 'Logisti Group is a representative logistics operator providing full range of services in the sphere of customs clearance and transportation worldwide.',
    name: 'Jessya Inn',
    role: 'Co Founder',
  },
  {
    text: 'Their industrial solutions have transformed our manufacturing process, delivering exceptional quality and efficiency across all operations.',
    name: 'Mark Johnson',
    role: 'Operations Director',
  },
  {
    text: 'Outstanding commitment to safety and innovation. ForgePoint has been an invaluable partner in our growth journey.',
    name: 'Sarah Williams',
    role: 'CEO',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const id = setInterval(advance, 5000)
    return () => clearInterval(id)
  }, [advance])

  const t = TESTIMONIALS[current]! // current always in [0, length)

  return (
    <section className="bg-navy py-20 dark:bg-navy-deep">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto mb-6 h-10 w-10 text-gold" aria-hidden="true" />
        <p className="text-lg leading-relaxed text-white/80 italic">&ldquo;{t.text}&rdquo;</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div>
            <span className="font-display text-sm font-semibold text-white">{t.name}</span>
            <p className="text-xs text-white/60">{t.role}</p>
          </div>
        </div>
        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
