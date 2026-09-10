const testimonials = [
  {
    name: 'John Smith',
    role: 'Business Traveler',
    avatar: 'highway-avatar-1',
    quote:
      'Excellent service! The car was in perfect condition and the rental process was seamless.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Vacationer',
    avatar: 'highway-avatar-2',
    quote: 'Great selection of vehicles and very competitive prices. Will definitely use again.',
  },
  {
    name: 'Mike Wilson',
    role: 'Daily Commuter',
    avatar: 'highway-avatar-3',
    quote: 'Reliable cars and amazing customer support. Highly recommended for anyone.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Happy Clients</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-surface p-6 text-center">
              <img
                src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                alt={t.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <p className="mb-4 text-sm text-body">&ldquo;{t.quote}&rdquo;</p>
              <h4 className="font-bold text-heading">{t.name}</h4>
              <p className="text-xs text-body">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
