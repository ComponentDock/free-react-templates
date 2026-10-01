import { SERVICES } from '../data/content'

export function Services() {
  return (
    <section id="services" className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
              What We do?
            </span>
            <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-navy md:text-4xl">
              Welcome to the freight broker we are the best.
            </h2>
          </div>
          <p className="font-body text-lg leading-7 text-secondary">
            With decades of freight forwarding experience behind every booking, we pair shippers
            with vetted carriers, keep documentation clean, and treat every load like it is the only
            one on the road.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {SERVICES.map(({ title, blurb, Icon, seed }) => (
            <article key={title} className="flex bg-white shadow-[0_10px_30px_rgba(3,18,59,0.08)]">
              <img
                src={`https://picsum.photos/seed/${seed}/400/320`}
                alt={`${title} service`}
                className="w-2/5 object-cover"
                loading="lazy"
              />
              <div className="w-3/5 p-8">
                <Icon aria-hidden="true" className="mb-4 h-9 w-9 text-brand" />
                <h3 className="font-display text-lg font-bold uppercase tracking-[1.5px] text-brand">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-body">{blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
