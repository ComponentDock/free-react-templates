import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

/** Full-height hero (source: .single-slider.slider-height, min-height 1080px):
 *  background photo, coral eyebrow with a 30px line before it, a huge
 *  uppercase headline, a square WATCH PORTFOLIO button, and a B&W portrait
 *  panel on the right (hidden below lg). The source carousel shows two
 *  byte-identical slides — a single static slide is a faithful
 *  simplification. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[500px] items-center bg-cover bg-center md:min-h-[700px] lg:min-h-[1080px]"
      style={{ backgroundImage: `url(${hero.background})` }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center px-[15px] pb-24 pt-40 lg:px-[30px]">
        <div className="max-w-xl">
          <span className="relative mb-[39px] block pl-[50px] text-2xl font-light uppercase text-brand before:absolute before:left-0 before:top-1/2 before:h-px before:w-[30px] before:-translate-y-1/2 before:bg-brand before:content-['']">
            {hero.eyebrow}
          </span>
          <h1 className="mb-[51px] font-heading text-[35px] font-bold uppercase leading-[1.2] text-white md:text-[50px] lg:text-[70px]">
            {hero.heading}
          </h1>
          <ButtonLink
            href="#portfolio"
            className="rounded-none bg-brand px-[38px] py-[30px] font-heading text-base font-normal uppercase tracking-[1px] text-white hover:bg-brand-hover"
          >
            {hero.cta}
          </ButtonLink>
        </div>
      </div>
      <img
        src={hero.portrait}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[78%] w-auto object-cover lg:block"
      />
    </section>
  )
}
