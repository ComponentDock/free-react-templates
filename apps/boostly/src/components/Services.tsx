import { Code2, Palette, ShoppingCart } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    blurb: 'Content marketing is nothing but offering users value.',
  },
  {
    icon: Code2,
    title: 'Web Design',
    blurb: 'Content marketing is nothing but offering users value.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    blurb: 'Content marketing is nothing but offering users value.',
  },
] as const

/** Services: heading row (46px title left, blurb right) over three bordered
 *  white cards — orange line icon, bold title, blurb, and a Let's Talk link
 *  with a black underline bar that turns orange on hover. */
export function Services() {
  return (
    <section id="services" className="pb-[100px] pt-[120px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-[70px] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md font-heading text-[31px] font-bold leading-[1.4] text-ink lg:text-[46px]">
            Services we provide
          </h2>
          <p className="max-w-xl font-body text-lg leading-normal text-body">
            Content marketing is nothing but offering users value. It is not just about traffic
            minion customers.
          </p>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="border border-[#ddd] bg-white p-[52px_50px] transition-shadow duration-300 hover:shadow-[0px_15px_25px_rgba(168,96,0,0.1)]"
            >
              <service.icon
                className="mb-[31px] h-14 w-14 text-brand"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mb-[14px] font-heading text-2xl font-bold text-ink">
                {service.title}
              </h3>
              <p className="mb-[34px] font-body text-base text-body">{service.blurb}</p>
              <a
                href="#contact"
                className="group relative inline-block font-body text-base uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                Let&apos;s Talk
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-0 h-0.5 w-full bg-ink transition-colors group-hover:bg-brand"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
