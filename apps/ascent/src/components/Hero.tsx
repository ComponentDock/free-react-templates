import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Intro"
      className="relative flex min-h-[640px] items-center overflow-hidden bg-ink"
    >
      <img
        src="https://picsum.photos/seed/ascent-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-brand/40"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            Launch a startup website online with a proven builder.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Efficiently unleash cross-media value. Quickly maximize timely deliverables for
            real-time schemas.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#portfolio"
              className="bg-brand px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Visit Our Works
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
