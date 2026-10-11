import { ButtonLink } from '@free-react-templates/ui'

/* Light illustrated band: large serif heading, copy and a solid black button
   on the left, a floating illustration overlapping the band on the right. */
export function CtaBand() {
  return (
    <section id="cta" className="relative overflow-hidden bg-panel py-[120px]">
      <img
        src="https://picsum.photos/seed/outpost-cta-bg/1600/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-[36px] font-bold text-ink lg:text-[48px]">
            Get Ready for Real time Adventure
          </h1>
          <p className="mt-5">
            Tell us the dates and the mood — mountain pass or coastline — and we hold the permits,
            the guides and the gear before you land.
          </p>
          <ButtonLink
            href="#newsletter"
            className="mt-8 rounded-none bg-ink px-[38px] py-0 text-[12px] font-semibold uppercase leading-[48px] tracking-[2px] text-white hover:bg-transparent hover:text-ink"
          >
            Book a Trip
          </ButtonLink>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/outpost-cta/700/520"
            alt="Guided adventure trip in the mountains"
            loading="lazy"
            className="w-full -translate-y-[15%] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
