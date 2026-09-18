import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Industrial Construction',
    description:
      'Comprehensive industrial construction solutions from foundation to finish, tailored to your facility needs.',
    seed: 'citadel-service-1',
  },
  {
    title: 'Mechanical Engineering',
    description:
      'Expert mechanical engineering services for complex industrial systems and machinery integration.',
    seed: 'citadel-service-2',
  },
  {
    title: 'Bridge Construction',
    description:
      'Durable and reliable bridge construction with modern materials and engineering excellence.',
    seed: 'citadel-service-3',
  },
]

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-base uppercase tracking-wide text-brand">
            Our Services
          </span>
          <h2 className="text-3xl font-normal leading-tight text-ink md:text-[44px] md:leading-[56px]">
            We provide all of your <br className="hidden md:block" /> industrial solution
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <article key={svc.seed} className="group">
              <div className="mb-10 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${svc.seed}/400/280`}
                  alt={svc.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-4 text-2xl font-normal text-ink">{svc.title}</h3>
              <p className="mb-5 text-base font-normal leading-relaxed text-mist">
                {svc.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-base font-normal text-mist transition-colors hover:text-brand"
              >
                Read More <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
