import { Dumbbell, Flame, HeartPulse, Mountain } from 'lucide-react'

const services = [
  { label: 'Crossfit', Icon: Dumbbell },
  { label: 'Fitness', Icon: Flame },
  { label: 'Climbing', Icon: Mountain },
  { label: 'Cardio + Streching', Icon: HeartPulse },
] as const

export function Services() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 h-[7px] w-[52px] bg-brand" aria-hidden="true" />
          <h2 className="font-display text-4xl font-medium uppercase text-ink md:text-5xl">
            Join Our Gym Today
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-brand px-6 pb-8 pt-6 text-center transition-colors hover:bg-brand-dark"
            >
              <Icon className="h-14 w-14 text-white" aria-hidden="true" />
              <h4 className="mt-4 font-display text-2xl font-medium uppercase text-white">
                {label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
