import { btnBrand, btnWhite } from '../brand'
import { pics } from '../data'

export function About() {
  return (
    <section id="team" className="bg-navy-950 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img
          src={pics.about}
          alt="Arena history"
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-magenta-500">
            Our story
          </p>
          <h2 className="font-display text-4xl leading-snug text-white uppercase">
            Find out about us in history
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Founded by competitive players, Arena brings the biggest fights to one stage. From
            underground scrims to championship showdowns, we&apos;ve grown into the home of fair
            play, raw skill, and unforgettable matches.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#pricing" className={btnBrand}>
              Install Now
            </a>
            <a href="#streams" className={btnWhite}>
              Watch Tutorial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
