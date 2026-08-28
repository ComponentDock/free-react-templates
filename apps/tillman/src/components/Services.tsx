const services = [
  {
    number: '01',
    title: 'Field Ready',
    description:
      'Technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness.',
    image: 'https://picsum.photos/seed/tillman-svc1/400/300',
  },
  {
    number: '02',
    title: 'Transportation',
    description:
      'Technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness.',
    image: 'https://picsum.photos/seed/tillman-svc2/400/300',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-leaf-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Services we provide
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md sm:flex-row"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex w-full flex-col justify-center p-6 sm:w-1/2">
                <span className="mb-2 text-sm font-bold text-leaf-400">{svc.number}</span>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{svc.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{svc.description}</p>
                <a
                  href="#services"
                  className="inline-block w-fit rounded-full bg-leaf-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-leaf-500"
                >
                  Get the Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
