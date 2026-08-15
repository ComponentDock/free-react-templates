import { ButtonLink } from '@free-react-templates/ui'

export function Intro() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <h2 className="text-5xl font-medium text-navy lg:text-6xl">
          Unlimited Access to 100K tracks
        </h2>
        <div>
          <p className="text-muted">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#trial"
              className="min-w-[195px] rounded-full bg-brand px-10 py-6 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Try it now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
