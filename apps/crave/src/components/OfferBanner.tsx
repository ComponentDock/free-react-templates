import { ButtonLink } from '@free-react-templates/ui'

export function OfferBanner() {
  return (
    <section className="bg-cream py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-stretch gap-0 overflow-hidden rounded-lg md:flex-row">
          <img
            src="https://picsum.photos/seed/crave-offer/800/400"
            alt="Italian pizza special offer"
            className="w-full object-cover md:w-1/2"
            loading="lazy"
          />
          <div className="flex flex-col items-center justify-center bg-brand px-8 py-12 text-center shadow-lg md:w-1/2">
            <h3 className="mb-3 font-heading text-xl font-semibold text-white sm:text-3xl">
              Italian Pizza Offer
            </h3>
            <h2 className="mb-6 font-heading text-4xl font-bold uppercase text-white sm:text-6xl">
              50% OFF
            </h2>
            <ButtonLink
              href="#menu"
              size="md"
              className="rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-brand"
            >
              Read More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
