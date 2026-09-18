const TESTIMONIALS = [
  {
    quote:
      'Working with this team transformed our digital presence entirely. Their creativity and attention to detail exceeded all expectations.',
    name: 'John Smith',
    image: 'https://picsum.photos/seed/forgeit-person1/200/200',
  },
  {
    quote:
      'The results speak for themselves. Our conversion rates doubled and our brand has never looked better.',
    name: 'Christine Aguilar',
    image: 'https://picsum.photos/seed/forgeit-person2/200/200',
  },
  {
    quote:
      'Professional, responsive, and incredibly talented. They delivered a website that truly represents our vision.',
    name: 'Robert Spears',
    image: 'https://picsum.photos/seed/forgeit-person3/200/200',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Testimonials</h2>
        </div>
        <div className="mx-auto max-w-2xl space-y-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="text-center">
              <blockquote className="mb-6 text-lg italic text-body">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-20 w-20 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="font-bold text-dark">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
