const testimonials = [
  {
    quote:
      'The most delicious cake I have ever tasted! The chocolate layers were absolutely divine and the presentation was stunning.',
    name: 'Olivia Jenkins',
    role: 'Event Planner',
    image: 'https://picsum.photos/seed/crumbs-testi1/80/80',
  },
  {
    quote:
      'We ordered a custom cake for our wedding and it exceeded every expectation. Our guests are still talking about it!',
    name: 'Sarah Mitchell',
    role: 'Bride',
    image: 'https://picsum.photos/seed/crumbs-testi2/80/80',
  },
  {
    quote:
      'Crumbs has become our go-to for every celebration. The quality is consistently outstanding and delivery is always on time.',
    name: 'James Cooper',
    role: 'Loyal Customer',
    image: 'https://picsum.photos/seed/crumbs-testi3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-dm-sans text-sm uppercase tracking-[0.2em] text-orange-600">
            Testimonial
          </span>
          <h2 className="mt-3 font-quicksand text-3xl font-bold text-gray-900 md:text-4xl">
            What Customers Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-gray-50 p-8">
              <p className="mb-6 text-gray-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="block font-quicksand text-sm font-bold text-gray-900">
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
