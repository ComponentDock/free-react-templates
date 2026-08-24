const TESTIMONIALS = [
  {
    quote:
      'An absolutely stunning resort. The views are breathtaking and the service is impeccable. We felt truly pampered throughout our stay.',
    name: 'Sarah Mitchell',
    role: 'Travel Blogger',
    avatarSeed: 'havenshore-avatar1',
  },
  {
    quote:
      'The perfect getaway for our anniversary. The beachfront rooms, the spa, and the restaurant — everything exceeded our expectations.',
    name: 'James Cooper',
    role: 'Hotel Guest',
    avatarSeed: 'havenshore-avatar2',
  },
  {
    quote:
      'A world-class experience from check-in to checkout. The staff went above and beyond to make our family vacation unforgettable.',
    name: 'Elena Rodriguez',
    role: 'Family Vacationer',
    avatarSeed: 'havenshore-avatar3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
            Hear what our past guests have to say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl bg-paper p-8">
              <p className="mb-6 italic text-mist">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.avatarSeed}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="text-xs text-mist">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
