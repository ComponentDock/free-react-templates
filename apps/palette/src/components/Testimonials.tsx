import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Absolutely fantastic work! The attention to detail and creative vision exceeded all expectations. I would highly recommend this designer to anyone.',
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    seed: 'palette-test1',
  },
  {
    text: 'Professional, responsive, and incredibly talented. They transformed our brand identity and the results speak for themselves.',
    name: 'Michael Chen',
    position: 'Marketing Director, InnovateCo',
    seed: 'palette-test2',
  },
  {
    text: 'Working with this designer was a pleasure from start to finish. The final product was exactly what we envisioned and more.',
    name: 'Emily Rodriguez',
    position: 'Founder, CreativeHub',
    seed: 'palette-test3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-md">
              <Quote className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
              <p className="mb-6 text-sm text-smoke">{t.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-ink">{t.name}</h3>
                  <p className="text-xs text-smoke">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
