import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Industrial Construction',
    description:
      'We deliver comprehensive industrial construction services from concept to completion, ensuring quality at every stage.',
    img: 'https://picsum.photos/seed/industrix-svc1/600/400',
  },
  {
    title: 'Mechanical Engineering',
    description:
      'Our mechanical engineering team designs and implements systems that power modern industry forward.',
    img: 'https://picsum.photos/seed/industrix-svc2/600/400',
  },
  {
    title: 'Bridge Construction',
    description:
      'From foundations to finishes, we build bridges that connect communities and stand the test of time.',
    img: 'https://picsum.photos/seed/industrix-svc3/600/400',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            We provide all of your
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{svc.description}</p>
                <a
                  href="#services"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
