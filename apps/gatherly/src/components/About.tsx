import { about } from '../data'

/** About section: "Welcome" eyebrow, "About Me" heading, supporting copy and
 *  a solid brand-blue counter box reading "50 Years Experienced" (source
 *  #about-section; the JS count-up is rendered as the static final value). */
export function About() {
  return (
    <section id="about-section" data-testid="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/gatherly-about/600/520"
              alt="Conference audience at Gatherly"
              className="h-[320px] w-full rounded object-cover shadow-xl md:h-[420px]"
            />
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 bg-brand px-6 py-5 text-white shadow-lg md:-right-6">
              <span className="text-4xl font-black">{about.years}</span>
              <span className="max-w-[90px] text-sm font-semibold uppercase leading-tight tracking-wide">
                {about.yearsLabel}
              </span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-title text-left">{about.heading}</h2>
          <p className="mt-6 leading-relaxed text-muted">{about.text}</p>
        </div>
      </div>
    </section>
  )
}
