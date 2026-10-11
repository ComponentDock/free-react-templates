import { ButtonLink, cn } from '@free-react-templates/ui'
import { BUTTON_BASE, BUTTON_OUTLINE_WHITE } from '../lib/buttonStyles'

/* Full-width turquoise band closing the page: white headline, lead line and
   the white outline pill. */
export function CtaBand() {
  return (
    <section className="bg-brand py-[70px]">
      <div className="mx-auto max-w-[900px] px-4 text-center">
        <h2 className="text-[26px] text-white md:text-[34px]">
          Plan your travel now and get in touch with us.
        </h2>
        <p className="mx-auto mt-[20px] max-w-[700px] text-[14px] leading-[1.8] text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit?
        </p>
        <ButtonLink href="#contact" className={cn(BUTTON_BASE, BUTTON_OUTLINE_WHITE, 'mt-[25px]')}>
          Get in touch
        </ButtonLink>
      </div>
    </section>
  )
}
