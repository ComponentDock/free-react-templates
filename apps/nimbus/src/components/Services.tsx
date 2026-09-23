const services = [
  {
    number: '01',
    title: 'User Research',
    description:
      'Understand your users deeply with built-in analytics, surveys, and feedback loops that reveal what matters most.',
  },
  {
    number: '02',
    title: 'User Interface',
    description:
      'Design pixel-perfect interfaces with our drag-and-drop builder and extensive component library.',
  },
  {
    number: '03',
    title: 'Sketch & Wireframes',
    description:
      'Rapidly prototype ideas with collaborative wireframing tools that turn concepts into reality.',
  },
  {
    number: '04',
    title: 'User Experience',
    description:
      'Optimize every touchpoint with heatmap analysis, A/B testing, and journey mapping features.',
  },
  {
    number: '05',
    title: 'User Research',
    description:
      'Continuous discovery through automated testing and real-time user behavior insights.',
  },
  {
    number: '06',
    title: 'User Interface',
    description:
      'Responsive design system that adapts seamlessly across all devices and screen sizes.',
  },
]

export function Services() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Features That Make Us Unique</h2>
          <p className="text-smoke">
            A comprehensive toolkit for building exceptional digital products.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.number} className="flex gap-6">
              <div className="shrink-0">
                <span className="text-3xl font-extralight text-primary-400">{s.number}</span>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-semibold text-ink">{s.title}</h4>
                <p className="text-sm leading-relaxed text-smoke">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
