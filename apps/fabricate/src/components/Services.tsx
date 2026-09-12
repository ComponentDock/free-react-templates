const services = [
  {
    title: 'Automotive Engineering',
    image: 'https://picsum.photos/seed/fabricate-s1/600/400',
    description:
      'Advanced automotive engineering solutions for modern vehicle manufacturing and maintenance operations.',
  },
  {
    title: 'Construction & Engineering',
    image: 'https://picsum.photos/seed/fabricate-s2/600/400',
    description:
      'End-to-end construction and engineering services from planning through completion and handover.',
  },
  {
    title: 'Industrial Engineering',
    image: 'https://picsum.photos/seed/fabricate-s3/600/400',
    description:
      'Comprehensive industrial engineering solutions to optimize your production processes and workflows.',
  },
]

export function Services() {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Our Capturing Market Sectors
          </h2>
          <p className="text-mist max-w-xl mx-auto">
            Delivering exceptional results across diverse industrial sectors with precision
            engineering and innovative solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-ink mb-3">{service.title}</h4>
                <p className="text-mist text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
