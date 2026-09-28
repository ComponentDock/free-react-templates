const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Critic, Gourmet Magazine',
    quote:
      'An absolutely incredible dining experience. The flavors are bold, the presentation is stunning, and every dish tells a story. I keep coming back for more.',
    image: 'https://picsum.photos/seed/bites-testi1/200/200',
  },
  {
    name: 'James Rodriguez',
    role: 'Chef & Restaurateur',
    quote:
      'The attention to detail in every plate is remarkable. Fresh ingredients, creative combinations, and impeccable service make this a true gem.',
    image: 'https://picsum.photos/seed/bites-testi2/200/200',
  },
  {
    name: 'Emily Chen',
    role: 'Regular Customer',
    quote:
      "From the warm ambiance to the exquisite menu, everything about this place is perfect. It has become our family's favorite spot for celebrations.",
    image: 'https://picsum.photos/seed/bites-testi3/200/200',
  },
]

export function Testimonials() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-ink">What Our Guests Say</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink">{t.name}</h3>
                  <p className="text-xs text-body">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-body italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
