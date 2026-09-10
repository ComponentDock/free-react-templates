import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The best cakes I have ever tasted! We ordered a custom wedding cake and it was absolutely stunning.',
    name: 'Sarah Mitchell',
    role: 'Bride',
    avatar: 'https://picsum.photos/seed/batterly-avatar1/100/100',
  },
  {
    quote:
      'Their chocolate truffle cake is out of this world. Fresh, rich, and delivered right on time every single week.',
    name: 'James Cooper',
    role: 'Regular Customer',
    avatar: 'https://picsum.photos/seed/batterly-avatar2/100/100',
  },
  {
    quote:
      'We use Batterly for all our corporate events. Consistent quality and they always go the extra mile on presentation.',
    name: 'Emily Carter',
    role: 'Event Manager',
    avatar: 'https://picsum.photos/seed/batterly-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="blog" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
          Testimonial
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
          What Customers Say
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card-bg p-8">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
