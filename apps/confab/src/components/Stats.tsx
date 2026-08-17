import { STATS } from '../data'

/* Stats band — three centered columns of large pink Barlow numbers with
   navy labels and uppercase gray captions. */
export function Stats() {
  return (
    <section aria-label="Event statistics" className="border-b border-white/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-[60px] sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.value} className="text-center">
            <span className="mb-3 block font-sans text-[50px] font-bold uppercase leading-none text-blush">
              {stat.value}
            </span>
            <h3 className="font-sans text-2xl font-normal text-navy">{stat.label}</h3>
            <p className="mt-1 font-display text-lg font-medium uppercase tracking-wide text-mist">
              {stat.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
