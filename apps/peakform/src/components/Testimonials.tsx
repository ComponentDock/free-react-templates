import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Sarah Johnson',
    quote:
      "Great experience! The trainers here are amazing and the facilities are top-notch. I've never felt better about my fitness journey.",
    image: 'https://picsum.photos/seed/peakform-test1/100/100',
  },
  {
    name: 'Michael Davis',
    quote:
      'Peakform transformed my life. I lost 30 pounds in 3 months and gained confidence I never knew I had. Highly recommended!',
    image: 'https://picsum.photos/seed/peakform-test2/100/100',
  },
  {
    name: 'Emily Chen',
    quote:
      "The variety of classes keeps me motivated. From yoga to CrossFit, there's something for every mood and fitness level.",
    image: 'https://picsum.photos/seed/peakform-test3/100/100',
  },
  {
    name: 'James Wilson',
    quote:
      "Best gym I've ever been to. The community here is incredible and the trainers genuinely care about your progress.",
    image: 'https://picsum.photos/seed/peakform-test4/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const go = (dir: number) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const t = testimonials[current]!

  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink uppercase text-center mb-12">
          Testimonials
        </h2>

        <div className="relative max-w-2xl mx-auto text-center">
          <Quote className="h-12 w-12 text-brand/20 mx-auto mb-6" />

          <blockquote className="text-lg text-ink/70 italic leading-relaxed mb-8">
            "{t.quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
            <span className="font-bold text-ink">{t.name}</span>
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-ink/30 hover:text-brand transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-ink/30 hover:text-brand transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === current ? 'bg-brand' : 'bg-gray-300',
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
