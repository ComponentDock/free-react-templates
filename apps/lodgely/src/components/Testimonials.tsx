const testimonials = [
  {
    quote:
      'An absolutely wonderful experience. The staff went above and beyond to make our stay memorable.',
    author: 'Sarah Johnson',
    avatar: 'https://picsum.photos/seed/lodgely-avatar1/100/100',
  },
  {
    quote:
      'The rooms are beautifully designed and the restaurant serves incredible food. Highly recommended!',
    author: 'Michael Chen',
    avatar: 'https://picsum.photos/seed/lodgely-avatar2/100/100',
  },
  {
    quote: 'From check-in to check-out, everything was perfect. We will definitely be coming back.',
    author: 'Emily Davis',
    avatar: 'https://picsum.photos/seed/lodgely-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">People Says</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded bg-white p-8 shadow-md">
              <p className="mb-6 text-base leading-relaxed text-body italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="font-display text-lg font-bold text-ink">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
