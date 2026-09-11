const testimonials = [
  {
    id: 1,
    name: 'John Anderson',
    company: 'Anderson Development Co.',
    avatarSeed: 'rivet-avatar-1',
    quote:
      'Working with Rivet was an exceptional experience. Their attention to detail and commitment to quality exceeded our expectations at every stage.',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    company: 'Mitchell Properties',
    avatarSeed: 'rivet-avatar-2',
    quote:
      'Rivet delivered our project on time and within budget. Their professionalism and expertise make them our go-to construction partner.',
  },
]

export function Testimonials() {
  return (
    <section id="about" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Testimonial</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex gap-4 rounded-xl border border-gray-200 bg-paper p-6 shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/${t.avatarSeed}/100/100`}
                alt={t.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="mb-4 italic leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-heading">{t.name}</p>
                <p className="text-xs text-mist">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
