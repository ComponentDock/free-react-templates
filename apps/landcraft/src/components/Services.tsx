const services = [
  {
    title: 'Lawn Care',
    description:
      'Complete lawn maintenance including mowing, fertilization, weed control, and aeration to keep your lawn healthy and green year-round.',
    image: 'https://picsum.photos/seed/landcraft-svc1/400/250',
  },
  {
    title: 'Landscape Design',
    description:
      'Custom landscape architecture and design services that transform your outdoor space into a beautiful, functional living area.',
    image: 'https://picsum.photos/seed/landcraft-svc2/400/250',
  },
  {
    title: 'Garden Maintenance',
    description:
      "Regular garden upkeep including pruning, planting, mulching, and seasonal color rotations to maintain your garden's beauty.",
    image: 'https://picsum.photos/seed/landcraft-svc3/400/250',
  },
]

export default function Services() {
  return (
    <section id="services" className="pb-24" data-testid="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Special Services</h2>
          <p className="text-body">
            We offer a comprehensive range of landscaping services tailored to meet your specific
            needs and exceed your expectations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-body text-sm mb-4">{svc.description}</p>
                <a href="#" className="text-brand font-semibold text-sm hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
