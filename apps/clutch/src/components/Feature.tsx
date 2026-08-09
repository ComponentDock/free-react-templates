import { Cog, Plug, Shield, SlidersHorizontal, Snowflake, Wind } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  { label: 'Engine', icon: Cog },
  { label: 'Turbo', icon: Wind },
  { label: 'Cooling', icon: Snowflake },
  { label: 'Suspension', icon: SlidersHorizontal },
  { label: 'Electrical', icon: Plug },
  { label: 'Brakes', icon: Shield },
] as const

export function Feature() {
  return (
    <section className="bg-paper py-16 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Feature</p>
          <h2 className="mt-2 font-display text-3xl font-black leading-tight text-ink dark:text-white">
            We Are a Trusted Name In Auto
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
            vel facilisis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#about" className="uppercase">
              About Us
            </ButtonLink>
            <ButtonLink href="#cars" variant="outline" className="uppercase">
              Our Partners
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm dark:bg-gray-950"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold uppercase text-ink dark:text-white">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
