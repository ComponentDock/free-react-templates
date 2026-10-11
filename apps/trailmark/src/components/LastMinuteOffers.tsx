import { Send } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { IMAGES, LAST_MINUTE_OFFERS, OFFER_TEXT } from '../data/content'

export function LastMinuteOffers() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={IMAGES.last}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/55" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <span
          aria-hidden="true"
          className="absolute -top-6 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center bg-brand text-white"
        >
          <Send className="h-7 w-7" />
        </span>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
          {LAST_MINUTE_OFFERS.map((offer) => (
            <article
              key={offer.destination}
              className="bg-[rgba(254,64,91,0.79)] px-8 py-14 text-center text-white sm:px-12"
            >
              <p className="text-base font-medium uppercase tracking-[0.12em]">
                {offer.destination}
              </p>
              <p className="mt-4 text-[100px] font-thin leading-[0.75] lg:text-[160px]">
                {offer.percent}
              </p>
              <h3 className="mt-6 text-3xl font-light text-white sm:text-4xl">Last Minute Offer</h3>
              <p className="font-body mt-6 text-sm leading-[2.14]">{OFFER_TEXT}</p>
              <ButtonLink
                href="#"
                className="mt-10 h-14 w-[161px] shrink-0 rounded-none bg-navy px-0 text-base font-medium text-white hover:bg-navy/90"
              >
                See Offer
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
