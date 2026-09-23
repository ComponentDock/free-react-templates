import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Working with this team transformed our office into a space that truly reflects our brand and inspires our people every day.',
    author: 'Robert Thomson',
    role: 'Business Owner',
    photo: 'https://picsum.photos/seed/plano-author-1/100/100',
  },
  {
    text: 'The attention to detail and creative vision exceeded our expectations. Our new showroom is a conversation piece with every client.',
    author: 'Sarah Mitchell',
    role: 'Marketing Director',
    photo: 'https://picsum.photos/seed/plano-author-2/100/100',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/plano-testimonial/1920/800"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />

        <div className="mt-8 min-h-[160px]">
          {testimonials.map((t, index) => (
            <div
              key={t.author}
              className={`transition-opacity duration-700 ${
                index === current ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <p className="text-lg leading-relaxed text-white/90">{t.text}</p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img src={t.photo} alt={t.author} className="h-14 w-14 rounded-full object-cover" />
                <div className="text-left">
                  <h3 className="text-base font-bold text-white">{t.author}</h3>
                  <span className="text-sm text-white/60">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current ? 'bg-accent' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
