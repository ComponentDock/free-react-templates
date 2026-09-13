const testimonials = [
  {
    name: 'Stephen McMilan',
    role: 'Executive, ACI Group',
    text: 'This platform transformed how our team collaborates. The analytics alone saved us countless hours of manual reporting each week.',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO, NovaSpark',
    text: 'We evaluated a dozen solutions before choosing Indigo. The API-first approach and documentation quality made integration a breeze.',
  },
  {
    name: 'David Park',
    role: 'Product Lead, Elevate',
    text: 'Outstanding support team and a product that keeps getting better. Our retention rates improved 40% after switching to this platform.',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-magnolia py-16 sm:py-20 lg:py-28"
      data-testid="testimonials"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section intro */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="font-display text-3xl font-bold text-heading sm:text-4xl">
            Client Says Me
          </h2>
          <p className="mt-3 text-base text-body">
            Trusted by teams worldwide to deliver results that matter.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/indigo-${t.name.split(' ')[0]!.toLowerCase()}/120/120`}
                alt={t.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <div className="rounded-lg bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-heading">{t.name}</h3>
                <p className="text-xs text-body">{t.role}</p>
                <p className="mt-3 text-sm italic text-body">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
