const studies = [
  {
    category: 'UX Design',
    title: 'E-commerce Platform Redesign',
    description:
      'Complete overhaul of checkout flow resulting in improved conversion rates and reduced cart abandonment.',
    metrics: [
      { value: '45%', label: 'Conversion Increase' },
      { value: '30%', label: 'Less Abandonment' },
    ],
    seed: 'curriculo-cs1',
  },
  {
    category: 'Mobile Design',
    title: 'Fitness App User Experience',
    description:
      'Designed intuitive workout tracking app with gamification elements to boost user engagement and retention.',
    metrics: [
      { value: '500K+', label: 'Downloads' },
      { value: '4.8', label: 'App Store Rating' },
    ],
    seed: 'curriculo-cs2',
  },
  {
    category: 'Branding',
    title: 'Tech Startup Brand Identity',
    description:
      'Created comprehensive brand identity including logo, color system, and design guidelines for Series A startup.',
    metrics: [
      { value: '$12M', label: 'Funding Raised' },
      { value: '3x', label: 'Brand Recognition' },
    ],
    seed: 'curriculo-cs3',
  },
]

export function CaseStudies() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          Featured <strong className="font-bold">Case Studies</strong>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {studies.map((s) => (
            <div key={s.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${s.seed}/600/300`}
                alt={s.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  {s.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-800">{s.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{s.description}</p>
                <div className="mb-4 flex gap-6">
                  {s.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="block text-xl font-bold text-brand-primary">{m.value}</span>
                      <span className="text-xs text-gray-500">{m.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-block rounded border border-brand-primary px-4 py-1.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
