import { cn } from '@free-react-templates/ui'
import { STATS } from '../data'

/* .collection-area (bg #f9f9ff) — "Experience / How your Donation Reach
   Over Years" with four white stat boxes: USD 21 M (2015, orange), USD
   15 M (2016, black), USD 23 M (2017, green), USD 25 M (2018, purple);
   36px serif numbers, teal hover effect. */
export function CollectionSection() {
  return (
    <section className="bg-light py-[150px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pb-[95px] text-center">
          <h2 className="font-display text-4xl font-semibold text-ink">Experience</h2>
          <p className="mt-3 font-display text-[22px] text-ink">
            How your Donation Reach Over Years
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-[1.625] text-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.year}
              className="border border-transparent bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-teal"
            >
              <h3 className={cn('font-display text-4xl font-semibold', stat.colorClass)}>
                USD {stat.value} {stat.suffix}
              </h3>
              <p className="mt-2 text-body">{stat.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
