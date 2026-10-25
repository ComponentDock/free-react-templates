import { cn } from '@free-react-templates/ui'
import { SERVICES } from '../content'
import { Container, Kicker } from './ui'

/**
 * Four columns of argument, eight of a plain `<dl>` price list. The rules sit
 * *between* rows — row one has none — which is what makes six rows read as a
 * printed price list rather than a table.
 */
export function Services() {
  return (
    <section id="services" className="section bg-white">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Kicker>{SERVICES.kicker}</Kicker>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink-800 sm:text-4xl">
            {SERVICES.heading}
          </h2>
          <p className="mt-4 text-ink-500">{SERVICES.intro}</p>
        </div>

        <div className="lg:col-span-8">
          <dl>
            {SERVICES.rows.map((row, index) => (
              <div
                key={row.name}
                data-price-row
                className={cn(
                  'flex flex-col gap-1 border-ink-100 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8',
                  index > 0 && 'border-t',
                )}
              >
                <div className="sm:max-w-xl">
                  <dt className="font-serif text-xl font-semibold text-ink-800">{row.name}</dt>
                  <dd className="mt-1.5 text-ink-500">{row.body}</dd>
                </div>
                <p className="shrink-0 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-primary-700">
                  {row.price}
                </p>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink-400">{SERVICES.note}</p>
        </div>
      </Container>
    </section>
  )
}
