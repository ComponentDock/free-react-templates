const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Web Development Student',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    avatar: 'https://picsum.photos/seed/cognita-avatar1/80/80',
  },
  {
    name: 'Michael Chen',
    role: 'Data Science Student',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
    avatar: 'https://picsum.photos/seed/cognita-avatar2/80/80',
  },
  {
    name: 'Emily Davis',
    role: 'Digital Marketing Student',
    quote:
      'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    avatar: 'https://picsum.photos/seed/cognita-avatar3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          What Students Say
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm italic text-body">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-heading text-sm font-semibold text-heading">{t.name}</p>
                  <p className="text-xs text-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
