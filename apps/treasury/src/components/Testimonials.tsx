import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Treasury helped us streamline our financial operations and increase our savings by 40% in just six months.',
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    seed: 'testi-1',
  },
  {
    quote:
      'The team provided exceptional guidance on our investment portfolio. We could not be happier with the results.',
    name: 'Michael Chen',
    role: 'CFO, GlobalVentures',
    seed: 'testi-2',
  },
  {
    quote:
      'Professional, reliable, and always available when we need them. Treasury is our trusted financial partner.',
    name: 'Emily Rodriguez',
    role: 'Director, InnovateLab',
    seed: 'testi-3',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">Testimonials</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, seed }) => (
            <div
              key={name}
              className="rounded-lg border border-gray-100 p-8 text-center shadow-sm transition-colors dark:border-gray-800"
            >
              <Quote className="mx-auto mb-4 h-8 w-8 text-brand/30" aria-hidden="true" />
              <blockquote className="text-sm italic leading-relaxed text-gray-600 dark:text-gray-300">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <h3 className="text-sm font-bold text-ink dark:text-white">{name}</h3>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
