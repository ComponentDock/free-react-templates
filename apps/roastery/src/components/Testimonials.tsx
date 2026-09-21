import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'The best coffee I have ever tasted. The baristas genuinely care about every pour.',
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
  },
  {
    text: 'A cozy atmosphere with world-class beans. My morning ritual starts here.',
    name: 'David Chen',
    role: 'Regular Customer',
  },
  {
    text: 'Their single-origin Ethiopian is unlike anything I have found elsewhere. Simply outstanding.',
    name: 'Emma Rodriguez',
    role: 'Food Blogger',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-ink py-20 transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-brand/30"
            >
              <Quote className="h-8 w-8 text-brand/40" aria-hidden="true" />
              <p className="mt-5 text-sm leading-relaxed text-gray-300">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-display text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
