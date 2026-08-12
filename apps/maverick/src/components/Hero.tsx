import { HERO_SLIDES } from '../data'

/* Hero recreated from the ColorLib "Clark" hero: a 750px black section
   with the amber uppercase subheading, an 60px white h1 with an amber
   highlighted span, a 30px h2, the amber "Hire me" pill + white-outline
   "My works" ghost pill, and a cutout portrait on the right. The original
   is an owl carousel of two slides — the recreation renders both slides
   stacked (each with the same buttons). */

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative min-h-[750px] overflow-hidden bg-black"
      aria-label="Introduction"
    >
      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        {HERO_SLIDES.map((slide) => (
          <div
            key={slide.headlineHighlight}
            className="grid items-center gap-10 py-10 lg:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="mb-4 text-[14px] font-semibold uppercase tracking-[3px] text-brand">
                {slide.subheading}
              </p>
              <h1 className="text-[60px] font-extrabold leading-tight text-white">
                {slide.headlineBefore}
                <span className="text-brand">{slide.headlineHighlight}</span>
              </h1>
              <h2 className="mt-2 text-[30px] font-normal text-white">{slide.subline}</h2>
              <p className="mt-6 max-w-md text-[16px] text-muted">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center rounded-[40px] bg-brand px-6 py-3 text-[16px] font-semibold text-black transition-colors hover:bg-brand-dark"
                >
                  Hire me
                </a>
                <a
                  href="#projects-section"
                  className="inline-flex items-center rounded-[40px] border border-white bg-transparent px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-white hover:text-black"
                >
                  My works
                </a>
              </div>
            </div>
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-[420px] w-[340px] object-cover lg:h-[500px] lg:w-[420px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
