import { services } from '../data'

/* Brand-blue services band with six white cards in a 3-column grid
   (reference: .site-section.bg-primary + .service-29193). */
export function Services() {
  return (
    <section id="services" className="bg-primary-600 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-3 text-xl font-bold uppercase text-white">What We Do</h2>
        <p className="mb-12 max-w-2xl text-white/90">
          We design interiors that feel as good as they look — from the first sketch to the final
          styling.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="bg-white p-8 text-center sm:p-10">
              <item.icon className="mx-auto mb-5 h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mb-3 text-base font-bold uppercase text-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
