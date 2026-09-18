const testimonials = [
  {
    name: 'Alysha Myers',
    location: 'Miami Florida, USA',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    avatar: 'https://picsum.photos/seed/bazaar-person1/100/100',
  },
  {
    name: 'James Fisher',
    location: 'New York, USA',
    quote:
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    avatar: 'https://picsum.photos/seed/bazaar-person2/100/100',
  },
  {
    name: 'Jacob Webb',
    location: 'Athens, Greece',
    quote:
      'Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    avatar: 'https://picsum.photos/seed/bazaar-person3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-slate py-16" aria-label="Testimonials">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">
            <span className="border-b-2 border-brand pb-1">Our Satisfied Customer says</span>
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
              />
              <span className="block text-sm font-bold text-ink">{t.name}</span>
              <small className="block text-xs text-mist">{t.location}</small>
              <blockquote className="mt-3 text-sm leading-relaxed text-body">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
