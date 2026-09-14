import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Pressline has been an incredible partner in bringing our stories to life. Their attention to detail and commitment to quality is unmatched.',
    name: 'Sarah Mitchell',
    role: 'Bestselling Author',
    seed: 'pressline-test1',
  },
  {
    text: 'Working with Pressline transformed my manuscript into something truly special. Their editorial team is world-class.',
    name: 'David Chen',
    role: 'First-time Author',
    seed: 'pressline-test2',
  },
  {
    text: 'The distribution and marketing support from Pressline helped our book reach readers we never thought possible.',
    name: 'Emma Rodriguez',
    role: 'Independent Publisher',
    seed: 'pressline-test3',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">
          Kind Words From Clients
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-surface-alt p-6 text-center shadow-sm">
              <Quote
                className="mx-auto mb-4 h-8 w-8 text-primary-300 opacity-60"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-smoke">{t.text}</p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-smoke">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
