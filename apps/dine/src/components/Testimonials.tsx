import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'The best dining experience I have ever had. The flavors are unmatched.',
    name: 'John Smith',
    role: 'Food Critic',
  },
  {
    quote: 'Absolutely wonderful atmosphere and the staff made us feel like family.',
    name: 'Sarah Johnson',
    role: 'Regular Customer',
  },
  {
    quote: 'A perfect place for a romantic dinner. The menu options are incredible.',
    name: 'Michael Brown',
    role: 'Chef',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          Testimonials
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-gray-50 p-8 text-center">
              <Quote className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 italic text-gray-600">&ldquo;{t.quote}&rdquo;</blockquote>
              <cite className="mt-4 block not-italic font-semibold text-gray-900">{t.name}</cite>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
