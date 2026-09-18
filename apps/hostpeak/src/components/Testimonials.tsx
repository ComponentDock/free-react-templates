const testimonials = [
  {
    quote:
      'Outstanding hosting service! The uptime is incredible and the support team resolves issues within minutes.',
    name: 'Forden Miliard',
    role: 'CEO & Founder',
    seed: 1,
  },
  {
    quote:
      'We migrated our entire infrastructure to Hostpeak and saw a 40% improvement in page load times.',
    name: 'Manel Djuice',
    role: 'CTO',
    seed: 2,
  },
  {
    quote: 'The best hosting decision we ever made. Reliable, fast, and the pricing is unbeatable.',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    seed: 3,
  },
]

export function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold text-heading lg:text-4xl">Happy Customer Says</h2>
          <div className="mx-auto h-px w-24 bg-heading/20" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-5 rounded bg-white p-6 shadow-sm">
              <img
                src={`https://picsum.photos/seed/${t.seed}/70/70`}
                alt={t.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="mb-3 text-sm text-body">{t.quote}</p>
                <h4 className="text-base font-bold text-heading">{t.name}</h4>
                <p className="text-xs text-body">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
