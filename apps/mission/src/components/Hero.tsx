import { hero } from '../data'

/** Full-height photo hero: cover photo with a deep maroon overlay, large
 *  white serif headline, sub-paragraph, and a solid red CTA. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[700px] items-center bg-cover bg-center md:h-[1000px]"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-maroon/80" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-24 pt-32 md:pb-0 md:pt-0">
        <h1 className="max-w-[820px] font-serif text-4xl font-black capitalize leading-[1.15] text-white sm:text-5xl lg:text-[80px] lg:leading-[90px]">
          {hero.headline}
        </h1>
        <p className="mt-2 max-w-[560px] text-lg leading-8 text-white md:text-xl">
          {hero.paragraph}
        </p>
        <a
          href="#donate"
          onClick={(event) => event.preventDefault()}
          className="mt-[60px] inline-block bg-brand px-[50px] py-[17px] text-base capitalize text-white transition-colors hover:bg-white hover:text-brand"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}
