import { Play } from 'lucide-react'
import {
  MISSION_COUNTERS,
  MISSION_HEADING,
  MISSION_PARAGRAPH_1,
  MISSION_PARAGRAPH_2,
  VIDEO_LABEL,
  VIDEO_THUMB,
} from '../data'

/**
 * Mission — background-image section under a gold overlay with a video
 * popup figure, the "Our Mission" heading with two paragraphs, and four
 * stat counters (orange Anton numbers with an underline bar).
 */
export function Mission() {
  return (
    <section
      id="about-section"
      aria-label="Our mission"
      className="relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/benevol-mission-bg/1600/900')" }}
    >
      <div className="absolute inset-0 bg-gold/95" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <figure className="relative">
            <img
              src={VIDEO_THUMB}
              alt="Children at a Benevol program"
              className="h-full w-full object-cover"
            />
            <a
              href="#about-section"
              aria-label={VIDEO_LABEL}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-600 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
            </a>
          </figure>
          <div>
            <h2 className="font-display text-4xl uppercase tracking-[0.1rem] text-white md:text-5xl">
              {MISSION_HEADING}
            </h2>
            <p className="mt-5 text-white/90">{MISSION_PARAGRAPH_1}</p>
            <p className="mt-4 text-white/90">{MISSION_PARAGRAPH_2}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {MISSION_COUNTERS.map((counter) => (
            <div key={counter.caption}>
              <div className="font-display text-6xl text-primary-600">{counter.value}</div>
              <div className="mx-auto mb-5 mt-5 h-[3px] w-[50px] bg-black/30" aria-hidden="true" />
              <div className="text-white">{counter.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
