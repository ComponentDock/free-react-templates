import { services } from '../data'
import { Reveal } from './Reveal'

/** Six freight services on the warm grey band: transparent cards that fill white on hover/focus. */
export function Services() {
  return (
    <section id="services" className="bg-surface py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <Reveal className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
            Services
          </h2>
          <p className="mt-4 text-[16px] text-body">
            Six desks, one waybill. Pick a mode and the same team keeps the scans, the paperwork and
            the delivery note together.
          </p>
        </Reveal>

        <ul className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <li
                key={service.title}
                className="rounded-[4px] border border-transparent p-[30px] text-center transition-all duration-300 ease-in-out hover:border-brand hover:bg-white focus-within:border-brand focus-within:bg-white"
              >
                <Icon aria-hidden="true" className="mx-auto text-brand" size={48} strokeWidth={1.2} />
                <h3 className="mt-4 text-[22.4px] font-medium text-ink uppercase">
                  {service.title}
                </h3>
                <p className="mt-2 text-[16px] text-body">{service.blurb}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
