import { SIGNS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * The six symptoms as a numbered three-column list. The numeral and the
 * hairline rule are the whole design — there is no card, border or icon. Each
 * item's label is the plain-language reading of the sign, which is the actual
 * service being sold.
 */
export function SignsList() {
  return (
    <section id="process" className="section scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="What you are seeing"
          title="Six signs, and what each one usually means"
          lede="Not every one of these is a slab leak, and saying which are which on the phone saves people a call-out."
        />

        <Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {SIGNS.map((sign) => (
              <li key={sign.n}>
                <p className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-bold tabular-nums text-primary-600">
                    {sign.n}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100" />
                </p>
                <h3 className="mt-4 text-lg font-bold text-ink-800">{sign.title}</h3>
                <p className="mt-2 text-ink-500">{sign.body}</p>
                <p className="mt-3 text-sm font-semibold text-primary-700">{sign.label}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
