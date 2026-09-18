const features = [
  {
    number: '01',
    title: 'Travel',
    description: 'Explore the world with our curated travel packages and expert guidance.',
  },
  {
    number: '02',
    title: 'Experience',
    description: 'Create unforgettable memories with unique local experiences.',
  },
  {
    number: '03',
    title: 'Relax',
    description: 'Unwind in comfort with our handpicked accommodations and services.',
  },
]

export function FeaturesIntro() {
  return (
    <section className="bg-section-alt py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.number} className="text-center">
            <span className="font-display text-4xl text-primary">{feature.number}</span>
            <h3 className="mt-4 font-display text-2xl">{feature.title}</h3>
            <p className="mt-3 text-text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
