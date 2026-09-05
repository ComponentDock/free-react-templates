import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Residential Design',
    desc: 'It has survived not only five centuries but the leap into electronic typesetting remain essentially unchanged.',
    img: 'structura-svc-1',
  },
  {
    title: 'Corporate Design',
    desc: 'It has survived not only five centuries but the leap into electronic typesetting remain essentially unchanged.',
    img: 'structura-svc-2',
  },
  {
    title: 'Commercial Design',
    desc: 'It has survived not only five centuries but the leap into electronic typesetting remain essentially unchanged.',
    img: 'structura-svc-3',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-charcoal">Service We Do</h2>
          <p className="mt-3 text-gray-500">
            A wall for our project glory and a place to find more
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${svc.img}/600/400`}
                alt={svc.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{svc.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lime-accent transition-colors hover:text-charcoal"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
