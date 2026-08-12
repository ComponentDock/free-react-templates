import { useCountUp } from '../lib/countUp'
import {
  ABOUT_EYEBROW,
  ABOUT_IMAGE,
  ABOUT_PARAGRAPH,
  ABOUT_TITLE,
  COUNTERS,
  EXPERIENCE_LABEL,
  EXPERIENCE_YEARS,
  type Counter,
} from '../data'

/** Animated red counter (source `div.experience` count-up number + label). */
function CounterStat({ counter }: { counter: Counter }) {
  const value = useCountUp(counter.value)
  return (
    <div>
      <p className="font-display text-5xl font-extrabold text-brand">
        {value}
        {counter.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink">{counter.label}</p>
    </div>
  )
}

/**
 * About — two-column intro (source `section.about-low-area`): eyebrow +
 * heading + paragraph with two animated red counters ("Delivery Packages"
 * 454 m, "Countries Covered" 127) on the left, and a photo with an orange
 * "20 Years of experience" overlay badge on the right.
 */
export function About() {
  return (
    <section id="about" className="bg-soft py-24" aria-label="About">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{ABOUT_EYEBROW}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            {ABOUT_TITLE}
          </h2>
          <p className="mt-5 leading-relaxed text-body">{ABOUT_PARAGRAPH}</p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {COUNTERS.map((counter) => (
              <CounterStat key={counter.label} counter={counter} />
            ))}
          </div>
        </div>

        <div className="relative">
          <img src={ABOUT_IMAGE} alt="Machina industrial site" className="w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-ember px-8 py-6 text-white">
            <span className="block font-display text-5xl font-extrabold leading-none">
              {EXPERIENCE_YEARS}
            </span>
            <span className="mt-2 block text-sm font-semibold uppercase tracking-wide">
              {EXPERIENCE_LABEL}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
