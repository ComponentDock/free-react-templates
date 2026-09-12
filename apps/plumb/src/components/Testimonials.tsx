const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Carl Anderson',
    title: 'Director at Google',
    image: 'https://picsum.photos/seed/plumb-test1/80/80',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Drew Wood',
    title: 'Director at Google',
    image: 'https://picsum.photos/seed/plumb-test2/80/80',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Michelle Allison',
    title: 'Director at Google',
    image: 'https://picsum.photos/seed/plumb-test3/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-ink">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
              <blockquote className="text-sm italic leading-relaxed text-smoke">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-bold text-ink">{t.name}</h3>
                  <span className="text-xs text-smoke">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
