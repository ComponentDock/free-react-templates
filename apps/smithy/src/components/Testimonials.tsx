const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    quote:
      'Alex delivered an outstanding website that exceeded our expectations. The attention to detail and creative approach made our project a huge success.',
    seed: 'smithy-t1',
  },
  {
    id: 2,
    name: 'Michael Chen',
    quote:
      'Working with Alex was a fantastic experience. They understood our vision and translated it into a beautiful, functional website that our customers love.',
    seed: 'smithy-t2',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[var(--color-heading)]">
            client say about me
          </h2>
          <p className="text-[var(--color-body)]">What my clients say about working with me</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-[var(--color-line)] bg-white p-8 shadow-sm"
            >
              <p className="mb-6 italic text-[var(--color-body)]">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/100/100`}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <span className="font-semibold text-[var(--color-heading)]">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
