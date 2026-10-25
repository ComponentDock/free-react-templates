import { areas } from '../content'
import { containerClass } from './ui'
import { cn } from '@free-react-templates/ui'

/** A 5/7 split: the radius stated on the left, fourteen towns on the right. */
export function Areas() {
  return (
    <section id="areas" className="section scroll-mt-20 bg-white dark:bg-gray-950">
      <div className={cn(containerClass, 'grid gap-10 lg:grid-cols-12 lg:gap-8')}>
        <div className="lg:col-span-5">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-ink-800 sm:text-4xl sm:leading-10 dark:text-ink-50">
            {areas.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-7 text-ink-500 dark:text-ink-300">{areas.lead}</p>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            {areas.towns.map((town) => (
              <li
                key={town}
                className="border-b border-ink-100 py-2.5 text-base leading-6 text-ink-700 dark:border-gray-800 dark:text-ink-300"
              >
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-5 text-ink-500 dark:text-ink-300">{areas.note}</p>
        </div>
      </div>
    </section>
  )
}
