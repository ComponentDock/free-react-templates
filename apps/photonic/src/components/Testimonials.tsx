import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit dicta repellat, sit aut at nulla quam sed, neque voluptatum deserunt, vero ipsum natus sint culpa illo.',
    author: 'Marrygrace Woodland',
    role: 'Client',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit dicta repellat, sit aut at nulla quam sed, neque voluptatum deserunt, vero ipsum natus sint culpa illo.',
    author: 'Jean Doe',
    role: 'Client',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit dicta repellat, sit aut at nulla quam sed, neque voluptatum deserunt, vero ipsum natus sint culpa illo.',
    author: 'Ben Smith',
    role: 'Client',
  },
]

export function Testimonials() {
  return (
    <section id="about" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1 text-brand-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-500">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-bold text-gray-900">&mdash; {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
