import { acquire } from '../content'
import { ActionLink, containerClass, sectionClass, SectionHeading } from './ui'

/** Three routes, each with the awkward rule of the deal printed underneath. */
export function Acquire() {
  return (
    <section id="acquire" className={`bg-primary-50 dark:bg-primary-900/40 ${sectionClass}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={acquire.eyebrow}
            title={acquire.title}
            lead={acquire.lead}
          />

          <ol role="list" className="mt-12 grid gap-8 sm:grid-cols-3">
            {acquire.routes.map((route) => (
              <li key={route.numeral}>
                <p className="font-serif text-3xl leading-9 text-accent-600">{route.numeral}</p>
                <h3 className="mt-3 font-serif text-xl leading-7 text-gray-900 dark:text-white">
                  {route.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-primary-600 dark:text-primary-300">
                  {route.body}
                </p>
                <p className="mt-4 border-t border-primary-200 pt-4 text-sm leading-5 text-primary-500 dark:border-primary-700">
                  {route.finePrint}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-primary-200 pt-8 dark:border-primary-700">
            <p className="text-xs leading-4 font-medium tracking-[0.2em] text-primary-500 uppercase">
              Represented by
            </p>
            <ul role="list" className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-10">
              {acquire.represented.map((gallery) => (
                <li key={gallery.name} className="flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-lg leading-7 text-gray-900 dark:text-white">
                    {gallery.name}
                  </span>
                  <span className="text-sm leading-5 text-primary-500">{gallery.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <ActionLink href={acquire.cta.href} variant="squareOutline" className="mt-10">
            {acquire.cta.label}
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
