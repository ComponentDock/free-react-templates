const services = [
  {
    number: '01',
    title: 'Innovate',
    description:
      'We help you innovate with cutting-edge solutions that transform your business and delight your customers.',
    items: ['Customer Experience', 'Product Management', 'Proof of Concept'],
  },
  {
    number: '02',
    title: 'Create',
    description:
      'From concept to launch, we create beautiful digital products that stand out in the market.',
    items: ['Web Design', 'Branding', 'Web & App Development'],
  },
  {
    number: '03',
    title: 'Scale',
    description:
      'Scale your digital presence with data-driven strategies and proven marketing techniques.',
    items: ['Social Media', 'Paid Campaigns', 'Marketing & SEO'],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.number} className="relative p-6">
              <span className="absolute -top-2 -left-2 text-6xl font-bold text-gray-100">
                {s.number}
              </span>
              <h3 className="relative mb-4 text-xl font-bold text-primary">{s.title}</h3>
              <p className="mb-4 text-gray-600">{s.description}</p>
              <ul className="space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
