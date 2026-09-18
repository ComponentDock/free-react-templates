const features = [
  {
    title: 'Highly Trained Staff',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Best Equipments',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: '100% Warranty',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Fast & Effective Service',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand uppercase tracking-wider">
            Why Choose Us?
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center">
                <span className="fa fa-check text-brand text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-heading mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
