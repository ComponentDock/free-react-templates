import { offerBtnLabel, offerText, offerTitle, quoteBtnLabel, stats } from '../data'

export function Offer() {
  return (
    <section id="offer-section" className="bg-ink py-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        <dl className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 mt-3 text-[15px] uppercase tracking-wide text-white/60">
                {stat.label}
              </dt>
              <dd className="order-1 text-[40px] font-light leading-none text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="text-[34px] font-light leading-tight text-white">{offerTitle}</h2>
          <p className="mt-6 text-[15px] leading-7 text-white/70">{offerText}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects-section"
              className="inline-block rounded-[5px] border border-white px-[30px] leading-[42px] text-white transition-colors hover:bg-white hover:text-ink"
            >
              {offerBtnLabel}
            </a>
            <a
              href="#contact-section"
              className="inline-block rounded-[5px] bg-white px-[30px] leading-[42px] text-ink transition-colors hover:bg-brand hover:text-white"
            >
              {quoteBtnLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
