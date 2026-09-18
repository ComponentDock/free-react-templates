const testimonials = [
  {
    name: 'Andrew Field',
    image: 'https://picsum.photos/seed/sitecraft-t1/80/80',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'Mark Bubble',
    image: 'https://picsum.photos/seed/sitecraft-t2/80/80',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'Adam Smith',
    image: 'https://picsum.photos/seed/sitecraft-t3/80/80',
    quote:
      'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Client Says</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-sm font-semibold text-ink">{t.name}</h3>
              <blockquote className="mt-3 text-sm leading-relaxed text-gray-500">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
