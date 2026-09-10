const testimonials = [
  {
    name: 'Allison Holmes',
    role: 'Designer',
    quote:
      'Bidcraft made selling my handmade items so easy. The bidding system is fair and the interface is beautiful. Highly recommended!',
    seed: 'bidcraft-person1',
  },
  {
    name: 'Marcus Chen',
    role: 'Collector',
    quote:
      'I found rare collectibles at amazing prices. The auction experience is smooth and exciting. Bidcraft is my go-to marketplace.',
    seed: 'bidcraft-person2',
  },
  {
    name: 'Sophia Rivera',
    role: 'Entrepreneur',
    quote:
      'As a small business owner, Bidcraft helped me reach new customers. The platform is intuitive and the support team is fantastic.',
    seed: 'bidcraft-person3',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24" aria-label="Testimonials">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/bidcraft-testimonials-bg/1600/800')",
        }}
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-400">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            Happy <span className="text-primary-400">Clients</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-sm bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-base font-bold text-white">{t.name}</h3>
                  <span className="text-sm text-white/70">{t.role}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
