import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Cloe Marena',
    role: 'Owner of Building Co.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium non eligendi totam natus ullam esse repellat.',
  },
  {
    name: 'Nathalie Channie',
    role: 'Owner of Building Co.',
    quote:
      'Eveniet, laboriosam impedit facilis. Voluptatem, repudiandae eligendi maiores sunt itaque, dolores laboriosam.',
  },
  {
    name: 'Will Turner',
    role: 'Owner of Building Co.',
    quote:
      'Laboriosam nisi natus quos soluta blanditiis iste in distinctio fugiat perferendis, architecto eveniet.',
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Happy Clients
          </h4>
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded border bg-white p-8 text-center shadow-sm">
              <Quote className="mx-auto mb-4 h-8 w-8 text-accent/30" />
              <p className="mb-6 text-sm leading-relaxed text-gray-500">&ldquo;{t.quote}&rdquo;</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
