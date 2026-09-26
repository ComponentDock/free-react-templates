const services = [
  {
    title: 'Web Design',
    description:
      'Beautiful, responsive designs that capture your brand identity and engage your audience.',
  },
  {
    title: 'eCommerce',
    description: 'Full-featured online stores with seamless checkout experiences.',
  },
  {
    title: 'Web Applications',
    description: 'Custom web applications built with modern technologies for scale.',
  },
  { title: 'Branding', description: 'Complete brand identity systems from logo to guidelines.' },
  {
    title: 'Copy Writing',
    description: 'Compelling content that tells your story and drives engagement.',
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
  },
]

const serviceIcons = [
  'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
]

export function Services() {
  return (
    <section id="services-section" className="border-b py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <div className="shrink-0">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={serviceIcons[i]}
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                <p className="mb-2 text-gray-600">{s.description}</p>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
