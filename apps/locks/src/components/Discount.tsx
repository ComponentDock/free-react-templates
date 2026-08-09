import { ButtonLink } from '@free-react-templates/ui'

export function Discount() {
  return (
    <section aria-label="Discount" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/locks-discount/1600/700"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Save up to <span className="text-brand">25% Off</span>
        </h2>
        <p className="mt-4 font-display text-2xl text-white/90">All Services Discount</p>
        <p className="mt-6 leading-relaxed text-white/70">
          Even the all-powerful Pointing has no control about the blind texts — but your wallet will
          love our seasonal offer. Book now and save on every service.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
        >
          Make an Appointment
        </ButtonLink>
      </div>
    </section>
  )
}
