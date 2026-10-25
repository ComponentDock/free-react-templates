import { ArrowRight, Play } from 'lucide-react'
import { heroPhrases, heroStats } from '../data'
import { primaryButton, secondaryButton } from '../lib/site'
import { Typewriter } from './Typewriter'

/** The design's opening: mint gradient, a mono licence pill, a two-line
 * headline whose second line is a teal gradient, three affordances, four stats
 * on a hairline, and one framed photograph. */
export function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-50/70 to-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-14 text-center lg:px-8 lg:pt-24">
        <p className="inline-flex items-center gap-2 rounded-md bg-primary-100 px-3 py-1 font-mono text-xs font-medium tracking-wider text-primary-900 uppercase">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
          </span>
          Open source · AGPL-3.0
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.025em] text-gray-900 sm:text-5xl lg:text-6xl">
          A learning platform your
          <br />
          <Typewriter words={heroPhrases} />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Chalkline runs courses, assessment and reporting for 400,000 learners across 90
          institutions. Self-host the whole thing, or let us operate it in your region. No per-seat
          surprises, no data held hostage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className={primaryButton}>
            Book a walkthrough
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="#standards" className={secondaryButton}>
            Read the docs
          </a>
          <button type="button" className="inline-flex items-center gap-2.5 px-2 text-sm font-medium text-gray-700">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white">
              <Play aria-hidden="true" className="h-4 w-4 fill-current" />
            </span>
            Watch the 4-minute tour
          </button>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-y-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-semibold text-gray-900">{stat.value}</dd>
              <dt className="mt-1 text-sm text-gray-600">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <img
          src="https://picsum.photos/seed/chalkline-1/1200/600"
          alt="Students working together at a library table"
          width={1200}
          height={600}
          loading="lazy"
          className="mx-auto mt-16 w-full max-w-5xl rounded-2xl shadow-2xl ring-1 ring-gray-200 lg:mt-24"
        />
      </div>
    </section>
  )
}
