import { BENEFITS } from '../data/content'

export function ChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-16 md:py-20" aria-label="Benefits">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
            Our Benefit
          </span>
          <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-white md:text-4xl">
            Why people choose us?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {BENEFITS.map(({ title, blurb, Icon }) => (
              <div key={title} className="flex gap-4">
                <Icon aria-hidden="true" className="mt-1 h-9 w-9 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-[1.5px] text-white">
                    {title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-6 text-white/70">{blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:-mt-[50px]">
          <img
            src="https://picsum.photos/seed/drayage-benefit/700/620"
            alt="Warehouse team staging pallets for dispatch"
            className="h-full min-h-[320px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
