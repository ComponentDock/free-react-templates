const testimonials = [
  {
    name: 'Alysha Myers',
    location: 'Miami Florida, USA',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'voyager-person-1',
  },
  {
    name: 'James Fisher',
    location: 'New York, USA',
    quote:
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    seed: 'voyager-person-2',
  },
  {
    name: 'Jacob Webb',
    location: 'Athens, Greece',
    quote:
      'Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.',
    seed: 'voyager-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-100 py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">Our Satisfied Guests Says</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div
                className="mx-auto mb-4 h-20 w-20 rounded-full bg-cover bg-center ring-2 ring-primary-500"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${t.seed}/150/150)`,
                }}
              />
              <h4 className="text-sm font-bold text-black">{t.name}</h4>
              <p className="mb-3 text-xs text-gray-400">{t.location}</p>
              <blockquote className="text-sm italic leading-relaxed text-gray-500">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
