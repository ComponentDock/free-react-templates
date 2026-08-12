import { DONATION_BANNER } from '../data'

/* .donation-area — full-width photo background with a dark overlay and
   white centered copy: "Donate to help People Around the World". Extra
   bottom padding leaves room for the overlapping donation form below. */
export function DonationBanner() {
  return (
    <section id="donation" className="relative bg-cover bg-center py-[150px] pb-[280px]">
      <img
        src={DONATION_BANNER.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="font-display text-4xl font-semibold leading-tight">
          {DONATION_BANNER.headline}
        </h1>
        <p className="mt-5 leading-[1.625] text-white/80">{DONATION_BANNER.subtext}</p>
      </div>
    </section>
  )
}
