import { ButtonLink } from '@free-react-templates/ui'
import { WORKSHOP } from '../content'
import { Container, Duotone } from './ui'

/**
 * 784px `#f3f3f3` split: the photo is flush to the left viewport edge at
 * `calc(50% - 108px)` wide (612px at 1440) and full band height, the text
 * column starts at the halfway mark. Stacks under `lg` with the photo on top.
 */
export function Workshop() {
  return (
    <section id="workshops" className="relative mb-[50px] bg-band lg:mb-[85px] lg:h-[784px]">
      <div className="relative h-[320px] w-full md:h-[460px] lg:absolute lg:top-0 lg:left-0 lg:h-full lg:w-[calc(50%-108px)]">
        <Duotone
          src={WORKSHOP.image}
          alt={WORKSHOP.imageAlt}
          className="h-full w-full"
          imgClassName="object-cover"
        />
      </div>
      <div className="flex min-h-full items-center lg:ml-[50%] lg:w-1/2 lg:pl-[15px]">
        <Container className="py-[70px] lg:max-w-none lg:px-[15px] lg:py-[155px]">
          <p className="text-[18px] leading-[1.4] font-bold text-ink lg:text-[24px]">{WORKSHOP.eyebrow}</p>
          <h2 className="mt-3 text-[34px] leading-[1.15] font-bold text-ink md:text-[44px] lg:text-[60px] lg:leading-[72px]">
            {WORKSHOP.heading}
          </h2>
          <p className="mt-6 text-[18px] leading-[1.7] text-body">{WORKSHOP.copy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-[27px]">
            <ButtonLink
              href={WORKSHOP.primary.href}
              className="h-auto rounded-[6px] bg-brand px-[43px] py-[20px] text-[18px] leading-none font-black tracking-[1.5px] text-white uppercase hover:bg-brand-dark"
            >
              {WORKSHOP.primary.label}
            </ButtonLink>
            <ButtonLink
              href={WORKSHOP.secondary.href}
              className="h-auto rounded-[6px] bg-action px-[38px] py-[20px] text-[18px] leading-none font-black tracking-[1.5px] text-white uppercase hover:bg-action-dark"
            >
              {WORKSHOP.secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  )
}
