import { Flower2, Droplets, TreePine } from 'lucide-react'

const services = [
  {
    icon: Flower2,
    title: 'Plants Care',
    description:
      'In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales. Professional plant care services.',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description:
      'In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales. Expert cleaning solutions.',
  },
  {
    icon: TreePine,
    title: 'Tree Service & Trimming',
    description:
      'In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales. Professional tree care.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-ink">OUR SERVICES</h2>
          <p className="text-mist">We provide the perfect service for you.</p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Service list */}
          <div className="flex flex-col gap-6 lg:w-5/12">
            {services.map((svc) => (
              <div key={svc.title} className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <svc.icon className="h-7 w-7 text-brand" />
                </div>
                <div>
                  <h5 className="mb-1 font-semibold text-ink">{svc.title}</h5>
                  <p className="text-sm leading-relaxed text-mist">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Video area */}
          <div className="relative overflow-hidden rounded-lg lg:w-7/12">
            <img
              src="https://picsum.photos/seed/verdant-video/800/450"
              alt="Landscaping video"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                aria-label="Play video"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
              >
                <span className="ml-1 text-2xl">▶</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
