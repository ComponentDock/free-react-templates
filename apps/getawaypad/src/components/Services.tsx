const SERVICES = [
  {
    title: 'Map Direction',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    image: 'https://picsum.photos/seed/getawaypad-svc1/400/300',
  },
  {
    title: 'Accommodation Services',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    image: 'https://picsum.photos/seed/getawaypad-svc2/400/300',
  },
  {
    title: 'Great Experience',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    image: 'https://picsum.photos/seed/getawaypad-svc3/400/300',
  },
]

export function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="overflow-hidden rounded-lg bg-white text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${svc.image}')` }}
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{svc.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-body">{svc.description}</p>
                <a
                  href="#"
                  className="inline-block rounded bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-white hover:bg-brand-dark transition-colors"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
