import { stats } from '../data'

/** Dark navy stats band (reference `.happy_client`): four large white
 *  counters with uppercase labels. */
export function Stats() {
  return (
    <section aria-label="Stats" className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-4 lg:grid-cols-4 lg:px-8">
        {stats.map(({ value, label }) => (
          <div
            key={label + value}
            className="flex items-center justify-center gap-6 lg:justify-start lg:pl-16"
          >
            <span className="font-heading text-[60px] font-bold leading-none text-white">
              {value}
            </span>
            <h4 className="max-w-28 font-heading text-[22px] font-semibold uppercase leading-tight text-white">
              {label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}
