import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Absolutely fantastic service! The plumber arrived on time, diagnosed the issue quickly, and fixed it efficiently. Highly recommend to anyone needing reliable plumbing help.',
    name: 'Mark Alviro Wiens',
    title: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/pipeflow-avatar1/100/100',
  },
  {
    quote:
      "Professional, courteous, and skilled. They handled our commercial plumbing project with great attention to detail. We couldn't be happier with the results.",
    name: 'Mark Alviro Wiens',
    title: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/pipeflow-avatar2/100/100',
  },
  {
    quote:
      'Our go-to plumbing team for all our properties. Fast response times and quality work every time. They truly understand what customer service means.',
    name: 'Mark Alviro Wiens',
    title: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/pipeflow-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          What our Client's Say about us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <p className="mb-6 text-sm text-gray-600">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
