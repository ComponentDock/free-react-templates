import { Button } from '@free-react-templates/ui'
import { ProgressBar } from './ProgressBar'

export function Grants() {
  return (
    <section className="bg-light py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[3px] text-brand">
            Foundation Grants Projects
          </h3>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white lg:text-4xl">
            Gifts into Service Project that Change
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl bg-white p-8 shadow-lg dark:bg-gray-950 lg:p-10">
          <ProgressBar value={65} label="Gifts into Service" barClassName="h-12" />
          <div className="mt-4 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <span>Collected $380,000</span>
            <span>Goal $600,000</span>
          </div>
          <div className="mt-6 text-center">
            <Button className="rounded-[3px] bg-brand hover:bg-brand-700">Donate now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
