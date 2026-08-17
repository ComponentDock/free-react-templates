import { Check } from 'lucide-react'
import { ABOUT, IMAGES } from '../data'

/** About — split section: photo with a bottom-right counter box on the
    left; subheading + heading + copy + two-column checklist on the right. */
export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={IMAGES.about}
            alt=""
            className="h-[520px] w-full rounded-md object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-6 right-6 bg-white px-8 py-6 text-center shadow-xl">
            <p className="font-display text-5xl text-dark">{ABOUT.years}</p>
            <p className="mt-1 text-sm font-medium text-black/60">{ABOUT.yearsCaption}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {ABOUT.subheading}
          </p>
          <h2 className="mt-3 font-display text-4xl text-dark sm:text-5xl">{ABOUT.heading}</h2>
          <p className="mt-5 text-lg text-black/50">{ABOUT.lead}</p>
          <p className="mt-4 text-sm leading-relaxed text-black/50">{ABOUT.body}</p>
          <h3 className="mt-8 text-xl font-semibold text-dark">{ABOUT.checklistTitle}</h3>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {ABOUT.checklist.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-black/70">
                <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
