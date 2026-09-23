const testimonials = [
  {
    quote:
      'An absolutely captivating read from start to finish. The author masterfully weaves together themes of adventure and self-discovery.',
    name: 'Jacob Spencer',
    role: 'Book Reviewer',
    avatar: 'https://picsum.photos/seed/bookcraft-person-1/80/80',
  },
  {
    quote:
      "I couldn't put this book down. The characters felt so real and the story kept me guessing until the very last page.",
    name: 'David Shaun',
    role: 'Literary Critic',
    avatar: 'https://picsum.photos/seed/bookcraft-person-2/80/80',
  },
  {
    quote:
      'A beautifully written novel that stays with you long after you finish reading. Highly recommended for all book lovers.',
    name: 'Craig Smith',
    role: 'Author & Editor',
    avatar: 'https://picsum.photos/seed/bookcraft-person-3/80/80',
  },
]

export function Testimonials() {
  return (
    <section id="testimonial" className="bg-light-section py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 font-[Oswald] text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl">
          Testimonials From Readers
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm"
            >
              <p className="mb-6 flex-1 text-gray-500 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
