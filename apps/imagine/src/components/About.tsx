const ABOUT_BG = 'https://picsum.photos/seed/imagine-about-bg/1600/900'
const ABOUT_IMAGE = 'https://picsum.photos/seed/imagine-about/600/700'

/* About section recreated from the source's split layout: a photo
   background with white text and two white-outline circle buttons on the
   left, and a photo on the right; columns stack on narrow viewports. */

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${ABOUT_BG})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-white lg:text-4xl">
            We can be your digital <br />
            Problems Solution Partner
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80">
            Appropriate for the occasion, our team turns complex problems into simple, elegant
            solutions — partnering with you from first sketch to final launch and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#service"
              className="inline-flex items-center rounded-full border border-white px-7 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gradient-to-r hover:from-brand-start hover:to-brand-end hover:border-transparent"
            >
              What we offer
            </a>
            <a
              href="#service"
              className="inline-flex items-center rounded-full border border-white px-7 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gradient-to-r hover:from-brand-start hover:to-brand-end hover:border-transparent"
            >
              Get a free quote
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <img
            src={ABOUT_IMAGE}
            alt="Creative agency team collaborating"
            className="h-auto w-full rounded-lg object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
