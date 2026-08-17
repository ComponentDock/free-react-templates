import { ButtonLink } from '@free-react-templates/ui'
import { HERO, IMAGES } from '../data'
import { CalculatorCard } from './CalculatorCard'

/* Split hero: marketing caption over a photo + green overlay on the left,
   floating white loan-calculator card on the right (it overlaps the next
   section, mirroring the source's -100px card offset). */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative isolate bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.hero})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/40" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center pb-28">
          <h1 className="pb-[29px] text-[36px] font-bold leading-[1.1] text-white md:text-[48px] lg:text-[62px]">
            {HERO.title}
          </h1>
          <div aria-hidden="true" className="mb-5 h-[3px] w-[110px] bg-white" />
          <p className="mb-8 text-lg font-medium leading-[1.6] text-white md:text-2xl">
            {HERO.subtitle}
          </p>
          <div>
            <ButtonLink
              href={HERO.cta.href}
              className="inline-flex rounded-none border border-brand bg-white px-11 py-[18px] text-base font-semibold tracking-[1px] text-brand uppercase hover:bg-brand hover:text-white"
            >
              {HERO.cta.label}
            </ButtonLink>
          </div>
        </div>
        <div className="relative z-10 -mb-[100px] self-start">
          <CalculatorCard />
        </div>
      </div>
    </section>
  )
}
