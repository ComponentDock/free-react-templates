import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
    name: 'Rupaya',
    avatar: 'https://picsum.photos/seed/presswell-test1/80/80',
  },
  {
    quote:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
    name: 'Anika',
    avatar: 'https://picsum.photos/seed/presswell-test2/80/80',
  },
  {
    quote:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
    name: 'Carlos',
    avatar: 'https://picsum.photos/seed/presswell-test3/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section className="border-b border-gray-100 bg-paper py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
              <p className="mt-6 text-sm leading-relaxed text-navy dark:text-gray-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 text-sm font-semibold text-ink dark:text-white">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
