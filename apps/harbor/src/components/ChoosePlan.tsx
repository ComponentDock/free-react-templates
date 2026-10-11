import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const PERKS = [
  'Free domain name',
  'Free email address',
  'Plenty of disk space',
  'Free website builder',
  'Free marketing tools',
  '1-click WordPress install',
]

export function ChoosePlan() {
  return (
    <section id="choose-plan" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/harbor-plan/1140/1002"
            alt="Dashboard preview of a hosting control panel"
            className="mx-auto w-full max-w-[570px] rounded-[10px]"
          />

          <div>
            <h2 className="text-2xl font-bold text-[#111] sm:text-3xl">
              Up to 70% discount with free domain name registration included!
            </h2>
            <ul className="mt-8">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-base font-medium leading-10 text-[#111]"
                >
                  <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="#pricing"
              className="mt-8 rounded-full bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
            >
              Get started now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
