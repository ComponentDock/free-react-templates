import { ButtonLink } from '@free-react-templates/ui'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl tracking-wide text-white md:text-6xl">
          Don&apos;t Miss Out
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/80">
          Whether you&apos;re new or have been coming for years, there&apos;s a place for you here.
          Come as you are.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#events"
            className="rounded-full bg-primary-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-colors hover:bg-primary-600"
          >
            Plan Your Visit
          </ButtonLink>
          <ButtonLink
            href="#about"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
