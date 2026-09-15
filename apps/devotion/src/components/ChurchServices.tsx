import { ArrowRight } from 'lucide-react'

const services = [
  {
    key: 'svc-1',
    title: 'Sunday Worship Service',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.',
    image: 'https://picsum.photos/seed/devotion-svc1/600/400',
  },
  {
    key: 'svc-2',
    title: 'Bible Study Group',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.',
    image: 'https://picsum.photos/seed/devotion-svc2/600/400',
  },
  {
    key: 'svc-3',
    title: 'Youth Fellowship',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.',
    image: 'https://picsum.photos/seed/devotion-svc3/600/400',
  },
] as const

export function ChurchServices() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-amatic text-4xl font-bold text-navy">
          Church Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.key} className="text-center">
              <img
                src={svc.image}
                alt={svc.title}
                className="mb-4 w-full rounded object-cover"
                loading="lazy"
              />
              <h3 className="mb-2 text-lg font-semibold text-navy">{svc.title}</h3>
              <p className="mb-3 text-sm text-gray-600">{svc.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
