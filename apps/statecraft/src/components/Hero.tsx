import { heroContent } from '../data'

/** Full-height hero on the forest green surface: giant serif watermark,
 *  headline with one word highlighted in brand yellow, subtext and an
 *  outlined "Explore More" button; consultant photo on the right (hidden
 *  below the large breakpoint). */
export function Hero() {
  const { headline, highlight, subtext, image, imageAlt } = heroContent
  const before = headline.slice(0, headline.indexOf(highlight))
  const after = headline.slice(headline.indexOf(highlight) + highlight.length)

  return (
    <section
      id="home"
      className="relative flex min-h-[900px] items-center overflow-hidden bg-forest"
    >
      <div className="absolute inset-0 bg-overlay/50" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="watermark-serif pointer-events-none absolute bottom-[-40px] left-10 select-none text-[10rem] font-bold leading-none lg:text-[220px]"
      >
        Statecraft
      </span>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-24 pt-40 lg:grid-cols-[5fr_6fr] lg:px-10">
        <div>
          <h1 className="max-w-xl text-5xl font-bold leading-[1.1] text-white lg:text-[60px]">
            {before}
            <span className="text-brand">{highlight}</span>
            {after}
          </h1>
          <p className="mt-4 max-w-md text-2xl text-sage">{subtext}</p>
          <a href="#about" className="btn-outline-brand mt-10">
            Explore More
          </a>
        </div>
        <div className="hidden lg:block">
          <img src={image} alt={imageAlt} className="w-full" />
        </div>
      </div>
    </section>
  )
}
