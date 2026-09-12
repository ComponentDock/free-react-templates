const services = [
  {
    image: 'https://picsum.photos/seed/silverleaf-svc1/400/400',
    title: 'Special Care',
    description: 'Tailored care programs for residents with specific health needs.',
  },
  {
    image: 'https://picsum.photos/seed/silverleaf-svc2/400/400',
    title: 'Special Care',
    description: 'Dedicated support staff ensuring round-the-clock assistance.',
  },
  {
    image: 'https://picsum.photos/seed/silverleaf-svc3/400/400',
    title: 'Special Care',
    description: 'Recreational activities designed to promote physical and mental wellness.',
  },
  {
    image: 'https://picsum.photos/seed/silverleaf-svc4/400/400',
    title: 'Special Care',
    description: 'Nutritious meals prepared daily by our professional culinary team.',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-display text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
