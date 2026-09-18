const testimonials = [
  {
    quote:
      'Proxy made finding our dream home effortless. The agent was professional, responsive, and truly understood what we were looking for. We closed in record time!',
    name: 'Sarah Mitchell',
    seed: 'proxy-person-1',
  },
  {
    quote:
      'From the first consultation to handing us the keys, the experience was seamless. Their market knowledge and negotiation skills saved us thousands.',
    name: 'David Chen',
    seed: 'proxy-person-2',
  },
  {
    quote:
      'We were relocating from out of state and needed someone we could trust. Proxy exceeded every expectation — patient, thorough, and always available.',
    name: 'Emily Rodriguez',
    seed: 'proxy-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1600px] px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-black md:text-4xl">
          Happy Customers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="mb-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/120/120`}
                  alt={t.name}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <blockquote className="mb-4 text-gray-600 italic">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="font-serif font-bold text-black">&mdash; {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
