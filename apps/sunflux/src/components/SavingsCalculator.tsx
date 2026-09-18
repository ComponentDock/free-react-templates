import { useState } from 'react'
import { Calculator, DollarSign, Leaf, PiggyBank, Timer } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

interface StateOption {
  name: string
  rate: number
}

/* Fraction of the annual bill the homeowner saves after going solar
   (state-dependent, e.g. sun-hours/utility rates). */
const states: StateOption[] = [
  { name: 'Texas', rate: 0.75 },
  { name: 'California', rate: 0.85 },
  { name: 'Arizona', rate: 0.8 },
  { name: 'Florida', rate: 0.7 },
  { name: 'New York', rate: 0.78 },
] as const

const MIN_BILL = 50
const MAX_BILL = 500
const STEP = 10
const DEFAULT_BILL = 150

function formatCurrency(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

export function SavingsCalculator() {
  const [bill, setBill] = useState(DEFAULT_BILL)
  const [stateName, setStateName] = useState(states[0]!.name)

  const stateIndex = Math.max(
    states.findIndex((option) => option.name === stateName),
    0,
  )
  const rate = states[stateIndex]!.rate
  const annualBill = bill * 12
  const annualSavings = annualBill * rate
  const co2Offset = annualBill * 0.013
  const systemCost = bill * 100
  const paybackPeriod = systemCost / annualSavings
  const totalCost = systemCost * 0.7

  const results = [
    { label: 'Annual Savings', value: formatCurrency(annualSavings), icon: DollarSign },
    {
      label: 'CO2 Offset',
      value: `${co2Offset.toFixed(1)} tons/yr`,
      icon: Leaf,
    },
    { label: 'Payback Period', value: `${paybackPeriod.toFixed(1)} yrs`, icon: Timer },
    { label: 'Total Cost', value: formatCurrency(totalCost), icon: PiggyBank },
  ] as const

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
          <Calculator className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Estimate Your Savings</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            See how much you could save with solar
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            State
          </label>
          <select
            id="state"
            value={stateName}
            onChange={(event) => setStateName(event.target.value)}
            className="mt-1.5 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {states.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="monthly-bill"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Monthly bill
            </label>
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
              {formatCurrency(bill)}/mo
            </span>
          </div>
          <input
            id="monthly-bill"
            type="range"
            min={MIN_BILL}
            max={MAX_BILL}
            step={STEP}
            value={bill}
            onChange={(event) => setBill(Number(event.target.value))}
            className="mt-2 w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{formatCurrency(MIN_BILL)}</span>
            <span>{formatCurrency(MAX_BILL)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {results.map((result) => (
            <div key={result.label} className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800/60">
              <result.icon
                className="h-5 w-5 text-primary-600 dark:text-primary-400"
                aria-hidden="true"
              />
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                {result.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{result.label}</p>
            </div>
          ))}
        </div>

        <ButtonLink href="#contact" className={cn('w-full px-6 py-3 text-base font-semibold')}>
          Get Free Assessment
        </ButtonLink>
      </div>
    </div>
  )
}
