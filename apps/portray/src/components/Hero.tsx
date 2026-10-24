import { hero } from '../data'

/** 900px lime band: serif headline, light subline, outlined square CTA, portrait in a neon disc. */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-band md:min-h-[700px] lg:min-h-[900px]"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[52%] hidden size-[57vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon md:block md:left-[60%] lg:left-[65%]"
      />
      <img
        src={hero.portrait}
        alt="Portrait of the designer"
        width={1240}
        height={1560}
        className="absolute bottom-0 left-[64%] hidden h-[86%] w-[34vw] -translate-x-1/2 rounded-t-full object-cover object-top md:block lg:left-[68%] lg:h-[80%] lg:w-[31vw]"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 pt-[140px] pb-16 lg:px-[76px] lg:py-0">
        <div className="w-full md:w-7/12 lg:w-[526px]">
          <h1 className="text-[45px] leading-[1.2] tracking-[-1px] text-ink sm:text-[56px] md:text-[62px] lg:text-[80px] lg:leading-[96px] lg:tracking-[-2px]">
            {hero.title}
          </h1>
          <p className="mt-7 mb-10 text-[25px] leading-[1.2] font-light text-ink md:text-[33px] lg:text-[40px]">
            {hero.subline}
          </p>
          <a
            href={hero.cta.href}
            className="relative inline-block border border-ink px-[40px] py-[18px] text-[18px] font-medium tracking-[1px] text-ink uppercase transition-colors hover:bg-ink hover:text-white lg:px-[70px] lg:py-[20px]"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
