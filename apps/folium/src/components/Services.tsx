import { services } from '../data'

/** Services section: six icon cards, each with a lucide icon inside a mint
 *  circle, a 20px heading and a short paragraph. */
export function Services() {
  return (
    <section id="services" aria-label="What we do" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-light text-black">What We Do</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={`${service.title}-${index}`} className="flex gap-4">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                <span className="absolute h-10 w-10 rounded-full bg-mint" aria-hidden="true" />
                <service.icon aria-hidden="true" className="relative h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-light text-black">{service.title}</h3>
                <p className="mt-2 text-base font-light leading-relaxed text-gray-700">
                  {service.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
