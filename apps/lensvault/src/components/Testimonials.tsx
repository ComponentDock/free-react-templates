const testimonials = [
  {
    id: 1,
    quote:
      'Amazing work! The attention to detail and creative vision exceeded all expectations. Every shot told a story.',
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    seed: 'lv-test-1',
  },
  {
    id: 2,
    quote:
      'Professional, punctual, and incredibly talented. The final gallery was beyond what we imagined possible.',
    name: 'James Cooper',
    role: 'Event Coordinator',
    seed: 'lv-test-2',
  },
  {
    id: 3,
    quote:
      'Working with this team was an absolute pleasure. They captured the essence of our brand perfectly.',
    name: 'Emily Chen',
    role: 'Brand Manager',
    seed: 'lv-test-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: heading */}
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-text-primary">
              Client&rsquo;s Feedback
            </h2>
            <p className="text-text-secondary">
              We take pride in delivering exceptional photography services. Here is what our clients
              have to say about working with us.
            </p>
          </div>

          {/* Right: testimonials */}
          <div className="space-y-8">
            {testimonials.map((t) => (
              <div key={t.id} className="flex gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="mb-2 text-sm text-text-secondary">&ldquo;{t.quote}&rdquo;</p>
                  <h4 className="text-sm font-semibold text-text-primary">{t.name}</h4>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
