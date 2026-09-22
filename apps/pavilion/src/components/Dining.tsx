import { ButtonLink } from '@free-react-templates/ui'

export function Dining() {
  return (
    <section id="services" className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Dining and Drinks */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/pavilion-dining/700/500"
              alt="Elegant hotel dining area with gourmet dishes"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Best Experience
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Dining and Drinks
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Savor world-class cuisine prepared by our award-winning chefs. From intimate dinners
              to grand banquets, our dining experiences are crafted to delight every palate with
              locally sourced ingredients and innovative presentations.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="#contact"
                className="rounded-lg border-2 border-ink px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
              >
                View Details
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Swimming Pool */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Leisure
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Swimming Pool
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Dive into our stunning infinity pool overlooking the city skyline. Whether you want to
              swim laps at dawn or unwind poolside with a cocktail at sunset, our pool area offers
              the perfect retreat for relaxation and rejuvenation.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="#contact"
                className="rounded-lg border-2 border-ink px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
              >
                View Details
              </ButtonLink>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
            <img
              src="https://picsum.photos/seed/pavilion-pool/700/500"
              alt="Luxury hotel swimming pool with lounge chairs"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
