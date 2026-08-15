import { heroIcons, heroPortrait } from '../data'

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[11fr_9fr] lg:px-8 lg:py-24">
        <div>
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Dental Care, Done Right.
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70">
            Modern care for your whole smile
          </p>
          <div className="mt-8 flex items-center gap-4">
            {heroIcons.map((item) => (
              <span
                key={item.label}
                aria-label={item.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/15 text-mint"
              >
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={heroPortrait}
            alt="Smiling dental professional in a white coat"
            className="h-[420px] w-full rounded-2xl object-cover object-top lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
