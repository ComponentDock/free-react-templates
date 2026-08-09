import { Car, ClipboardList, KeyRound, Map } from 'lucide-react'

const steps = [
  {
    title: 'Pick Destination',
    icon: Map,
    blurb: 'Choose where you want to go and where your journey begins.',
  },
  {
    title: 'Select Term',
    icon: ClipboardList,
    blurb: 'Pick the rental period that fits your travel plans.',
  },
  {
    title: 'Choose A Car',
    icon: Car,
    blurb: 'Browse the fleet and reserve the car that suits you best.',
  },
  {
    title: 'Enjoy The Ride',
    icon: KeyRound,
    blurb: 'Grab the keys and hit the road — we handle the rest.',
  },
] as const

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/roadly-steps/1920/800')" }}
    >
      <div className="absolute inset-0 bg-coal/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Work flow</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            How it works
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <step.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{step.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
