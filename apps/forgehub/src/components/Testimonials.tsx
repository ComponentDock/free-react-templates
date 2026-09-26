const testimonials = [
  {
    quote:
      'ForgeHub transformed our digital presence completely. Their team delivered beyond our expectations with innovative solutions.',
    name: 'John Smith',
    image: 'forgehub-person1',
  },
  {
    quote:
      'Working with ForgeHub was an absolute pleasure. They understood our vision and brought it to life with stunning design.',
    name: 'Christine Aguilar',
    image: 'forgehub-person2',
  },
  {
    quote:
      'The attention to detail and creative approach set ForgeHub apart. Highly recommend for any digital project.',
    name: 'Robert Spears',
    image: 'forgehub-person3',
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <blockquote className="mb-6 text-gray-600 italic">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex flex-col items-center">
                <img
                  src={`https://picsum.photos/seed/${t.image}/200/200`}
                  alt={t.name}
                  className="mb-3 h-20 w-20 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="font-medium text-gray-900">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
