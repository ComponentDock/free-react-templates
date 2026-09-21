const testimonials = [
  {
    name: 'Adame Nesane',
    role: 'Chief Customer',
    quote:
      'An exceptional dining experience from start to finish. The flavors were incredible and the service was impeccable — truly a feast for the senses.',
    img: 'feastly-cust1',
  },
  {
    name: 'Adam Nahan',
    role: 'Food Critic',
    quote:
      'Every dish was a masterpiece. The attention to detail in the presentation and the bold, authentic flavors make this a standout restaurant.',
    img: 'feastly-cust2',
  },
  {
    name: 'Maria Santos',
    role: 'Regular Guest',
    quote:
      "This has become our family's favorite place. The warm atmosphere and consistently amazing food keep us coming back week after week.",
    img: 'feastly-cust3',
  },
] as const

export function Testimonials() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(1,7,16,0.8), rgba(1,7,16,0.8)), url(https://picsum.photos/seed/feastly-testi/1600/800)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h3 className="font-display text-3xl font-bold text-white">
            Customer <span className="text-primary-400">says</span>
          </h3>
          <p className="mt-2 italic text-white/70">
            Beast kind form divide night above let moveth bearing darkness.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4 rounded bg-white p-6">
              <img
                src={`https://picsum.photos/seed/${t.img}/100/100`}
                alt={t.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h5 className="font-display text-base font-bold text-ink transition-colors hover:text-primary-400">
                  {t.name}
                </h5>
                <span className="text-sm italic text-smoke">{t.role}</span>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
