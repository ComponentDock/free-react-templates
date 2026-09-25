const testimonials = [
  {
    quote:
      'Makely transformed our online presence completely. Their creative approach and attention to detail exceeded all our expectations. Highly recommend!',
    author: 'John Smith',
    seed: 'makely-person-1',
  },
  {
    quote:
      'Working with this team was an absolute pleasure. They understood our vision from day one and delivered a product that truly represents our brand.',
    author: 'Christine Aguilar',
    seed: 'makely-person-2',
  },
  {
    quote:
      'The level of professionalism and creativity is unmatched. They helped us grow our business through exceptional design and strategy.',
    author: 'Robert Spears',
    seed: 'makely-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-gray-50 rounded-lg p-8 text-center border border-makely-border"
            >
              <img
                src={`https://picsum.photos/seed/${t.seed}/100/100`}
                alt={t.author}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-makely-body italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <h4 className="font-bold text-makely-heading">{t.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
