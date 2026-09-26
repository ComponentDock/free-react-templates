const services = [
  {
    title: 'Expert Technicians',
    description:
      'Our photographers bring years of experience and technical expertise to every project.',
  },
  {
    title: 'Professional Service',
    description: 'From planning to delivery, we provide a seamless and professional experience.',
  },
  {
    title: 'Great Support',
    description:
      'We are always available to answer questions and make adjustments to ensure your satisfaction.',
  },
  {
    title: 'Technical Skills',
    description: 'Cutting-edge equipment and post-processing techniques for stunning results.',
  },
  {
    title: 'Highly Recommended',
    description: 'Trusted by hundreds of clients across weddings, events, and commercial projects.',
  },
  {
    title: 'Positive Reviews',
    description:
      'Consistently rated five stars by clients who appreciate our dedication to quality.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-semibold text-text-primary">Why Choose Us</h2>
          <p className="text-text-secondary">
            We are passionate about delivering exceptional photography.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <h4 className="mb-2 text-lg font-semibold text-text-primary">{s.title}</h4>
              <p className="text-sm text-text-secondary">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
