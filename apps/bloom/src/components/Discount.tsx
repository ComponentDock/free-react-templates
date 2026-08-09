import { Badge, ButtonLink } from '@free-react-templates/ui'

export function Discount() {
  return (
    <section
      aria-label="Discount"
      className="relative overflow-hidden bg-gradient-to-r from-brand to-sky py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6">
        <div>
          <Badge className="bg-white/20 text-white">Limited Time</Badge>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
            Save up to 25% Off
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
            Students get an extra discount on every treatment — bring your ID and bloom with us.
          </p>
        </div>
        <ButtonLink
          href="#appointment"
          className="rounded-full bg-white px-10 uppercase tracking-[0.2em] text-brand transition-colors hover:bg-ink hover:text-white"
        >
          Book Now
        </ButtonLink>
      </div>
    </section>
  )
}
