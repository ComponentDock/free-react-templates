import { useState } from 'react'
import { INCENTIVES, INCENTIVES_COPY, INSTALLED_PRICE } from '../content'
import {
  defaultSelection,
  formatAmount,
  formatNet,
  netPrice,
  selectedTotal,
} from '../lib/incentives'
import { ActionLink, Container, Eyebrow } from './ui'

/**
 * The template's argument, in a very dark band: six programmes you tick, each
 * printing its own condition, subtracted live from the installed price.
 */
export function Incentives() {
  const [selected, setSelected] = useState<readonly string[]>(defaultSelection)

  const toggle = (id: string) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    )
  }

  const total = selectedTotal(selected)
  const net = netPrice(selected)

  return (
    <section id="incentives" className="section bg-ink-900">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow onDark>{INCENTIVES_COPY.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            {INCENTIVES_COPY.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-7 text-white/70">{INCENTIVES_COPY.lede}</p>

          <div data-incentives className="mt-8 space-y-3">
            {INCENTIVES.map((incentive) => (
              <label
                key={incentive.id}
                className="flex cursor-pointer flex-col gap-1.5 rounded-xl border border-white/10 p-4 transition-colors has-[:checked]:border-primary-400/60 has-[:checked]:bg-primary-400/5"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="flex min-w-0 items-start gap-3">
                    <input
                      type="checkbox"
                      name="incentive"
                      value={incentive.id}
                      data-amount={incentive.amount}
                      checked={selected.includes(incentive.id)}
                      onChange={() => toggle(incentive.id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-primary-400"
                    />
                    <span className="text-base font-semibold leading-6 text-white">
                      {incentive.name}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-sm font-medium leading-5 text-primary-300">
                    {formatAmount(incentive.amount)}
                  </span>
                </span>
                <span className="pl-7 text-xs font-semibold uppercase leading-4 tracking-wide text-white/50">
                  {incentive.source}
                </span>
                <span className="pl-7 text-sm leading-5 text-white/50">{incentive.condition}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <dl className="space-y-3 text-base">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-white/70">{INCENTIVES_COPY.installedLabel}</dt>
                <dd className="font-mono font-medium text-white">{formatNet(INSTALLED_PRICE)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-white/70">{INCENTIVES_COPY.selectedLabel}</dt>
                <dd
                  data-incentive-total
                  className="font-mono font-medium text-primary-300"
                >
                  {formatAmount(total)}
                </dd>
              </div>
            </dl>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase leading-4 tracking-wider text-white/50">
                {INCENTIVES_COPY.netLabel}
              </p>
              <p
                data-net-total
                aria-live="polite"
                className="mt-1 font-mono text-4xl font-bold leading-10 tabular-nums text-white"
              >
                {formatNet(net)}
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/70">{INCENTIVES_COPY.paperwork}</p>

            <ActionLink href="#contact" size="header" className="mt-6 w-full">
              {INCENTIVES_COPY.cta}
            </ActionLink>

            <p className="mt-4 text-sm leading-5 text-white/50">{INCENTIVES_COPY.caveat}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
