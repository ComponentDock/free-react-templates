const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, DesignWorks',
    avatar: 'polygon-avatar-1',
    quote:
      'Polygon transformed our vision into a stunning reality. Their architectural expertise and attention to detail exceeded all our expectations. Highly recommended for any design project.',
  },
  {
    name: 'David Chen',
    role: 'Director, Urban Living',
    avatar: 'polygon-avatar-2',
    quote:
      'Working with the Polygon team was an absolute pleasure. They brought creativity, professionalism, and a deep understanding of modern design to our project.',
  },
]

export function Testimonial() {
  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Testimonial</h2>
          <p className="mx-auto max-w-2xl text-mist">
            What our clients say about working with us and the results we deliver.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-5">
              <img
                src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                alt={t.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="text-lg font-bold text-ink">{t.name}</h3>
                <p className="mb-3 text-sm text-brand">{t.role}</p>
                <blockquote className="italic leading-relaxed text-mist">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
