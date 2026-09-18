const services = [
  { title: 'Residential Cleaning', price: '$50', img: 'sweeply-svc1' },
  { title: 'Commercial Cleaning', price: '$50', img: 'sweeply-svc2' },
  { title: 'Construction Cleaning', price: '$50', img: 'sweeply-svc3' },
  { title: 'Windows Cleaning', price: '$50', img: 'sweeply-svc4' },
  { title: 'Carpet Cleaning', price: '$50', img: 'sweeply-svc5' },
  { title: 'Furniture Cleaning', price: '$50', img: 'sweeply-svc6' },
]

export function Services() {
  return (
    <section className="py-16" id="services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl font-bold text-heading mt-3">Offering Best Cleaning Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group relative rounded-lg overflow-hidden h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${svc.img}/600/400)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold mb-1">{svc.title}</h3>
                <span className="text-sm text-white/70">
                  Starting from <strong className="text-accent">${svc.price}</strong>
                </span>
                <div className="mt-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-brand rounded-full text-white hover:bg-brand-dark transition-colors"
                    aria-label={`Learn more about ${svc.title}`}
                  >
                    <span className="fa fa-chevron-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
