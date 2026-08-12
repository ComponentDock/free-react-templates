import { COUNTERS } from '../data'

/* Counter band — royal-blue band with a heading and four stat counters
   (static values; layout does not depend on animation). */

export function Counters() {
  return (
    <section id="counters-section" className="bg-brand py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-[32px] font-bold text-white sm:text-[40px]">
          {COUNTERS.heading}
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {COUNTERS.items.map((counter) => (
            <div key={counter.label} className="text-center">
              <p className="text-[40px] font-bold text-white">{counter.value}</p>
              <p className="mt-2 text-[16px] text-white/70">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
