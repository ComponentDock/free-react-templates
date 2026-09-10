const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director at TechCorp',
    quote:
      'Switching to Dialpad transformed our customer support. Response times dropped by 40% and our satisfaction scores hit an all-time high.',
    avatar: 'https://picsum.photos/seed/avatar-sarah/80/80',
  },
  {
    name: 'James Rodriguez',
    role: 'CEO at StartupHub',
    quote:
      'The team at Dialpad handles everything seamlessly. Our customers always feel heard and supported, no matter the hour.',
    avatar: 'https://picsum.photos/seed/avatar-james/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/dialpad-test/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky/90 to-brand/90" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Why Choose Us Your Trusted Partner</h2>
          <p className="mt-3 text-sm text-white/80">
            We are committed to delivering excellence in every interaction.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-5 rounded-lg bg-white p-6 shadow-md">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
                <h4 className="mt-3 text-sm font-semibold text-ink">{t.name}</h4>
                <p className="text-xs text-mist">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
