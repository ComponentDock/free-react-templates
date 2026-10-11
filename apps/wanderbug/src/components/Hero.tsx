import { ButtonLink, cn } from '@free-react-templates/ui'
import { BeachScene } from './BeachScene'
import { BUTTON_CLASS, BUTTON_NAVY } from '../lib/buttonStyles'

/* Centered hero: navy headline whose second line carries a thick yellow
   highlighter bar, one line of subtext, the navy CTA, then the full-bleed
   illustrated coast band with the drifting camper bus. */
export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white pt-[130px] lg:pt-[210px]">
      <div className="mx-auto max-w-[1140px] px-4 text-center">
        <h1 className="font-display text-[22px] leading-[1.3] font-bold text-navy md:text-[40px] lg:text-[60px] lg:leading-[1.2]">
          Lifelong memories just a{' '}
          <span className="relative inline-block">
            <span aria-hidden="true" className="absolute inset-x-0 top-[58%] h-[11px] bg-brand" />
            <span className="relative">few seconds away</span>
          </span>
        </h1>
        <p className="mx-auto mt-4 mb-[40px] max-w-[560px] text-[15px] text-navy md:text-[19px] lg:text-[20px]">
          Let’s start your journey with us, your dream will come true
        </p>
        <ButtonLink href="#events" className={cn(BUTTON_CLASS, BUTTON_NAVY, 'px-[60px] py-[35px]')}>
          Explore Destinations
        </ButtonLink>
      </div>
      <div className="mt-[60px]">
        <BeachScene />
      </div>
    </section>
  )
}
