import { useState, type KeyboardEvent } from 'react'
import { FINANCE } from '../content'
import { gbp, quote } from '../lib/finance'
import { Reveal } from './Reveal'

function clamp(value: number): number {
  return Math.min(FINANCE.max, Math.max(FINANCE.min, value))
}

/**
 * The design's one interactive tool: a range input that turns an installation
 * quote into a monthly figure and a total. It computes on the first render, so
 * the band never flashes `£0` while a script wakes up.
 */
export function FinanceBand() {
  const [amount, setAmount] = useState<number>(FINANCE.initial)
  const figures = quote(amount)

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return
    }
    event.preventDefault()
    const delta = event.key === 'ArrowRight' ? FINANCE.step : -FINANCE.step
    setAmount(clamp(amount + delta))
  }

  return (
    <section id="finance" className="section bg-sky-100">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600">
            {FINANCE.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink-800 sm:text-4xl">
            {FINANCE.heading}
          </h2>
          <p className="mt-4 text-lg font-light text-ink-500">{FINANCE.lede}</p>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-3xl">
          <div
            data-finance-calc
            data-months={FINANCE.months}
            data-apr={FINANCE.apr}
            data-currency={FINANCE.currency}
            className="rounded-2xl bg-white p-6 lg:p-8"
          >
            <label htmlFor="finance-amount" className="text-sm font-medium text-ink-600">
              {FINANCE.amountLabel}
            </label>
            <p data-finance-amount className="mt-1 text-3xl font-bold text-ink-800">
              {figures.amount}
            </p>
            <input
              id="finance-amount"
              type="range"
              min={FINANCE.min}
              max={FINANCE.max}
              step={FINANCE.step}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              onKeyDown={onKeyDown}
              className="mt-4 w-full accent-primary-600"
            />
            <div className="mt-1 flex justify-between text-sm text-ink-400">
              <span>{gbp(FINANCE.min)}</span>
              <span>{gbp(FINANCE.max)}</span>
            </div>

            <div className="mt-6 border-t border-ink-100 pt-6">
              <p className="text-sm text-ink-600">
                Over {FINANCE.months} months at {FINANCE.apr}% APR representative
              </p>
              <p className="mt-3 flex items-baseline gap-2 text-4xl font-bold text-primary-700">
                <span data-finance-monthly>{figures.monthly}</span>
                <span className="text-sm font-normal text-ink-400">{FINANCE.monthlySuffix}</span>
              </p>
              <p className="mt-1 text-sm text-ink-400">
                {FINANCE.totalLabel}{' '}
                <span data-finance-total className="font-semibold text-ink-700">
                  {figures.total}
                </span>
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-700"
              >
                {FINANCE.cta}
              </a>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-500">{FINANCE.footnote}</p>
        </Reveal>
      </div>
    </section>
  )
}
