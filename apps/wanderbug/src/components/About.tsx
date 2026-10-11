import { ButtonLink, cn } from '@free-react-templates/ui'
import { BUTTON_CLASS, BUTTON_SOLID } from '../lib/buttonStyles'

/* Split section: flat travel illustration on the left, the "real time
   adventure" pitch and a yellow booking CTA on the right. */
export function About() {
  return (
    <section id="about" className="bg-white pb-[120px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-[40px] px-4 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/wanderbug-about/700/560"
          alt="Travellers planning the next leg of a guided tour"
          loading="lazy"
          className="w-full rounded-[5px] object-cover"
        />
        <div>
          <span className="mb-[10px] inline-block text-[16px] tracking-[0.05em] text-periwinkle capitalize">
            About Us
          </span>
          <h2 className="text-[26px] leading-[1.3] font-bold text-navy md:text-[36px] lg:text-[44px]">
            Get ready for real time adventure
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8] text-body lg:text-[18px]">
            Let’s start your journey with us, your dream will come true. Small groups, local leaders
            and every permit handled before you fly — from Spitzberg ice fields to the Turkish
            coast.
          </p>
          <ButtonLink
            href="#events"
            className={cn(BUTTON_CLASS, BUTTON_SOLID, 'mt-[32px] px-[40px] py-[26px]')}
          >
            Book Your Destination
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
