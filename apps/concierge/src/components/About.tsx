const aboutImage = 'https://picsum.photos/seed/concierge-about/800/600'

/**
 * Split About section (reference: .sec-about > .has-bg). A teal panel is
 * absolutely positioned behind/left of the photo (width 200%, left -150%,
 * top/bottom -100px, negative z-index so it sits under the image but above
 * the white page background).
 */
export function About() {
  return (
    <section id="about" aria-label="About Concierge" className="py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative isolate">
            <div
              className="absolute -bottom-[100px] -left-[150%] -top-[100px] -z-10 w-[200%] bg-brand"
              aria-hidden="true"
              data-about-panel
            />
            <img
              src={aboutImage}
              alt="Heritage tram tour through the old town"
              className="w-full rounded-md object-cover shadow-xl"
            />
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wide text-brand">
              About Concierge
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-black/60">
              Concierge began with a simple idea: a stay should feel effortless from the moment you
              land. Our team plans the routes, books the tables, and finds the quiet coves — so you
              never have to wonder what comes next.
            </p>
            <p className="text-sm leading-relaxed text-black/60">
              Whether you travel for a weekend or a month, every stay includes a personal arrival
              briefing, a hand-drawn map of the area, and 24-hour assistance from the front desk.
              All you need to do is show up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
