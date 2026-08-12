import { SERVICES } from '../data'

/* ftco-service-image-1 — three photo service cards that overlap the hero's
   bottom edge (~70px): photo, orange Oswald title, #999 text, centered.
   On hover the photo lifts 5px with a soft shadow. */
export function ServiceCards() {
  return (
    <section id="services" className="relative z-10 -mt-[70px] bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="text-center">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="relative top-0 mb-[30px] w-full rounded transition-all duration-300 hover:top-[5px] hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,.3)]"
              />
              <h3 className="font-display text-[1.4rem] font-medium uppercase text-brand">
                {service.title}
              </h3>
              <p className="mt-3 text-smoke">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
