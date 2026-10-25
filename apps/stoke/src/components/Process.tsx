import { PROCESS_EYEBROW, PROCESS_HEADING, PROCESS_ITEMS, PROCESS_LEDE } from '../content'
import { Reveal } from './Reveal'

export function Process() {
  return (
    <section id="process" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
            {PROCESS_EYEBROW}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {PROCESS_HEADING}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{PROCESS_LEDE}</p>
        </Reveal>
        <Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {PROCESS_ITEMS.map((item, index) => (
              <li key={item.title}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-bold tabular-nums text-primary-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-ink-100" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-800">{item.title}</h3>
                <p className="mt-2 text-ink-500">{item.body}</p>
                <p className="mt-3 text-sm font-semibold text-primary-700">{item.takeaway}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
