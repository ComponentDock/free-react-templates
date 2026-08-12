import { HERO_IMAGE, HERO_TEXT, HERO_TITLE } from '../data'

/**
 * Hero — black band with a rounded nature-photo card pulled down over the
 * next section, a big serif headline, intro copy and a flat red CTA.
 */
export function Hero() {
  return (
    <section id="home" className="mb-[120px] bg-night">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative -bottom-[120px]">
          <div className="relative flex min-h-[650px] items-center justify-center overflow-hidden rounded-[12px]">
            <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-3xl px-4 text-center">
              <h1 className="font-serif text-5xl font-bold leading-[1.15] text-white md:text-6xl lg:text-[80px] lg:leading-[76px]">
                {HERO_TITLE}
              </h1>
              <p className="mx-auto mt-5 max-w-[620px] text-sm text-white/90">{HERO_TEXT}</p>
              <a
                href="#gallery"
                className="mt-10 inline-flex h-12 items-center rounded-[5px] border border-brand bg-brand px-10 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                Explore Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
