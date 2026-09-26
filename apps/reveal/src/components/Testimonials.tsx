const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Eric Ingram',
    position: 'Product Designer @Facebook',
    seed: 'reveal-person-1',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Ryan Mullins',
    position: 'Product Designer @Shopify',
    seed: 'reveal-person-2',
  },
  {
    quote:
      'Behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Erica Miller',
    position: 'Product Designer @Twitter',
    seed: 'reveal-person-3',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">My Happy Clients</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-light-bg p-8 text-center">
              <p className="mb-6 italic leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <img
                src={`https://picsum.photos/seed/${t.seed}/80/80`}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-sm text-muted">{t.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
