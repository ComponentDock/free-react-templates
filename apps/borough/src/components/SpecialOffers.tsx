import { offersCta, offersSubheading, offersTitle } from '../data'

export function SpecialOffers() {
  return (
    <section aria-label="Special Offers" className="bg-mist px-4 pb-28 sm:px-6">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[4px] lg:grid-cols-3">
        <img
          src="https://picsum.photos/seed/borough-offer/600/400"
          alt=""
          loading="lazy"
          className="h-[300px] w-full object-cover lg:h-full"
        />
        <div className="flex flex-col items-start justify-center bg-[linear-gradient(129deg,#ff414d_25%,#f03943_25%_50%,#ff414d_50%_75%,#f03943_75%)] p-10 text-left lg:col-span-2 lg:p-16">
          <p className="text-[14px] font-bold uppercase tracking-wide text-white">
            {offersSubheading}
          </p>
          <h2 className="mt-2 max-w-xl text-[28px] font-bold leading-tight text-white lg:text-[40px]">
            {offersTitle}
          </h2>
          <a
            href="#listing"
            className="mt-8 rounded-[4px] bg-navy px-6 py-4 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy"
          >
            {offersCta}
          </a>
        </div>
      </div>
    </section>
  )
}
