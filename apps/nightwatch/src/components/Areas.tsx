import { cn } from '@free-react-templates/ui'
import { AREAS } from '../content'
import { containerClass } from './ui'

/** Plain, indexable town list — the cheapest local search signal on the page. */
export function Areas() {
  return (
    <section id="areas" className="bg-white py-20 lg:py-28">
      <div className={cn(containerClass, 'grid gap-16 lg:grid-cols-12')}>
        <div className="lg:col-span-5">
          <h2 className="text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-ink-800 sm:text-4xl sm:leading-10 dark:text-white">
            {AREAS.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-ink-500">{AREAS.lead}</p>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            {AREAS.towns.map((town) => (
              <li
                key={town}
                data-testid="town"
                className="border-b border-ink-100 py-2.5 text-base leading-6 text-ink-700 dark:border-gray-800 dark:text-gray-300"
              >
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-5 text-ink-400">{AREAS.note}</p>
        </div>
      </div>
    </section>
  )
}
