import { ButtonLink } from '@free-react-templates/ui'
import { OFFER_BUTTON, OFFER_TITLE } from '../data'

/* our_offer section — split offer band: sale image left, "Weekly Sale on
   60% Off All Products" headline + "Book Now" pink button right. */
export function OfferBand() {
  return (
    <section className="bg-mist py-16 dark:bg-ink/90">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/settle-offer/640/480"
            alt="Furniture on sale"
            className="mx-auto aspect-[4/3] w-full max-w-[560px] rounded-[5px] object-cover"
          />
        </div>
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h2 className="text-[28px] leading-snug font-bold text-ink dark:text-white lg:text-[32px]">
            {OFFER_TITLE}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-body dark:text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <ButtonLink
            href="#shop"
            className="mt-8 rounded-[5px] px-8 py-4 text-[14px] font-medium tracking-[0.1em] uppercase"
          >
            {OFFER_BUTTON}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
