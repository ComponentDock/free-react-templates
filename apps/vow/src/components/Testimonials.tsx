const testimonials = [
  {
    id: 1,
    quote:
      'Absolutely love the quality and style. Every piece I have ordered has exceeded my expectations. The fabrics are luxurious and the fit is perfect.',
    name: 'Christinne Smith',
    role: 'client',
    seed: 'vow-test-1',
  },
]

export function Testimonials() {
  const first = testimonials[0]!
  return (
    <section className="py-16" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[3px] text-body-text">
          only the best
        </p>
        <h2
          id="testimonials-heading"
          className="mb-10 font-sans text-3xl font-bold capitalize text-heading"
        >
          testimonials
        </h2>
        <blockquote className="mb-6 text-base leading-relaxed text-body-text">
          &ldquo;{first.quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <img
            src={`https://picsum.photos/seed/${first.seed}/60/60`}
            alt={first.name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-heading">{first.name}</p>
            <p className="text-xs text-body-text">{first.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
