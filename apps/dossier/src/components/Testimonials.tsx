import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "Alex's design work transformed our product completely. The attention to detail and user-centric approach made a huge difference in our conversion rates.",
    author: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote:
      'Working with Alex was a fantastic experience. They understood our vision perfectly and delivered a design that exceeded our expectations.',
    author: 'Michael Torres',
    role: 'CTO, InnovateCo',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Client Testimonial</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="rounded-lg bg-white p-8 shadow-sm">
              <Quote className="mb-4 text-leaf-400" size={32} />
              <p className="mb-6 leading-relaxed text-gray-600 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.author.replace(/\s/g, '')}/60/60`}
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
