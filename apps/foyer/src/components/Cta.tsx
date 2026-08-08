import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section className="bg-coal py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Looking for a quality and affordable interior design?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
            Inappropriate behavior is often laughed off as “boys will be boys,” women face higher
            conduct standards especially in the workplace.
          </p>
        </div>
        <ButtonLink
          href="#contact"
          className="shrink-0 rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
        >
          Request quote now
        </ButtonLink>
      </div>
    </section>
  )
}
