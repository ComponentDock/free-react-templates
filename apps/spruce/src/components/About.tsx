const features = [
  {
    title: 'Tons of pre-made sections',
    description: 'Combine sections from our vast component library and create beautiful.',
  },
  {
    title: 'Complete CMS integration',
    description:
      'Easily connect to any content management system and manage your content effortlessly.',
  },
  {
    title: 'Stellar after-sales support',
    description: 'Our team is here to help you long after your purchase with dedicated support.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://picsum.photos/seed/spruce-about/600/500"
            alt="About Spruce"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <div className="mb-10">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy leading-tight">
              All the features
              <br />
              you'd expect.
            </h2>
          </div>
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-body font-body leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
