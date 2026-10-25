import { areas } from '../content'
import { containerClass, sectionClass } from './ui'

/** Twelve towns as plain text — the cheapest local signal a trade page has. */
export function Areas() {
  return (
    <section id="areas" className={`bg-white ${sectionClass} dark:bg-gray-950`}>
      <div className={containerClass}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-ink-800 sm:text-4xl sm:leading-10 dark:text-white">
              {areas.title}
            </h2>
            <p className="mt-4 text-lg leading-7 text-ink-500 dark:text-gray-400">{areas.lead}</p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {areas.towns.map((town) => (
                <li
                  key={town}
                  className="border-b border-ink-100 py-2.5 text-base leading-6 text-ink-700 dark:border-gray-800 dark:text-gray-300"
                >
                  {town}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-5 text-ink-500 dark:text-gray-400">{areas.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
