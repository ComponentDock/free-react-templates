import { ButtonLink } from '@free-react-templates/ui'
import { notices, terms } from '../content'

/** The page turns from catalogue to argument: graphite ground, clay eyebrow. */
export function Trade() {
  return (
    <section id="trade" className="bg-ink-800 py-16 lg:py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="eyebrow eyebrow-dark">Trade accounts</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Most of our counter is on account
          </h2>
          <p className="mt-4 text-lg text-ink-200">
            Trade pricing, thirty-day terms and next-day collection on stocked lines. The
            application takes about ten minutes and we turn it round the same week.
          </p>
          <div className="mt-6">
            <ButtonLink href="#contact" className="px-6 py-3.5">
              Open an account
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-ink-300">{notices.trade}</p>
        </div>

        <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
          {terms.map((term) => (
            <div key={term.title}>
              <dt className="text-base font-semibold text-white">{term.title}</dt>
              <dd className="mt-2 text-ink-200">{term.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
