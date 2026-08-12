import { OFFERS } from '../data'
import { SectionHeading } from './SectionHeading'

/* What We Offer — light-grey (#f6f5f5) icon-card grid: 3rem orange icon,
   black Oswald title, paragraph, white card that gets an orange border on
   hover. */
export function OfferCards() {
  return (
    <section id="offers" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="What We Offer"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <article
              key={offer.title}
              className="rounded border border-[#e9ecef] bg-white p-8 text-center transition-colors hover:border-brand"
            >
              <offer.icon aria-hidden="true" className="mx-auto h-12 w-12 text-brand" />
              <h3 className="mt-5 font-display text-[1.4rem] font-medium uppercase text-ink">
                {offer.title}
              </h3>
              <p className="mt-3 text-smoke">{offer.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
