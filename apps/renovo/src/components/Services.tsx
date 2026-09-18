const SERVICES = [
  {
    title: 'Computer Repair',
    description:
      'Expert diagnosis and repair for desktops and laptops. Hardware upgrades, virus removal, and system optimization.',
    image: 'renovo-service-1',
  },
  {
    title: 'Mobile Repair',
    description:
      'Screen replacement, battery swap, and water damage recovery for all smartphone brands.',
    image: 'renovo-service-2',
  },
  {
    title: 'Data Recovery',
    description:
      'Retrieve lost files from damaged drives, corrupted systems, and accidentally deleted storage.',
    image: 'renovo-service-3',
  },
  {
    title: 'Network Setup',
    description: 'Home and office network configuration, Wi-Fi optimization, and security setup.',
    image: 'renovo-service-4',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#222] mb-3">
            What we Offer to our Supporters
          </h2>
          <p className="text-[#777]">Professional repair services you can trust</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded">
                <img
                  src={`https://picsum.photos/seed/${svc.image}/400/250`}
                  alt={svc.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#222] mt-4 group-hover:text-[#988fff] transition-colors">
                {svc.title}
              </h4>
              <p className="text-sm text-[#777] mt-2">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
