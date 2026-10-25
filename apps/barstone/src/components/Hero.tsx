import { Gavel, GraduationCap } from 'lucide-react'
import { hero } from '../data'

/** 1000px hero: white strip behind the header, cream field below a diagonal, portrait anchored right. */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-hero-cream [clip-path:polygon(0_15%,100%_27%,100%_100%,0_100%)]"
      />
      <Gavel
        aria-hidden="true"
        className="absolute top-[13%] left-[5%] hidden size-[190px] text-gold/10 lg:block"
      />
      <GraduationCap
        aria-hidden="true"
        className="absolute bottom-[10%] left-[38%] size-[160px] text-gold/10"
      />

      <div className="relative mx-auto flex h-[650px] max-w-[1140px] items-start px-4 pt-[110px] sm:h-[700px] lg:pt-[190px] xl:h-[1000px]">
        <div className="w-full text-center lg:w-1/2 lg:pr-8 lg:text-left">
          <h1 className="mt-[34px] mb-[27px] font-display text-[26px] leading-[1.3] font-normal text-ink sm:text-[40px] lg:max-w-[520px] xl:text-[50px] xl:leading-[1.273]">
            {hero.title}
          </h1>
          <p className="mb-[45px] text-[15px] leading-[1.8] text-body lg:max-w-[470px]">
            {hero.subline}
          </p>
          <a
            href={hero.cta.href}
            className="inline-block rounded-none border border-transparent bg-[linear-gradient(to_left,#ab7636_0%,#d7af7e_49%,#ab7636_100%)] bg-[length:200%_auto] px-[30px] py-[10px] text-[14px] text-white capitalize transition-[background-position] duration-500 hover:bg-right xl:px-[45px] xl:py-[13.5px]"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[7%] bottom-0 hidden h-[78%] w-[44%] max-w-[700px] overflow-hidden lg:block">
        <img
          src={hero.portrait}
          alt="Barstone partner standing with a tablet"
          width={766}
          height={926}
          loading="lazy"
          className="size-full object-cover object-top [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_100%)]"
        />
      </div>
    </section>
  )
}
