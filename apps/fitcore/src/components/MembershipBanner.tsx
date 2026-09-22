import { ButtonLink } from '@free-react-templates/ui'

export function MembershipBanner() {
  return (
    <section className="relative bg-ink-dark py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/seed/fitcore-cta-bg/1600/400')" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <h2 className="max-w-xl font-display text-4xl font-bold uppercase text-white md:text-5xl">
          Membership Offer Available Now
        </h2>
        <ButtonLink
          href="#contact"
          className="shrink-0 border border-brand bg-transparent px-8 py-3 font-display text-sm font-light uppercase tracking-widest text-white hover:bg-brand hover:text-white"
        >
          More Services
        </ButtonLink>
      </div>
    </section>
  )
}
