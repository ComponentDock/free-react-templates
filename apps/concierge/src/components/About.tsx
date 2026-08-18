import { ABOUT, IMAGES } from '../data'

/** About — split section: rounded photo on a teal panel bleeding behind/
    left of it (isolate keeps the panel from painting under the section's
    white background), with a heading and two paragraphs on the right. */
export function About() {
  return (
    <section id="about" className="relative bg-white" aria-label="About">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-28 pt-24 lg:grid-cols-2">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-[150%] -top-24 w-[200%] bg-brand"
          />
          <img
            src={IMAGES.about}
            alt=""
            loading="lazy"
            className="relative z-10 w-full rounded-lg object-cover shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
          />
        </div>
        <div className="lg:pl-4">
          <h2 className="font-display text-2xl font-bold uppercase text-brand">{ABOUT.heading}</h2>
          <p className="mt-6 leading-relaxed text-black/70">{ABOUT.paragraph1}</p>
          <p className="mt-4 leading-relaxed text-black/70">{ABOUT.paragraph2}</p>
        </div>
      </div>
    </section>
  )
}
