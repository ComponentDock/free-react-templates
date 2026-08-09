import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '300+', label: 'Students Weekly' },
  { value: '25', label: 'Small Groups' },
  { value: '12', label: 'Leaders' },
] as const

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-navy-950">
      <img
        src="https://picsum.photos/seed/ignite-1/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
          Wednesdays at 6:30 PM
        </p>
        <h1 className="max-w-4xl font-display text-7xl leading-none tracking-wide text-white md:text-8xl lg:text-9xl">
          <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
            Rise Higher
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          You weren&apos;t made to do life alone. Find your people, grow your faith, and make an
          impact.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink
            href="#events"
            className="rounded-full bg-primary-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-colors hover:bg-primary-600"
          >
            Join Us Wednesday
          </ButtonLink>
          <ButtonLink
            href="#media"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Watch Latest Message
          </ButtonLink>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col text-center sm:text-left">
              <dt className="order-2 text-sm font-medium text-white/70">{stat.label}</dt>
              <dd className="font-display text-5xl tracking-wide text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
