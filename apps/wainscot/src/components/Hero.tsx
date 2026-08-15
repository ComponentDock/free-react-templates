import {
  heroAlt,
  heroCta,
  heroImage,
  heroTitleLine1,
  heroTitleLine2,
  heroTitleLine3,
} from '../data'

export function Hero() {
  return (
    <section id="home-section" className="relative flex min-h-[620px] items-center overflow-hidden">
      <img src={heroImage} alt={heroAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        <h1 className="max-w-2xl text-5xl font-light leading-[54px] text-white max-md:text-4xl max-md:leading-[46px]">
          {heroTitleLine1}
          <br />
          {heroTitleLine2}
          <br />
          {heroTitleLine3}
        </h1>
        <a
          href="#contact-section"
          className="mt-8 inline-block rounded-[5px] bg-white px-[30px] text-base font-medium leading-[42px] text-ink transition-colors hover:bg-brand hover:text-white"
        >
          {heroCta}
        </a>
      </div>
    </section>
  )
}
