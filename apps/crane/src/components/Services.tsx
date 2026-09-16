import { ArrowRight } from 'lucide-react'

const services = [
  {
    image: 'https://picsum.photos/seed/crane-svc1/400/250',
    title: 'Maintenance & Repair',
    description: 'There are many variations of passages of lorem Ipsum available.',
  },
  {
    image: 'https://picsum.photos/seed/crane-svc2/400/250',
    title: 'Building Construction',
    description: 'There are many variations of passages of lorem Ipsum available.',
  },
  {
    image: 'https://picsum.photos/seed/crane-svc3/400/250',
    title: 'Bridge & Road Construction',
    description: 'There are many variations of passages of lorem Ipsum available.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-heading">{s.title}</h3>
                <p className="mb-4 text-body">{s.description}</p>
                <a
                  href="#services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
