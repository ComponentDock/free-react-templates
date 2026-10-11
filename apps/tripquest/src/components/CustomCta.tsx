import { ButtonLink, cn } from '@free-react-templates/ui'
import { BUTTON_BASE, BUTTON_YELLOW } from '../lib/buttonStyles'

/* Split band: charcoal copy panel with the yellow custom-price action on the
   left, full-bleed photograph on the right. */
export function CustomCta() {
  return (
    <section id="about" className="grid items-stretch lg:grid-cols-2">
      <div className="bg-ink px-6 py-[80px] sm:px-[80px] lg:py-[110px] lg:pl-[20%]">
        <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-white sm:text-[30px]">
          Did not find your Package?
          <br />
          Feel free to ask us.
          <br />
          We&apos;ll make it for you
        </h2>
        <p className="mt-[22px] max-w-[430px] text-[15px] leading-[1.8] text-white/70">
          Tell us the dates, the pace and the budget. A planner writes back with a route that fits —
          and keeps editing it until it does.
        </p>
        <ButtonLink href="#contact" className={cn(BUTTON_BASE, BUTTON_YELLOW, 'mt-[30px]')}>
          Request Custom Price
        </ButtonLink>
      </div>
      <img
        src="https://picsum.photos/seed/tripquest-cta/960/760"
        alt="Travellers planning a custom route"
        className="h-[280px] w-full object-cover lg:h-full"
      />
    </section>
  )
}
