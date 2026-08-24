import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'An absolutely wonderful dining experience. The food was exquisite and the service was impeccable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'Best restaurant in town! The ambiance and flavors transport you to another world.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    text: 'From start to finish, everything was perfect. The chef clearly puts passion into every dish.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-warm-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-warm-900 md:text-4xl">
            What our customer says
          </h2>
          <p className="mx-auto max-w-xl text-base text-warm-900/60">
            Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_star, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-brand-400" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-warm-900/60">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/bonquet-${t.name.split(' ')[0]!.toLowerCase()}/50/50`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-display text-sm font-medium text-warm-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
