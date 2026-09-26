const testimonials = [
  {
    name: 'Chad Hawkins',
    role: 'Customer',
    quote:
      'An incredible experience from start to finish. The team understood our vision and delivered beyond our expectations.',
    seed: 'reign-person-1',
  },
  {
    name: 'Ayisha Atherton',
    role: 'Customer',
    quote:
      'Professional, creative, and detail-oriented. They transformed our ideas into a stunning digital presence.',
    seed: 'reign-person-2',
  },
  {
    name: 'Marcus Webb',
    role: 'Customer',
    quote:
      'The quality of work was outstanding. Every element was carefully crafted and the results speak for themselves.',
    seed: 'reign-person-3',
  },
  {
    name: 'Sarah Chen',
    role: 'Customer',
    quote:
      'Working with this team was a pleasure. They brought fresh perspectives and delivered on time, every time.',
    seed: 'reign-person-4',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ name, role, quote, seed }) => (
            <div key={name}>
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${seed}/80/80`}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-semibold">{name}</h3>
                  <span className="text-xs text-text-body">{role}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-body">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
