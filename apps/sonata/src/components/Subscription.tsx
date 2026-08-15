import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { perks } from '../data'

export function Subscription() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-5xl font-bold text-white lg:text-6xl">Subscription from $15/month</h2>
          <h3 className="mt-6 text-2xl font-semibold text-brand">Start a free trial now</h3>
          <p className="mt-6 max-w-md text-white/60">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#trial"
              className="min-w-[195px] rounded-full bg-brand px-10 py-6 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Try it now
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-[42px] bg-navy-2 p-10">
          <ul className="space-y-5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-4 text-white">
                <Check className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
