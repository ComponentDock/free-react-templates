interface Testimonial {
  quote: string
  author: string
  seed: string
}

const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet.',
    author: 'Kelly Holmes',
    seed: 'elixir-person-1',
  },
  {
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet.',
    author: 'Rebecca Morando',
    seed: 'elixir-person-2',
  },
  {
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet.',
    author: 'Lucas Gallone',
    seed: 'elixir-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-wide text-ink">
          Testimonials
        </h2>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <div key={t.author} className="min-w-[280px] shrink-0 text-center">
              <img
                src={`https://picsum.photos/seed/${t.seed}/200/200`}
                alt={t.author}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <blockquote className="text-sm leading-relaxed text-mist">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm font-semibold text-ink">&mdash; {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
